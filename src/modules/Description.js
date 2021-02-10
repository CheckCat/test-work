export const Description = ({ transcript }) => {
  const classNamesParent = ['description'];
  transcript = transcript.split(/\n/)

  const description = transcript.reduce((accum, item) => {
    const classNamesChild = ['description__elem'];
    const paragraph = document.createElement('p')
    paragraph.textContent = item
    accum.append(paragraph)
    classNamesChild.forEach(item => paragraph.classList.add(item))
    return accum
  }, document.createElement('div'))

  classNamesParent.forEach(item => description.classList.add(item))
  return description
}