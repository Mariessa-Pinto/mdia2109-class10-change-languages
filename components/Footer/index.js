import styles from './Footer.module.css'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.colOne}>
                <div className={styles.topSec}>
                    <h4><FormattedMessage id="page.home.footer.col.one.header"/></h4>
                    <p><FormattedMessage id="page.home.footer.col.one.address"/></p>
                    <p><FormattedMessage id="page.home.footer.col.one.city"/></p>
                    <p><FormattedMessage id="page.home.footer.col.one.coutry"/></p>
                    <p><FormattedMessage id="page.home.footer.col.one.web"/></p>
                </div>
                <div className={styles.bottomSec}>
                    <p><FormattedMessage id="page.home.footer.col.one.tel.header"/> 604-434-5734</p>
                    <p><FormattedMessage id="page.home.footer.col.one.toll.free"/> 1-866-434-1610</p>
                    <p><FormattedMessage id="page.home.footer.col.one.more"/></p>
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
                <p><FormattedMessage id="page.home.footer.col.two.link.one"/></p>
                <p><FormattedMessage id="page.home.footer.col.two.link.two"/></p>
                <p><FormattedMessage id="page.home.footer.col.two.link.three"/></p>
            </div>
            <div className={styles.colThree}>
                <p><FormattedMessage id="page.home.footer.col.three.link.one"/></p>
                <p><FormattedMessage id="page.home.footer.col.three.link.two"/></p>
                <p><FormattedMessage id="page.home.footer.col.three.link.three"/></p>
            </div>
            <div className={styles.colFour}>
                <h4><FormattedMessage id="page.home.footer.col.four.header"/></h4>
                <p><FormattedMessage id="page.home.footer.col.four.link.one"/></p>
                <p><FormattedMessage id="page.home.footer.col.four.link.two"/></p>
                <p><FormattedMessage id="page.home.footer.col.four.link.three"/></p>
                <p><FormattedMessage id="page.home.footer.col.four.link.four"/></p>
                <p><FormattedMessage id="page.home.footer.col.four.link.five"/></p>
                <div className={styles.smallText}>
                    <p><FormattedMessage id="page.home.footer.col.four.small.one"/></p>
                    <p><FormattedMessage id="page.home.footer.col.four.small.two"/></p>
                    <p><FormattedMessage id="page.home.footer.col.four.small.three"/></p>
                </div>
            </div>
        </div>
    )
}