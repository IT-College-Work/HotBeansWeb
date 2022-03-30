
//Variables

var showcase_menu = document.getElementById("employee-contact-socials-menu")
var bg_img = document.getElementById("employee-showcase-contact-background");
var contact_information = document.getElementById("employee-contact-information");
var contact_title = document.getElementById("employee-showcase-contact-name");

var contact_container = document.getElementById("employee-contact-socials-menu");


var twitter_button = document.getElementById("employee-showcase-contact-twitter");
var instagram_button = document.getElementById("employee-showcase-contact-instagram");
var facebook_button = document.getElementById("employee-showcase-contact-facebook");
var linkedin_button = document.getElementById("employee-showcase-contact-linkedin");

var twitter_handle = document.getElementById("employee-showcase-contact-twitter-name");
var instagram_handle = document.getElementById("employee-showcase-contact-instagram-name");
var facebook_handle = document.getElementById("employee-showcase-contact-facebook-name");
var linkedin_handle = document.getElementById("employee-showcase-contact-linkedin-name");


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function menu_control(arg){
    if(arg===1){
        contact_container.style.pointerEvents = "auto";
        contact_container.style.opacity = 1;
        showcase_menu.style.opacity = 1;
        await sleep(100);
        bg_img.style.transform = "translate3d(0%,0,0)";
        bg_img.style.opacity = 1;
        await sleep(400);
        contact_information.style.transform = "translate3d(0%,0,0)";
        contact_information.style.opacity = 1;
    }else if(arg===2){
        contact_information.style.transform =  "translate3d(-50%,0,0)";
        contact_information.style.opacity = 0;
        await sleep(300);
        bg_img.style.transform =  "translate3d(200%,0,0)";
        bg_img.style.opacity = 0;
        await sleep(100);
        contact_container.style.opacity = 0;
        await sleep(400);
        contact_container.style.pointerEvents = "none";
        
    }
}

function setHandle(twi,inst,face,linked){
    twitter_handle.innerHTML = "@"+twi;
    twitter_button.href = "https://www.twitter.com/"+twi;
    instagram_handle.innerHTML = "@"+inst;
    instagram_button.href = "https://www.instagram.com/"+inst;
    facebook_handle.innerHTML = face;
    facebook_button.href = "https://www.facebook.com/"+face;
    linkedin_handle.innerHTML = linked;
    linkedin_button.href = "https://www.linkedin.com/in/"+linked;
}

function setButtons(twi,inst,face,linked){
    if(twi===true){
        twitter_button.style.pointerEvents = "auto";
        twitter_button.style.opacity = 1;
    }else{
        twitter_button.style.pointerEvents = "none";
        twitter_button.style.opacity = 0;
    }
    if(inst===true){
        instagram_button.style.pointerEvents = "auto";
        instagram_button.style.opacity = 1;
    }else{
        instagram_button.style.pointerEvents = "none";
        instagram_button.style.opacity = 0;
    }
    if(face===true){
        facebook_button.style.pointerEvents = "auto";
        facebook_button.style.opacity = 1;
    }else{
        facebook_button.style.pointerEvents = "none";
        facebook_button.style.opacity = 0;
    }
    if(linked===true){
        linkedin_button.style.pointerEvents = "auto";
        linkedin_button.style.opacity = 1;
    }else{
        linkedin_button.style.pointerEvents = "none";
        linkedin_button.style.opacity = 0;
    }
}

function findBackground(arg){
    var location = "../Images/PNG/Employee/Employee"+arg+".jpg";
    return location
}
    


async function employee_contact(arg){
    console.log(arg)

    //There are better ways of doing this. E.G Grabbing Data from a JSON file that has a matching argument number
    
    //Arjun
    
    if(arg===1){
        bg_img.src= findBackground(arg);
        contact_title.innerHTML = "Arjun";
        
        setHandle("ArjunHotBeans","ArjunHotBeans2","ArjunHotBeans3", "ArjunHotBeans4");
        
        setButtons(true,true,true,true);
        
        

        menu_control(1)
        
    }
    
    if(arg===2){
        
        bg_img.src= findBackground(arg);
        contact_title.innerHTML = "Derek";
        
        setHandle("DerekWebDev","DerekHotBeans","DerekUIUX", "DerekWebDev");  
        
        setButtons(true,true,true,true)
        
        

        menu_control(1)      
    }

    if(arg===3){
        
        bg_img.src= findBackground(arg);
        contact_title.innerHTML = "James";
        
        setHandle("JamesDoesDeveloping","JamesDev","JamesDev", "JamesDev");  
        
        setButtons(true,true,true,true)
        
        

        menu_control(1)      
    }

    if(arg===4){
        
        bg_img.src= findBackground(arg);
        contact_title.innerHTML = "Robert";
        
        setHandle("HotBeansRobert","RobertHotBeans","RobertDev", "RobertHotBeans");  
        
        setButtons(true,true,true,true)
        
        

        menu_control(1)      
    }

    if(arg===5){
        
        bg_img.src= findBackground(arg);
        contact_title.innerHTML = "Patricia";
        
        setHandle("PatriciaRoberts","PatriciaRoberts","PatriciaHotBeans", "PatriciaHotBeans");  
        
        setButtons(true,true,true,true)
        
        

        menu_control(1)      
    }

    if(arg===6){
        
        bg_img.src= findBackground(arg);
        contact_title.innerHTML = "Aaron";
        
        setHandle("AaronBackend","AaronBackend","AaronHotBeans", "AaronDeveloper");  
        
        setButtons(true,true,true,true)
        
        

        menu_control(1)      
    }
}

function employee_contact_back(){
    menu_control(2) 
}
