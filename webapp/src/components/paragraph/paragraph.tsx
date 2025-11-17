import type { Tparagraph } from "../../types"
import { Header } from "../header/header"

const Paragraph = ({ title, children, id }: Tparagraph) => {
    return <div id={id} className="mb-5">
        {title&&<Header text={title} />}
        <p className="text-justify text-balance align-middle">{children}</p>
    </div>
}
export { Paragraph }