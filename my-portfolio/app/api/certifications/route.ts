import { list, put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const blobPath = 'portfolio/certifications.json'

type Certification = {
  id: number
  title: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  description: string
}

async function readCertifications(): Promise<Certification[]> {
  const result = await list({ prefix: blobPath, limit: 1 })
  const blob = result.blobs[0]
  if (!blob) return []

  const response = await fetch(blob.url, { cache: 'no-store' })
  if (!response.ok) return []
  return (await response.json()) as Certification[]
}

export async function GET() {
  try {
    return NextResponse.json(await readCertifications())
  } catch (error) {
    console.error('Certification read error:', error)
    return NextResponse.json({ error: 'Vercel Blob storage is not configured.' }, { status: 503 })
  }
}

export async function PUT(request: Request) {
  try {
    const certifications = (await request.json()) as Certification[]
    await put(blobPath, JSON.stringify(certifications), {
      access: 'public',
      addRandomSuffix: false,
      contentType: 'application/json',
    })
    return NextResponse.json(certifications)
  } catch (error) {
    console.error('Certification write error:', error)
    return NextResponse.json({ error: 'Could not save certifications.' }, { status: 503 })
  }
}
