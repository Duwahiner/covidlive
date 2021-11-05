import ContainerData from '../ContainerData'
import Layout from '../Layout'
import RenderCountryData from '../RenderCountryData'
import { Container } from './style'

const Country = (props) => {
  return (
    <Layout>
      <Container
        width={1}
        justifyContent='center'
        flex='none'
      >
        <ContainerData title='Country'>
          <RenderCountryData />
        </ContainerData>
      </Container>
    </Layout>
  )
}

export default Country
