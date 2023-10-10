// tab links and tab content functionality
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    hideAll(tabLinks, 'active-link');
    hideAll(tabContents, 'active-tab');
    e.target.classList.add('active-link');
    let tabName = e.target.dataset.id;
    document.getElementById(tabName).classList.add('active-tab');
  })
})

function hideAll(elements, className) {
  elements.forEach((element) => {
    element.classList.remove(className);
  });
}


//work sections
const works = [
  {
    title: 'Ecommerce',
    desc: 'Shopping cart web app in PHP',
    image: 'images/work/BRRevLrLdjnLzUU235nBy5wl2UiOM9FnSwaLv6yr.jpg'
  },
  {
    title: 'Drums',
    desc: 'Drums playing game in Javascript',
    image: 'images/work/c4sJ26jIFrtMBqHr9OJQSTV4VRQqcXPy80XgR9dS.webp'
  },
  {
    title: 'Quiz',
    desc: 'Simple quiz app in Javascript',
    image: 'images/work/D7jOyJaXl28F7980vg3q1I6aAC1SiDtTusmvi29C.jpg'
  },
  {
    title: 'Fanstasy',
    desc: 'Create-Read-Update-Delete posts in Laravel',
    image: 'images/work/Fnpk38cOCcPw3tP6yOx7u4aRTMLYDDemuWfAnPJt.webp'
  },
  {
    title: 'Restaurant menu',
    desc: 'Something about something for someone somewhere',
    image: 'images/work/F0gUrvrVJSF2aY2Ip3va0wHPzmQIYdrHHuuHjunu.jpg'
  },
  {
    title: 'Contact Form',
    desc: 'Contact Form (PHP, JS, AJAX)',
    image: 'images/work/z10X0RQFCsvEt4F0hePzdddcrgO9lsknmR6M6rop.jpg'
  },
  {
    title: 'Rock Paper Scissors',
    desc: 'Rock-Paper-Scissors game in Javascript',
    image: 'images/work/rock-paper-scissors-neon-icons-vector.jpg'
  },
  {
    title: 'PHP MVC FRAMEWORK',
    desc: 'Just trying to make MVC framework in PHP',
    image: 'images/work/17xzobB5oFEcZBxys3iuBK61q2eJZL1YDbw7F3eI.jpg'
  },
  {
    title: 'Shoppinh Cart',
    desc: 'Shopping cart in PHP',
    image: 'images/work/vf5KVNlyioWylyErmceLKG5nrUNdoFiyQcce9jYY.webp'
  },
  {
    title: 'VUE JS QUIZ',
    desc: 'Quiz with categories and timer in Vue',
    image: 'images/work/quiz.jpg'
  },
  {
    title: 'Laravel API',
    desc: 'Write an API in Laravel',
    image: 'images/work/api.jpg'
  },
  {
    title: 'Silmarilion Quiz',
    desc: 'Test your knowledge about First Age of Middle Earth',
    image: 'images/work/silmarilion.jpg'
  }
  
];

const workList = document.querySelector('.work-list');
let output = '';
let rowNumberOfWorks = 3;
for(let i = 0; i < rowNumberOfWorks; i++) {
  output += `
            <div class="work">
              <img src="${works[i].image}" alt="">
              <div class="layer">
                <h3>${works[i].title}</h3>
                <p>${works[i].desc}</p>
                <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            `
}
workList.innerHTML = output;

document.getElementById('see-all').addEventListener('click', () => {
  showTheRest(works);
  document.getElementById('see-all').style.display = 'none';
})

function showTheRest(works) {
    for(let i = rowNumberOfWorks; i < works.length; i++) {
    output += `
              <div class="work">
                <img src="${works[i].image}" alt="">
                <div class="layer">
                  <h3>${works[i].title}</h3>
                  <p>${works[i].desc}</p>
                  <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
              `
  }
  workList.innerHTML = output;
}


//show - hide menu on small screen
const showMenu = document.getElementById('show-menu');
const closeMenu = document.getElementById('close-menu');
const menuList = document.getElementById('menu-list');

showMenu.addEventListener('click', () => {
  menuList.style.right = '0';
});

closeMenu.addEventListener('click', () => {
  menuList.style.right = '-200px';
});
