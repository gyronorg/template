import { Outlet } from '@gyron/router'
import { FC } from '@gyron/runtime'

export default FC(() => {
  return (
    <div class="container">
      <Outlet />
    </div>
  )
})
