// src/features/tariffs/model/tariffsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { tariffsApi } from '@/api/tariffsApi'

type State = {
	selectedTariffId: string | null
	agreed: boolean
	agreedError: boolean
	isTime: boolean
	isDataLoaded: boolean
}

const initialState: State = {
	selectedTariffId: null,
	agreed: false,
	agreedError: false,
	isTime: true,
	isDataLoaded: false,
}

export const tariffsSlice = createSlice({
	name: 'tariffs',
	initialState,
	reducers: {
		setSelectedTariffId(state, action: PayloadAction<string>) {
			state.selectedTariffId = action.payload
		},
		setIsDataLoaded(state, action: PayloadAction<boolean>) {
			state.isDataLoaded = action.payload
		},
		setTime(state, action: PayloadAction<boolean>) {
			state.isTime = action.payload
		},
		setAgreed(state, action: PayloadAction<boolean>) {
			state.agreed = action.payload
			if (action.payload) state.agreedError = false
		},
		showAgreedError(state) {
			state.agreedError = true
		},
		clearAgreedError(state) {
			state.agreedError = false
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			tariffsApi.endpoints.getTariffs.matchFulfilled,
			(state, { payload }) => {
				// только при первой загрузке, если еще не выбран
				if (state.selectedTariffId) return
				const best = payload.find((t) => t.is_best) ?? payload[0]
				state.selectedTariffId = best?.id ?? null
			},
		)
	},
})

export const {
	setSelectedTariffId,
	setAgreed,
	showAgreedError,
	clearAgreedError,
	setTime,
	setIsDataLoaded,
} = tariffsSlice.actions
export const tariffsReducer = tariffsSlice.reducer
