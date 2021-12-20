domReady(() => {
    bindCheckBox();
})

function bindCheckBox() {
    let box = document.getElementById('tile');
    chrome.storage.sync.get(['isEnabled'],function (value) {
        box.checked = value['isEnabled'];
    })
    box.addEventListener('change', function () {
        chrome.runtime.sendMessage('',{
            type: 'toggle',
            value: this.checked
        })
    })
}

function domReady(callback) {
    if (document.readyState === 'complete')
        callback();
    else
        window.addEventListener('load', callback);
}
