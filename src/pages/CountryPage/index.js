import { useEffect } from 'react'
import Country from '../../components/Country'

const CountryPage = (props) => {
  useEffect(() => { document.title = 'Country' }, [])
  return (
    <Country />
  )
}

export default CountryPage