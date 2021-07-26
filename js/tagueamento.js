// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

document.getElementById('contato').addEventListener("click", function () {
    dispararEventoMenu('contato')
}, false);
document.getElementById('download').addEventListener("click", function () {
    dispararEventoMenu('download')
}, false)

if (document.getElementById('analise')) {
    document.getElementById('lorem').addEventListener("click", function () {
        dispararEventoAnalise('Lorem')
    }, false)
    document.getElementById('ipsum').addEventListener("click", function () {
        dispararEventoAnalise('Ipsum')
    }, false)
    document.getElementById('dolor').addEventListener("click", function () {
        dispararEventoAnalise('Dolor')
    }, false)

}
if (document.getElementById('sobre')) {
    document.getElementById('nome').addEventListener("change", function () {
        dispararEventoSobre('nome')
    }, false)
    document.getElementById('email').addEventListener("change", function () {
        dispararEventoSobre('email')
    }, false)
    document.getElementById('telefone').addEventListener("change", function () {
        dispararEventoSobre('telefone')
    }, false)
    document.getElementById('aceito').addEventListener("change", function () {
        dispararEventoSobre('aceito')
    }, false)
    document.getElementById('aceito').addEventListener("change", function () {
        dispararEventoSobre('aceito')
    }, false)
    document.querySelector('.contato button[type="submit"]').addEventListener("click", function () {
        dispararEventoContato()
    }, false)
}

function dispararEventoMenu(evento) {
    if (evento === 'contato') {
        ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
    } else {
        ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
    }
}

function dispararEventoAnalise(evento) {
    ga('send', 'event', 'analise', 'ver_mais', evento);
}

function dispararEventoSobre(campo) {
    ga('send', 'event', 'contato', campo, 'preencheu');
}

function dispararEventoContato() {
    ga('send', 'event', 'contato', 'enviado', 'enviado');
}

