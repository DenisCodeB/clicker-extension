const setAllow = val => {
    const obj = new Object(true)
    obj.value = val
    const isAllow = [obj]    
    return isAllow
}

export { setAllow }