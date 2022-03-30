

var fadeR = document.getElementsByClassName("fade_R")
var fadeL = document.getElementsByClassName("fade_L")

var fadeUP = document.getElementsByClassName("fade_UP")
var fadeDOWN = document.getElementsByClassName("fade_DOWN")


var i = 0;
var object = 0;
var desktop = true;


var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|Blackberry)/)

if (isMobile){
    console.log("Mobile Device - removing fade elements")
    for (i=0; i < fadeR.length; i++){
        fadeR[i].style.opacity = 1
        fadeR[i].style.transform = "translate3d(0,0,0)"
    }
     for (i=0; i < fadeL.length; i++){
        fadeL[i].style.opacity = 1
        fadeL[i].style.transform = "translate3d(0,0,0)"
    }
    for (i=0; i < fadeUP.length; i++){
        fadeUP[i].style.opacity = 1
        fadeUP[i].style.transform = "translate3d(0,0,0)"
    }
    for (i=0; i < fadeDOWN.length; i++){
        fadeDOWN[i].style.opacity = 1
        fadeDOWN[i].style.transform = "translate3d(0,0,0)"
    }

    var id = document.getElementById("description-website-SVG");
    if(id){
        id.id = "description-website-SVG_ACTIVE"
    }
    
    desktop = false;
    
}

var isLimitedWidth = window.innerWidth;
console.log(isLimitedWidth);

if (isLimitedWidth < 1100){
    console.log("Limited Screen Width - removing fade elements")
    for (i=0; i < fadeR.length; i++){
        fadeR[i].style.opacity = 1
        fadeR[i].style.transform = "translate3d(0,0,0)"
    }
     for (i=0; i < fadeL.length; i++){
        fadeL[i].style.opacity = 1
        fadeL[i].style.transform = "translate3d(0,0,0)"
    }
    for (i=0; i < fadeUP.length; i++){
        fadeUP[i].style.opacity = 1
        fadeUP[i].style.transform = "translate3d(0,0,0)"
    }
    for (i=0; i < fadeDOWN.length; i++){
        fadeDOWN[i].style.opacity = 1
        fadeDOWN[i].style.transform = "translate3d(0,0,0)"
    }

    var id = document.getElementById("description-website-SVG");
    if(id){
        id.id = "description-website-SVG_ACTIVE"
    }
    
    desktop = false;   
}
//I researched how to do this, this allows a time delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function windowCheck(){
    if (desktop === true){

    // if (document.documentElement.clientWidth <= 950){ //Checks if it is nessecary
            var win1 = window.innerHeight;
            var win2 = document.documentElement.clientHeight;
        
            var i = 0;
            var object = 0;

            var spacing_amount = 200
        
            for (i=0; i < fadeR.length; i++){

                var object = fadeR[i];
                var getrect = fadeR[i].getBoundingClientRect();

                if (fadeR[i].style.opacity === 1){


                }else{
        
                if (getrect.bottom <= (win1 + spacing_amount || win2 + spacing_amount ) & getrect.top >= 0){ //Checks bottom of each element compared to window height
                    fadeR[i].style.opacity = 1;
                    fadeR[i].style.transform = "translate3d(0,0,0)"
                   
                   /*Triggers CSS Content Animation
                    if(fadeR[i].id === "description-website-SVG"){
                        await sleep(500)
                        fadeR[i].id = "description-website-SVG-ACTIVE";
                    }*/
                }


                }
            }

            for (i=0; i < fadeL.length; i++){
            var object = fadeL[i];
            var getrect = fadeL[i].getBoundingClientRect();
    

            if (fadeL[i].style.opacity == 1){


            }else{
    
                if (getrect.bottom <= (win1 + spacing_amount || win2 + spacing_amount ) & getrect.top >= 0){ //Checks bottom of each element compared to window height
                    fadeL[i].style.opacity = 1;
                    fadeL[i].style.transform = "translate3d(0,0,0)";
                }
            }
        }

        for (i=0; i < fadeUP.length; i++){

            var getrect = fadeUP[i].getBoundingClientRect();
    

            if (fadeUP[i].style.opacity == 1){


            }else{
    
                if (getrect.bottom <= (win1 + spacing_amount || win2 + spacing_amount ) & getrect.top >= 0){ //Checks bottom of each element compared to window height
                    fadeUP[i].style.opacity = 1;
                    fadeUP[i].style.transform = "translate3d(0,0,0)";
                }
            }
        }

        for (i=0; i < fadeDOWN.length; i++){
            var object = fadeDOWN[i];
            var getrect = fadeDOWN[i].getBoundingClientRect();
    
            if (fadeDOWN[i].style.opacity == 1){


            }else{
    
                if (getrect.bottom <= (win1 + spacing_amount  || win2 + spacing_amount ) & getrect.top >= 0){ //Checks bottom of each element compared to window height
                    fadeDOWN[i].style.opacity = 1;
                    fadeDOWN[i].style.transform = "translate3d(0,0,0)";
                }
            }
        }
    }
}

async function idCheck(){
    if (desktop === true){

        var win1 = window.innerHeight;
        var win2 = document.documentElement.clientHeight;

        var spacing_amount = 100;

        var id1 = document.getElementById("description-website-SVG");
        if(id1){
            var id1rect = id1.getBoundingClientRect();

            if (id1rect.bottom <= (win1 + spacing_amount || win2 + spacing_amount ) & id1rect.top >= 0){ //Checks bottom of each element compared to window height
                await sleep(500);
                id1.id = "description-website-SVG-ACTIVE";
            }  
        }  
    }
}


window.onscroll = () => { 
   windowCheck()
   idCheck()
}