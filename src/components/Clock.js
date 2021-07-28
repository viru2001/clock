import React, { useState } from 'react'
import './clock.css'

function Clock() {

    const [currTime, setcurrTime] = useState(new Date().toLocaleTimeString())
    const [currDate, setcurrDate] = useState(new Date().toDateString())

    setInterval(() => {
        setcurrTime(new Date().toLocaleTimeString())
        setcurrDate(new Date().toDateString())
    }, 1000)

    return (
        <div className="d-flex justify-content-center align-items-center" id="main-div" >
            <div className="d-flex flex-column" id="inner-div" >
                <h1 id="date" >{currDate}</h1>
                <h1 id="time">{currTime}</h1>
            </div>
        </div>
    )
}

export default Clock
