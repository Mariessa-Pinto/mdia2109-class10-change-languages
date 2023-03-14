import styles from './Sidebar.module.css'
import { FormattedMessage } from 'react-intl'

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.about}>
                <div className={styles.headerBox}>
                    <h4 className={styles.header}><FormattedMessage id="page.home.sidebar.about.header"/></h4>
                </div>
                <ul className={styles.aboutList}>
                    <li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.one"/></li>
                    <li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.two"/></li>
                    <li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.three"/></li>
                    <li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.four"/></li>
                    <li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.five"/></li>
                    <li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.six"/></li>
                    <li className={styles.aboutListItemActive}><FormattedMessage id="page.home.sidebar.about.item.seven"/></li>
                    <li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.eight"/></li>
                    <li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.nine"/></li>
                </ul>
            </div>
            <div className={styles.info}>
                <h3 className={styles.headerInfo}><FormattedMessage id="page.home.sidebar.info.header"/></h3>
                <p className={styles.infoText}><FormattedMessage id="page.home.sidebar.info.desc"/></p>
                <ul className={styles.infoList}>
                    <li className={styles.dates}><FormattedMessage id="page.home.sidebar.info.list.one"/></li>
                    <li className={styles.dates}><FormattedMessage id="page.home.sidebar.info.list.two"/></li>
                    <li className={styles.dates}><FormattedMessage id="page.home.sidebar.info.list.three"/></li>
                    <li className={styles.dates}><FormattedMessage id="page.home.sidebar.info.list.four"/></li>
                </ul>
                <p className={styles.infoText}><FormattedMessage id="page.home.sidebar.info.explore"/><span className={styles.blue}><FormattedMessage id="page.home.sidebar.infor.explore.blue"/></span></p>
            </div>
            <div className={styles.overview}>
                <h2 className={styles.headerOverview}><FormattedMessage id="page.home.sidebar.overview.header"/></h2>
                <ul className={styles.overviewListWhole}>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.credential" values={{ b: (info) => <b>{info}</b>}}/></li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.format" values={{ b: (info) => <b>{info}</b>}}/></li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.length" values={{ b: (info) => <b>{info}</b>}}/></li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.start" values={{ b: (info) => <b>{info}</b>}}/></li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.campus" values={{ b: (info) => <b>{info}</b>}}/></li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.domestic" values={{ b: (info) => <b>{info}</b>}}/><span className={styles.blue}><FormattedMessage id="page.home.sidebar.overview.domestic.num"/></span>*</li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.int" values={{ b: (info) => <b>{info}</b>}}/><span className={styles.blue}><FormattedMessage id="page.home.sidebar.overview.int.num"/></span>*</li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.cost"/></li>
                </ul>
                <h5 className={styles.allPrograms}><FormattedMessage id="page.home.sidebar.overview.link"/></h5>
            </div>
            <div className={styles.recent}>
                <h2 className={styles.headerOverview}><FormattedMessage id="page.home.sidebar.recent.header"/></h2>
                <p className={styles.programName}><span className={styles.blue}><FormattedMessage id="page.home.sidebar.recent.link.one.blue"/></span><FormattedMessage id="page.home.sidebar.recent.link.one"/></p>
                <p className={styles.programName}><span className={styles.blue}><FormattedMessage id="page.home.sidebar.recent.link.two.blue"/></span><FormattedMessage id="page.home.sidebar.recent.link.two"/></p>
            </div>
        </div>
    )
}