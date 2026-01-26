'use client'

import { useAppSelector } from '@/store/hooks'
import { Tariff } from '@/types'

export function TariffCard({
	tariff,
	selected,
	onSelect,
}: {
	tariff: Tariff
	selected: boolean
	onSelect: () => void
}) {
	return (
		<button
			type="button"
			onClick={onSelect}
			className={[
				'text-left rounded-2xl border bg-white p-4 transition',
				selected
					? 'border-blue-600 ring-2 ring-blue-200'
					: 'border-slate-200 hover:border-slate-300',
			].join(' ')}
		>
			<div className="flex items-start justify-between gap-2">
				<div>
					<div className="text-lg font-bold text-slate-900">{tariff.text}</div>
					<div className="mt-1 text-sm text-slate-500">
						<span className="text-slate-900 font-semibold">{tariff.price}</span>{' '}
						{tariff.period}
					</div>
				</div>

				{/* {tariff.isPopular && (
					<span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
						Популярный
					</span>
				)} */}
			</div>

			{/* <ul className="mt-4 space-y-2 text-sm text-slate-700">
				{tariff.features.map((f) => (
					<li key={f} className="flex gap-2">
						<span className="mt-1 inline-block h-2 w-2 rounded-full bg-slate-300" />
						<span>{f}</span>
					</li>
				))}
			</ul> */}
		</button>
	)
}
