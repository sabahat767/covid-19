import React,{useState,useEffect} from 'react'
import '../App.css';
import Axios from 'axios'
import ImgMediaCard from './MediaCard';
import { ImportantDevices } from '@material-ui/icons';

function API() {
    const [confirmed,setconfirmed]=useState(0);
    const [recovered,setrecovered]=useState(0);
    const [deaths,setdeaths]=useState(0);
useEffect(() => {
    Axios.get('https://covid19.mathdro.id/api')
    .then(res=>{
        console.log(res.data)
       // console.log(res.data.confirmed)// data mei mojod att k name dhk k likhte get krne k lye .data k sath
        setconfirmed(res.data.confirmed.value) //set krwadia condirm k variable m
        //console.log(res.data.recovered)
        setrecovered(res.data.recovered.value)
        //console.log(res.data.deaths)
        setdeaths(res.data.deaths.value)
    })
    
},[])
    return (
        <div >
            <div style={{position:'absoulte'}}>
            <ImgMediaCard  text='Confirmed Cases' value={confirmed}  color='#F0C5D5'   />
            </div>
            <div style={{position:'absoulte'}}>

      <ImgMediaCard text='Recovered Cases' value={recovered} color='#F5C9B2' />
      </div>
      <div style={{position:'absoulte'}}>

      <ImgMediaCard text='Death Cases' value={deaths} color='#8AC0DE' />
           </div>
        </div>
    )
}

export default API
