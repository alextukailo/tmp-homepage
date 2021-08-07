
    let thumbs = document.querySelectorAll('.video-tour__thumb')
    thumbs = [].slice.call(thumbs)

    var player,
    time_update_interval = 0;
    //you need to add videoId from embered url
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('twomin', {
            width: 100 + '%',
            videoId: 'ukzFI9rgwfU',
            playerVars: {
                autoplay: 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
        },);
        player2 = new YT.Player('demoVideo', {
            width: 100 + '%',
            videoId: '7eh4d6sabA0',
            events: {
                onReady: initialize
            }
        },);
        
    }

    function onPlayerReady(e) {
        e.target.stopVideo();
    }
    
   
    function onPlayerStateChange(event) {
        
    }

    function initialize(){

        clearInterval(time_update_interval);

        time_update_interval = setInterval(function () {
        }, 1000);
    }

const buttonToTop = () => {
    let scrollToTopBtn = document.querySelector(".button_top")
    let rootElement = document.documentElement
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    function handleScroll() {
        let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
        if ((rootElement.scrollTop / scrollTotal ) > 0.15) {
            scrollToTopBtn.classList.add("showBtn")
        } else {
            scrollToTopBtn.classList.remove("showBtn")
        }
    }

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    scrollToTopBtn.addEventListener("click", scrollToTop)
    document.addEventListener("scroll", handleScroll)
}


const onScrollChangeLinks = () => {
    const links = document.querySelectorAll('.nav-bar__item');
    const sections = document.querySelectorAll('.menu_trigger');

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY - 10 < sections[index].offsetTop) {}
        
        links.forEach((link) => link.classList.remove('active'));
        links[index].classList.add('active');
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
}


const smoothScroll = () => {
    const links = document.querySelectorAll(".nav-bar__item");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}


const guideSteps = () => {
    const callButton = document.getElementById('guide_call')
    const guideBox = document.getElementById('guide_box')
    let closeButton = document.querySelectorAll('.guide__close')
    let steps = document.querySelectorAll('.guide__step')
    let links = document.querySelectorAll('.guide__link')

    steps = [].slice.call(steps)
    closeButton = [].slice.call(closeButton)
    links = [].slice.call(links)
    

    if(callButton && guideBox && closeButton && links) {
       
        steps.map((step, index) => {
            if(index == 0) {
                const startButton = step.children[3]
                startButton.onclick = () => {
                    step.hidden = true
                    step.nextElementSibling.hidden = false
                }
            }

            if(index == steps.length - 1) {
                const finishButton = step.children[3]
                finishButton.onclick = () => {
                    guideBox.hidden = true
                    step.hidden = true
                    // player.playVideo()
                    steps[0].hidden = false
                    document.body.style.overflowY = 'inherit'
                    document.documentElement.style.overflowY = "inherit"
                }
            }
            links.map(item => {
                item.onclick = () => {
                    guideBox.hidden = true
                    step.hidden = true
                    steps[0].hidden = false
                    document.body.style.overflowY = 'inherit'
                    document.documentElement.style.overflowY = "inherit"
                }
            })

            setTimeout(() => {
                const back = step.children[2].children[0]
                const next = step.children[2].children[1]
                if(next && back) {
                    next.onclick = () => {
                        step.hidden = true
                        step.nextElementSibling.hidden = false
                    }
        
                    back.onclick = () => {
                        step.hidden = true
                        step.previousElementSibling.hidden = false 
                    }
                }
    
            }, 3)

            closeButton.map((item) => {
                item.onclick = () => {
                    guideBox.hidden = true
                    steps.hidden = true
                    document.body.style.overflowY = 'inherit'
                    document.documentElement.style.overflowY = "inherit"
                }
            })
        })

        callButton.onclick = () => {
            guideBox.hidden = false
            document.body.style.overflowY = 'hidden'
            document.documentElement.style.overflowY = "hidden"
        }
    
        closeButton.onclick = () => {
            guideBox.hidden = true
            document.body.style.overflowY = 'inherit'
            document.documentElement.style.overflowY = "inherit"
        }
    }
}


const themeMode = () => {
    const toggle = document.getElementById('light_mode')
    toggle.onclick = () => {
        toggle.checked ? document.body.classList.add('dark_mode') : document.body.classList.remove('dark_mode')
    }
}


