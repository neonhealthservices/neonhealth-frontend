import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // Extract subdomain
  const subdomainMatch = hostname.match(/^([a-z0-9-]+)\.(.+)$/);
  const subdomain = subdomainMatch ? subdomainMatch[1] : null;

  // Handle blog subdomain
  if (subdomain === 'blog') {
    // Rewrite the URL to /blog/* while keeping the original hostname visible
    const url = request.nextUrl.clone();
    url.pathname = `/blog${pathname === '/' ? '' : pathname}`;
    return NextResponse.rewrite(url);
  }

  // Handle www and root domains normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
