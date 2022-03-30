var getmenu = document.getElementById("mobilenav_screen");
var getmenu2 = document.getElementById("m_nav_top_header");


var linebar1 = document.getElementById("m_nav_btn_toggle_line1");
var linebar2 = document.getElementById("m_nav_btn_toggle_line2");
var linebar3 = document.getElementById("m_nav_btn_toggle_line3");

var linebar4 = document.getElementById("m_nav_btn_toggle_open1");
var linebar5 = document.getElementById("m_nav_btn_toggle_open2");

var body = document.getElementById("page-body");

console.log(navigator.userAgent)

//I researched how to do this, this allows a time delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Is the menu toggled or not?
var toggle = 0

async function navbartoggle() {
    if (toggle === 0){
        //Set menu to opacity of 1 and move it onto the viewport
        getmenu.style.left = "0%";
        getmenu.style.opacity = 1;

        linebar2.style.opacity= 0;
        linebar1.style.transform="translate(0px,-12px)";
        linebar3.style.transform="translate(0px,12px)";
    
        //Display the top header on the mobile nav
        getmenu2.style.left="0%";
        getmenu2.style.opacity = 1;
        body.style.overflow = "hidden";
        
        //Waits for 250ms
        await sleep(250)
        
        linebar1.style.opacity=0
        linebar3.style.opacity=0
        
        linebar4.style.opacity = 1
        linebar5.style.opacity = 1

        //Sets toggle to menu opened number
        toggle = 1;
    }else if (toggle === 1){
        
        //Moves menu out of the viewers display
        
        linebar4.style.opacity = 0
        linebar5.style.opacity = 0
        
        getmenu.style.left = "300%";
        getmenu.style.opacity = 1;
        
        //getmenu2.style.left="300%";
        getmenu2.style.opacity = 0;

        //Mobile Nav header fancy icon transform
        linebar2.style.opacity= 1;
        linebar1.style.opacity=1;
        linebar3.style.opacity=1;
        linebar1.style.transform="translate(0,0px)";
        linebar3.style.transform="translate(0,0px)";
        body.style.overflow = "auto";
        
        //Wait 250ms
        await sleep(250)
        //Set toggle to menu closed number
        toggle = 0;
    }
}

