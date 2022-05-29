import { useNavigate } from 'react-router-dom'
import { twitch } from './animCircle'

const useSmoothSliding = () => {
    const navigate = useNavigate()
    const smooth = (e, pathname) => {
        if (e.target.href !== document.location.href) {
            e.preventDefault()
            console.log(`Prevented ${e?.type} event`)
            const mainContent = document.getElementById('main')
            mainContent.classList.toggle('disappear')
            const img = document.querySelector('.img')
            img.classList.toggle('change-img')
            // Create new custom event method 'allow'
            // for checking of matching url-s
            e.allow = true
            setTimeout(() => {
                navigate(pathname)
            }, 500)
        } else {
            e.allow = false
            twitch()
        }
    }
    return smooth
}

export { useSmoothSliding }