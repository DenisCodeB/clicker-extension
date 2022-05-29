import React from 'react'
import { Link } from 'react-router-dom'
import { speedUp } from '../../helpers/animCircle' 
import { useSmoothSliding } from '../../helpers/useSmoothSliding'

const ListItem = props => {
    const smoothSliding = useSmoothSliding()
    
    return (
        <li className={props.className}>
            <Link to={props.path} onClick={e => {
                    e.preventDefault()
                    const pathname = e.target.getAttribute('href')
                    smoothSliding(e, pathname);
                    e.allow && speedUp()
                }}>{props.name}</Link>
        </li>
    )
}

export default ListItem