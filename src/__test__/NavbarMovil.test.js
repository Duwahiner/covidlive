/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import NavbarMovil from '../components/NavbarMovil'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<NavbarMovil />', () => {
  it('render without crash', () => {
    const component = shallow(<NavbarMovil />)
    expect(component).toHaveLength(1)
  })
})
