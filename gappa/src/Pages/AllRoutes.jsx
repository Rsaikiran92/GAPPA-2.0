import { Route, Routes } from "react-router-dom"
import CreateGroup from "./CreateGroup"
import UpdateGroups from "./UpdateGroups/UpdateGroups"
import UpdateName from "./UpdateName/UpdateName"

function AllRoutes(){
    return(<>
    <Routes>
        <Route path="/creategroup" element={<CreateGroup/>}></Route>
        <Route path="/updateinfo" element={<UpdateGroups/>}></Route>
        <Route path="/updatename" element={<UpdateName/>}></Route>
    </Routes>
    </>)
}

export default AllRoutes