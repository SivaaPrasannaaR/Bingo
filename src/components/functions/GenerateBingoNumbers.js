export const GenerateBingoNumbers = () => {
  let items = []
  let k = 25

  while (items.length < k) {
    let random_number = Math.floor(Math.random() * k) + 1
    const exists = items.find((p) => p.num === random_number)

    if (!exists) {
      items = [
        ...items,
        {
          unique: items.length + 1,
          num: random_number,
          used: false,
          numColor: 'teal',
        },
      ]
    }
  }

  return items
}
