import { Tariff } from '@/types'
import { TariffCard } from './TariffCard'

type TariffCardProps = {
	selectedTariffId: string | null
	onClick: (id: string) => void
	tariffs: Tariff[]
}

export function TariffCardSection({
	selectedTariffId,
	onClick,
	tariffs,
}: TariffCardProps) {
	return (
		<>
			<TariffCard
				isActive={selectedTariffId === tariffs[0].id}
				onClick={onClick}
				card={tariffs[0]}
			/>

			<div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-3">
				{tariffs.toReversed().map((t, i) => {
					if (i < tariffs.length - 1)
						return (
							<TariffCard
								isActive={selectedTariffId === t.id}
								onClick={onClick}
								card={t}
							/>
						)
				})}
			</div>
		</>
	)
}
