import { useSelector } from 'react-redux'
import { Flex } from 'rebass'
import HistoryItems from '../HistoryItems'
import { Container } from './style'

const CurrentHistory = (props) => {
  const { currentHistory } = useSelector((state) => state)

  return (
    <Container width={1} flexDirection='column'>
      <Flex
        width={1} mt={54}
        flexDirection={['column', 'column', 'row']}
        alignItems={['center', 'center', 'flex-start']}
        flexWrap='wrap' justifyContent='center'
      >
        {
          currentHistory.length > 0 &&
            currentHistory.map((item, index) => <HistoryItems key={index} item={item} />)
        }
      </Flex>
    </Container>
  )
}

export default CurrentHistory
