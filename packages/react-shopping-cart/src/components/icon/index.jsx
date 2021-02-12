import React from 'react'
import './index.scss'

function Icon(props) {
    const {icon} = props;

    const style = {
        fontSize: '1em',
        color: '',
    }
    return (
        <span className='icon-container' style={style}>
            {React.createElement(icon)}
        </span>
    )
}

export default Icon;
