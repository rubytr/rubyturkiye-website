import "$styles/index.css"
import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

document.addEventListener('DOMContentLoaded', () => {
  // Language toggle (desktop + mobile buttons)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang
      document.documentElement.lang = lang
      localStorage.setItem('ruby-tr-lang', lang)
    })
  })

  // Hamburger menu toggle
  const hamburger = document.getElementById('nav-hamburger')
  const mobileMenu = document.getElementById('nav-mobile-menu')
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open')
      hamburger.setAttribute('aria-expanded', isOpen)
    })
    // Close on nav link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open')
        hamburger.setAttribute('aria-expanded', 'false')
      })
    })
  }
})
