'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Btn } from '../../ui/Button'

type Props = {
	open: boolean
	onClose: () => void
	title?: string
	subtitle?: string
}

export function PaymentSuccessModal({
	open,
	onClose,
	title = 'Оплата прошла успешно',
	subtitle = 'Спасибо! Тариф активирован ✅',
}: Props) {
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center text-black"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					role="dialog"
					aria-modal="true"
				>
					<motion.button
						type="button"
						className="absolute inset-0 bg-black/50 backdrop-blur-sm"
						onClick={onClose}
						aria-label="Закрыть"
					/>

					<motion.div
						className="relative w-[92%] max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
						initial={{ y: 18, opacity: 0, scale: 0.98 }}
						animate={{ y: 0, opacity: 1, scale: 1 }}
						exit={{ y: 18, opacity: 0, scale: 0.98 }}
						transition={{ type: 'spring', stiffness: 260, damping: 22 }}
					>
						{/* animated check */}
						<div className="mx-auto mb-4 flex w-full justify-center">
							<motion.div
								className="grid place-items-center rounded-full border border-gray-200"
								style={{ width: 88, height: 88 }}
								initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
								animate={{ scale: 1, rotate: 0, opacity: 1 }}
								transition={{ type: 'spring', stiffness: 220, damping: 16 }}
							>
								<motion.svg
									width="44"
									height="44"
									viewBox="0 0 52 52"
									fill="none"
								>
									<motion.path
										d="M14 27.5 L22 35 L38 18"
										stroke="black"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
										initial={{ pathLength: 0 }}
										animate={{ pathLength: 1 }}
										transition={{ duration: 0.55, ease: 'easeInOut' }}
									/>
								</motion.svg>
							</motion.div>
						</div>

						<h3 className="text-center text-lg font-semibold">{title}</h3>
						<p className="mt-1 text-center text-sm text-gray-500">{subtitle}</p>

						<motion.div
							className="mt-5"
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}
						>
							<Btn type="button" onClick={onClose} className="w-full">
								Понятно
							</Btn>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
