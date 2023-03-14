import styles from './Footer.module.css'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.colOne}>
                <div className={styles.topSec}>
                    <div className={styles.headerWithLine}>
                        <div className={styles.line}></div>
                        <h4><FormattedMessage id="page.home.footer.col.one.header"/></h4>
                    </div>
                    <p className={styles.address}><FormattedMessage id="page.home.footer.col.one.address"/></p>
                    <p className={styles.address}><FormattedMessage id="page.home.footer.col.one.city"/></p>
                    <p className={styles.address}><FormattedMessage id="page.home.footer.col.one.country"/></p>
                    <p className={styles.bcitSite}><FormattedMessage id="page.home.footer.col.one.web"/></p>
                </div>
                <div className={styles.bottomSec}>
                    <p className={styles.address}><FormattedMessage id="page.home.footer.col.one.tel.header"/><span className={styles.blue}> 604-434-5734</span></p>
                    <p className={styles.address}><FormattedMessage id="page.home.footer.col.one.toll.free"/><span className={styles.blue}> 1-866-434-1610</span></p>
                    <p className={styles.contact}><FormattedMessage id="page.home.footer.col.one.more"/></p>
                </div>
                <div className={styles.socials}>
                <Image
                    src={"/icon/fbBlue.svg"}
                    className={styles.icon}
                    width={30}
                    height={30}
                    alt={"facebook icon"}
                />
                <Image
                    src={"/icon/twitterBlue.svg"}
                    className={styles.icon}
                    width={30}
                    height={30}
                    alt={"twitter icon"}
                />
                <Image
                    src={"/icon/linkedinBlue.svg"}
                    className={styles.icon}
                    width={30}
                    height={30}
                    alt={"linkedin icon"}
                />
                <Image
                    src={"/icon/igBlue.svg"}
                    className={styles.icon}
                    width={30}
                    height={30}
                    alt={"instagram icon"}
                />
                </div>
            </div>
            <div className={styles.colTwo}>
                <p className={styles.link}><FormattedMessage id="page.home.footer.col.two.link.one"/></p>
                <p className={styles.link}><FormattedMessage id="page.home.footer.col.two.link.two"/></p>
                <p className={styles.link}><FormattedMessage id="page.home.footer.col.two.link.three"/></p>
            </div>
            <div className={styles.colThree}>
                <p className={styles.link}><FormattedMessage id="page.home.footer.col.three.link.one"/></p>
                <p className={styles.link}><FormattedMessage id="page.home.footer.col.three.link.two"/></p>
                <p className={styles.link}><FormattedMessage id="page.home.footer.col.three.link.three"/></p>
            </div>
            <div className={styles.colFour}>
                <div className={styles.headerWithLineTwo}>
                    <div className={styles.lineTwo}></div>
                    <h4 className={styles.header}><FormattedMessage id="page.home.footer.col.four.header"/></h4>
                </div>
                <p className={styles.location}><FormattedMessage id="page.home.footer.col.four.link.one"/></p>
                <p className={styles.location}><FormattedMessage id="page.home.footer.col.four.link.two"/></p>
                <p className={styles.location}><FormattedMessage id="page.home.footer.col.four.link.three"/></p>
                <p className={styles.location}><FormattedMessage id="page.home.footer.col.four.link.four"/></p>
                <p className={styles.location}><FormattedMessage id="page.home.footer.col.four.link.five"/></p>
                <div className={styles.smallText}>
                    <p><FormattedMessage id="page.home.footer.col.four.small.one"/></p>
                    <p><FormattedMessage id="page.home.footer.col.four.small.two"/></p>
                    <p><FormattedMessage id="page.home.footer.col.four.small.three"/></p>
                </div>
            </div>
        </div>
    )
}