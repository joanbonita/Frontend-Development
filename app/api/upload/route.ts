import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const type = formData.get('type') as string // 'profile', 'resume', or 'certification'

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file type based on upload type
    const validProfileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    const validDocTypes = ['application/pdf']

    if (type === 'profile' && !validProfileTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Profile picture must be an image (JPEG, PNG, GIF, or WebP)' },
        { status: 400 }
      )
    }

    if ((type === 'resume' || type === 'certification') && !validDocTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Document must be a PDF file' },
        { status: 400 }
      )
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must not exceed 10MB' },
        { status: 400 }
      )
    }

    const buffer = await file.arrayBuffer()
    
    // Determine file name and path
    let fileName = ''
    let uploadDir = ''

    if (type === 'profile') {
      fileName = `profile.${file.type.split('/')[1]}`
      uploadDir = join(process.cwd(), 'public')
    } else if (type === 'resume') {
      fileName = 'resume.pdf'
      uploadDir = join(process.cwd(), 'public')
    } else if (type === 'certification') {
      const certName = formData.get('certName') as string || 'certification'
      fileName = `${certName}.pdf`
      uploadDir = join(process.cwd(), 'public', 'documents')
    }

    // Ensure directory exists
    try {
      await mkdir(uploadDir, { recursive: true })
    } catch {
      // Directory might already exist
    }

    const filePath = join(uploadDir, fileName)
    await writeFile(filePath, Buffer.from(buffer))

    return NextResponse.json({
      success: true,
      message: `${type} file uploaded successfully`,
      fileName,
      path: type === 'certification' ? `/documents/${fileName}` : `/${fileName}`
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    )
  }
}
