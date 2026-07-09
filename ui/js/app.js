// Main App Logic
const pages = {
  'dashboard': 'dashboard-page',
  'network': 'network-page',
  'learning': 'learning-page',
  'settings': 'settings-page',
}

function navigateTo(page) {
  Object.values(pages).forEach(id => {
    document.getElementById(id).classList.add('hidden')
  })
  document.getElementById(pages[page] || 'dashboard-page').classList.remove('hidden')
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const page = link.getAttribute('href').slice(1)
    navigateTo(page)
  })
})

navigateTO('dashboard')
