import { list } from '@vercel/blob'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ asset: string }> },
) {
  const { asset } = await params

  try {
    const result = await list({ prefix: `portfolio/assets/${asset}`, limit: 10 })
    const blob = result.blobs[0]
    if (blob) return NextResponse.redirect(blob.url)
  } catch {
    // Fall back to the bundled public asset when Blob is not configured locally.
  }

  try {
    const file = await readFile(join(process.cwd(), 'public', asset))
    const contentType = asset.endsWith('.pdf') ? 'application/pdf' : 'image/jpeg'
    return new NextResponse(file, { headers: { 'Content-Type': contentType } })
  } catch {
    return NextResponse.json({ error: 'Asset not found' }, { status: 404 })
  }
}
