import { setAgreed } from '@/slices/tariffsSlice'
import { useAppSelector } from '@/store/hooks'
import { useDispatch } from 'react-redux'
import './Tariff.style.css'

export const TariffAgreed = () => {
	const dispatch = useDispatch()

	const agreed = useAppSelector((s) => s.tariffs.agreed)
	const agreedError = useAppSelector((s) => s.tariffs.agreedError)
	return (
		<label
			className={[
				'flex cursor-pointer md:w-8/12 items-start gap-2 rounded-xl p-2 transition',
				agreedError ? 'border border-red-500 ' : 'border border-transparent ',
			].join(' ')}
		>
			<input
				type="checkbox"
				className="tariff__input w-12 h-6  md:h-8 md:w-8"
				checked={agreed}
				onChange={(e) => dispatch(setAgreed(e.target.checked))}
			/>
			<p className={`${agreedError ? 'text-red-700 font-medium' : ''}`}>
				Я согласен с офертой рекуррентных платежей и Политикой
				конфиденциальности
			</p>
		</label>
	)
}
