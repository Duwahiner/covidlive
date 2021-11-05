/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import RenderCountryData from '../components/RenderCountryData'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { store } from '../store'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<RenderCountryData />', () => {
  it('render without crash', () => {
    const component = shallow(
      <Provider store={store}>
        <RenderCountryData />
      </Provider>)
    expect(component).toHaveLength(1)
  })
})
