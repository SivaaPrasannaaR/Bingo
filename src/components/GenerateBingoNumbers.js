export const GenerateBingoNumbers = () => {
  let items = []
  let n = 25
  while (items.length < n) {
    let random_number = Math.floor(Math.random() * n) + 1
    const exists = items.find((p) => p.num === random_number)

    if (!exists) {
      items = [...items, { num: random_number, used: false }]
    }
  }

  return items
}

// export default GenerateBingoNumbers
