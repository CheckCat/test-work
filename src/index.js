import {FetchData} from './modules/FetchData'
import {Title} from './modules/Title'
import {ControlElements} from './modules/ControlElements'
import {Img} from './modules/Img'
import {Description} from './modules/Description'
import {FullDate} from './modules/FullDate'
import {Error404} from './modules/Error404'
import './style/style.css'

const frontURL = new URL(window.location.href)
const hash = frontURL.searchParams.get('num')
const proxyURL = 'https://cors-anywhere.herokuapp.com/'
const backURL = `${proxyURL}https://xkcd.com/${hash ? hash+'/' : ''}info.0.json`
const root = document.querySelector('#root')

const AppModules = [Title, ControlElements, Img, Description, ControlElements, FullDate]
FetchData(backURL, root, AppModules).catch(() => {
  const elems = Array.from(root.children)
  elems.forEach(item=>item.remove())

  root.append(Error404())
})