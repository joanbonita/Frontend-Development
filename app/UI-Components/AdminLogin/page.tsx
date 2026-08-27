'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        setError('Invalid username or password')
        return
      }

      router.push('/UI-Components/Admin')
      router.refresh()
    } catch {
      setError('Unable to sign in right now')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16 px-[8%] lg:px-[16%] flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 bg-[--bg-color] border border-[--light-border] rounded-lg p-8 shadow-lg">
          <div>
            <h1 className="text-3xl font-bold font-ubuntusansmono mb-2 text-[--prim-color]">Portfolio Manager</h1>
            <p className="text-[--text-light]">Sign in to manage your portfolio files.</p>
          </div>

          <label className="block space-y-2">
            <span className="text-sm font-medium">Username</span>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" required className="w-full rounded-lg border border-[--light-border] bg-transparent px-3 py-2 focus:border-[--prim-color] focus:outline-none" />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium">Password</span>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required className="w-full rounded-lg border border-[--light-border] bg-transparent px-3 py-2 focus:border-[--prim-color] focus:outline-none" />
          </label>

          {error && <p className="text-sm text-red-600" role="alert">{error}</p>}

          <button type="submit" disabled={loading} className="w-full rounded-lg bg-[--prim-color] px-4 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-50">
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          <Link href="/" className="block text-center text-sm text-[--prim-color] hover:text-white transition-colors">
            Back to portfolio
          </Link>
        </form>
      </main>
      <Footer />
    </>
  )
}