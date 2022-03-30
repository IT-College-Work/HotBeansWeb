window.addEventListener("scroll", function(e) {
    const windowOffset = window.pageYOffset;
    const target = document.querySelectorAll(".parallax");

    if(windowOffset < window.innerHeight){

        var index = 0

        for(index=0; target[i].length; i++){
            var scrolled = window.pageYOffset;
            var rate = scrolled * target[index].dataset.rate

            target[index].style.display = "block";


            target[index].transform = 'translate3d(0px, '+rate+'px,0px)';
        }

    }
});