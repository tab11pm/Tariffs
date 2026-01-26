'use client'

import { useMemo } from 'react'
import { useGetTariffsQuery, usePurchaseTariffMutation } from '@/api/tariffsApi'
import { TariffCard } from './TariffCard'
import { TariffInfo } from './TariffInfo'
import { Btn } from '../../ui/Button'
import { TariffAgreed } from './TariffAgreed'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setSelectedTariffId, showAgreedError } from '@/slices/tariffsSlice'
import { toast } from 'react-toastify'
import { TariffAgreedInfo } from './TariffAgreedInfo'
import { TariffCardSection } from './TariffCardSection'
import { Tariff } from '@/types'

type TariffsFormProps = {
	data: Tariff[] | undefined
}

export function TariffsForm({ data }: TariffsFormProps) {
	const dispatch = useAppDispatch()
	const [purchase, { isLoading: isPurchasing }] = usePurchaseTariffMutation()

	const selectedTariffId = useAppSelector((s) => s.tariffs.selectedTariffId)
	const agreed = useAppSelector((s) => s.tariffs.agreed)
	const tariffs = useMemo(() => data ?? [], [data])

	const onBuy = async () => {
		if (!agreed) {
			dispatch(showAgreedError())
			return
		}
		if (!selectedTariffId) {
			toast.error('Выберите опцыю')
			return
		}

		try {
			//? в тз не было описано, что делать в покупки или случае ошибки, поэтому я просто показываю тост
			//? я пробовал разные endpoint, но не смог получить ответ от сервера
			await purchase({ tariffId: selectedTariffId }).unwrap()
			toast.success('Покупка успешно ✅')
		} catch {
			toast.error('Ошибка покупки ❌')
		}
	}

	return (
		<section className="space-y-2 md:space-y-4">
			<TariffCardSection
				tariffs={tariffs}
				onClick={(id) => dispatch(setSelectedTariffId(id))}
				selectedTariffId={selectedTariffId}
			/>

			<TariffInfo />

			<TariffAgreed />

			<Btn
				disabled={isPurchasing}
				onClick={onBuy}
				className="block w-full md:w-1/3 hover:scale-95 transition-transform duration-100 ease-in disabled:opacity-20"
			>
				Купить
			</Btn>

			<TariffAgreedInfo />
		</section>
	)
}
