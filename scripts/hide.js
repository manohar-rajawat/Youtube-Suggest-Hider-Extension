domReady(() => {
    let isEnabled;
    chrome.storage.sync.get(['isEnabled'],function (value) {
        isEnabled = value['isEnabled'];
        if(isEnabled){
            removeTiles();
        }
    })
})

function removeTiles() {
    const targetNode = document.getElementsByClassName('html5-video-player')[0]
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.attributeName == 'class' && mutation.type == 'attributes') {
                if (mutation.target.classList.contains('ytp-ce-element-show')) {
                    mutation.target.classList.remove('ytp-ce-element-show')
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
}

function domReady(callback) {
    if (document.readyState === 'complete')
        callback();
    else
        window.addEventListener('load', callback);
}