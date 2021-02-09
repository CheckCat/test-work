export const FetchData = async (url, root, DOMElements) => {
  const response = await fetch(url)
  const data = await response.json()
  DOMElements.forEach(DOMElement => root.append(DOMElement(data)))
  return data
}