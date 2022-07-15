import { createInstance } from '@gyron/runtime'
import { createBrowserRouter, Route, Routes } from '@gyron/router'
import { store } from './store'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import About from './components/About'
import Container from './components/Container'
import './index.less'

const router = createBrowserRouter()

createInstance(
  <div id="app">
    <HelloWorld msg="Gyron" />
    <Routes>
      <Route path="" element={<Container />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  </div>
)
  .use(store)
  .use(router)
  .render('#root')
