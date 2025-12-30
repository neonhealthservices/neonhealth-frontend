import { NextRequest } from 'next/server';
import { verifyToken, JWTPayload } from '@/lib/auth';

export interface AuthenticatedRequest extends NextRequest {
    user?: JWTPayload;
}

/**
 * Middleware to verify JWT token from Authorization header
 */
export function authenticate(request: NextRequest): JWTPayload | null {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    return verifyToken(token);
}

/**
 * Get user from request
 */
export function getUserFromRequest(request: NextRequest): JWTPayload | null {
    return authenticate(request);
}
