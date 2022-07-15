import { createSlice } from '@gyron/dox'

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count++
    },
  },
})

export const { increment } = counter.actions

export default counter.reducer
