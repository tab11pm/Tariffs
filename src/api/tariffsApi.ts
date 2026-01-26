// src/shared/api/tariffsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { TariffDto, Tariff } from '@/types'
import { calcDiscountPercent } from '@/utils'

const BASE_URL = '/api'

export const tariffsApi = createApi({
	reducerPath: 'tariffsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	tagTypes: ['Tariffs'],
	endpoints: (builder) => ({
		getTariffs: builder.query<Tariff[], void>({
			query: () => ({
				url: '/tariffs',
				method: 'GET',
				responseHandler: 'text',
			}),

			transformResponse: (raw: string) => {
				const parsed: TariffDto[] = JSON.parse(raw)

				const mapped: Tariff[] = parsed.map((t) => ({
					...t,
					discountPercent: calcDiscountPercent(t.price, t.full_price),
				}))

				mapped.sort((a, b) => Number(b.is_best) - Number(a.is_best))
				return mapped
			},
			providesTags: (result) =>
				result
					? [
							...result.map((t) => ({ type: 'Tariffs' as const, id: t.id })),
							{ type: 'Tariffs' as const, id: 'LIST' },
						]
					: [{ type: 'Tariffs' as const, id: 'LIST' }],
		}),
		purchaseTariff: builder.mutation<{ ok: true }, { tariffId: string }>({
			query: (body) => ({
				url: '/purchase',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const { useGetTariffsQuery, usePurchaseTariffMutation } = tariffsApi
