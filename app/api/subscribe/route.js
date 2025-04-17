// app/api/subscribe/route.js
import { NextResponse } from 'next/server';

const KIT_API_KEY = process.env.KIT_API_KEY;

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const createSubscriberRes = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': KIT_API_KEY,
      },
      body: JSON.stringify({
        email_address: email,
        state: 'active',
      }),
    });

    if (!createSubscriberRes.ok) {
      const errorData = await createSubscriberRes.json();
      console.error('Error creating subscriber:', errorData);
      return NextResponse.json({ error: 'Failed to create subscriber' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
