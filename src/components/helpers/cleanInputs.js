// Handle button click
// and clean all inputs
const cleanInputs = () => {
    const inputs = document.getElementsByTagName('input')
    for (const elem of inputs) {
        elem.value = ''
    }
    localStorage.setItem('InputTime', '')
    localStorage.setItem('InputClicks', '')
}

export { cleanInputs }