const responsivePage = () => {
    window.addEventListener("resize", function () {
        if(window.innerWidth <= 1440) {
            document.documentElement.style.fontSize = window.innerWidth * 0.043 + '%'
        } else {
            document.documentElement.style.fontSize = '62.5%'
        }
    });
}



    setTimeout(() => {
        const navVideoTour = document.getElementById("navVideoTour")
        const huperscalingDemo = document.getElementById("huperscalingDemo")
        const videoButtonFromGuide = document.getElementById('guide_video_tour')
        let navButtons = document.querySelectorAll('.nav-bar__item')
            navButtons = [].slice.call(navButtons)

            videoButtonFromGuide.onclick = () => {
                player.playVideo()
                const videoTour = document.getElementById("video-tour");
                videoTour.scrollIntoView({block: "start", behavior: "smooth"});
                player2.stopVideo();
                thumbs[0].hidden = true
                thumbs[0].nextElementSibling.hidden = false
                thumbs[1].hidden = false
                thumbs[1].nextElementSibling.hidden = true
                const guideBox = document.getElementById('guide_box')
                guideBox.hidden = true
                document.body.style.overflowY = 'inherit'
                document.documentElement.style.overflowY = "inherit"
            }

        navButtons.map((button, index) => {
            if(index == 1) {
                button.onclick = () => {
                    player.playVideo();
                    player2.stopVideo();
                    thumbs[0].hidden = true
                    thumbs[0].nextElementSibling.hidden = false
                    thumbs[1].hidden = false
                    thumbs[1].nextElementSibling.hidden = true
                }
            }

            if(index == 2) {
                button.onclick = () => {
                    player.stopVideo();
                    player2.playVideo();
                    thumbs[1].hidden = true
                    thumbs[1].nextElementSibling.hidden = false
                    thumbs[0].hidden = false
                    thumbs[0].nextElementSibling.hidden = true
                }
            }
        })

        thumbs.map((item, i) => {
            item.nextElementSibling.hidden = true
            
            navVideoTour.onclick = () => {
                    const videoTour = document.getElementById("video-tour");
                        videoTour.scrollIntoView({block: "start", behavior: "smooth"});
                        player.playVideo();
                        player2.stopVideo();
                        thumbs[0].hidden = true
                        thumbs[0].nextElementSibling.hidden = false
                        thumbs[1].hidden = false
                        thumbs[1].nextElementSibling.hidden = true
            }

            huperscalingDemo.onclick = () => {
                    const videoDemo = document.getElementById("video-demo");
                        videoDemo.scrollIntoView({block: "start", behavior: "smooth", inline: "nearest"});
                        player2.playVideo();
                        player.stopVideo();
                        thumbs[1].hidden = true
                        thumbs[1].nextElementSibling.hidden = false
                        thumbs[0].hidden = false
                        thumbs[0].nextElementSibling.hidden = true
            }

            item.onclick = () => {
                if(i == 0) {
                    player.playVideo();
                    player2.stopVideo();
                    thumbs[i].hidden = true
                    item.nextElementSibling.hidden = false
                    thumbs[1].hidden = false
                    thumbs[1].nextElementSibling.hidden = true
                    
                } else if (i == 1) {
                    player2.playVideo();
                    player.stopVideo();
                    thumbs[i].hidden = true
                    item.nextElementSibling.hidden = false
                    thumbs[0].hidden = false
                    thumbs[0].nextElementSibling.hidden = true
                }
            }
        })
    }, 750)


const windowScrolling = () => {
    const bar = document.querySelector('.nav-bar')
    const barHidden = () => {
        setTimeout(() => {
            bar.classList.add('hidden')
        }, 2000)
    }
    bar.onmouseover = () => {
        setInterval(() => {
            bar.classList.remove('hidden')
        }, 1)
    }
    bar.onmouseout = () => {
        setTimeout(() => {
            bar.classList.add('hidden')
        }, 3500)
    }
    window.onscroll = function (e) {  
        bar.classList.remove('hidden')
        barHidden()
    }
}

const formValidate = () => {
    const form = document.getElementById('contact_form')
    const message = document.getElementById('contact_message')

    form.addEventListener("submit", e => {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        const messageValue = message.nodeValue

        if (messageValue === "") {
            setErrorInput(message, "Message field cannot be empty!");
        } else {
            setSuccessInput(message);
        }
    }

    function setErrorInput(input, errorMessage) {
        const formControl = input.parentElement;
        const small = formControl.querySelector(".error_tip");
        small.innerText = errorMessage;
    }

    function setSuccessInput(input) {
        const formControl = input.parentElement;
        small.innerText = '';
    }
}

const formSend = async (event) => {
    // prevent form page navigation
    if (event) { event.preventDefault(); }

    const message = document.getElementById('contact_message').value.trim()
    const ticketData = {
        source: 'ATLAS',
        issue: message,
    };

    await fetch(`https://service.optilogic.app/support-ticket?workspaceId=${window.activeWorkspaceId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticketData)
    })
    .then((res) => {
        showPopup()
    })
    .catch((error) => {
        // handle error while creating user ticket here
    });
}

const showPopup = () => {
    document.getElementById('modalSuccess').hidden = false
}

const successModal = () => {
    const button = document.getElementById('closeModal')
    const modal = document.getElementById('modalSuccess')
    if(button && modal) {
        button.onclick = () => {
            modal.hidden = true
            setTimeout(() => {
                document.documentElement.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }, 1000)
        }
    }
}

const initScripts = {

    init: function () {
        buttonToTop()
        onScrollChangeLinks()
        smoothScroll()
        guideSteps()
        themeMode()
        responsivePage()
        windowScrolling()
        // formValidate()
        successModal()
    }
  
}
initScripts.init()