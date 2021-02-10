export const ControlElem = (url, text, num, numOfLast) => {
  const classNames = ['setpack__elem'];
  const btn = document.createElement('a')
  btn.textContent = text
  if (num < 1 || num > numOfLast) {
    btn.classList.add('deactive')
    btn.onclick = () => false
  }
  url.searchParams.set('num', num)
  btn.href = url.href
  classNames.forEach(item => btn.classList.add(item))
  return btn
}