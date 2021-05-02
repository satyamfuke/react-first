import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
function CreateUser(){
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const create=()=>{
        let data = {name,age}
        console.log(data);
    }
    return(
        <div>
            <h1>Make a new User</h1>
            <input type="text" onChange = {(e)=>setName(e.target.value)} name="Username" value={name} />
            <input type="text" onChange = {(e)=>setAge(e.target.value)} name="Age" value={age} />
            <Button variant="success" onClick={create}>Create User</Button>{' '}
        </div>
    )
}
export default CreateUser;