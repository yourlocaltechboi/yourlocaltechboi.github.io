const contentWindow = document.querySelector('#contentBlock')
const navWindow = document.querySelector('#nav')

function hide(item){
    item.style.display = 'none'
}
function show(item){
    if (document.documentElement.clientWidth <= 700){
        item.style.display = ''
    }
    else{
        item.style.display = 'flex'
    }
}

function setPage(page){
    if (page == 'aboutMe'){
        if (document.documentElement.clientWidth <= 700){
            hide(navWindow)
            show(contentWindow)
        }
        contentWindow.innerHTML = '<h1>Anden Wieseler About</h1>'
    }
    if (page == 'github'){
        window.location.href = 'http://github.yltboi.me'
    }
    if (page == 'twitter'){
        window.location.href = 'http://twitter.yltboi.me'
    }
    if (page == 'zedtekFacebook'){
        window.location.href = 'https://fb.me/ZedTekDevel'
    }
    if (page == 'jbWalkthrough'){
        window.location.href = '/walkthrough'
    }
    if (page == 'toggle'){
        window.location.href = 'https://github.com/ZedTek/toggle-base'
    }
    if (page == 'portfolio'){

    }
    if (page == 'photos'){

    }
}