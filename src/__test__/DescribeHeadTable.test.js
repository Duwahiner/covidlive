/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import DescribeHeadTable from '../components/DescribeHeadTable'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { store } from '../store'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<DescribeHeadTable />', () => {
  it('render without crash', () => {
    const component = shallow(<Provider store={store}> <DescribeHeadTable /> </Provider>)
    expect(component).toHaveLength(1)
  })
})
