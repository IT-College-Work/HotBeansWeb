var input = document.getElementById("extra-wmyf");
var output = document.getElementById("extra-wmyf-number");
var percentagebar = document.getElementById("extra-wmyf-percentagebar");
var maxLength = 200;
var globalWordCount = 0
output.innerHTML = " / " + maxLength;

input.addEventListener('keyup',function(e){
    letterCounter_extrawxmyf(e.target.value);
});

input.addEventListener('keydown', function(e){
    if (globalWordCount > maxLength && e.key !== "Backspace"){
        e.preventDefault();
        output.innerHTML = maxLength + " / " + maxLength;
        return alert("You have reached the maximum length");

    }
});

output.innerHTML = "0" + " / " + maxLength;

function letterCounter_extrawxmyf(text){

    var text = input.value;
    var wordCount = -1;
    globalWordCount = 0

    for (var i = 0; i <= text.length; i++){
        if(text.charAt(i) == ' '){
            wordCount++;
            globalWordCount++
        }
    }


    var lengthdisplay = 0;

    if(wordCount == -1){
        output.innerText = 0 + " / " + maxLength;
        lengthdisplay = 0;
    }else if(wordCount == 0){
        output.innerText = 1 + " / " + maxLength;
        lengthdisplay = 1;   
    }else{
        output.innerText = wordCount + " / " + maxLength;
        lengthdisplay = wordCount;
    }

    if(lengthdisplay > maxLength){
        progressbarAmt = (200 / maxLength) * 100;
    }else{
        progressbarAmt = (lengthdisplay / maxLength) * 100;
    }
    progressbarAmt = (lengthdisplay / maxLength) * 100;
    /*console.log(progressbarAmt);*/
    percentagebar.style.width = progressbarAmt + "%";

    
    if (lengthdisplay >= (maxLength)){
        percentagebar.style.background = "rgb(246,78,0)";
        percentagebar.style.background = "linear-gradient(90deg, rgba(246,78,0,1) 0%, rgba(255,0,0,1) 100%)";
    }else if(lengthdisplay >= (maxLength * 0.8)){
        percentagebar.style.background = "rgb(246,165,0)";
        percentagebar.style.background = "linear-gradient(90deg, rgba(246,165,0,1) 0%, rgba(255,64,0,1) 100%)";
    }else if(lengthdisplay >= (maxLength * 0.5)){
        percentagebar.style.background = "rgb(246,235,0)";
        percentagebar.style.background = "linear-gradient(90deg, rgba(246,235,0,1) 0%, rgba(255,159,0,1) 100%)"
    }
    
    else{
        percentagebar.style.background = "rgb(132,212,0)";
        percentagebar.style.background = "linear-gradient(90deg, rgba(132,212,0,1) 0%, rgba(255,222,0,1) 100%)"
    }

}

function inputslice(data){

    var wordCount = -1;
    var letterCount = 0;

    var inputval = input.value;

    for (var i = 0; i <= input.value.length; i++){
        if(input.value.charAt(i) == ' '){
             wordCount++;
        }
        letterCount++;
    }

    if(wordCount > maxLength){
        var newinput = input.value.slice(0, letterCount);
        input.value = newinput
    }
}

input.addEventListener("paste", function(e){
    /*console.log("AAAAAAAAAAA");*/
    var letterCount = 0;
    var wordCount = -1;
    var text = input.value;

    for(var i = 0; i <= text.length; i++){
        if(text.charAt(i) == ' '){
            wordCount++;
        }
    }

    var letterCountInput = 0;
    var wordCountInput = 0;

    const pasteinfo = (e.originalEvent || e).clipboardData.getData('text/plain');
    for(var i = 0; i <= pasteinfo.length; i++){
        if(pasteinfo.charAt(i) == ' '){
            wordCountInput++;
        }
        letterCountInput++;
    };

    if((wordCount + wordCountInput) > maxLength){
        /*console.log("e");*/
        /* console.log(input.value.length + wordCount)*/
        e.preventDefault();
        return alert("You are trying to paste over the maximum limit");
    }

    inputslice()

});
