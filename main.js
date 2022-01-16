const mobileNavButton = document.querySelector('#mobileNavToggle')
const mobileNavBlock = document.querySelector('#mobileNavBlock')
const mobileContentBlock = document.querySelector('#mobileContentBlock')
const contentBlock = document.querySelector('#deskContentBlock')

function setNav(status){
    if (status == true){
        mobileNavButton.classList.remove('fa-bars')
        mobileNavButton.classList.add('fa-close')
        mobileNavBlock.style.display = 'initial'
    }
    else if (status == false){
        mobileNavButton.classList.remove('fa-close')
        mobileNavButton.classList.add('fa-bars')
        mobileNavBlock.style.display = 'none'
    }
}

mobileNavButton.addEventListener("click", () => {
    if (mobileNavButton.classList.contains('fa-bars')){
        setNav(true)
    }
    else if (mobileNavButton.classList.contains('fa-close')){
        setNav(false)
    }
})

function setPage(page){
    if (page == "aboutMe"){
        setNav(false)
        mobileContentBlock.innerHTML = '<h1><u>ABOUT ME</u></h1>'
        contentBlock.innerHTML = '<h1><u>ABOUT ME</u></h1>'
    }
    if (page == 'github'){
        window.location.href = 'http://github.yltboi.me'
    }
    if (page == 'twitter'){
        window.location.href = 'http://twitter.yltboi.me'
    }
    if (page == 'zedtekFacebook'){
        window.location.href = 'http://fb.me/ZedTekDevel'
    }
    if (page == 'jbWalkthrough'){
        window.location.href = '/walkthrough'
    }
    if (page == 'toggle'){
        alert('Toggle Bot Framework site coming soon!')
        // window.location.href = 'https://zedtek.yltboi.me/toggle'
    }
    if (page == 'portfolio'){
        setNav(false)
        mobileContentBlock.innerHTML = '<h1><u>MY WORK</u></h1>'
        contentBlock.innerHTML = '<h1><u>MY WORK</u></h1>'
    }
    if (page == 'photos'){
        setNav(false)
        mobileContentBlock.innerHTML = '<h1><u>MY PHOTOS</u></h1>'
        contentBlock.innerHTML = '<h1><u>MY PHOTOS</u></h1>'
    }
}