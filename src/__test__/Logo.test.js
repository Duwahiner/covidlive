/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import Logo from '../components/Logo'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<Logo />', () => {
  it('render without crash', () => {
    const component = shallow(<Logo />)
    expect(component).toHaveLength(1)
  })
})
