import { useEffect, useState } from "react";
import {Button, FormLabel,Input,Select} from "@chakra-ui/react"


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

const editdata=(groupid,name)=>{
    const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Token: '855c793ddcbcb40398f7f4e73c6f7f3bdef0b267aa4b346d76d0ab155291dffb9ffa300f52bb59ac'
        },
        body: '{"url":"https://picsum.photos/200"}'
      };
      
      fetch(`https://api.gappa.io/v1/devices/64b6096d9e90813e06a35453/groups/${groupid}/image`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
};



function UpdateImage(){
    const [groups,setgroups]=useState([])
    const [groupid,setgroupid]=useState("")
    const [description,setdescription]=useState("")
    const [name,setname]=useState("");

    useEffect(()=>{
        getdata().then((r)=>{
            console.log(r)
            setgroups(r)
        })
    },[])

    const handleedit=()=>{
        editdata(groupid,name)
        setdescription("")
        setgroupid("")
    }

    return(
    <div className="updateinfo">
        <FormLabel>Select Group</FormLabel>
        <Select focusBorderColor="black" value={groupid}  placeholder='Select Group' onChange={(e)=>setgroupid(e.target.value)}>
            {groups.map((i)=><option key={i.id} value={i.wid}>{i.name}</option>)}
        </Select>
        <FormLabel>Enter Image url</FormLabel>
        <Input focusBorderColor="black" type='text' value={name} onChange={(e)=>setname(e.target.value)} />
        <Button onClick={()=>handleedit()}>Edit</Button>
    </div>
    )
}

export default UpdateImage