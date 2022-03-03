export const generateRandomNum = () => {
  let randNumInitial = Math.floor(Math.random() * 10) + 1
  const randNumFinal =
    randNumInitial % 2 === 0 ? randNumInitial - 1 : randNumInitial

  return randNumFinal
}
