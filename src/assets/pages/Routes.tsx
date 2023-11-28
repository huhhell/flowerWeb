import {Route, Routes} from "react-router-dom";
import Main from "./Main.tsx";

export default () => {
    return <Routes>
        <Route path='/' element={<Main/>}/>
    </Routes>
}