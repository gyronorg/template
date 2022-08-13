import { createStore } from '@gyron/redux'
import Counter from './module/counter'

export const store = createStore({
  reducer: {
    Counter,
  },
})
