const cleanInputs = () => {
    const inputs = document.getElementsByTagName('input')
    for (const elem of inputs) {
        elem.value = ''
    }
}

export { cleanInputs }