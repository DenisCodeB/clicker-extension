alert('Select any element')
const preventEvent = (event) => {
    event.preventDefault()
    const elem = event.target
    alert(`Event prevented: ${event.type}`)
    console.log(elem)
    window.removeEventListener(`${event.type}`, preventEvent)
    elem.click()
}
window.addEventListener('mousedown', preventEvent)

