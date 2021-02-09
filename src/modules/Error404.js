export const Error404 = () => {
  const error404 = document.createElement('h1')
  error404.textContent = '404 Такая страница не найдена'
  error404.classList.add('error-404')
  return error404
}