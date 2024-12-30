
const bgAnimation = document.getElementById('bgAnimation');
const numberOfColorBoxes = 400;

for (let i = 0; i<numberOfColorBoxes; i++){
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox')
    bgAnimation.append(colorBox)

}



const sr = ScrollReveal({
    origin:'top',
    distance:'100px',
    duration: 2000,
    reset:true

}
)
sr.reveal('.info-box',{})
sr.reveal('.text',{delay: 100})
sr.reveal('.btn-group',{delay: 100})
sr.reveal('.socials',{delay: 100})
sr.reveal('.image',{delay: 300})


const sr2 = ScrollReveal({
    origin:'top',
    distance:'100px',
    duration: 2000,
    reset:true

}
)
sr2.reveal('.competences',{})
sr2.reveal('.div-title',{delay: 100})
sr2.reveal('.section-title',{delay: 100})
sr2.reveal('.apercu',{delay: 100})
sr2.reveal('.skills-container',{delay: 100})


const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const menuItems = document.querySelectorAll('.nav-links a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 768) {  
      navLinks.classList.remove('active');
    }
  });
});



 

