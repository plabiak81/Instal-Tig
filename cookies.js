// Okienko z informacją o plikach cookies. Strona nie używa cookies,
// więc to tylko informacja; po kliknięciu „Rozumiem” nie pokazuje się ponownie.
(function () {
    var KEY = 'cookie-info-ok';
    try { if (localStorage.getItem(KEY)) return; } catch (e) { /* tryb prywatny: pokaż okienko */ }

    var base = document.currentScript.src.replace(/cookies\.js(\?.*)?$/, '');
    var bar = document.createElement('div');
    bar.className = 'cookie-bar';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Informacja o plikach cookies');
    bar.innerHTML =
        '<p><strong>Ciasteczka?</strong> Ta strona nie zapisuje na Twoim urządzeniu żadnych plików cookies, ' +
        'nie śledzi Cię i nie wyświetla reklam. Szczegóły w <a href="' + base + 'polityka-prywatnosci.html">polityce prywatności</a>.</p>' +
        '<button type="button" class="btn btn-primary">Rozumiem</button>';
    bar.querySelector('button').addEventListener('click', function () {
        try { localStorage.setItem(KEY, '1'); } catch (e) {}
        bar.remove();
    });
    document.body.appendChild(bar);
})();
