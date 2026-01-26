'use client'

import { useGetTariffsQuery, usePurchaseTariffMutation } from '@/api/tariffsApi'
import { StickyHeader } from './StickyHeader'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
	setAgreed,
	setSelectedTariffId,
	showAgreedError,
} from '@/slices/tariffsSlice'
import { TariffCard } from './TariffCard'

export function TariffsScreen() {
	const dispatch = useAppDispatch()
	const { data, isLoading, isError } = useGetTariffsQuery()
	const [purchase, { isLoading: isPurchasing }] = usePurchaseTariffMutation()

	const selectedTariffId = useAppSelector((s) => s.tariffs.selectedTariffId)
	const agreed = useAppSelector((s) => s.tariffs.agreed)
	const agreedError = useAppSelector((s) => s.tariffs.agreedError)

	const onBuy = async () => {
		if (!agreed) {
			dispatch(showAgreedError())
			return
		}
		if (!selectedTariffId) return

		try {
			await purchase({ tariffId: selectedTariffId }).unwrap()
			// тут можно показать тост/модалку "Успешно"
			alert('Покупка успешно отправлена ✅')
		} catch {
			alert('Ошибка покупки ❌')
		}
	}

	return (
		<div className="min-h-screen bg-slate-50">
			<StickyHeader />

			<main className="mx-auto max-w-5xl px-4 py-6">
				<h1 className="text-xl font-bold text-slate-900">Выберите тариф</h1>
				<p className="mt-1 text-sm text-slate-600">
					Нажмите на тариф — он выделится. Затем подтвердите чекбокс и нажмите
					«Купить».
				</p>

				<div className="mt-6">
					{isLoading && <div className="text-slate-600">Загрузка тарифов…</div>}
					{isError && (
						<div className="text-red-600">Не удалось загрузить тарифы.</div>
					)}

					{data && (
						<div className="grid gap-4 md:grid-cols-3">
							{data.map((t) => (
								<TariffCard
									key={t.id}
									tariff={t}
									selected={t.id === selectedTariffId}
									onSelect={() => dispatch(setSelectedTariffId(t.id))}
								/>
							))}
						</div>
					)}
				</div>

				<div className="mt-6 rounded-2xl border bg-white p-4">
					<label
						className={[
							'flex cursor-pointer items-start gap-3 rounded-xl p-3 transition',
							agreedError
								? 'border border-red-500 bg-red-50'
								: 'border border-transparent hover:bg-slate-50',
						].join(' ')}
					>
						<input
							type="checkbox"
							className={[
								'mt-1 h-4 w-4 rounded border-slate-300',
								agreedError ? 'accent-red-600' : 'accent-blue-600',
							].join(' ')}
							checked={agreed}
							onChange={(e) => dispatch(setAgreed(e.target.checked))}
						/>
						<div className="text-sm">
							<div
								className={
									agreedError ? 'text-red-700 font-medium' : 'text-slate-800'
								}
							>
								Я согласен с условиями оферты
							</div>
							<div className="text-slate-500">
								Без отметки покупка невозможна.
							</div>
						</div>
					</label>

					<div className="mt-4 flex items-center justify-between gap-3">
						<div className="text-sm text-slate-600">
							Выбрано:{' '}
							<span className="font-semibold text-slate-900">
								{selectedTariffId ? selectedTariffId : '—'}
							</span>
						</div>

						<button
							type="button"
							onClick={onBuy}
							disabled={!selectedTariffId || isPurchasing}
							className={[
								'relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white',
								'transition disabled:cursor-not-allowed disabled:opacity-50',
								// мигающий эффект (как просили)
								'animate-softGlow',
								'bg-blue-600 hover:bg-blue-700',
							].join(' ')}
						>
							{isPurchasing ? 'Покупка…' : 'Купить'}
							{/* дополнительная “мигалка” поверх (если хочешь сильнее): */}
							<span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-white/30 animate-blink" />
						</button>
					</div>
				</div>
			</main>
		</div>
	)
}
