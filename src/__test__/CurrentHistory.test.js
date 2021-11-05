/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import CurrentHistory from '../components/CurrentHistory'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { store } from '../store'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<CurrentHistory />', () => {
  it('render without crash', () => {
    const component = shallow(
      <Provider store={store}>
        <CurrentHistory />
      </Provider>
    )
    expect(component).toHaveLength(1)
  })
})
