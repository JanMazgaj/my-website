const projectOne = document.querySelector('.project-1')
const projectTwo = document.querySelector('.project-2')
const projectThree = document.querySelector('.project-3')
const navbar = document.querySelector('.head-wrapper')
let mainTheme = "#db46bb"

function ShowProject1() {
    projectOne.style.opacity="100%";
    projectTwo.style.opacity="0%";
    projectThree.style.opacity="0%";
    mainTheme="#db46bb";
    document.documentElement.style.setProperty('--main-theme', mainTheme);
    // about.style.background="linear-gradient(#db46bb, white)"
}

function ShowProject2() {
    projectTwo.style.opacity="100%";
    projectThree.style.opacity="0%";
    projectOne.style.opacity="0%";
    mainTheme="#db4670";
    document.documentElement.style.setProperty('--main-theme', mainTheme);

    // about.style.background="linear-gradient(#db4670, white)"

}

function ShowProject3() {
    projectThree.style.opacity="100%";
    projectTwo.style.opacity="0%";
    projectOne.style.opacity="0%";
    mainTheme="#b146db";
    document.documentElement.style.setProperty('--main-theme', mainTheme);

    // about.style.background="linear-gradient(#b146db, white)"

    

}

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (scrollPosition / maxScroll) * 100;
    if (scrollPercentage >= 30 && scrollPercentage<= 85){
        navbar.style.backgroundColor = 'white'
        document.documentElement.style.setProperty('--underline-color', mainTheme);

        navbar.style.outline = 'solid 3px white' 
        document.querySelectorAll('.navbar-link').forEach(element => element.style.color="black");

    }
    else{
        navbar.style.backgroundColor =mainTheme
        document.documentElement.style.setProperty('--underline-color', 'white');
        navbar.style.outline = 'solid 3px ' + mainTheme
        document.querySelectorAll('.navbar-link').forEach(element => element.style.color="white");
    }
  });



const typingText = document.querySelector(".typing-text");
let currentIndex = 0;

function typeText() {
  typingText.textContent = text.slice(0, currentIndex);
  currentIndex++;
  
  if (currentIndex > text.length) {
    return
  }
}

setInterval(typeText, 50);








const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem aut nisi saepe tenetur velit. In nostrum at, recusandae cum obcaecati ad, ipsa delectus earum a dignissimos alias perspiciatis pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem aut nisi saepe tenetur velit. In nostrum at, recusandae cum obcaecati ad, ipsa delectus earum a dignissimos alias perspiciatis pariatur.Lorem ips" 