import { NextResponse } from 'next/server'

export function middleware() {
  return NextResponse.redirect('https://www.techgrity.info')
}

export const config = {
  matcher: '/:path*',
} 