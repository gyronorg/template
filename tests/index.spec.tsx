import { createInstance } from 'gyron'
import About from '../src/components/About'

test('test the about component', () => {
  const container = document.createElement('div')
  createInstance(<About />).render(container)
  expect(container.innerHTML).toBe('<div>About</div>')
})
