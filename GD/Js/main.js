const videos = document.querySelectorAll("[data-src]");


function preloadVideo(iframe) {
    const src = iframe.getAttribute("data-src");
    if(!src) {
        return;
    }
    iframe.src = src;
}

const vidOptions = {
    threshold: 0.4,
    rootMargin: "0px 0px -50px 0px"
 };

const vidObserver = new IntersectionObserver((entries, 
vidObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
          preloadVideo(entry.target);
          vidObserver.unobserve(entry.target);  
        }
    })

}, vidOptions);

videos.forEach(iframe => {
    vidObserver.observe(iframe);
})



