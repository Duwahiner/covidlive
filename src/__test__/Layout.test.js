/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import Layout from '../components/Layout'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<Layout />', () => {
  it('render without crash', () => {
    const component = shallow(<Layout />)
    expect(component).toHaveLength(1)
  })
})
