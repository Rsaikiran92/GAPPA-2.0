
import "./Sidebar.css"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import {ChevronRightIcon,ChevronDownIcon} from "@chakra-ui/icons"
import { useState } from "react"

const Sidebar=()=>{
  const [val,setval]=useState(true)
  
    return(
        <div className='sidebar'>
          <Menu>
            <MenuButton as={Button} onClick={()=>setval(!val)} rightIcon={val?<ChevronRightIcon/>:<ChevronDownIcon/>}>
              Dashboard
            </MenuButton>
            <MenuList>
              <MenuItem>Create Groups</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} onClick={()=>setval(!val)} rightIcon={val?<ChevronRightIcon/>:<ChevronDownIcon/>}>
              Group
            </MenuButton>
            <MenuList>
              <MenuItem>Create Groups</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} onClick={()=>setval(!val)} rightIcon={val?<ChevronRightIcon/>:<ChevronDownIcon/>}>
              Templates
            </MenuButton>
            <MenuList>
              <MenuItem>sa</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} onClick={()=>setval(!val)} rightIcon={val?<ChevronRightIcon/>:<ChevronDownIcon/>}>
              Analytics
            </MenuButton>
            <MenuList>
              <MenuItem>sa</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} onClick={()=>setval(!val)} rightIcon={val?<ChevronRightIcon/>:<ChevronDownIcon/>}>
              Account
            </MenuButton>
            <MenuList>
              <MenuItem>sa</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} onClick={()=>setval(!val)} rightIcon={val?<ChevronRightIcon/>:<ChevronDownIcon/>}>
              Change Plan
            </MenuButton>
            <MenuList>
              <MenuItem>sa</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </div>
    )
}

export default Sidebar