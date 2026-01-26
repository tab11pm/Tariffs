'use client'

import { useEffect, useState } from 'react'

export function useDeviceType() {
	const [type, setType] = useState<'mobile' | 'desktop'>('desktop')

	useEffect(() => {
		const check = () => {
			setType(
				window.matchMedia('(max-width: 768px)').matches ? 'mobile' : 'desktop',
			)
		}
		check()
		window.addEventListener('resize', check)
		return () => window.removeEventListener('resize', check)
	}, [])

	return type
}
