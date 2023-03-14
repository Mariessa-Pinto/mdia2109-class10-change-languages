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
                    <Link href={'https://learn.bcit.ca/d2l/home'}><li className={styles.link}><FormattedMessage id="page.home.header.linkone"/></li></Link>
                    <Link href={'https://id.bcit.ca/my.policy'}><li className={styles.link}><FormattedMessage id="page.home.header.linktwo"/></li></Link>
                    <Link href={'https://www.bcit.ca/current-students/'}><li className={styles.link}><FormattedMessage id="page.home.header.linkthree"/></li></Link>
                    <Link href={'https://www.bcit.ca/faculty-staff/'}><li className={styles.link}><FormattedMessage id="page.home.header.linkfour"/></li></Link>
                    <Link href={'https://www.bcit.ca/events/'}><li className={styles.link}><FormattedMessage id="page.home.header.linkfive"/></li></Link>
                </ul>
            </header>
            <div className={styles.navbar}>
                <div className={styles.lowerNav}>
                    <ul className={styles.listTwo}>
                        <Link href={'https://www.bcit.ca/'}><li>
                            <Image
                            src={"/logo/BCITcolor.png"}
                            alt={"BCIT logo"}
                            width={115}
                            height={110}
                            className={styles.logo}
                            />
                        </li></Link>
                        <Link href={'https://www.bcit.ca/study/'}><li className={styles.linkTwo}><FormattedMessage id="page.home.nav.link.one"/></li></Link>
                        <Link href={'https://www.bcit.ca/admission/'}><li className={styles.linkTwo}><FormattedMessage id="page.home.nav.link.two"/></li></Link>
                        <Link href={'https://www.bcit.ca/student-services/'}><li className={styles.linkTwo}><FormattedMessage id="page.home.nav.link.three"/></li></Link>
                        <Link href={'https://www.bcit.ca/applied-research/'}><li className={styles.linkTwo}><FormattedMessage id="page.home.nav.link.four"/></li></Link>
                        <Link href={'https://www.bcit.ca/about/'}><li className={styles.linkTwo}><FormattedMessage id="page.home.nav.link.five"/></li></Link>
                        <li>
                            <Image
                              src={"/icon/search.svg"}
                              alt={"Search Icon"}
                              width={30}
                              height={30}
                              className={styles.searchIcon}
                            />
                        </li>
                        <li>
                            <Image
                              src={"/icon/hamburger.svg"}
                              alt={"hamburger Icon"}
                              width={30}
                              height={30}
                              className={styles.hamIcon}
                            />
                        </li>
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