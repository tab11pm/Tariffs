type IconProps = {
	className?: string
}

export function SbpIcon({ className }: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			className={className}
			fill="none"
			aria-hidden="true"
		>
			<rect
				x="6"
				y="10"
				width="52"
				height="44"
				rx="12"
				className="fill-black/5"
			/>
			<path
				d="M18 38c7 0 10-12 17-12 6 0 7 8 11 8"
				className="stroke-black"
				strokeWidth="4"
				strokeLinecap="round"
			/>
			<path
				d="M18 26c7 0 10 12 17 12 6 0 7-8 11-8"
				className="stroke-black"
				strokeWidth="4"
				strokeLinecap="round"
				opacity="0.55"
			/>
			<text
				x="20"
				y="47"
				className="fill-black"
				fontSize="10"
				fontFamily="ui-sans-serif"
			>
				СБП
			</text>
		</svg>
	)
}

export function VisaIcon({ className }: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			className={className}
			fill="none"
			aria-hidden="true"
		>
			<rect
				x="6"
				y="10"
				width="52"
				height="44"
				rx="12"
				className="fill-black/5"
			/>
			<path d="M18 42 24 22h4l-6 20h-2z" className="fill-black" opacity="0.9" />
			<path d="M30 22h4l-3 20h-4l3-20z" className="fill-black" opacity="0.85" />
			<path
				d="M36 42l7-20h4l7 20h-4l-1.5-4H41l-1.4 4h-3.6zM42.2 34h6.6l-3.4-9-3.2 9z"
				className="fill-black"
				opacity="0.9"
			/>
			<text
				x="18"
				y="18"
				className="fill-black/60"
				fontSize="9"
				fontFamily="ui-sans-serif"
			>
				VISA
			</text>
		</svg>
	)
}

export function MastercardIcon({ className }: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			className={className}
			fill="none"
			aria-hidden="true"
		>
			<rect
				x="6"
				y="10"
				width="52"
				height="44"
				rx="12"
				className="fill-black/5"
			/>
			<circle cx="28" cy="32" r="10" className="fill-black" opacity="0.25" />
			<circle cx="36" cy="32" r="10" className="fill-black" opacity="0.45" />
			<path
				d="M32 22c2.6 2 4 5 4 10s-1.4 8-4 10c-2.6-2-4-5-4-10s1.4-8 4-10z"
				className="fill-black"
				opacity="0.35"
			/>
			<text
				x="14"
				y="18"
				className="fill-black/60"
				fontSize="8"
				fontFamily="ui-sans-serif"
			>
				MASTERCARD
			</text>
		</svg>
	)
}
