export function TariffSkeleton() {
	return (
		<div className="min-h-screen bg-neutral-900 p-6">
			<div className="mx-auto max-w-6xl">
				<div className="grid gap-6 grid-cols-1 lg:grid-cols-[400px_1fr]">
					<div className="hidden lg:block">
						<div className="h-130 w-full rounded-3xl bg-neutral-800/70 animate-pulse"></div>
					</div>

					<div className="space-y-6">
						<div className="relative overflow-hidden rounded-3xl bg-neutral-800/70 p-8 ring-1 ring-white/10 animate-pulse">
							<div className="absolute left-6 top-6 h-7 w-16 rounded-lg bg-rose-500/60"></div>

							<div className="absolute right-6 top-6 h-5 w-12 rounded bg-amber-400/30"></div>

							<div className="mx-auto max-w-3xl mt-10">
								<div className="h-5 w-28 rounded bg-white/10"></div>

								<div className="mt-6 h-12 w-64 rounded bg-amber-400/20"></div>

								<div className="mt-6 h-4 w-full max-w-md rounded bg-white/10"></div>
							</div>

							<div className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-amber-300/10"></div>
						</div>

						<div className="grid gap-6 lg:grid-cols-3">
							<div className="relative overflow-hidden rounded-3xl bg-neutral-800/70 p-8 ring-1 ring-amber-300/30 animate-pulse">
								<div className="absolute left-6 top-6 h-7 w-16 rounded-lg bg-rose-500/60"></div>

								<div className="mt-10 h-5 w-28 rounded bg-white/10"></div>
								<div className="mt-6 h-12 w-40 rounded bg-white/10"></div>

								<div className="mt-10 h-4 w-44 rounded bg-white/10"></div>
							</div>

							<div className="relative overflow-hidden rounded-3xl bg-neutral-800/70 p-8 ring-1 ring-white/10 animate-pulse">
								<div className="absolute left-6 top-6 h-7 w-16 rounded-lg bg-rose-500/60"></div>

								<div className="mt-10 h-5 w-24 rounded bg-white/10"></div>
								<div className="mt-6 h-12 w-36 rounded bg-white/10"></div>

								<div className="mt-10 space-y-2">
									<div className="h-4 w-36 rounded bg-white/10"></div>
								</div>
							</div>
							<div className="relative overflow-hidden rounded-3xl bg-neutral-800/70 p-8 ring-1 ring-white/10 animate-pulse">
								<div className="absolute left-6 top-6 h-7 w-16 rounded-lg bg-rose-500/60"></div>

								<div className="mt-10 h-5 w-24 rounded bg-white/10"></div>
								<div className="mt-6 h-12 w-28 rounded bg-white/10"></div>

								<div className="mt-10 h-4 w-36 rounded bg-white/10"></div>
							</div>
						</div>

						<div className="flex items-start gap-3 rounded-2xl bg-neutral-800/60 p-5 ring-1 ring-white/10 animate-pulse">
							<div className="mt-1 h-6 w-6 rounded bg-amber-400/20"></div>
							<div className="flex-1 space-y-2">
								<div className="h-4 w-full max-w-xl rounded bg-white/10"></div>
								<div className="h-4 w-5/6 max-w-lg rounded bg-white/10"></div>
							</div>
						</div>

						<div className="flex items-start gap-3 rounded-2xl bg-neutral-900/20 p-3 animate-pulse">
							<div className="h-5 w-5 rounded bg-white/10 ring-1 ring-white/10"></div>
							<div className="flex-1 space-y-2">
								<div className="h-4 w-full max-w-3xl rounded bg-white/10"></div>
								<div className="h-4 w-2/3 max-w-2xl rounded bg-white/10"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
