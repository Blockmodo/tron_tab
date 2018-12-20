function loadContent() {
    if (window.navigator.onLine) {
        d.innerHTML = '<iframe id="iframe" src="https://blockmodo.com/home/TRX" allowfullscreen></iframe>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadContent();
});