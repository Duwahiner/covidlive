export const url = {
  summary: 'https://api.covid19api.com/summary'
}

export const calculateWidth = (num, arrayData) => {
  const mapNum = arrayData.map((item) => item.TotalConfirmed)
  const maxNum = Math.max.apply(null, mapNum)

  const result = (num / maxNum) * 100

  return result
}

export function sort (key) {
  return function (x, y) {
    if (!isNaN(parseInt(x[key])) || !isNaN(parseInt(y[key]))) {
      if (parseInt(x[key]) > parseInt(y[key])) return -1
      if (parseInt(x[key]) < parseInt(y[key])) return 1
      return 0
    } else {
      const a = x[key].toUpperCase()
      const b = y[key].toUpperCase()
      return a === b ? 0 : a > b ? 1 : -1
    }
  }
}

export const getMapString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getToLowerCase = (string) => {
  return string.toLowerCase()
}

export const getMapNumber = (num) => {
  const formatter = new Intl.NumberFormat()
  if (num < 10000 && num > 999) {
    const resulNum = num.toString().split('')
    resulNum.splice(1, 0, '.')
    return resulNum
  } else return formatter.format(num)
}

export const mapString = (string) => {
  if (string.length > 13) {
    return string.slice(0, 13) + '...'
  }
  return string
}
