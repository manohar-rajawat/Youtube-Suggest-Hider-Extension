chrome.runtime.onInstalled.addListener(()=> {
    chrome.storage.sync.set({isEnabled: false})
})
chrome.runtime.onMessage.addListener(data => {
    if(data.type === 'toggle'){
        console.log(data);
        chrome.storage.sync.set({isEnabled: data.value})
    }
})