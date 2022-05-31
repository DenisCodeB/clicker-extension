const sendDataToContent = (elemArr, keyStorage) => {
    let dataArr = []
    for (const elem of elemArr) {
        dataArr.push(elem.value)
    }
    let curTabId = null
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        curTabId = tabs[0].id;
    })
    chrome.storage.local.set({
        [keyStorage]: dataArr
    }, () => {
        chrome.scripting.executeScript({
            target: {tabId: curTabId},
            files: ['content.js']
        })
    })
}

export { sendDataToContent }