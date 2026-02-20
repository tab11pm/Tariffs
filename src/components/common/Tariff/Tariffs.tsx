'use client'

import Image from 'next/image'
import { TariffFooter } from './TariffFooter'
import { TariffsForm } from './TariffsForm'
import './Tariff.style.css'
import { useGetTariffsQuery } from '@/api/tariffsApi'
import { TariffSkeleton } from './TariffSkeleton'
import { useDispatch } from 'react-redux'
import { setIsDataLoaded } from '@/slices/tariffsSlice'
import { useEffect } from 'react'

export function Tariffs() {
	const dispatch = useDispatch()
	const { data, isLoading, isError, refetch } = useGetTariffsQuery()

	useEffect(() => {
		if (data && data.length > 0) dispatch(setIsDataLoaded(true))
	}, [data])

	return isLoading ? (
		<TariffSkeleton />
	) : (
		<>
			<div className="container mx-auto h-full p-4">
				<main className=" p-4">
					<h1 className="text-center mb-2 md:mb-12 text-2xl font-bold">
						Выбери подходящий для себя{' '}
						<span className="primary-color">тариф</span>
					</h1>
					{isError && (
						<div className="p-4 flex items-center justify-center flex-col">
							<p className="mb-2">Не удалось загрузить тарифы</p>
							<button
								className="rounded-xl px-4 py-2 border"
								onClick={() => refetch()}
							>
								Повторить
							</button>
						</div>
					)}
					{!isError && !isLoading && (
						<div className="flex md:gap-20 flex-wrap md:flex-nowrap justify-center">
							<Image
								alt="man"
								src="/man.png"
								className="h-80 w-auto md:h-full md:w-1/2 tariff__img"
								width={300}
								height={700}
							/>
							{data && data.length > 0 && <TariffsForm data={data} />}
						</div>
					)}
				</main>
				<TariffFooter />
			</div>
		</>
	)
}
