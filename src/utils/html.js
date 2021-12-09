export const classNames = (fixed, dynamic = {}) => {
  const names = Object.keys(dynamic).filter(key => dynamic[key])

  if (fixed) {
    names.unshift(fixed)
  }

  return names.join(' ')
}
