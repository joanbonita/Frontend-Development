'use client'

import { useEffect, useState } from 'react'
import { Upload, FileText, Image, Check, X } from 'lucide-react'
import Link from 'next/link'

interface UploadResponse {
  success?: boolean
  error?: string
  message?: string
  fileName?: string
  path?: string
}

interface EditableCertification {
  id: number
  title: string
  issuer: string
  date: string
  credentialId: string
  credentialUrl: string
  description: string
}

const defaultSiteSettings = {
  siteTitle: 'Engineer Salma Pelesi',
  tagline: 'inspired to inspire',
  headingFont: 'Ubuntu Sans Mono',
}

const emptyCertification: EditableCertification = {
  id: 0,
  title: '',
  issuer: '',
  date: '',
  credentialId: '',
  credentialUrl: '',
  description: '',
}

export default function AdminPage() {
  const [profileFile, setProfileFile] = useState<File | null>(null)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [certFiles, setCertFiles] = useState<{ file: File; name: string }[]>([])
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<{ type: 'success' | 'error'; text: string }[]>([])
  const [siteSettings, setSiteSettings] = useState(defaultSiteSettings)
  const [certification, setCertification] = useState(emptyCertification)

  useEffect(() => {
    const loadManagerData = async () => {
      try {
        const [settingsResponse, certificationsResponse] = await Promise.all([
          fetch('/api/settings'),
          fetch('/api/certifications'),
        ])
        if (settingsResponse.ok) setSiteSettings({ ...defaultSiteSettings, ...(await settingsResponse.json()) })
        if (certificationsResponse.ok) {
          const records = await certificationsResponse.json() as EditableCertification[]
          if (records[0]) setCertification(records[0])
        }
      } catch {
        setMessages(prev => [...prev, { type: 'error', text: 'Saved Manage data could not be loaded.' }])
      }
    }
    loadManagerData()
  }, [])

  const saveSiteSettings = async () => {
    const response = await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(siteSettings),
    })
    setMessages(prev => [...prev, response.ok
      ? { type: 'success', text: 'Website text and font settings saved.' }
      : { type: 'error', text: 'Website settings could not be saved.' }])
  }

  const saveCertification = async () => {
    if (!certification.title || !certification.issuer || !certification.date) {
      setMessages(prev => [...prev, { type: 'error', text: 'Certification title, issuer, and date are required.' }])
      return
    }

    const recordsResponse = await fetch('/api/certifications')
    const records = recordsResponse.ok ? await recordsResponse.json() as EditableCertification[] : []
    const nextRecord = { ...certification, id: certification.id || Date.now() }
    const nextRecords = certification.id
      ? records.map(record => record.id === certification.id ? nextRecord : record)
      : [...records, nextRecord]
    const response = await fetch('/api/certifications', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nextRecords),
    })
    if (!response.ok) {
      setMessages(prev => [...prev, { type: 'error', text: 'Certification details could not be saved.' }])
      return
    }
    setCertification(emptyCertification)
    setMessages(prev => [...prev, { type: 'success', text: 'Certification details saved.' }])
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'resume') => {
    const file = e.target.files?.[0]
    if (file) {
      if (type === 'profile') {
        setProfileFile(file)
      } else {
        setResumeFile(file)
      }
    }
  }

  const handleCertAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const certName = prompt('Enter certification name (e.g., AWS-Solutions-Architect):')
      if (certName) {
        setCertFiles([...certFiles, { file, name: certName }])
      }
    }
  }

  const removeCert = (index: number) => {
    setCertFiles(certFiles.filter((_, i) => i !== index))
  }

  const uploadFile = async (file: File, type: 'profile' | 'resume' | 'certification', certName?: string) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('type', type)
    if (certName) {
      formData.append('certName', certName)
    }

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      const data: UploadResponse = await response.json()

      if (!response.ok || data.error) {
        setMessages(prev => [...prev, { type: 'error', text: data.error || 'Upload failed' }])
        return false
      }

      setMessages(prev => [...prev, { type: 'success', text: data.message || 'Upload successful!' }])
      return true
    } catch (error) {
      setMessages(prev => [...prev, { type: 'error', text: 'Network error during upload' }])
      return false
    }
  }

  const handleUploadAll = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessages([])

    let allSuccess = true

    if (profileFile) {
      const success = await uploadFile(profileFile, 'profile')
      if (success) setProfileFile(null)
      else allSuccess = false
    }

    if (resumeFile) {
      const success = await uploadFile(resumeFile, 'resume')
      if (success) setResumeFile(null)
      else allSuccess = false
    }

    for (const cert of certFiles) {
      const success = await uploadFile(cert.file, 'certification', cert.name)
      if (success) {
        removeCert(certFiles.indexOf(cert))
      } else {
        allSuccess = false
      }
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Portfolio Manager</h1>
          <p className="text-muted-foreground">Upload and manage your profile picture, resume, and certifications</p>
        </div>

        {/* Messages */}
        {messages.length > 0 && (
          <div className="mb-6 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                  msg.type === 'success'
                    ? 'bg-green-500/10 text-green-600 border border-green-500/20'
                    : 'bg-red-500/10 text-red-600 border border-red-500/20'
                }`}
              >
                {msg.type === 'success' ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                {msg.text}
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleUploadAll} className="space-y-6">
          {/* Website content */}
          <section className="border border-foreground/10 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Website Content and Font</h2>
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-medium">
                Website title
                <input
                  value={siteSettings.siteTitle}
                  onChange={(e) => setSiteSettings({ ...siteSettings, siteTitle: e.target.value })}
                  className="rounded-lg border border-foreground/10 bg-background px-4 py-2"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Tagline
                <input
                  value={siteSettings.tagline}
                  onChange={(e) => setSiteSettings({ ...siteSettings, tagline: e.target.value })}
                  className="rounded-lg border border-foreground/10 bg-background px-4 py-2"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Heading font
                <select
                  value={siteSettings.headingFont}
                  onChange={(e) => setSiteSettings({ ...siteSettings, headingFont: e.target.value })}
                  className="rounded-lg border border-foreground/10 bg-background px-4 py-2"
                >
                  <option>Ubuntu Sans Mono</option>
                  <option>Noto Sans Display</option>
                  <option>Georgia</option>
                  <option>Arial</option>
                </select>
              </label>
              <button type="button" onClick={saveSiteSettings} className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
                Save Website Settings
              </button>
            </div>
          </section>

          {/* Certification details */}
          <section className="border border-foreground/10 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Certification Details</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {([
                ['title', 'Certification title'],
                ['issuer', 'Issuer'],
                ['date', 'Date'],
                ['credentialId', 'Credential ID'],
                ['credentialUrl', 'Credential URL'],
              ] as const).map(([field, label]) => (
                <label key={field} className="grid gap-2 text-sm font-medium">
                  {label}
                  <input
                    value={certification[field]}
                    onChange={(e) => setCertification({ ...certification, [field]: e.target.value })}
                    className="rounded-lg border border-foreground/10 bg-background px-4 py-2"
                  />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-medium md:col-span-2">
                Description
                <textarea
                  value={certification.description}
                  onChange={(e) => setCertification({ ...certification, description: e.target.value })}
                  rows={3}
                  className="rounded-lg border border-foreground/10 bg-background px-4 py-2"
                />
              </label>
            </div>
            <button type="button" onClick={saveCertification} className="mt-4 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
              Save Certification Details
            </button>
          </section>

          {/* Profile Picture */}
          <div className="border border-foreground/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Image className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold">Profile Picture</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Upload a new profile picture (JPEG, PNG, GIF, or WebP, max 10MB)
            </p>
            <label className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-foreground/10 rounded-lg cursor-pointer hover:border-blue-500/50 transition-colors">
              <div className="text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">
                  {profileFile ? profileFile.name : 'Click to select or drag image'}
                </p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'profile')}
                className="hidden"
              />
            </label>
          </div>

          {/* Resume */}
          <div className="border border-foreground/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold">Resume</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Upload your resume (PDF only, max 10MB)
            </p>
            <label className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-foreground/10 rounded-lg cursor-pointer hover:border-blue-500/50 transition-colors">
              <div className="text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">
                  {resumeFile ? resumeFile.name : 'Click to select resume PDF'}
                </p>
              </div>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'resume')}
                className="hidden"
              />
            </label>
          </div>

          {/* Certifications */}
          <div className="border border-foreground/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold">Certifications</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Upload certification documents (PDF only, max 10MB each)
            </p>

            {/* Certification List */}
            {certFiles.length > 0 && (
              <div className="mb-4 space-y-2">
                {certFiles.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-3 py-2 bg-secondary/50 rounded border border-foreground/10"
                  >
                    <span className="text-sm font-medium">{cert.name}: {cert.file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeCert(i)}
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            <label className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-foreground/10 rounded-lg cursor-pointer hover:border-blue-500/50 transition-colors">
              <div className="text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">Click to add certification</p>
              </div>
              <input
                type="file"
                accept=".pdf"
                onChange={handleCertAdd}
                className="hidden"
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || (!profileFile && !resumeFile && certFiles.length === 0)}
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Uploading...' : 'Upload Files'}
          </button>
        </form>

      </div>
    </main>
  )
}
