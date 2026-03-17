/*=============== HOME SPLIT TEXT ===============*/
const { animate, splitText, stagger } = anime;

const { chars: chars1 } = splitText('.home__profession-1', {
  chars: true
});

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.dataset.target,
      targetContent = document.querySelector(targetSelector)

    //disable all content and active tabs
    tabContents.forEach((content) => content.classList.remove('work-active'))
    tabs.forEach((t) => t.classList.remove('work-active'))

    //active tab and corresponding content
    tab.classList.add('work-active')
    targetContent.classList.add('work-active')
  })
})

/*=============== SERVICES ACCORDION ===============*/
const servicesButtons = document.querySelectorAll('.services__button')

servicesButtons.forEach(button => {
  const currentCard = button.parentNode
  const currentInfo = currentCard.querySelector('.services__info')

  if (currentCard.classList.contains('services-open')) {
    currentInfo.style.height = currentInfo.scrollHeight + 'px'
  }

  button.addEventListener('click', () => {
    const servicesCards = document.querySelectorAll('.services__card'),
      isCardOpen = currentCard.classList.contains('services-open')

    servicesCards.forEach(card => {
      card.classList.replace('services-open', 'services-close')

      const info = card.querySelector('.services__info')
      if (info) {
        info.style.height = '0'
      }
    })

    if (!isCardOpen) {
      currentCard.classList.replace('services-close', 'services-open')
      currentInfo.style.height = currentInfo.scrollHeight + 'px'
    }
  })
})

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact-btn'),
  copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

    setTimeout(() => {
      copyBtn.innerHTML = '<i class="ri-file-copy-line"></i> Copy email'
    }, 2000);
  })
})

/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const textYear = document.getElementById('footer-year'),
  currentYear = new Date().getFullYear()

textYear.textContent = currentYear

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.scrollY

  sections.forEach(section => {
    const id = section.id,
      top = section.offsetTop - 50,
      height = section.offsetHeight,
      link = document.querySelector('.nav__menu a[href*=' + id + ']')

    if (!link) return

    link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
  })

  // If we scroll to the absolute bottom of the page, ensure the last section (Contact) is active
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
    document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('active-link'))
    
    const contactLink = document.querySelector('.nav__menu a[href*="contact"]')
    if (contactLink) contactLink.classList.add('active-link')
  }
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  reset: true
})

sr.reveal(`.home__image, .projects__container, .work__container, .contact__container `)
sr.reveal(`.home__data`, { delay: 900, origin: 'bottom' })
sr.reveal(`.home__info`, { delay: 1000, origin: 'bottom' })
sr.reveal(`.home__social, .home__cv`, { delay: 1500 })
sr.reveal(`.about__data`, { origin: 'left' })
sr.reveal(`.about__image`, { origin: 'right' })
sr.reveal(`.services__card`, { interval: 100 })