// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { tariffsApi } from '@/api/tariffsApi'
import { tariffsReducer } from '@/slices/tariffsSlice'

export const makeStore = () =>
	configureStore({
		reducer: {
			[tariffsApi.reducerPath]: tariffsApi.reducer,
			tariffs: tariffsReducer,
		},
		middleware: (getDefault) => getDefault().concat(tariffsApi.middleware),
		devTools: process.env.NODE_ENV !== 'production',
	})

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
