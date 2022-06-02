const setAllow = bool => {
    const obj = new Object(true)
    obj.value = bool
    const isAllow = [obj]    
    return isAllow
}

export { setAllow }