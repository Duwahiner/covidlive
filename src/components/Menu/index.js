import { memo } from 'react'
import { Flex } from 'rebass'
import NavBar from '../Navbar'

const Menu = memo((props) => {
  return (
    <Flex width={1}>
      <NavBar />
    </Flex>
  )
})

export default Menu
