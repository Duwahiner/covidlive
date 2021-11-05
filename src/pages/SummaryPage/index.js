import { useEffect } from 'react'
import Summary from '../../components/Summary'

const SummaryPage = (props) => {
  useEffect(() => { document.title = 'Summary' }, [])
  return (
    <Summary />
  )
}

export default SummaryPage
