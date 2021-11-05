import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Flex } from 'rebass'
import Search from '../Search'
import SelectCountry from '../SelectCountry'
import { Container } from './style'

const RenderCountryData = (props) => {
  const { currentCountrie } = useSelector((state) => state)
  const [data, setData] = useState({})

  useEffect(() => {
    if (Object.keys(currentCountrie).length > 0) setData(currentCountrie)
  }, [setData, currentCountrie])

  return (
    <Container width={1} mt='12px' flexDirection='column'>
      <Flex width={1} flex='none'>
        <Flex width={1} justifyContent='center'> <Search /> </Flex>
      </Flex>
      {
        Object.keys(data).length > 0 &&
        (
          <Flex width={1} flex='auto'>
            <SelectCountry data={data} />
          </Flex>
        )
      }
    </Container>
  )
}

export default RenderCountryData
