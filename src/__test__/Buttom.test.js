/* global describe, it, expect */
import React from 'react'
import { render, configure } from 'enzyme'
import Buttom from '../components/Buttom'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<Buttom />', () => {
  it('render without crash', () => {
    const component = render(<Buttom />)
    expect(component).toHaveLength(1)
  })
})
