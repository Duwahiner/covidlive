import { consts } from '../const'

const getCountries = (countries) => {
  return {
    type: consts.GET_COUNTRIES,
    payload: countries
  }
}

const getInputSelectData = (data) => {
  return {
    type: consts.INPUT_SELECT_DATA,
    payload: data
  }
}

const getSummaryCountries = (data) => {
  return {
    type: consts.GET_SUMMARY_COUNTRIES,
    payload: data
  }
}

const getCurrentCountrie = (data) => {
  return {
    type: consts.GET_CURRENT_COUNTRIE,
    payload: data
  }
}

const showMenuMovil = (value) => {
  return {
    type: consts.SHOW_MENU_MOVIL,
    payload: value
  }
}

const getInput = (value) => {
  return {
    type: consts.GET_INPUT,
    payload: value
  }
}

const getGlobalData = (data) => {
  return {
    type: consts.GET_GLOBAL_DATA,
    payload: data
  }
}

const getSearchCountrie = (data) => {
  return {
    type: consts.GET_SEARCH_COUNTRIE,
    payload: data
  }
}

const getCurrentHistory = (data) => {
  return {
    type: consts.GET_CURRENT_GISTORY,
    payload: data
  }
}

const getFilter = (data) => {
  return {
    type: consts.GET_FILTER,
    payload: data
  }
}

export const actions = {
  getCountries,
  getSummaryCountries,
  getCurrentCountrie,
  getInputSelectData,
  showMenuMovil,
  getInput,
  getGlobalData,
  getSearchCountrie,
  getCurrentHistory,
  getFilter
}
