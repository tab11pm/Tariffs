export const calcDiscountPercent = (price: number, full: number) => {
	if (!full || full <= 0) return 0
	const raw = ((full - price) / full) * 100
	// аккуратно: округлим до целого, но можно Math.floor, если нужно “честнее”
	return Math.max(0, Math.min(100, Math.round(raw)))
}
