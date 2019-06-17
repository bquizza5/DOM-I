const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//Navigation
let nav_items = document.querySelectorAll('nav a');
// console.log(nav_items.length)

for (i = 0; i < nav_items.length; i++){
  nav_items[i].textContent = siteContent['nav'][`nav-item-${i+1}`]
}

// nav_items[0].textContent = siteContent['nav']['nav-item-1']
// nav_items[1].textContent = siteContent['nav']['nav-item-2']
// nav_items[2].textContent = siteContent['nav']['nav-item-3']
// nav_items[3].textContent = siteContent['nav']['nav-item-4']
// nav_items[4].textContent = siteContent['nav']['nav-item-5']
// nav_items[5].textContent = siteContent['nav']['nav-item-6']


//Call to Action

const h1 = document.querySelector('h1')
h1.textContent = siteContent['cta']['h1']

const cta_button = document.querySelector('button')
cta_button.textContent = siteContent['cta']['button']

const cta_img = document.querySelector('#cta-img')
cta_img.src = siteContent['cta']['img-src']

//main content

const h4s = document.querySelectorAll('h4')

h4s[0].textContent = siteContent['main-content']['features-h4']
h4s[1].textContent = siteContent['main-content']['about-h4']
h4s[2].textContent = siteContent['main-content']['services-h4']
h4s[3].textContent = siteContent['main-content']['product-h4']
h4s[4].textContent = siteContent['main-content']['vision-h4']

const ps = document.querySelectorAll('p')

// console.log(ps)
ps[0].textContent = siteContent['main-content']['features-content']
ps[1].textContent = siteContent['main-content']['about-content']
ps[2].textContent = siteContent['main-content']['services-content']
ps[3].textContent = siteContent['main-content']['product-content']
ps[4].textContent = siteContent['main-content']['vision-content']

const middle_img = document.querySelector('.middle-img')
middle_img.src = siteContent['main-content']['middle-img-src']

//contact

h4s[5].textContent = siteContent['contact']['contact-h4']

ps[5].textContent = siteContent['contact']['address']
ps[6].textContent = siteContent['contact']['phone']
ps[7].textContent = siteContent['contact']['email']

//footer

ps[8].textContent = siteContent['footer']['copyright']



//add 2 new items to the navigation

const test1 = document.createElement('a')
test1.textContent = 'test1'

document.querySelector('nav').appendChild(test1)

const test2 = document.createElement('a')
test2.textContent = 'test2'

document.querySelector('nav').prepend(test2)


//select all nav items (including new ones)
nav_items = document.querySelectorAll('nav a');


//turn all nav items green
for (i = 0; i < nav_items.length; i++){
  nav_items[i].style.color = 'green';
}

