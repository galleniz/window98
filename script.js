
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        width: params.get('width') || 'auto',
        height: params.get('height') || 'auto',
        title: params.get('title') || 'Ventana Windows 98',
        colorA: params.get('colora') || '#000080',
        colorB: params.get('colorb'),
        colorContent: params.get('colorcontent') || '#ffffff',
        alert: {
            text: params.get('alerttext') || '¡Hola, mundo!',
            username: params.get('alertusername') || 'Usuario',
        }
    };
}

function initializeWindow() {
    const params = getQueryParams();
    // if params width is auto, set width to auto
    
    const window = document.getElementById('win98window');
    const titlebar = document.getElementById('titlebar');
    const content = document.getElementById('window-content');
    const windowTitle = document.getElementById('window-title');
    content.style.height = params.height + 'px';
    window.style.width = params.width + 'px';

    if (params.width === 'auto') {
        window.style.width = '100vw';
    } 
    if (params.height === 'auto') {
        content.style.height = '100vh';
    } 
    windowTitle.textContent = params.title;
    // get class .content
    console.log(params);
    content.style.background = params.colorContent;
    if (params.colorB) {
        titlebar.style.background = `linear-gradient(to right, ${params.colorA}, ${params.colorB})`;
    } else {
        titlebar.style.background = params.colorA;
    }

    var is_alert_page = window.location.pathname.includes('alert/');
    if (is_alert_page) {
        // get elements
        /**<div class="alert-icon" id="alert-icon">🚨</div>
                <div class="alert-text-user" id="alert-text-user">SOMEONE</div>
                <div class="alert-text" id="alert-text">just suscribed</div> */

        const alertTextUser = document.getElementById('alert-text-user');
        const alertText = document.getElementById('alert-text');

        alertTextUser.textContent = params.alert.username;
        alertText.textContent = params.alert.text;
    }
}

window.addEventListener('load', initializeWindow);
