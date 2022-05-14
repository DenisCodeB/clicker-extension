let anim
const animCircle = () => {
    const circle = document.querySelector('.settingImg')
    const animConfig = {
        duration: 30000,
        iterations: Infinity
    }
    const animStyles = [
        {transform: 'translateX(-50%) rotate(0deg)'},
        {transform: 'translateX(-50%) rotate(360deg)'}
    ]
    anim = circle.animate(animStyles, animConfig)
}
const speedUp = () => {
    anim.playbackRate *= 30
    setTimeout(() => anim.playbackRate = 1, 200)
}

export { animCircle }
export { speedUp }