import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { getToken as jwtGetToken } from 'next-auth/jwt';
const JWT_SECRET = process.env.JWT_SECRET;

// Helper to extract token from cookies
function getToken(req) {
    const token = req.cookies.get('auth')?.value;
    return token;
}

// Helper to verify JWT and get user info
async function getUserFromToken(token) {
    try {
        const secret = new TextEncoder().encode(JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch {
        return null;
    }
}

async function getGoogleToken(req){
     const token = await jwtGetToken({ req, secret: process.env.NEXTAUTH_SECRET });
     return token;

}

export async function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = getToken(req);
    const user = token ? await getUserFromToken(token) : null;
    const googleToken = await getGoogleToken(req);
    console.log(googleToken);
    
    // If logged in, redirect from login/register to home
    if (
        (user || googleToken) &&
        (pathname === '/login' || pathname === '/register')
    ) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // If not logged in, block access to /admin and /client pages
    if (
        !user &&
        (pathname.startsWith('/admin') || pathname.startsWith('/client'))
    ) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    
    // Admin should not access client pages
    if (
        user &&
        user.type === 'admin' &&
        pathname.startsWith('/client')
    ) {
        return NextResponse.redirect(new URL('/', req.url));
    }
     // Client should not access admin pages
    if (
        user &&
        user.type === 'client' &&
        pathname.startsWith('/admin')
    ) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    else if (
        googleToken &&
        pathname.startsWith('/admin')
    ) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // Allow all other requests
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/client/:path*',
        '/login',
        '/register',
    ],
};