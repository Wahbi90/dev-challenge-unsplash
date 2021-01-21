import React from 'react'

const Large = ({selected}) => {
    return (
        <div className="large">
            <img src={ selected } alt="large pic" />
        </div>
    )
}

export default Large;