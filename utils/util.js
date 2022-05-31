const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * @description 小数 保留小数点后8位，不进行4舍5入
 * @param {string} num - 待处理的小数
 * @param {string} decimal - 保留位数
 * @return {string} 处理后的小数
*/
const formatDecimal = (num, decimal) => {
  let numString = num + ''
  let index = numString.indexOf('.')

  if (index > -1) {
    return Number(numString.substring(0, index + 1 + decimal)).toFixed(8)
  }

  return Number(numString.substring(0)).toFixed(8)
}

/**
 * @description 计算make love次数
 * @params { number } month - 生命还剩 month 个月
 * @params {number} age - 年龄
 * @params {number} deathday - 寿命值
 * @return { number } 计算次数值
*/
const calculateLove = (age, endAge) => {
  // 1青年人，  ml  18 < age (25) <= 29   _love = 9/月
  // 2青年人，  ml  40 >age >= 30  _love = 6/月

  // 中年人， 大于40岁,小于50 ， 50 > age >= 40   _love = 3/月
  // 中老年人， 大于50岁 不能ml， age >= 50   _love = 0

  // 40岁 ml 一个月3次
  // 45岁 ml 一个月3次
  // 48岁 ml 一个月3次

  // 未成年， 不能ml， age<18    _love = 0
  let result = ''

  if (age <= 18 || age >= 50) {
    result = 0
  } else if (age > 18 && age < 30) {
    if (endAge < 30) { 
       result = (endAge - age) * 12 * 9
    }

    if (endAge >= 30 && endAge < 40) {
       result = (endAge - 29) * 12 * 6 + (29 - age) * 12 * 9
    }

    if (endAge >= 40 && endAge < 50) {
       result = (endAge - 39) * 12 * 3 + (39 - 29) * 12 * 6 + (29 - age) * 12 * 9
    }

    if (endAge >= 50) {
       result = 0  + (49 - 39) * 12 * 3 + (39 - 29) * 12 * 6 + (29 - age) * 12 * 9 
    }

  } else if (age >= 30 && age < 40) {
    if (endAge >= 30 && endAge < 40) { 
      result = (endAge - age) * 12 * 6
    }

    if (endAge >= 40 && endAge < 50) { 
      result = (endAge - 39) * 12 * 3 + (39 - 29) * 12 * 6
    }

    if (endAge >= 50) { 
      result = 0+ (49 - 39) * 12 * 3 + (39 - age) * 12 * 6 
    }

  } else if (age >= 40 && age < 50) {

    if (endAge >= 40 && endAge < 50) {
      result = (endAge - 39) * 12 * 3
    }

    if (endAge >= 50) {
      result = 0 + (49 - 39) * 12 * 3
    }
  } 

  return String(result).split('.')[0]

  // if (age <= 18) {
  //   result = 0
  // } else if (age > 18 && age < 30) {
  //   result = (30 - age) * 12 * 9
  //   // result = month * 9
  // } else if (age >= 30 && age < 40) {
  //   result = (40 - age) * 12 * 6
  //   // result = month * 6
  // } else if (age >= 40 && age < 50) {
  //   result = (50 - age) * 12 * 3
  //   // result = month * 3
  // } else if (age >= 50) {
  //   result = 0
  // }

}

/**
 * @description 计算剩余长假个数
 * @params {number} year - 生命还剩 year 年
 * @return { number } 计算值
 * 
*/
const calculateHoliday = (year) => {
  // 五一和十一
  const currMonth = new Date().getMonth() + 1

  let times = ''

  if (year === 0) {
    return times = 0
  }

  if (currMonth < 5) {
    times = year * 2
  } else if (currMonth >= 5 && currMonth <= 10) {
    times = (year - 1) * 2 + 1
  } else if (currMonth > 10) {
    times = (year - 1) * 2
  }

  return times
}

module.exports = {
  formatTime: formatTime,
  formatDecimal: formatDecimal,
  calculateLove: calculateLove,
  calculateHoliday: calculateHoliday,
}
