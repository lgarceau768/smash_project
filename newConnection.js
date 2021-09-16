let submitButton = $('submit');
submitButton.onclick = function () {
    window.location.pathname = '/connections.' + window.location.pathname.split('.')[1]
}