import { NextResponse } from 'next/server'

const url = process.env.SERVER_URL
export async function GET() {
	const res = await fetch(`${url}/Test/GetTariffs`)
	if (res.ok) {
		try {
			const data = await res.json()
			return NextResponse.json(data)
		} catch (error) {
			return NextResponse.json({ error: 'Error parsing JSON' }, { status: 500 })
		}
	}
}
