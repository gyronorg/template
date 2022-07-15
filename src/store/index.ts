import { createStore } from '@gyron/dox'
import Counter from './module/counter'

export const store = createStore({
  reducer: {
    Counter,
  },
})
