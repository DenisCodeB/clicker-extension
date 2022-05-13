import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = props => {
    return (
        <li className={props.className}>
            <Link to={props.path}>{props.name}</Link>
        </li>
    )
}

export default ListItem