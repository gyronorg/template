import { Outlet } from '@gyron/router'
import { FC } from 'gyron'

export default FC(() => {
  return (
    <div class="container">
      <Outlet />
    </div>
  )
})
