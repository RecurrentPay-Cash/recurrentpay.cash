import { Outlet } from "react-router-dom"
import { NavBar } from "./components"

export const BaseLayout = () => {

    return <>
        <NavBar />
        <Outlet />
    </>
}

