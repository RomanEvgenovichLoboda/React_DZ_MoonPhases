import '../App/App.css';
import React, {useState, useEffect} from "react";

const Timer = (props) =>{

    const [[hr, min, sec,ms], setTime] = useState([props.hours, props.minutes, props.seconds, 998]);
    const [timeLess,timeLessChange] = useState(false);
    const [isCounting,setIsCounting] = useState(true);
    
    const timerTick = () => {
        if(hr == 0 && min == 0 && sec == 30 && ms == 0){
            timeLessChange(true);
        }
        if (hr <= 0 && min <= 0 && sec <= 0 && ms <= 0){
            clearInterval(this.timer);
        }
        else if (min <= 0 && sec <= 0 && ms <= 0) {
            setTime([hr - 1, 59, 59, 998]);
        }
        else if (sec <= 0 && ms <= 0) {
            setTime([hr, min - 1, 59, 998]);
        }
        else if (ms <= 0) {
          setTime([hr, min, sec-1, 998]);
       }
        else {
            setTime([hr, min, sec, ms-2]);
        }      
    };
      
    function Restart(){
        setTime([props.hours, props.minutes, props.seconds, 998]);
        timeLessChange(false);
    }
    
    useEffect (() =>{
        const timer = setInterval(() => {
            isCounting &&
            timerTick()
        }, 1);
        return () => {
            clearInterval(timer);
        }
    });

    return(
      <div className="container"> 
        <h4>Timer - {props.name} :</h4>
        <div style={{color: !timeLess ? "white" : "red"}}>
          <div className='div__time'>{`${hr.toString().padStart(2, '0')}`} :</div>
          <div className='div__time'> {`${min.toString().padStart(2, '0')}`} :</div>
          <div className='div__time'> {`${sec.toString().padStart(2, '0')}`} :</div>
          <div className='div__time'> {`${ms.toString().padStart(3,'0')}`}</div>
        </div>
        {isCounting ? (<button className='btn' onClick={() => setIsCounting(false)}>Pause</button>):
        (<button className='btn' onClick={() => setIsCounting(true)}>Start</button>)}
          <button className='btn' onClick={Restart}>Restart</button>
      </div>
    );
};

export default Timer;
