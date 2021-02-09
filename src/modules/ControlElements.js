import {ControlElem} from './ControlElem'

const frontURL = new URL(window.location.href)

export const ControlElements = ({num}) => {
  const classNames = ['setpack'];
  const getRandom = max => Math.floor(Math.random() * max)

  const toFirst = ControlElem(frontURL, '|<', 1)
  const toPrev = ControlElem(frontURL, '< Prev', num-1)
  const toRandom = ControlElem(frontURL, 'Random', getRandom(2421))
  const toNext = ControlElem(frontURL, 'Next >', num+1)
  const toLast = ControlElem(frontURL, '>|', 2421)

  const setpack = document.createElement('div')
  setpack.append(toFirst, toPrev, toRandom, toNext, toLast)
  classNames.forEach(item => setpack.classList.add(item))
  return setpack
}