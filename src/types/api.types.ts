export type TariffDto = {
	id: string
	period: string
	price: number
	full_price: number
	is_best: boolean
	text: string
}

export type Tariff = TariffDto & {
	discountPercent: number // посчитаем сами
}
