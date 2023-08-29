const sections = document.querySelectorAll('section')

document.addEventListener('scroll', () => {
  sections.forEach(section => {
    if(section.getBoundingClientRect().top <= document.body.scrollTop) {
      document.body.style.background = section.dataset.color
    }    
  })
})