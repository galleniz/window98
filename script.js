
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        width: params.get('width') || '400',
        height: params.get('height') || '300',
        title: params.get('title') || 'Ventana Windows 98',
        colorA: params.get('colora') || '#000080',
        colorB: params.get('colorb'),
        colorContent: params.get('colorcontent') || '#ffffff'
    };
}

function initializeWindow() {
    const params = getQueryParams();
    const window = document.getElementById('win98window');
    const titlebar = document.getElementById('titlebar');
    const content = document.getElementById('window-content');
    const windowTitle = document.getElementById('window-title');

    window.style.width = params.width + 'px';
    content.style.height = params.height + 'px';
    windowTitle.textContent = params.title;
    // get class .content
    console.log(params);
    content.style.background = params.colorContent;
    if (params.colorB) {
        titlebar.style.background = `linear-gradient(to right, ${params.colorA}, ${params.colorB})`;
    } else {
        titlebar.style.background = params.colorA;
    }
}

window.addEventListener('load', initializeWindow);
