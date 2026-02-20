import SbpIcon from '@/assets/icon/sbp.svg'
import VisaIcon from '@/assets/icon/visa.svg'
import MastercardIcon from '@/assets/icon/mastercard.svg'

export const METHODS = [
	{
		id: 'SBP' as const,
		title: 'СБП',
		subtitle: 'Быстро — через банк',
		Icon: SbpIcon,
	},
	{
		id: 'VISA' as const,
		title: 'Visa',
		subtitle: 'Карта Visa',
		Icon: VisaIcon,
	},
	{
		id: 'MASTERCARD' as const,
		title: 'Mastercard',
		subtitle: 'Карта Mastercard',
		Icon: MastercardIcon,
	},
]
