import "./Sidebar.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Button
  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"  

function Sidebar1(){
    const nav=useNavigate()
    return(<div className="sidebar">
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Dashboard
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem style={{width:"100%"}}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Groups
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel style={{width:"100%"}}>
      <Button onClick={()=>nav("/creategroup")} width={"100%"} colorScheme='blue' className="text" style={{fontSize:"15px"}}>
        Create Group
      </Button>
      <Button onClick={()=>nav("/updateinfo")} colorScheme='blue' width={"100%"}  className="text" style={{fontSize:"15px"}}>
        Edit Group Info
      </Button>
      <Button onClick={()=>nav("/updateimage")} colorScheme='blue' width={"100%"}  className="text" style={{fontSize:"15px"}}>
        Edit Group Image
      </Button>
      <Button className="text" colorScheme='blue' width={"100%"}  style={{fontSize:"15px"}}>
        Add Tag
      </Button>
      <Button className="text" colorScheme='blue' width={"100%"}  style={{fontSize:"15px"}}>
        Remove Tag
      </Button>
      <Button onClick={()=>nav("/updatename")} className="text" colorScheme='blue' width={"100%"} style={{fontSize:"15px"}}>
        Change Name
      </Button>
      <Button className="text" colorScheme='blue' width={"100%"} style={{fontSize:"15px"}}>
        Change Group Type
      </Button>
      <Button className="text" colorScheme='blue' width={"100%"} style={{fontSize:"15px"}}>
        Promote member
      </Button>
      <Button className="text" colorScheme='blue' width={"100%"} style={{fontSize:"15px"}}>
        Demote member
      </Button>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Template
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Change Plan
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Analytics
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Account
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>)
}

export default Sidebar1