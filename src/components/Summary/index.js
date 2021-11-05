import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../actions'
import { sort } from '../../util'
import ContainerData from '../ContainerData'
import Layout from '../Layout'
import Table from '../Table'
import { Container } from './style'

const Summary = (props) => {
  const { countries } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getSummaryCountries(countries.sort(sort('TotalConfirmed'))))
  }, [countries, dispatch])

  return (
    <Layout>
      <Container
        width={1}
        justifyContent='center'
        alignItems=''
        flex='none'
      >
        <ContainerData title='Summary'>
          <Table />
        </ContainerData>
      </Container>
    </Layout>
  )
}

export default Summary
