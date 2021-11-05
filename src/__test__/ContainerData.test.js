/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import ContainerData from '../components/ContainerData'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<ContainerData />', () => {
  it('render without crash', () => {
    const component = shallow(<ContainerData />)
    expect(component).toHaveLength(1)
  })
})
