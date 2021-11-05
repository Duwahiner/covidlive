import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Flex } from 'rebass'
import BarLoader from 'react-spinners/BarLoader'
import DescribeHeadTable from '../DescribeHeadTable'
import RelsultItemsTable from '../RelsultItemsTable'
import SelectInput from '../SelectInput'
import { Container, ContentDescibe, ContentResulItems, ContentTable } from './style'

const Table = memo((props) => {
  const data = useSelector((state) => state.summaryCountries)

  return (
    <Container
      width={1} mt='19px' flexDirection='column'
    >
      <Flex width={1} flex='none'>
        <Flex width={1} justifyContent={['center', 'center', 'flex-end']}>
          <SelectInput />
        </Flex>
      </Flex>

      <ContentTable width={1} flex='auto' mt='29px' flexDirection='column'>
        <ContentDescibe>
          <DescribeHeadTable />
        </ContentDescibe>

        <ContentResulItems flexDirection='column' mr='5px' alignItems='center'>
          <BarLoader color='red' loading={data.length < 1} css={{ width: '100%' }} />
          {
            data.length > 0 &&
              data.map((item, index) => {
                return (
                  <RelsultItemsTable key={index} data={data} item={item} />
                )
              })
          }
        </ContentResulItems>
      </ContentTable>
    </Container>
  )
})

export default Table
