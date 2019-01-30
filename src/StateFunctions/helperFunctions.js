import React from 'react'

export const getCellOnStatus = status => {
    if(status === 'default'){
        return <div className="default"></div>
    }
    else if(status === 'red'){
        return <div className="red-cross"></div>
    }
    
    return <div className="green-dot"></div>
}