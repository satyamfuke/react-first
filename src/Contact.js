import React,{useEffect,useState} from 'react';

function Contact(props){
    let data = 'Contact US';
    const [val,setVal]=useState('Satyam')
    const test=(e)=>{
        console.log(e.target.value)
        setVal(e.target.value)
    }
    return(
        <div>
            <h1>{data}</h1>
            <input type="text" onChange={test} value={val}></input>
            <button onClick={()=>alert(val)}>Click Here</button>
        </div>
    )
}

export default Contact;