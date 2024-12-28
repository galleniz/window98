
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        width: params.get('width') || 'auto',
        height: params.get('height') || 'auto',
        title: params.get('title') || 'Ventana Windows 98',
        colorA: params.get('colora') || '#000080',
        colorB: params.get('colorb'),
        colorContent: params.get('colorcontent') || '#ffffff',
        font_multiplier: params.get('fontmult') || '100%',
        alert: {
            text: params.get('alerttext') || '¡Hola, mundo!',
            username: params.get('alertusername') || 'Usuario',
            usernameColor: params.get('alertusernamecolor') || 'rgb(255, 123, 0)',
        }
    };
}

function initializeWindow() {
    // body 
    // const body = document.body;
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
    var base_fontSize = 16;
    console.log(params);
    content.style.background = params.colorContent;
    content.style.fontSize = params.font_multiplier;
    if (params.colorB) {
        titlebar.style.background = `linear-gradient(to right, ${params.colorA}, ${params.colorB})`;
    } else {
        titlebar.style.background = params.colorA;
    }

    // var is_alert_page = window.location.pathname.includes('alert/');
        // get elements
        /**<div class="alert-icon" id="alert-icon">🚨</div>
                <div class="alert-text-user" id="alert-text-user">SOMEONE</div>
                <div class="alert-text" id="alert-text">just suscribed</div> */
    var percentageSize = Number((params.font_multiplier.replace('%', ''))) / 100;
        const alertTextUser = document.getElementById('alert-text-user');
        const alertText = document.getElementById('alert-text');
        if (alertTextUser){
        alertTextUser.textContent = params.alert.username;
        alertTextUser.style.fontSize = `${base_fontSize * percentageSize * 1.5}px`;
        alertTextUser.style.color = params.alert.usernameColor;
    }
        if (alertText){
        alertText.textContent = params.alert.text;
        alertText.style.fontSize = `${base_fontSize * percentageSize}px`;
    }
        console.log(alertTextUser);
        console.log(alertText);
        const alertIcon = document.getElementById('alert-icon');
        if (alertIcon){
        alertIcon.style.fontSize = `${base_fontSize * percentageSize * 2}px`;
        }
}

window.addEventListener('load', initializeWindow);
