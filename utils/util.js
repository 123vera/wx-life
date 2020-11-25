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

  if(index > -1){
   return  Number(numString.substring(0, index + 1+ decimal)).toFixed(8)
  } 
  
  return Number(numString.substring(0)).toFixed(8)
}


module.exports = {
  formatTime: formatTime,
  formatDecimal:formatDecimal
}
