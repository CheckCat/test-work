export const FetchData = async (url, root, DOMElements, props) => {
  const response = await fetch(url)
  const data = await response.json()
  DOMElements.forEach(DOMElement => root.append(DOMElement(data, props)))
  return data
}