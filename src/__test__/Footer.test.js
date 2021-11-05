/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import Footer from '../components/Footer'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<Footer />', () => {
  it('render without crash', () => {
    const component = shallow(<Footer />)
    expect(component).toHaveLength(1)
  })
})
