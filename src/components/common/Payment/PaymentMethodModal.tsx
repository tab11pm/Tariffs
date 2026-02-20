'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Modal, Btn } from '@/components/ui'
import { METHODS } from '@/config/methods.const'

type Method = 'SBP' | 'VISA' | 'MASTERCARD'

type Props = {
	open: boolean
	loading?: boolean
	onClose: () => void
	onConfirm: (method: Method) => void
}

export function PaymentMethodModal({
	open,
	loading,
	onClose,
	onConfirm,
}: Props) {
	const [method, setMethod] = useState<Method>('SBP')

	return (
		<>
			<Modal
				open={open}
				onClose={onClose}
				title="Выберите метод и подтвердите оплату"
			>
				<div className="mt-4 space-y-2">
					{METHODS.map(({ id, title, subtitle, Icon }) => {
						const active = id === method

						return (
							<motion.button
								key={id}
								type="button"
								onClick={() => setMethod(id)}
								whileTap={{ scale: 0.98 }}
								className={[
									'relative w-full overflow-hidden rounded-2xl border p-4 text-left transition',
									active
										? 'border-black/70'
										: 'border-gray-200 hover:bg-gray-50',
								].join(' ')}
							>
								<AnimatePresence>
									{active && (
										<motion.div
											className="pointer-events-none absolute inset-0"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
										>
											<div className="absolute inset-0 bg-linear-to-r from-black/5 via-black/0 to-black/5" />
											<motion.div
												className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-black/10 blur-2xl"
												initial={{ x: -40, opacity: 0.4 }}
												animate={{ x: 220, opacity: 0.55 }}
												transition={{ duration: 0.9, ease: 'easeInOut' }}
											/>
										</motion.div>
									)}
								</AnimatePresence>

								<div className="relative flex items-center gap-4">
									<div className="h-12 w-12 shrink-0">
										<Icon className="h-full w-full" />
									</div>

									<div className="flex-1">
										<div className="text-base font-medium">{title}</div>
										<div className="text-xs text-gray-500">{subtitle}</div>
									</div>

									<div
										className={[
											'h-5 w-5 rounded-full border flex items-center justify-center',
											active ? 'border-black' : 'border-gray-300',
										].join(' ')}
									>
										<AnimatePresence>
											{active && (
												<motion.div
													className="h-3 w-3 rounded-full bg-black"
													initial={{ scale: 0.5, opacity: 0 }}
													animate={{ scale: 1, opacity: 1 }}
													exit={{ scale: 0.5, opacity: 0 }}
													transition={{
														type: 'spring',
														stiffness: 420,
														damping: 18,
													}}
												/>
											)}
										</AnimatePresence>
									</div>
								</div>
							</motion.button>
						)
					})}
				</div>

				<div className="mt-5 flex gap-2">
					<Btn
						type="button"
						onClick={onClose}
						className="w-1/2 bg-gray-100 text-black hover:bg-gray-200"
						disabled={loading}
					>
						Отмена
					</Btn>

					<Btn
						type="button"
						onClick={() => onConfirm(method)}
						className="w-1/2"
						disabled={loading}
					>
						{loading ? 'Оплата...' : 'Оплатить'}
					</Btn>
				</div>
			</Modal>
		</>
	)
}
