import React,{useState,useEffect} from 'react'
import Axios from 'axios';

function API2() {
    const [data,setdata]=useState(0);
   
useEffect(() => {
    Axios.get('https://api.covid19api.com/')
    .then(res=>{
        console.log(res.data.countriesRoute.Path)
      
    })
    
},[])
    return (
        <div>
            
        </div>
    )
}

export default API2
