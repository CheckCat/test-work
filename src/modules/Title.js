export const Title = ({title}) => {
  const classNames = ['title'];
  const titleElem = document.createElement('h1')
  titleElem.textContent = title
  classNames.forEach(item => titleElem.classList.add(item))
  return titleElem
}