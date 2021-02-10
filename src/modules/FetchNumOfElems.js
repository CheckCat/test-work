export const FetchNumOfElems = async url => {
    const response = await fetch(url)
    const data = await response.json()

    return data['num']
}