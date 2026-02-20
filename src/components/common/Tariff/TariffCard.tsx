'use client'
import { TariffDto } from '@/types'
import { Card } from '../../ui/Card'
import { useDeviceType } from '@/hooks/useDeviceType'
import { useAppSelector } from '@/store/hooks'
import { PriceAnimated } from './PriceAnimated'

type TariffCardProps = {
	card: TariffDto & { discountPercent: number }
	onClick: (id: string) => void
	isActive: boolean
}

export const TariffCard = ({ card, onClick, isActive }: TariffCardProps) => {
	const device = useDeviceType()
	const isTime = useAppSelector((s) => s.tariffs.isTime)

	return (
		<Card
			key={card.id}
			className={` card-background relative overflow-hidden border-2 ${isActive ? 'border-(--primary)' : 'border-[#484D4E]'} md:px-8 hover:-translate-y-2 hover:translate-x-1 cursor-pointer  transition-transform ease-in duration-150 hover:shadow-lg  relative shadow-orange-300`}
		>
			<button
				className="block  w-full  md:space-y-6"
				onClick={() => onClick(card.id)}
			>
				<div className="flex items-start justify-end md:justify-between gap-2 mb-2 h-10">
					{isTime && (
						<div className="relative -top-5 md:absolute md:-top-1 rounded-lg  bg-(--red) h-10 w-16 flex items-center justify-center text-xl">
							-{card.discountPercent}%
						</div>
					)}
					<div></div>
					<div className="relative -top-3 md:-top-4 rounded-lg md:text-3xl text-(--primary) ">
						{card.is_best && 'хит!'}
					</div>
				</div>

				<div className="flex flex-row  cursor-pointer  md:flex-wrap gap-2 md:gap-10 h-full justify-between  items-center">
					<div className="flex flex-col justify-center items-center flex-1">
						<h2 className="text-lg md:text-2xl font-medium mb-3 md:mb-6 ">
							{card.period}
						</h2>
						<PriceAnimated
							isTime={isTime}
							price={Number(card.price)}
							full_price={Number(card.full_price)}
							is_best={card.is_best}
						/>
					</div>
					<div className="w-1/2 md:w-auto">
						{' '}
						{device === 'mobile'
							? typeof card.text === 'string'
								? card.text.slice(0, 30)
								: ''
							: card.text}
					</div>
				</div>
			</button>
		</Card>
	)
}
