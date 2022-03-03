export const toDisplayPayerBoard = (setDisplayBoard, player) => {
  if (player === 'p1') {
    setDisplayBoard({ p1: true, p2: false })
  } else if (player === 'p2') {
    setDisplayBoard({ p1: false, p2: true })
  } else {
    setDisplayBoard({ p1: true, p2: true })
  }
  return
}
