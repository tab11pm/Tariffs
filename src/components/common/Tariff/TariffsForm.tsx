'use client'

import { useMemo, useState } from 'react'
import { usePurchaseTariffMutation } from '@/api/tariffsApi'
import { TariffInfo } from './TariffInfo'
import { Btn } from '@/components/ui'
import { TariffAgreed } from './TariffAgreed'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setSelectedTariffId, showAgreedError } from '@/slices/tariffsSlice'
import { toast } from 'react-toastify'
import { TariffAgreedInfo } from './TariffAgreedInfo'
import { TariffCardSection } from './TariffCardSection'
import { Tariff } from '@/types'
import { PaymentMethodModal, PaymentSuccessModal } from '../Payment'

type TariffsFormProps = {
	data: Tariff[] | undefined
}

export function TariffsForm({ data }: TariffsFormProps) {
	const dispatch = useAppDispatch()
	const [purchase, { isLoading: isPurchasing }] = usePurchaseTariffMutation()

	const selectedTariffId = useAppSelector((s) => s.tariffs.selectedTariffId)
	const agreed = useAppSelector((s) => s.tariffs.agreed)
	const tariffs = useMemo(() => data ?? [], [data])

	const [payOpen, setPayOpen] = useState(false)
	const [successOpen, setSuccessOpen] = useState(false)

	const onBuyClick = () => {
		if (!agreed) {
			dispatch(showAgreedError())
			return
		}
		if (!selectedTariffId) {
			toast.error('Выберите опцыю')
			return
		}
		setPayOpen(true)
	}

	const onConfirmPay = async (method: 'SBP' | 'VISA' | 'MASTERCARD') => {
		try {
			// если бек будет принимать method — передай его:
			// await purchase({ tariffId: selectedTariffId!, method }).unwrap()

			await purchase({ tariffId: selectedTariffId! }).unwrap()

			setPayOpen(false)
			setSuccessOpen(true)
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
				onClick={onBuyClick}
				className="block w-full md:w-1/3 hover:scale-95 transition-transform duration-100 ease-in disabled:opacity-20"
			>
				Купить
			</Btn>

			<TariffAgreedInfo />

			<PaymentMethodModal
				open={payOpen}
				loading={isPurchasing}
				onClose={() => setPayOpen(false)}
				onConfirm={onConfirmPay}
			/>

			<PaymentSuccessModal
				open={successOpen}
				onClose={() => setSuccessOpen(false)}
			/>
		</section>
	)
}
