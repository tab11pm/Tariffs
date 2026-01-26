'use client'

import { useEffect, useMemo, useState } from 'react'

function formatMMSS(totalSeconds: number) {
	const m = Math.floor(totalSeconds / 60)
	const s = totalSeconds % 60
	return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function StickyHeader() {
	const [secondsLeft, setSecondsLeft] = useState(120)

	useEffect(() => {
		setSecondsLeft(120)
		const id = window.setInterval(() => {
			setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
		}, 1000)
		return () => window.clearInterval(id)
	}, [])

	const isDanger = secondsLeft <= 30 && secondsLeft > 0
	const isOver = secondsLeft === 0

	const timerClass = useMemo(() => {
		if (isOver) return 'text-red-600'
		if (isDanger) return 'text-red-600 animate-blink'
		return 'text-slate-700'
	}, [isDanger, isOver])

	return (
		<header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
			<div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
				<div className="font-semibold">Тарифы</div>

				<div className="flex items-center gap-2">
					<span className="text-sm text-slate-500">До конца:</span>
					<span className={`tabular-nums font-bold ${timerClass}`}>
						{isOver ? '00:00' : formatMMSS(secondsLeft)}
					</span>
				</div>
			</div>
		</header>
	)
}
