chrome.storage.local.get('isAllowListenClicks', items => {
    const chooseElement = e => {
        e.preventDefault()
        e.stopPropagation()
        const elem = e.target
        console.log(elem)
        window.elem = elem
        document.removeEventListener('mousedown', chooseElement)
    }
    if (items.isAllowListenClicks) {
        document.addEventListener('mousedown', chooseElement)
        chrome.storage.local.remove('isAllowListenClicks')
    }
})

chrome.storage.local.get('inputData', items => {
    if (items.inputData) {
        let totalTime = items.inputData[0]
        let totalClicks = items.inputData[1]
        let delay = 1000 / totalClicks
        const elem = window.elem
        const interval = setInterval(() => {
            elem.click()
        }, delay)
        const timeout = setTimeout(() => {
            clearInterval(interval)
        }, totalTime)
        chrome.storage.local.remove('inputData')
    }
})