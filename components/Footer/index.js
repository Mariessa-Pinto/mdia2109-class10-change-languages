import styles from './Footer.module.css'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.mobileSmall}>
                <Link href={'https://www.bcit.ca/it-services/website-feedback/?from=https%3A%2F%2Fwww.bcit.ca%2Fprograms%2Fdigital-design-and-development-diploma-full-time-6515dipma%2F%3Fgclid%3DCj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB%26gclsrc%3Daw.ds'}><p className={styles.smallTextHover}><FormattedMessage id="page.home.footer.col.four.small.one"/></p></Link>
                <Link href={'https://www.bcit.ca/copyright/'}><p className={styles.smallTextHover}><FormattedMessage id="page.home.footer.col.four.small.two"/></p></Link>
                <Link href={'https://www.bcit.ca/privacy/'}><p className={styles.smallTextHover}><FormattedMessage id="page.home.footer.col.four.small.three"/></p></Link>
            </div>
            <div className={styles.colOne}>
                <div className={styles.topSec}>
                    <div className={styles.headerWithLine}>
                        <div className={styles.line}></div>
                        <h4><FormattedMessage id="page.home.footer.col.one.header"/></h4>
                    </div>
                    <p className={styles.address}><FormattedMessage id="page.home.footer.col.one.address"/></p>
                    <p className={styles.address}><FormattedMessage id="page.home.footer.col.one.city"/></p>
                    <p className={styles.address}><FormattedMessage id="page.home.footer.col.one.country"/></p>
                    <Link href={'https://www.bcit.ca/'}><p className={styles.bcitSite}><FormattedMessage id="page.home.footer.col.one.web"/></p></Link>
                </div>
                <div className={styles.bottomSec}>
                    <p className={styles.address}><FormattedMessage id="page.home.footer.col.one.tel.header"/><span className={styles.blue}> 604-434-5734</span></p>
                    <p className={styles.address}><FormattedMessage id="page.home.footer.col.one.toll.free"/><span className={styles.blue}> 1-866-434-1610</span></p>
                    <Link href={'https://www.bcit.ca/contacts/'}><p className={styles.contact}><FormattedMessage id="page.home.footer.col.one.more"/></p></Link>
                </div>
                <div className={styles.socials}>
                <Link href={'https://www.facebook.com/bcit.ca/'}><Image
                    src={"/icon/fbBlue.svg"}
                    className={styles.icon}
                    width={30}
                    height={30}
                    alt={"facebook icon"}
                /></Link>
                <Link href={'https://twitter.com/bcit?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}><Image
                    src={"/icon/twitterBlue.svg"}
                    className={styles.icon}
                    width={30}
                    height={30}
                    alt={"twitter icon"}
                /></Link>
                <Link href={'https://www.linkedin.com/school/bcit/'}><Image
                    src={"/icon/linkedinBlue.svg"}
                    className={styles.icon}
                    width={30}
                    height={30}
                    alt={"linkedin icon"}
                /></Link>
                <Link href={'https://www.instagram.com/lifeatbcit/'}><Image
                    src={"/icon/igBlue.svg"}
                    className={styles.icon}
                    width={30}
                    height={30}
                    alt={"instagram icon"}
                /></Link>
                </div>
            </div>
            <div className={styles.colTwo}>
                <Link href={'https://www.bcit.ca/about/visit/'}><p className={styles.link}><FormattedMessage id="page.home.footer.col.two.link.one"/></p></Link>
                <Link href={'https://secure.bcit.ca/sis/apply/'}><p className={styles.link}><FormattedMessage id="page.home.footer.col.two.link.two"/></p></Link>
                <Link href={'https://www.bcit.ca/foundation/giving-to-bcit/'}><p className={styles.link}><FormattedMessage id="page.home.footer.col.two.link.three"/></p></Link>
            </div>
            <div className={styles.colThree}>
                <Link href={'https://commons.bcit.ca/news/'}><p className={styles.link}><FormattedMessage id="page.home.footer.col.three.link.one"/></p></Link>
                <Link href={'https://www.bcit.ca/events/'}><p className={styles.link}><FormattedMessage id="page.home.footer.col.three.link.two"/></p></Link>
                <Link href={'https://www.bcit.ca/about/careers/'}><p className={styles.link}><FormattedMessage id="page.home.footer.col.three.link.three"/></p></Link>
            </div>
            <div className={styles.colFour}>
                <div className={styles.headerWithLineTwo}>
                    <div className={styles.lineTwo}></div>
                    <h4 className={styles.header}><FormattedMessage id="page.home.footer.col.four.header"/></h4>
                </div>
                <Link href={'https://www.bcit.ca/about/visit/campuses-directions/burnaby/'}><p className={styles.location}><FormattedMessage id="page.home.footer.col.four.link.one"/></p></Link>
                <Link href={'https://www.bcit.ca/about/visit/campuses-directions/downtown/'}><p className={styles.location}><FormattedMessage id="page.home.footer.col.four.link.two"/></p></Link>
                <Link href={'https://www.bcit.ca/about/visit/campuses-directions/marine/'}><p className={styles.location}><FormattedMessage id="page.home.footer.col.four.link.three"/></p></Link>
                <Link href={'https://www.bcit.ca/about/visit/campuses-directions/aerospace/'}><p className={styles.location}><FormattedMessage id="page.home.footer.col.four.link.four"/></p></Link>
                <Link href={'https://www.bcit.ca/about/visit/campuses-directions/annacis-island/'}><p className={styles.location}><FormattedMessage id="page.home.footer.col.four.link.five"/></p></Link>
                <div className={styles.smallText}>
                    <Link href={'https://www.bcit.ca/it-services/website-feedback/?from=https%3A%2F%2Fwww.bcit.ca%2Fprograms%2Fdigital-design-and-development-diploma-full-time-6515dipma%2F%3Fgclid%3DCj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB%26gclsrc%3Daw.ds'}><p className={styles.smallTextHover}><FormattedMessage id="page.home.footer.col.four.small.one"/></p></Link>
                    <Link href={'https://www.bcit.ca/copyright/'}><p className={styles.smallTextHover}><FormattedMessage id="page.home.footer.col.four.small.two"/></p></Link>
                    <Link href={'https://www.bcit.ca/privacy/'}><p className={styles.smallTextHover}><FormattedMessage id="page.home.footer.col.four.small.three"/></p></Link>
                </div>
            </div>
        </div>
    )
}