import { FormLabel , Input ,Checkbox, Button,Box,Select,} from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
import "./CreateGroup.css"
import { useState , useRef ,useReducer} from "react"
import { Spinner } from '@chakra-ui/react'

function getfetch(id){
    const options = {
      method: 'GET',
      headers: {
        Token: '855c793ddcbcb40398f7f4e73c6f7f3bdef0b267aa4b346d76d0ab155291dffb9ffa300f52bb59ac'
      }
    };
    
    return fetch(`https://api.gappa.io/v1/devices/64b6096d9e90813e06a35453/groups/${id}/invite`, options)
      .then(response => response.json())
      .then(response => response)
      .catch(err => console.error(err));
}

function postfetch(name,description,objects){
  console.log(objects)
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Token: '855c793ddcbcb40398f7f4e73c6f7f3bdef0b267aa4b346d76d0ab155291dffb9ffa300f52bb59ac'},
        body: JSON.stringify({
          name: name,
          description:description,
          participants:objects,
          permissions: { edit: "admins", send: "all" }
        })
      };
      
      return fetch('https://api.gappa.io/v1/devices/64b6096d9e90813e06a35453/groups', options)
        .then(response => response.json())
        .then(response => response)
}

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_OBJECT':
      return [...state, action.payload];
    default:
      return state;
  }
};

const CreateGroup=()=>{
    const [name,setname]=useState("");
    const [description,setdescription]=useState("")
    const [checked, setChecked] =useState(false);
    const toast = useToast();
    const [loading,setloading]=useState(false);
    const [showform,setshowform]=useState(true)
    const [response,setresponse]=useState(false);
    const [link,setlink]=useState("");
    const [adminlink,setadminlink]=useState(false)
    const textRef = useRef();
    const [adminval,setadminval]=useState(0)
    const [state, dispatch] = useReducer(reducer, initialState);
    const [objects, setObjects] = useState([]);

  const handleInputChange = (index, event) => {
    if(objects.lnegth==0){
      const updatedObjects=[]
      updatedObjects[index] = { ...updatedObjects[index], phone:event.target.value ,admin:true};
      setObjects(updatedObjects);
      //console.log(updatedObjects)
    }else{
    const updatedObjects = [...objects];
    updatedObjects[index] = { ...updatedObjects[index], phone: event.target.value ,admin:true};
    setObjects(updatedObjects);
    //console.log(updatedObjects)
    } 
  };

 

    const numberArray = Array.from({ length: adminval }, (_, index) => index);

    const handleChange = () => {
      setChecked(!checked);
    };

    const handleCopy = () => {
      const textToCopy = link;
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          toast({
            title: 'Text Copied.',
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        })
        .catch((error) => {
          console.error('Error copying text: ', error);
        });
    };

    const handleadmin=()=>{
      setadminlink(!adminlink)
      setadminval(0)
    }

    const CreateGroup=()=>{
      //console.log(objects)
      if(name!=="" && description!==""){
        setloading(true)
        setshowform(false)
        postfetch(name,description,objects).then((r)=>{
          console.log(r)
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          getfetch(r.id).then((r)=>{
            setloading(false)
            setlink(r.url)
            setresponse(true)
          })
        })
      }
    }

    

    return(
        <div className="creategroup">
            {loading&&<div style={{height:"60vh",display:"flex",alignItems:"center",justifyContent:"center"}}><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500'size='xl'/></div>}

            {showform&&<div className="div">
              <FormLabel>Enter Group Name</FormLabel>
              <Input focusBorderColor="black" type='text' value={name} onChange={(e)=>setname(e.target.value)} /><br/>
              <FormLabel>Enter Description</FormLabel>
              <Input focusBorderColor="black" type='text' value={description} onChange={(e)=>setdescription(e.target.value)} /><br/>
              
              <Checkbox>Add me as Admin</Checkbox><br/>

              <Checkbox onChange={()=>handleadmin()}>Add More Admin</Checkbox><br/>
              {adminlink&&<div><FormLabel>Select Number of Admin</FormLabel>
              <Select focusBorderColor="black"  placeholder='Select Number of Admin' onChange={(e)=>setadminval(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </Select></div>}

              {numberArray.map((index)=><><FormLabel>Enter Number {index+1}</FormLabel><Input type="tel" value={objects.name}
              onChange={(event) => handleInputChange(index, event)} focusBorderColor="black" /></>)}


              <Checkbox onChange={()=>handleChange()}>Paid Group</Checkbox><br/>
              {checked &&<div><FormLabel>Amount to join Group</FormLabel>
              <Input focusBorderColor="black" type='number'  /></div>}
              <Button colorScheme='blue' onClick={()=>CreateGroup()}>Create Group</Button>
        </div>}
        

        {response&&<><h1 style={{fontSize:"20px",fontWeight:"bold",marginTop:"50px"}}>Congrats Your Whatapp Group as been Created</h1>  
        <Box className="response" style={{border:"1px solid black",borderRadius:"5px",padding:"10px",marginTop:"20px"}}>
        {link}
        </Box>
        <Button onClick={handleCopy} colorScheme='blue' width={"200px"}>Copy</Button></>}
        </div>
    )
}

export default CreateGroup
