import { NavLinkContainer, Logo } from "./components"
const items = [
    { name: "Motivation", route: "/#motivation"},
    { name: "Existing Solutions", route: "/#existing-solutions"},
    { name: "Features", route: "/#features"},
    { name: "Vision", route: "/#vision"},
    { name: "Contact Us", route: "/#contact"}
]

const NavBar = () => {
    return <>
        <nav className="flex bg-background z-3 h-25 items-center justify-between shadow-xs shadow-shadow fixed top-0 left-0 right-0 w-dvw pl-3">
            <Logo />
            <NavLinkContainer items={items}/>
        </nav>
    </>

}

export { NavBar }

