import ContainerData from '../ContainerData'
import CurrentHistory from '../CurrentHistory'
import Layout from '../Layout'
import { Container } from './style'

const History = (props) => {
  return (
    <Layout>
      <Container
        width={1}
        justifyContent='center'
        alignItems=''
        flex='none'
      >
        <ContainerData title='History'>
          <CurrentHistory />
        </ContainerData>
      </Container>
    </Layout>
  )
}

export default History
