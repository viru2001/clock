import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import './Stopwatch.css'
import { Table } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import Spacer from 'react-add-space';


export const Counter = () => {


    const [time, settime] = useState(0)
    const [timerOn, settimerOn] = useState(false)
    const [isStarted, setisStarted] = useState(false)
    const [isPaused, setisPaused] = useState(false)
    const [lapTime, setlapTime] = useState(0)
    const [lapTimerOn, setlapTimerOn] = useState(false)
    const [lapLogs, setlapLogs] = useState([])
   


    const start = () => {
        settimerOn(true)
        setisStarted(true)
        setlapTimerOn(true)
    }

    const pause = () => {
        settimerOn(false)
        setisStarted(false)
        setisPaused(true)
        setlapTimerOn(false)
    }

    const resume = () => {
        settimerOn(true)
        setisStarted(true)
        setisPaused(false)
        setlapTimerOn(true)
    }

    const reset = () => {
        settime(0)
        settimerOn(false)
        setisStarted(false)
        setisPaused(false)

        setlapTime(0)
        setlapTimerOn(false)
        setlapLogs([])
    }

    const lap = () => {

        let sno;
        if (lapLogs.length === 0) {
            sno = 0
        }
        else {
            sno = lapLogs[lapLogs.length - 1].sno + 1;
        }

        const currentLap = {
            sno: sno,
            lhh: ("0" + Math.floor((lapTime / 60000) / 60)).slice(-2),
            lmm: ("0" + Math.floor((lapTime / 60000) % 60)).slice(-2),
            lss: ("0" + Math.floor((lapTime / 1000) % 60)).slice(-2),

            lms: ("00" + (lapTime % 1000)).slice(-3),
            hh: ("0" + Math.floor((time / 60000) / 60)).slice(-2),
            mm: ("0" + Math.floor((time / 60000) % 60)).slice(-2),
            ss: ("0" + Math.floor((time / 1000) % 60)).slice(-2),
        
            ms: ("00" + (time % 1000)).slice(-3)

        }
        setlapLogs([...lapLogs, currentLap])   
        setlapTime(0)

    }

    const deleteLog = (lapLog) =>{
            let tempLaplogs = lapLogs.filter( (log) =>{
                    return log !== lapLog
            } ) 
            setlapLogs(tempLaplogs)      
    }

    useEffect(() => {
        let overallInterval = null

        if (timerOn) {
            overallInterval = setInterval(() => {
                settime(prevTime => prevTime + 10)
            }, 10)
        }
        else {
            clearInterval(overallInterval)
        }
        return () => {
            clearInterval(overallInterval)

        }
    }, [timerOn])

    useEffect(() => {
        let lapInterval = null
        if (lapTimerOn) {
            lapInterval = setInterval(() => {
                setlapTime(prevLapTime => prevLapTime + 10)
            }, 10)
        }
        else {
            clearInterval(lapInterval)
        }
        return () => {
            clearInterval(lapInterval)
        }
    }, [lapTimerOn])

    return (
        <div id="mainBody">
            <Spacer amount={2} />
            <div id="counter">

                <div className="innerContainer">
                    <h1 className="hh">{("0" + Math.floor((time / 60000) / 60)).slice(-2)}</h1>
                </div>

                <div>
                    <h1 className="hh"> :</h1>
                </div>

                <div className="innerContainer">
                    <h1 className="mm">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</h1>

                </div>
                <div>
                    <h1 className="hh"> :</h1>
                </div>
                <div className="innerContainer">
                    <h1 className="ss"> {("0" + Math.floor((time / 1000) % 60)).slice(-2)}</h1>

                </div>
                <div>
                    <h1 className="hh"> :</h1>
                </div>
    
                <div className="innerContainer">
                    <h1 className="ms"> {("00" + (time % 1000)).slice(-3)}</h1>
                </div>

                <h1 className="whichTimer">hours</h1>
                <h1></h1>
                <h1 className="whichTimer">minutes</h1>
                <h1></h1>
                <h1 className="whichTimer">sec</h1>
                <h1></h1>
                <h1 className="whichTimer">mili sec</h1>
                
            </div>



            <div id="lapCounter">
                <div className="innerContainer">
                    <h1 className="lap-hh">{("0" + Math.floor((lapTime / 60000) / 60)).slice(-2)}</h1>
                </div>

                <div>
                    <h1 className="lap-hh"> :</h1>
                </div>

                <div className="innerContainer">
                    <h1 className="lap-mm">{("0" + Math.floor((lapTime / 60000) % 60)).slice(-2)}</h1>

                </div>
                <div>
                    <h1 className="lap-hh"> :</h1>
                </div>
                <div className="innerContainer">
                    <h1 className="lap-ss"> {("0" + Math.floor((lapTime / 1000) % 60)).slice(-2)}</h1>

                </div>
                <div>
                    <h1 className="lap-hh"> :</h1>
                </div>
            
                <div className="innerContainer">
                    <h1 className="lap-ms"> {("00" + (lapTime % 1000)).slice(-3)}</h1>
                </div>
            </div>



            <div id="controlButtons">
                {!isPaused && !isStarted && <Button variant="success" size="lg" onClick={start}>START</Button>}
                {!isPaused && isStarted && <Button variant="danger" size="lg" onClick={pause}>PAUSE</Button>}
                {isPaused && <Button variant="success" size="lg" onClick={resume}>RESUME</Button>}
                {isPaused && <Button variant="warning" size="lg" onClick={reset}>RESET</Button>}
                {!isPaused && isStarted && <Button variant="primary" size="lg" onClick={lap}>LAP</Button>}
            </div>
            <div id="tableContainer">
                {lapLogs.length > 0 ? <Table responsive id="lapTable">
                    <thead>
                        <tr>
                            <th>Lap</th>
                            <th>Lap Timing</th>
                            <th>Overall Timing</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>       

                        {lapLogs.map((log) => {
                            if(log){
                            return (               
                                <tr key={log.sno}>
                                    <td>{"#"+Number(log.sno+1)}</td>
                                    <td>{log.lhh + ":" + log.lmm + ":" + log.lss + ":" + log.lms }</td>
                                    <td>{log.hh + ":" + log.mm + ":" + log.ss + ":" + log.ms }</td>
                                    <td><DeleteIcon style={{color: "red"}}  onClick={()=> deleteLog(log)} /></td>
                                </tr>                              
                            )}
                            else{
                                return null
                            }
                            
                        })
                        }
                    </tbody>
                </Table> : null}
            </div>
        </div>
    )
}

export default Counter;
