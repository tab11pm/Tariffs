import { cn } from '@/utils'
import { ReactNode } from 'react'

type CardProps = {
	children: ReactNode | string
	className?: string
}
export const Card = ({ children, className = '' }: CardProps) => {
	return <div className={cn('rounded-4xl p-4', className)}>{children}</div>
}
