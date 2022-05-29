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
    setTimeout(() => anim.playbackRate = 1, 500)
}
const twitch = () => {
    let count = 0
    const twitching = () => {
        if (count !== 2) {
            count++
            anim.playbackRate *= 50
            setTimeout(() => anim.playbackRate = 1, 40)
        } else {
            count = 0
            clearInterval(interval)
        }
    }
    const interval = setInterval(twitching, 100)
}

export { animCircle, speedUp, twitch }