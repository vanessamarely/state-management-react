import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/counter/counter.slice'
import themeReducer from './components/theme/theme.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
})