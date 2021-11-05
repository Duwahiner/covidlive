import { useEffect, useState } from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { Container } from './style'

const Spinner = ({ show, color }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => setLoading(show), [show])

  return (
    <Container width={1} height='100%' justifyContent='center' alignItems='center'>
      <PropagateLoader color={color || '#000'} loading={loading} size={18} />
    </Container>
  )
}

export default Spinner
