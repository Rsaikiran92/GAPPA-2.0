import { useEffect, useState } from "react";
import {Button, FormLabel,Input,Select} from "@chakra-ui/react"
import "./UpdateGroups.css"

const getdata=()=>{
    let url = 'https://api.gappa.io/v1/devices/64b6096d9e90813e06a35453/groups';

let options = {
  method: 'GET',
  headers: {
    Token: '855c793ddcbcb40398f7f4e73c6f7f3bdef0b267aa4b346d76d0ab155291dffb9ffa300f52bb59ac'
  }
};

return fetch(url, options)
  .then(res => res.json())
  .then(json => json)
  .catch(err => console.error('error:' + err));
}

const editdata=(groupid,description)=>{
    let url = `https://api.gappa.io/v1/devices/64b6096d9e90813e06a35453/groups/${groupid}`;

let options = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    Token: '855c793ddcbcb40398f7f4e73c6f7f3bdef0b267aa4b346d76d0ab155291dffb9ffa300f52bb59ac'
  },
  body: JSON.stringify({
    description:description,
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
}


function UpdateGroups(){
    const [groups,setgroups]=useState([])
    const [groupid,setgroupid]=useState("")
    const [description,setdescription]=useState("")

    useEffect(()=>{
        getdata().then((r)=>{
            console.log(r)
            setgroups(r)
        })
    },[])

    const handleedit=()=>{
        editdata(groupid,description)
        setdescription("")
        setgroupid("")
    }

    return(
    <div className="updateinfo">
        <FormLabel>Select Group</FormLabel>
        <Select focusBorderColor="black" value={groupid}  placeholder='Select Group' onChange={(e)=>setgroupid(e.target.value)}>
            {groups.map((i)=><option key={i.id} value={i.wid}>{i.name}</option>)}
        </Select>
        <FormLabel>Enter Description</FormLabel>
        <Input focusBorderColor="black" type='text' value={description} onChange={(e)=>setdescription(e.target.value)} /><br/>
        <Button onClick={()=>handleedit()}>Edit</Button>
    </div>
    )
}

export default UpdateGroups