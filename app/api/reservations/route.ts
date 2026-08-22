import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const required = ['name', 'email', 'phone', 'date', 'time', 'partySize']
    if (required.some((key) => typeof body[key] !== 'string' || !body[key].trim())) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 })
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email)) {
      return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 })
    }
    console.log('[v0] Bella Vista reservation request:', { ...body, receivedAt: new Date().toISOString() })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
}
