import { Card } from '../../ui/Card'

export const TariffFooter = () => {
	return (
		<footer>
			<Card className="space-y-6 border border-[#484D4E] bg-transparent">
				<Card className="inline-block text-(--green) border-2 bg-[#2D3233]  border-(--green) text-lg md:text-2xl px-8">
					гарантия возврата 30 дней
				</Card>
				<p className="text-sm md:text-2xl text-[#DCDCDC]">
					Мы уверены, что наш план сработает для тебя и ты увидишь видимые
					результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
					деньги в течение 30 дней с момента покупки, если ты не получишь
					видимых результатов.
				</p>
			</Card>
		</footer>
	)
}
