// Script pour contourner la vérification de sécurité de GitHub

// Fonction pour modifier les requêtes HTTP
function modifyRequests() {
    // Intercepter les requêtes HTTP
    const open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
        if (url.includes('github.com')) {
            // Modifier l'URL pour contourner la vérification
            url = url.replace('github.com', 'safe.github.com');
        }
        open.call(this, method, url, async, user, password);
    };
}

// Fonction pour modifier le comportement de la page
function modifyPageBehavior() {
    // Exemple : modifier le titre de la page
    document.title = "Safe GitHub Page";

    // Exemple : ajouter une classe CSS pour contourner les styles
    document.body.classList.add('safe-page');
}

// Exemple de style CSS pour contourner les styles
const style = document.createElement('style');
style.innerHTML = `
    .safe-page {
        all: initial;
        display: block;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        font-size: 100%;
        vertical-align: baseline;
        background: none;
        text-align: left;
        color: inherit;
        white-space: normal;
        cursor: auto;
        box-sizing: content-box;
        line-height: normal;
        list-style: none;
        position: static;
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
        z-index: auto;
        opacity: 1;
        overflow: visible;
        font-family: inherit;
        font-style: inherit;
        font-weight: inherit;
        text-transform: none;
        text-decoration: none;
        letter-spacing: normal;
        word-spacing: normal;
        text-shadow: none;
        direction: ltr;
        unicode-bidi: normal;
        -webkit-writing-mode: horizontal-tb;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
`;
document.head.appendChild(style);
}

// Exécuter les fonctions pour modifier les requêtes et le comportement de la page
modifyRequests();
modifyPageBehavior();
