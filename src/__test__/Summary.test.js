/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import Summary from '../components/Summary'
import Adapter from 'enzyme-adapter-react-16'
import { store } from '../store'
import { Provider } from 'react-redux'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<ContainerData />', () => {
  it('render without crash', () => {
    const component = shallow(<Provider store={store}> <Summary />  </Provider>)
    expect(component).toHaveLength(1)
  })
})
