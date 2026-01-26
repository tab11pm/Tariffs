import React, { useEffect, useMemo, useRef, useState } from 'react'
import './PriceAnimated.css'
function formatRub(n: number) {
	// формат вида 12 345
	return new Intl.NumberFormat('ru-RU').format(Math.round(n))
}

function easeOutCubic(t: number) {
	return 1 - Math.pow(1 - t, 3)
}

type Props = {
	isTime: boolean
	price: number // цена со скидкой
	full_price: number // настоящая (старая)
	is_best?: boolean
}

export function PriceAnimated({ isTime, price, full_price, is_best }: Props) {
	const [display, setDisplay] = useState(price)
	const rafRef = useRef<number | null>(null)

	// когда isTime=true: считаем от price -> full_price
	const from = useMemo(() => price, [price])
	const to = useMemo(() => full_price, [full_price])

	useEffect(() => {
		console.log(isTime)

		if (isTime) {
			setDisplay(price)
			return
		}

		const duration = 900 // ms
		const start = performance.now()

		const tick = (now: number) => {
			const t = Math.min(1, (now - start) / duration)
			const p = easeOutCubic(t)
			const value = from + (to - from) * p

			setDisplay(value)

			if (t < 1) rafRef.current = requestAnimationFrame(tick)
		}

		rafRef.current = requestAnimationFrame(tick)

		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current)
		}
	}, [isTime, from, to, full_price])

	return (
		<div className="text-3xl md:text-6xl font-bold leading-none flex flex-col">
			<span className={is_best ? 'text-(--primary)' : ''}>
				{formatRub(display)} ₽
			</span>

			<div
				className={`text-base md:text-2xl text-[#919191] old-price-saw  ${!isTime ? ' _timeUp' : ''}`}
				aria-hidden="true"
			>
				{formatRub(full_price)} ₽
			</div>
		</div>
	)
}
