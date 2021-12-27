export const CreatePlayerBoard = (arr) => {
  let nLen = 5
  var nArr = []
  while (arr.length > 0) {
    nArr.push(arr.splice(0, nLen))
  }

  return nArr
}
