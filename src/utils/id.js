let prev = 0

export const uid = () => {
  const now = new Date().getTime()
  prev = now > prev ? now : prev + 1
  return prev
}
