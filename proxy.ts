import { NextRequest, NextResponse } from 'next/server'

const sessionCookie = 'portfolio_admin_session'

export function proxy(request: NextRequest) {
  const session = request.cookies.get(sessionCookie)?.value
  const validSession = Boolean(process.env.ADMIN_SESSION_TOKEN && session === process.env.ADMIN_SESSION_TOKEN)

  if (validSession) return NextResponse.next()

  if (request.nextUrl.pathname.startsWith('/api/upload')) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }

  return NextResponse.redirect(new URL('/UI-Components/AdminLogin', request.url))
}

export const config = {
  matcher: ['/UI-Components/Admin', '/api/upload'],
}