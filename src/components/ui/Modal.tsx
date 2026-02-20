import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useEffect } from 'react'

type Props = {
	open: boolean
	onClose: () => void
	title: string
	children: ReactNode
}

export const Modal = ({ onClose, open, title, children }: Props) => {
	useEffect(() => {
		if (!open) return
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [open, onClose])
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center text-black"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					aria-modal="true"
					role="dialog"
				>
					{/* overlay */}
					<motion.button
						type="button"
						className="absolute inset-0 bg-black/50 backdrop-blur-sm"
						onClick={onClose}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						aria-label="Закрыть"
					/>

					{/* modal */}
					<motion.div
						className="relative w-[92%] max-w-md rounded-2xl bg-white p-5 shadow-2xl"
						initial={{ y: 24, opacity: 0, scale: 0.98 }}
						animate={{ y: 0, opacity: 1, scale: 1 }}
						exit={{ y: 24, opacity: 0, scale: 0.98 }}
						transition={{ type: 'spring', stiffness: 260, damping: 22 }}
					>
						<div className="flex items-start justify-between gap-3">
							<div>
								<h3 className="text-lg font-semibold">Способ оплаты</h3>
								<p className="text-sm text-gray-500">{title}</p>
							</div>

							<button
								type="button"
								onClick={onClose}
								className="rounded-xl px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"
							>
								✕
							</button>
						</div>

						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
