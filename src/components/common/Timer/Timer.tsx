'use client'

import { useEffect, useMemo, useState } from 'react'
import './Timer.style.css'
import { formatMMSS } from '@/utils'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setTime } from '@/slices/tariffsSlice'

export const Timer = () => {
	const [secondsLeft, setSecondsLeft] = useState(120)
	const dispatch = useAppDispatch()
	const isDataLoaded = useAppSelector((s) => s.tariffs.isDataLoaded)

	useEffect(() => {
		const id = window.setInterval(() => {
			setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
		}, 1000)
		return () => window.clearInterval(id)
	}, [])

	const isDanger = secondsLeft <= 30 && secondsLeft > 0
	const isOver = secondsLeft === 0

	const timerClass = useMemo(() => {
		if (isOver) {
			dispatch(setTime(false))
			return ''
		}
		if (isDanger) return 'text-red-600 animate-blink'
		return 'text-(--yellow)'
	}, [isDanger, isOver])

	if (!isDataLoaded) {
		return null
	}
	return (
		<>
			<section className="timer">
				<h2 className="timer__header">Успейте открыть пробную неделю</h2>
				<p className={`timer__action ${timerClass}`}>
					{isOver ? '00:00' : formatMMSS(secondsLeft)}
				</p>
			</section>
		</>
	)
}
