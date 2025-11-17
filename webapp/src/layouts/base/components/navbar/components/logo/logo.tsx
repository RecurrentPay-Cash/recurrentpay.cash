import { NavHashLink } from "react-router-hash-link"
import recurrentPayCashLogo from '/src/assets/images/recurrentpay-cash-logo.svg'
const Logo = () => {
    return <NavHashLink className="min-w-27 h-full py-3 content-center" to="/#" smooth>
        <img className="objetc-cover w-[50dvw] sm:w-60 col-span-1" src={recurrentPayCashLogo} alt="logo" />
    </NavHashLink>

}
export { Logo }