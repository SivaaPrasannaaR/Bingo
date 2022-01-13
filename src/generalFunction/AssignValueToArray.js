export const AssignZeroValueToArray = (n) => {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = 0
  }

  return arr
}

export const AssignOrderValueToArray = (n) => {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr[i] = i
  }

  return arr
}
