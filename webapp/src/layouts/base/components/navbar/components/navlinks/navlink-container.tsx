import { NavLink } from "./navilink"
import { useState } from "react"
import isOpenIcon from "/src/assets/icons/close.svg"
import isNotOpenIcon from "/src/assets/icons/hamburguer-menu.svg"
type NavLinkContainerProps = {
    items: {
        name: string,
        route: string
    }[]
}

const NavLinkContainer = ({ items }: NavLinkContainerProps) => {

    const [menuIsOpened, setMenuIsOpened] = useState(false)
    const isOpenedClasses = "pt-25 w-dvw h-dvh absolute top-0 left-0 z-4 bg-background flex-col justify-items-strech"
    const isNotOpenedClasses = "mx-5 lg:mx-10 w-full  flex-row  hidden md:flex items-strech flex-wrap h-25"
    const togleIsOpened = () => {
        setMenuIsOpened(!menuIsOpened)
    }
    return <>
        <div className={menuIsOpened ? isOpenedClasses : isNotOpenedClasses} onClick={() => setMenuIsOpened(false)}>
            {items && items.map((item, i) => {
                const key = item.name + i
                i++
                return <NavLink key={key} route={item.route} name={item.name} />
            })}
        </div>
        <button className="z-4 w-12 md:hidden mr-3" onClick={togleIsOpened}><img className="filter-(--filter-secondary) hover:filter-(--filter-primary)" src={menuIsOpened ? isOpenIcon : isNotOpenIcon} alt="Abrir o cerrar menu" /></button>
    </>
}
export { NavLinkContainer }

