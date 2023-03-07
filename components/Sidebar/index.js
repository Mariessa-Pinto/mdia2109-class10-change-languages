import styles from './Sidebar.module.css'
import { FormattedMessage } from 'react-intl'

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.about}>
                <h4><FormattedMessage id="page.home.sidebar.about.header"/></h4>
                <ul>
                    <li><FormattedMessage id="page.home.sidebar.about.item.one"/></li>
                    <li><FormattedMessage id="page.home.sidebar.about.item.two"/></li>
                    <li><FormattedMessage id="page.home.sidebar.about.item.three"/></li>
                    <li><FormattedMessage id="page.home.sidebar.about.item.four"/></li>
                    <li><FormattedMessage id="page.home.sidebar.about.item.five"/></li>
                    <li><FormattedMessage id="page.home.sidebar.about.item.six"/></li>
                    <li><FormattedMessage id="page.home.sidebar.about.item.seven"/></li>
                    <li><FormattedMessage id="page.home.sidebar.about.item.eight"/></li>
                    <li><FormattedMessage id="page.home.sidebar.about.item.nine"/></li>
                </ul>
            </div>
            <div className={styles.info}>
                <h3><FormattedMessage id="page.home.sidebar.info.header"/></h3>
                <p><FormattedMessage id="page.home.sidebar.info.desc"/></p>
                <ul>
                    <li><FormattedMessage id="page.home.sidebar.info.list.one"/></li>
                    <li><FormattedMessage id="page.home.sidebar.info.list.two"/></li>
                    <li><FormattedMessage id="page.home.sidebar.info.list.three"/></li>
                    <li><FormattedMessage id="page.home.sidebar.info.list.four"/></li>
                </ul>
                <p><FormattedMessage id="page.home.sidebar.info.explore"/></p>
            </div>
            <div className={styles.overview}>
                <h2><FormattedMessage id="page.home.sidebar.overview.header"/></h2>
                <ul>
                    <li><FormattedMessage id="page.home.sidebar.overview.credential"/></li>
                    <li><FormattedMessage id="page.home.sidebar.overview.format"/></li>
                    <li><FormattedMessage id="page.home.sidebar.overview.length"/></li>
                    <li><FormattedMessage id="page.home.sidebar.overview.start"/></li>
                    <li><FormattedMessage id="page.home.sidebar.overview.campus"/></li>
                    <li><FormattedMessage id="page.home.sidebar.overview.domestic"/></li>
                    <li><FormattedMessage id="page.home.sidebar.overview.int"/></li>
                    <li><FormattedMessage id="page.home.sidebar.overview.cost"/></li>
                </ul>
                <h5><FormattedMessage id="page.home.sidebar.overview.link"/></h5>
            </div>
            <div className={styles.recent}>
                <h2><FormattedMessage id="page.home.sidebar.recent.header"/></h2>
                <p><FormattedMessage id="page.home.sidebar.recent.link.one"/></p>
                <p><FormattedMessage id="page.home.sidebar.recent.link.two"/></p>
            </div>
        </div>
    )
}