import { Outlet } from "react-router-dom"
import { Navigation } from "../Navigation/NavigationComponent"


export const Layout = () => {
    return (
        <>
        <Navigation/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}