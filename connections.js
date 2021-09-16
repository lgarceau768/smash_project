
let connections = document.getElementsByClassName('connection');
for (let connection of connections) {
    connection.onclick = function () {
        window.location.pathname = window.location.pathname.replace('connections', 'connection')
    }
}