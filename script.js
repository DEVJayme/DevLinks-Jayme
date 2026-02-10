function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")


  // pegar a tag img
  const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
      // se tiver light mode, adicionar imagem light
      img.setAttribute('src', './assets/avatar-light.png')
      img.setAttribute('alt', 'Foto de Jayme sorrindo usando camisa branca (light mode)')
    } else {
      // se tiver dark mode, manter a imagem normal
      img.setAttribute('src', './assets/avatar.png')
      img.setAttribute('alt', 'Foto de Jayme sorrindo usando camisa branca (dark mode)')
    } 

  
  
  // substituir a imagem
}