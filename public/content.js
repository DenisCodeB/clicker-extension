// Confirmation number of selected elements
// and define element
chrome.storage.local.get('howMuchSelected', item => {
    if (item.howMuchSelected) {
        console.log(item.howMuchSelected)
        if (item.howMuchSelected[0] === 'one') {
            window.numberOfElements = 1
            console.log(window.numberOfElements)
            document.addEventListener('click', e => {
                window.elem = e.target
                console.log('Elem = ', window.elem)
            }, {once: true})
        } else if (item.howMuchSelected[0] === 'two') {
            window.numberOfElements = 2
            console.log(window.numberOfElements)
            const selectElem = e => {
                if (window.elem1) {
                    if (!window.elem2) {
                        window.elem2 = e.target
                        console.log('Elem2 = ', window.elem2)
                        document.removeEventListener('click', selectElem)
                    }
                } else {
                    window.elem1 = e.target
                    console.log('Elem1 = ', window.elem1)
                }
            }
            document.addEventListener('click', selectElem)
        }
        chrome.storage.local.remove('howMuchSelected')
    }
})

// Get data from popup to handle input data (time and clicks)
chrome.storage.local.get('inputData', items => {

    // Function for one selected element
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
            window.elem = ''
        }, totalTime + 550)
    }

    // Function for two selected elements
    const clickerTwice = (elem1, elem2, delay, totalTime) => {
        let interval1 = null,
            interval2 = null

        setTimeout(() => {
            elem1.click()
            console.log('Click1')
            interval1 = setInterval(() => {
                elem1.click()
                console.log('Click1')
            }, delay * 2)
            window.interval1 = interval1
        }, delay + 500)

        setTimeout(() => {
            interval2 = setInterval(() => {
                elem2.click()
                console.log('Click2')
            }, delay * 2)
            window.interval2 = interval2
        }, 500)

        setTimeout(() => {
            clearInterval(interval1)
            clearInterval(interval2)
            window.elem1 = ''
            window.elem2 = ''
        }, totalTime + 550)
    }

    if (items.inputData) {
        let totalTime = Number.parseInt(items.inputData[0]),
            totalClicks = Number.parseInt(items.inputData[1]),
            delay = 1000 / totalClicks
        console.log(window.numberOfElements, window.elem, window.elem1, window.elem2, delay, totalTime, totalClicks)
        if (window.numberOfElements === 1) {
            let elem = window.elem
            clicker(elem, delay, totalTime)
        } else if (window.numberOfElements === 2) {
            let elem1 = window.elem1,
                elem2 = window.elem2
            clickerTwice(elem1, elem2, delay, totalTime)
        }
        chrome.storage.local.remove('inputData')
    }
})

// Immediately stop clicker
chrome.storage.local.get('isCanselImmediately', item => {
    if (item.isCanselImmediately) {
        if (window.numberOfElements === 1) {
            let interval = window.interval
            clearInterval(interval)
        } else if (window.numberOfElements === 2) {
            let interval1 = window.interval1,
                interval2 = window.interval2
            clearInterval(interval1)
            clearInterval(interval2)
        }
        chrome.storage.local.remove('isAllowListenClicks')
    }
})