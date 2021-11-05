import { consts } from '../../const'

const initialState = {
  countries: [],
  glabal: {},
  summaryCountries: [],
  currentCountrie: {},
  inputSelectData: [],
  currentHistory: [],
  input: '',
  showMenuMovil: false,
  filterSearch: []
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case consts.GET_COUNTRIES:
      return {
        ...state,
        countries: payload
      }

    case consts.GET_SUMMARY_COUNTRIES:
      return {
        ...state,
        summaryCountries: payload
      }

    case consts.GET_CURRENT_COUNTRIE:
      return {
        ...state,
        currentCountrie: Object.assign({},
          ...state.countries.filter((item) => item.ID === payload.id)
        )
      }

    case consts.INPUT_SELECT_DATA:
      return {
        ...state,
        inputSelectData:
          payload.map((item) => ({ value: item.ID, label: item.Country }))
      }

    case consts.SHOW_MENU_MOVIL:
      return {
        ...state,
        showMenuMovil: payload
      }

    case consts.GET_INPUT:
      return {
        ...state,
        input: payload
      }

    case consts.GET_GLOBAL_DATA:
      return {
        ...state,
        glabal: Object.assign({}, payload)
      }

    case consts.GET_SEARCH_COUNTRIE:
      return {
        ...state,
        currentCountrie: Object.assign({},
          ...state.countries.filter((item) => item.Country === payload.name)
        )
      }

    case consts.GET_CURRENT_GISTORY:
      return {
        ...state,
        currentHistory:
          state.currentHistory.concat(valideData(state, payload))
      }

    case consts.GET_FILTER:
      return {
        ...state,
        filterSearch: filterCountry(state, payload)
      }

    default:
      return state
  }
}

function valideData (state, payload) {
  const result = state.currentHistory
    .filter((item) => item.Country === payload.name)

  if (result.length > 0) return []
  else {
    const filterData = state.countries.filter((item) => {
      return item.Country === payload.name
    })
    return filterData
  }
}

function filterCountry (state, payload) {
  const rule = new RegExp(`(${payload.name})`, 'gi')
  if (payload.name !== '') {
    const result = state.countries.filter((item) => {
      return rule.test(item.Country.toLowerCase())
    })
    return result
  } else return []
}
