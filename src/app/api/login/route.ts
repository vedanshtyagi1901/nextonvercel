import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// If 'req' is unused, rename it to '_req' to avoid ESLint errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  return NextResponse.json({ message: 'Hello from the Vedansh Vercel backend!' });
}
