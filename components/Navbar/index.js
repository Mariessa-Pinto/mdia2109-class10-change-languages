import styles from './Navbar.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from 'next/link'

export default function Navbar() {

    const { locales } = useRouter();
    const intl = useIntl();

    return (
        <div className={styles.navbar}>
            <header className={styles.header}>
                <div className={styles.controls}>
                    {[...locales].sort().map((locale) => (
                        <Link key={locale} href="/" locale={locale}>
                        <div>{locale}</div>
                        </Link>
                    ))}
                </div>
                <ul className={styles.list}>
                    <li className={styles.link}><FormattedMessage id="page.home.header.linkone"/></li>
                    <li className={styles.link}><FormattedMessage id="page.home.header.linktwo"/></li>
                    <li className={styles.link}><FormattedMessage id="page.home.header.linkthree"/></li>
                    <li className={styles.link}><FormattedMessage id="page.home.header.linkfour"/></li>
                    <li className={styles.link}><FormattedMessage id="page.home.header.linkfive"/></li>
                </ul>
            </header>
            <div className={styles.navbar}>
                <div className={styles.lowerNav}>
                    <ul className={styles.listTwo}>
                        <li className={styles.link}>
                            <Image
                            src={"/logo/BCIT-color.png"}
                            alt={"BCIT logo"}
                            width={200}
                            height={110}
                            />
                        </li>
                        <li className={styles.link}><FormattedMessage id="page.home.nav.link.one"/></li>
                        <li className={styles.link}><FormattedMessage id="page.home.nav.link.two"/></li>
                        <li className={styles.link}><FormattedMessage id="page.home.nav.link.three"/></li>
                        <li className={styles.link}><FormattedMessage id="page.home.nav.link.four"/></li>
                        <li className={styles.link}><FormattedMessage id="page.home.nav.link.five"/></li>
                    </ul>
                    <div>
                        <input 
                            type="text" 
                            className={styles.search}
                        />
                    </div>
                </div>
            </div>
      </div>
    )
}