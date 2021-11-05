/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import HistoryItems from '../components/HistoryItems'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<HistoryItems />', () => {
  it('render without crash', () => {
    const component = shallow(<HistoryItems />)
    expect(component).toHaveLength(1)
  })
})
