

const getDarkToggle = document.getElementById("dark_toggle");
const getLightToggle = document.getElementById("light_toggle");

const getDarkToggle2 = document.getElementById("dark_toggle_mnav")
const getLightToggle2 = document.getElementById("light_toggle_mnav")

var body = document.body;

const theme = localStorage.getItem('theme');

if (theme === "light_theme") {
    body.classList.replace('dark_theme', 'light_theme')

}else if(theme === "dark_theme"){
    body.classList.replace('light_theme','dark_theme')

}

function darkchange(){
    body.classList.replace("light_theme","dark_theme")
    localStorage.setItem('theme','dark_theme')
    

}

function lightchange(){
    body.classList.replace("dark_theme","light_theme")
    localStorage.setItem('theme','light_theme')

}


getDarkToggle.onclick = () => {
    darkchange()
}

getDarkToggle2.onclick = () => {
    darkchange()
}

getLightToggle.onclick = () => {
    lightchange()
}


getLightToggle2.onclick = () => {
    lightchange()
}
