import './style.css'

// Portfolio main entry point
console.log('Vite portfolio loaded')

// Add event listeners or other JS functionality here
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded')

  // Section navigation - show only clicked section
  const navLinks = document.querySelectorAll('nav a')
  const allPageLinks = document.querySelectorAll('a[href^="#"]')
  const sections = document.querySelectorAll('.page-section')

  const handleSectionNavigation = (e) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href').substring(1)
    
    // Hide all sections
    sections.forEach(section => {
      section.classList.remove('active')
    })
    
    // Show target section
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.classList.add('active')
      window.scrollTo(0, 0) // Scroll to top
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', handleSectionNavigation)
  })

  // Also handle non-nav links that point to sections (e.g., Contact Me button)
  allPageLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1)
    if (document.getElementById(targetId) && document.getElementById(targetId).classList.contains('page-section')) {
      link.addEventListener('click', handleSectionNavigation)
    }
  })

  // Contact form handling: construct mailto link and open user's mail client
  const contactForm = document.getElementById('contactForm')
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const name = document.getElementById('name').value.trim()
      const email = document.getElementById('email').value.trim()
      const message = document.getElementById('message').value.trim()
      const recipient = 'you@example.com' // replace with your real email

      const subject = encodeURIComponent(`Message from ${name}`)
      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        message
      ]
      const body = encodeURIComponent(bodyLines.join('\n'))

      const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`

      const status = document.getElementById('formStatus')
      if (status) status.textContent = 'Opening your mail client...'

      // open mail client
      window.location.href = mailto
    })
  }
})
