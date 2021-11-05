/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import History from '../components/History'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<History />', () => {
  it('render without crash', () => {
    const component = shallow(<History />)
    expect(component).toHaveLength(1)
  })
})
