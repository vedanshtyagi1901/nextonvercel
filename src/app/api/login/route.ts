import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// If 'req' is unused, rename it to '_req' to avoid ESLint errors
export async function GET(_req: NextRequest) {
  return NextResponse.json({ message: 'Hello from the Vedansh Vercel backend!' });
}
