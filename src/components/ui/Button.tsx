import { cn } from '@/utils'
import {
	ButtonHTMLAttributes,
	Children,
	MouseEventHandler,
	ReactNode,
} from 'react'

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children: ReactNode | string
	onClick: MouseEventHandler
}

export const Btn = ({ className, children, onClick, ...props }: BtnProps) => {
	return (
		<>
			<button
				onClick={onClick}
				className={cn(
					'bg-(--primary) text-black rounded-2xl px-8 py-4 cursor-pointer',
					className,
				)}
				{...props}
			>
				{children}
			</button>
		</>
	)
}
