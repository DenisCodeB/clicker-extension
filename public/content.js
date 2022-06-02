// Get data from popup to choose DOM element
chrome.storage.local.get('isAllowListenClicks', items => {
    const chooseElement = e => {
        const elem = e.target
        console.log(elem)
        window.elem = elem
        document.removeEventListener('click', chooseElement)
    }

    if (items.isAllowListenClicks) {
        document.addEventListener('click', chooseElement)
        chrome.storage.local.remove('isAllowListenClicks')
    }
})

// Get data from popup to handle input data (time and clicks)
chrome.storage.local.get('inputData', items => {
    const clicker = (elem, delay, totalTime) => {
        let interval = null
        setTimeout(() => {
            interval = setInterval(() => {
                elem.click()
                console.log('click')
            }, delay)
            window.interval = interval
        }, 500)
        setTimeout(() => {
            console.log('Miss you')
            clearInterval(interval)
        }, totalTime + 510)
    }

    if (items.inputData) {
        let totalTime = Number.parseInt(items.inputData[0]),
            totalClicks = Number.parseInt(items.inputData[1]),
            delay = 1000 / totalClicks,
            elem = window.elem
        console.log(totalTime, totalClicks, delay)
        clicker(elem, delay, totalTime)
        chrome.storage.local.remove('inputData')
    }
})

// Immediately stop clicker
chrome.storage.local.get('isCanselImmediately', item => {
    if (item.isCanselImmediately) {
        const interval = window.interval
        clearInterval(interval)
        chrome.storage.local.remove('isAllowListenClicks')
    }
})