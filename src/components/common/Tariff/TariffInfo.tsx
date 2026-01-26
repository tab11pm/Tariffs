import { Card } from '../../ui/Card'

export const TariffInfo = () => {
	return (
		<>
			<Card className="inline-flex gap-2 items-start px-8 bg-[#2D3233]">
				<span className="text-(--primary) text-2xl ">!</span>
				<p className="text-[12px] md:text-base">
					Следуя плану на 3 месяца и более, люди получают <br /> в 2 раза лучший
					результат, чем за 1 месяц
				</p>
			</Card>
		</>
	)
}
