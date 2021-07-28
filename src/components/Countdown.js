import React, { useState, useEffect } from 'react'

import "./Countdown.css"
import { Button, Form } from 'react-bootstrap'
import Spacer from 'react-add-space';
import Sound from 'react-sound'
import reminderSong from "../songs/reminder.mp3"



export default function Countdown() {

  let options = []
  for (let i = 0; i <= 60; i++) {
    options.push({
      value: i,
      label: ("0" + i).slice(-2)
    })
  }

  // options=[{value: 'select'}, {value: 'other'}]
  // let options = []
  // for(let i =0)

  const [isStarted, setisStarted] = useState(false)
  const [isPaused, setisPaused] = useState(false)
  const [showTimer, setshowTimer] = useState(false)
  const [needToplaySound, setneedToplaySound] = useState(false)
  const [countdownOn, setcountdownOn] = useState(false)
  const [isEnded, setisEnded] = useState(false)

  const [playSong, setplaySong] = useState(false)

  const [hrs, sethrs] = useState(0)
  const [minutes, setminutes] = useState(0)
  const [seconds, setseconds] = useState(0)

  const start = () => {
    setisStarted(true)
    setshowTimer(true)
    setcountdownOn(true)
  }
  const pause = () => {
    setisPaused(true)
    setcountdownOn(false)
  }
  const resume = () => {
    setisPaused(false)
    setcountdownOn(true)
  }
  const cancel = () => {
    setisStarted(false)
    setshowTimer(false)
    sethrs(0)
    setminutes(0)
    setseconds(0)

    setcountdownOn(false)
    setplaySong(false)
    setisEnded(false)
  }


  useEffect(() => {
    let countdownInterval = null
    let flag
    if (countdownOn) {
      
      countdownInterval = setInterval(() => {
        setseconds((prevSeconds) => {
          if (prevSeconds !== 0) {
            return prevSeconds - 1
          }
          else if (prevSeconds === 0 && minutes > 0 ) {
            setminutes((prevMinutes) => {
              if (prevMinutes !== 0) {
                return prevMinutes - 1
              }
              else if(prevMinutes === 0 && hrs === 0){
                flag = 1
                return 0
              }
              else if(prevMinutes === 0 && hrs > 0){
                sethrs( (prevHrs) =>{
                  if(prevHrs !== 0 ){
                    setminutes(59)
                    return prevHrs - 1
                  }
                  else if(prevHrs === 0){
                    // flag = 1
                    setminutes(0)
                    return 0
                  }
                } )
              }
            })
            if(flag === 1){
              if(needToplaySound){
                setplaySong(true)
              }
              setisEnded(true)
              // console.log("Countdown Ended")
              return 0
            }
            return 59
          }
          // else if(prevSeconds === 0 && minutes === 0){
          //   console.log("Countdown Ended")
          //   return 0
          // }
          else{
            if(needToplaySound){
              setplaySong(true)
              setisEnded(true)
            }
            // console.log("Countdown Ended")
            
            return 0
          }
        })
      }, 1000)
    }
    else {
      clearInterval(countdownInterval)
    }
    return () => {
      clearInterval(countdownInterval)
    }
  }, [countdownOn])


  const handleSongLoading = ()=>{

  }
  const handleSongPlaying = ()=>{
    
  }
  const handleSongFinishedPlaying = ()=>{
    
  }

  return (

    <div id="outerContainer">
      <Spacer amount={2} />
      {showTimer === false ? <div id="select-grid">
        <h1>Hours</h1>
        <h1>Minutes</h1>
        <h1>Seconds</h1>
        <Form.Control
          className="selector"
          as="select"
          value={hrs}
          onChange={e => {
            // console.log("e.target.value", e.target.value);
            sethrs(Number(e.target.value));
          }}
        >
          <option value="" disabled>Select Hours</option>

          {
            options.map((option, index) => {
              return (<option key={index} value={option.value}>{option.label}</option>)
            })
          }

        </Form.Control>

        <Form.Control
          className="selector"
          as="select"
          value={minutes}
          onChange={e => {
            // console.log("e.target.value", e.target.value);
            setminutes(Number(e.target.value));
          }}
        >
          <option value="" disabled>Select Minutes</option>
          {
            options.map((option, index) => {
              return (<option key={index} value={option.value}>{option.label}</option>)
            })
          }

        </Form.Control>

        <Form.Control
          className="selector"
          as="select"
          value={seconds}
          onChange={e => {
            // console.log("e.target.value", e.target.value, typeof (e.target.value));
            setseconds(Number(e.target.value));
          }}
        >
          <option value="" disabled>Select Seconds</option>
          {
            options.map((option, index) => {
              return (<option key={index} value={option.value}>{option.label}</option>)
            })
          }

        </Form.Control>




      </div> :
        <div id="timer">

          <div className="innerContainer">
            <h1 className="countdown-hh">{("0" + hrs).slice(-2)}</h1>
          </div>

          <div>
            <h1 className="countdown-hh"> :</h1>
          </div>

          <div className="innerContainer">
            <h1 className="countdown-mm">{("0" + minutes).slice(-2)}</h1>

          </div>
          <div>
            <h1 className="countdown-hh"> :</h1>
          </div>
          <div className="innerContainer">
            <h1 className="countdown-ss"> {("0" + seconds).slice(-2)}</h1>

          </div>
        </div>}

      <div id="controlButtons">
        {!isStarted && <Button size="lg" variant="success" onClick={start}>START</Button>}
        {!isEnded && isStarted && !isPaused && <Button size="lg" variant="warning" onClick={pause}>PAUSE</Button>}
        {!isEnded && isStarted && isPaused && <Button size="lg" variant="warning" onClick={resume}>RESUME</Button>}
        {isStarted && <Button size="lg" variant="danger" onClick={cancel}>CANCEL</Button>}

        {!isStarted && <Form.Check 
        onClick={ e => {
          // console.log(e.target.checked)
          setneedToplaySound(e.target.checked)
          // console.log(needToplaySound)
        }}
        className="sound-checkbox" type="checkbox" label="Play sound when countdown ends" />}

      </div>

      <Sound
            url = {reminderSong}
            playStatus = { playSong ? Sound.status.PLAYING : Sound.status.STOPPED }
            playFromPosition = { 300 /* in milliseconds */}
            onLoading = { handleSongLoading }
            onPlaying = { handleSongPlaying }
            onFinishedPlaying = { handleSongFinishedPlaying }
              />
    </div>

  )
}


