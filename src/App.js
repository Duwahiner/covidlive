import { memo, useEffect, useCallback, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useTheme, Global, css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { Flex } from 'rebass'
import { getSummary } from './api'
import { actions } from './actions'
import { sort } from './util'
import Spinner from './components/Spinner'
import CountryPage from './pages/CountryPage'
import HistoryPage from './pages/HistoryPage'
const SummaryPage = lazy(() => import('./pages/SummaryPage'))

const App = memo((props) => {
  const { countries } = useSelector((state) => state)
  const dispatch = useDispatch()
  const theme = useTheme()

  // Caga icial de toda la aplicación
  const getCountriesData = useCallback(
    async () => {
      if (countries.length < 1) {
        const data = await getSummary()

        if (Array.isArray(data.Countries)) {
          dispatch(actions.getCountries(data.Countries))
          dispatch(actions.getGlobalData(data))
          dispatch(actions.getInputSelectData(data.Countries))
          dispatch(actions.getSummaryCountries(data.Countries.sort(sort('TotalConfirmed'))))
        }
      }
    }, [countries, dispatch])

  useEffect(() => {
    getCountriesData()

    return () => getCountriesData()
  }, [getCountriesData])

  return (
    <Flex sx={{ position: 'relative' }}>
      <Suspense
        fallback={
          <Flex
            justifyContent='center'
            alignItems='center'
            flex='none'
            sx={{
              width: '100%',
              height: '100vh'
            }}
          >
            <Spinner color={theme.colors.secondary} />
          </Flex>
        }
      >
        <Switch>
          <Route exact path='/' component={SummaryPage} />
          <Route exact path='/country' component={CountryPage} />
          <Route exact path='/History' component={HistoryPage} />
        </Switch>
      </Suspense>
      <Global
        styles={
          css`
            body {
              background-color: ${theme.colors.bg};
            }
            
            body::-webkit-scrollbar {
              display: block;
              background:  ${theme.colors.bg};
              width: 8px;
              border-radius: 5px;
            }
            
            body::-webkit-scrollbar-thumb {
              background: #D6DBDF;
              border-radius: 6px;
            }
          `
        }
      />
    </Flex>
  )
})

export default App
