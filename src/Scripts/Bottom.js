window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log("you're at the bottom of the page");
    }
};
