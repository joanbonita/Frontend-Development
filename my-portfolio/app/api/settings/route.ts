import { list, put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const blobPath = 'portfolio/settings.json'
const defaults = {
  siteTitle: 'Engineer Salma Pelesi',
  tagline: 'inspired to inspire',
  headingFont: 'Ubuntu Sans Mono',
}

async function readSettings() {
  const result = await list({ prefix: blobPath, limit: 1 })
  const blob = result.blobs[0]
  if (!blob) return defaults

  const response = await fetch(blob.url, { cache: 'no-store' })
  if (!response.ok) return defaults
  return { ...defaults, ...(await response.json()) }
}

export async function GET() {
  try {
    return NextResponse.json(await readSettings())
  } catch (error) {
    console.error('Settings read error:', error)
    return NextResponse.json({ error: 'Vercel Blob storage is not configured.' }, { status: 503 })
  }
}

export async function PUT(request: Request) {
  try {
    const settings = { ...defaults, ...(await request.json()) }
    await put(blobPath, JSON.stringify(settings), {
      access: 'public',
      addRandomSuffix: false,
      contentType: 'application/json',
    })
    return NextResponse.json(settings)
  } catch (error) {
    console.error('Settings write error:', error)
    return NextResponse.json({ error: 'Could not save website settings.' }, { status: 503 })
  }
}
