export const Img = ({ img, alt }) => {
  const classNames = ['content-image'];
  const image = document.createElement('img')
  image.src = img
  image.alt = alt
  classNames.forEach(item => image.classList.add(item))
  return image
}