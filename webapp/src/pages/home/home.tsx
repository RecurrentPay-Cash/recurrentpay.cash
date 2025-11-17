import mailIcon from '/src/assets/icons/mail.svg'
import telegramIcon from '/src/assets/icons/telegram.svg'
import githubIcon from '/src/assets/icons/github.svg'
import logoText from '/src/assets/images/recurrentpay-cash-logo-text.svg'
import { Paragraph, Header } from "../../components"

export const Home = () => {
    return <div className='pt-5'>
        <div className="px-[10dvw]">
            <img className="px-[10dvw]" src={logoText} alt="logo" />
            <div id="motivation" className="mb-5">
                <Header text="Motivation" />
                <ul className="list-disc list-inside ">
                    <li>
                        Recurrent payments give creators, companies and other institutions an stable source of income,
                        which allows them to planificate expenses and budget more efficiently.
                    </li>
                    <li>
                        They also lets users
                        support their favorite creator and projects and access subscription services more easily.
                    </li>
                    <li>
                        At the
                        moment, there is a lack of recurrent payments solutions that are easy to use for clients, aren’t susceptible to BCH’s volatility and are easy to build on.
                    </li>
                </ul>
            </div>
            <div id="existing-solutions" className="mb-5">
                <Header text="Existing Solutions" />
                <ul className="pl-10">
                    <li>
                        <a className="text-lg font-extrabold text-secondary mb-2 hover:text-primary" href="https://github.com/KarolTrzeszczkowski/Mecenas-recurring-payment-EC-plugin" target="_blank" rel="noopener noreferrer">
                            Electron Cash Plugin</a>
                        <Paragraph>
                            Requires users to have Electron Cash Wallet and is susceptible to BCH’s volatility
                        </Paragraph>
                    </li>
                    <li>
                        <a className="text-lg font-extrabold text-secondary mb-2 hover:text-primary" href="https://cashscript.org/docs/guides/covenants/#restricting-p2pkh-and-p2sh" target="_blank" rel="noopener noreferrer">
                            CashScript Example</a>
                        <Paragraph>
                            Doesn’t have and user facing implementation and is susceptible to BCH’s volatility
                        </Paragraph>
                    </li>
                </ul>
            </div>
            <div id="features" className="mb-5">
                <Header text="Features" />
                <ul className="list-disc list-inside ">
                    <li>
                        Makes use of oracles and stablecoins to circumvent BCH’s volatility
                    </li>
                    <li>
                        WalletConnect support to create and manage contracts with multiple wallets
                    </li>
                    <li>
                        Notifications on upcoming payments and other events
                    </li>
                    <li>
                        Automatic payments to the recipient
                    </li>
                    <li>
                        Transferable Contracts
                    </li>
                </ul>
            </div>
            <div id="vision" className="mb-5">
                <Header text="Vision" />
                <ul className="list-disc list-inside ">
                    <li>
                        Existing BCH projects and creators can start making use of the tool and stop depending on periodic CrowdFunding Campaigns
                    </li>
                    <li>
                        Next priority: Creation of a platform for creators and projects to post exclusive content for their supporters  & Payment integration for companies offering subscription services
                    </li>
                    <li>
                        Target: 100 thousand user/month by 2027
                    </li>
                </ul>
            </div>
        </div>
        <div className="md:px-[10dvw] h-[85dvh]" id="contact">
            <Header className="ml-[10dvw] md:ml-0" text='Contact'></Header>
            <div className="bg-fill py-5 px-[10dvw] md:px-5 shadow-xs shadow-shadow w-full md:rounded-3xl h-95/100 md:h-2/10">

                <a className="mb-2 flex flex-row gap-1 text-secondary font-bold hover:text-primary filter-(--filter-secondary) hover:filter-(--filter-primary) hover:font-black" href="mailto:contact@recurrentpay.cash"><img src={mailIcon} alt="ícono mail" className="w-6 " />contact@recurrentpay.cash</a>
                <a className="mb-2 flex flex-row gap-1 text-secondary font-bold hover:text-primary filter-(--filter-secondary) hover:filter-(--filter-primary) hover:font-black" href="https://t.me/RecurrentPay_Cash" target="_blank"><img src={telegramIcon} alt="Ícono Instagram" className="w-6 " />@RecurrentPay_Cash</a>
                <a className="flex flex-row gap-1 text-secondary font-bold hover:text-primary filter-(--filter-secondary) hover:filter-(--filter-primary) hover:font-black mt-1" href="https://github.com/RecurrentPay-Cash/recurrentpay.cash" target="_blank"><img src={githubIcon} alt="Ícono LinkedIn" className="w-6 " />GitHub Repo</a>
            </div>
        </div>
    </div>
}