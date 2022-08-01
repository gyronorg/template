import { FC } from 'gyron'
import { Link } from '@gyron/router'
import Logo from '@/assets/logo.png'

interface Props {
  msg: string
}

export default FC<Props>(({ msg }) => {
  return (
    <div>
      <img src={Logo} alt="gyron logo" />
      <h1>{msg}</h1>
      <h5>一款简单零依赖的响应式框架</h5>
      <Link to="/" activeClassName="router-active-link">
        Home
      </Link>
      <Link to="/about" activeClassName="router-active-link">
        About
      </Link>
    </div>
  )
})
