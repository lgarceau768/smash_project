$ = (id) => document.getElementById(id);

let logo = $('logo');
logo.onclick = function () {
    window.location.pathname = '/index.' + window.location.pathname.split('.')[1]
}

let twitterIcon = $('twittericon');
twitterIcon.onclick = function () {
    open('https://twitter.com/smashbrosus?lang=en')
}

let instagramIcon = $('instaicon');
instagramIcon.onclick = function () {
    open('https://www.instagram.com/smashultimate/?hl=en')
}

    