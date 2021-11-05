import { useEffect } from 'react'
import History from '../../components/History'

const HistoryPage = (props) => {
  useEffect(() => { document.title = 'History' }, [])
  return (
    <History />
  )
}

export default HistoryPage
