import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const body = await req.json().catch(() => null)

	if (!body?.tariffId) {
		return NextResponse.json(
			{ ok: false, error: 'tariffId required' },
			{ status: 400 },
		)
	}

	// имитация успешной покупки
	return NextResponse.json({ ok: true })
}
