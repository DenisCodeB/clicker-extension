import { speedUp } from './animCircle'
import { sendDataToContent } from './sendDataToContent'
import { setAllow } from './setAllow'

const radioCheck = () => {
    let inputOne = document.getElementById('radio-one')
    let inputTwo = document.getElementById('radio-two')
    if (inputOne.checked) {
        speedUp()
        sendDataToContent(setAllow('one'), 'howMuchSelected')
        window.close()
    } else if (inputTwo.checked) {
        speedUp()
        sendDataToContent(setAllow('two'), 'howMuchSelected')
        window.close()
    }
}

export { radioCheck }