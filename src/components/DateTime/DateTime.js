import React,{useState,useEffect} from 'react'
import DateTimePicker from 'react-datetime-picker'
import { Button } from 'antd';
import './Date.css'

function DateTime() {
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState();
    const [duration, setDuration] = useState();
    // useEffect(()=>{
    //     // let from_date = fromDate.getTime()
    //     // let to_date =new Date(parseInt(from_date) + parseInt(duration))
    //     // console.log(from_date)
    //     // console.log(to_date)
    //     // setToDate(to_date)
    //     if(typeof(duration)!=="undefined"){console.log(typeof(duration))
    //     let from_date = fromDate.getTime()
    //     let to_date =new Date(parseInt(from_date) + parseInt(duration))
    //     console.log(from_date)
    //     console.log(to_date)
    //     setToDate(to_date)}
    // },[])
    const handleBtn = ()=>{
        if(typeof(duration)!=="undefined"){
            console.log(typeof(duration))
            let from_date = fromDate
            let to_date = new Date().setDate(from_date.getDate() + parseInt(duration))
            console.log(typeof(duration))
            console.log(from_date)
            console.log(new Date(to_date))
            setToDate(new Date(to_date))
        }
        
    }
    return (
        <div className="date_container">
            <div className="from_date">
                <p>From Date:</p>
               <DateTimePicker value={fromDate} onChange={(value)=>setFromDate(value)} />
            </div>
            <div className="duration">
                <p>Duration :</p>
                <input type="number" placeholder="Duration in days" value={duration} onChange={(e)=>setDuration(e.target.value)}/>
            </div>
            <div className="from_date">
                <p>To Date:</p>
               <DateTimePicker value={toDate} onChange={(value)=>setToDate(value)}/>
            </div>
            <div>
                <Button type="primary" size="large" onClick={handleBtn} >Set to date</Button>
            </div>
        </div>
    )
}

export default DateTime
