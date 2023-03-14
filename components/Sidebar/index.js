import styles from './Sidebar.module.css'
import { FormattedMessage } from 'react-intl'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.about}>
                <div className={styles.headerBox}>
                    <h4 className={styles.header}><FormattedMessage id="page.home.sidebar.about.header"/></h4>
                </div>
                <ul className={styles.aboutList}>
                    <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#overview'}><li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.one"/></li></Link>
                    <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#entry'}><li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.two"/></li></Link>
                    <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#ap'}><li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.three"/></li></Link>
                    <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#costs'}><li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.four"/></li></Link>
                    <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#courses'}><li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.five"/></li></Link>
                    <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#details'}><li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.six"/></li></Link>
                    <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#graduating'}><li className={styles.aboutListItemActive}><FormattedMessage id="page.home.sidebar.about.item.seven"/></li></Link>
                    <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#contacts'}><li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.eight"/></li></Link>
                    <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#subscribe'}><li className={styles.aboutListItem}><FormattedMessage id="page.home.sidebar.about.item.nine"/></li></Link>
                </ul>
            </div>
            <div className={styles.info}>
                <h3 className={styles.headerInfo}><FormattedMessage id="page.home.sidebar.info.header"/></h3>
                <p className={styles.infoText}><FormattedMessage id="page.home.sidebar.info.desc"/></p>
                <ul className={styles.infoList}>
                    <Link href={'https://www.bcit.ca/event/digital-arts-media-design-online-info-session-24/'}><li className={styles.dates}><FormattedMessage id="page.home.sidebar.info.list.one"/></li></Link>
                    <Link href={'https://www.bcit.ca/event/digital-arts-media-design-online-info-session-25/'}><li className={styles.dates}><FormattedMessage id="page.home.sidebar.info.list.two"/></li></Link>
                    <Link href={'https://www.bcit.ca/event/digital-arts-media-design-online-info-session-26/'}><li className={styles.dates}><FormattedMessage id="page.home.sidebar.info.list.three"/></li></Link>
                    <Link href={'https://www.bcit.ca/event/digital-arts-media-design-online-info-session-27/'}><li className={styles.dates}><FormattedMessage id="page.home.sidebar.info.list.four"/></li></Link>
                </ul>
                <p className={styles.infoText}>
                    <FormattedMessage id="page.home.sidebar.info.explore"/>
                    <Link href={'https://www.bcit.ca/infosessions/'}><span className={styles.blue}>
                        <FormattedMessage id="page.home.sidebar.infor.explore.blue"/>
                    </span></Link>
                </p>
            </div>
            <div className={styles.overview}>
                <h2 className={styles.headerOverview}><FormattedMessage id="page.home.sidebar.overview.header"/></h2>
                <ul className={styles.overviewListWhole}>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.credential" values={{ b: (info) => <b>{info}</b>}}/></li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.format" values={{ b: (info) => <b>{info}</b>}}/></li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.length" values={{ b: (info) => <b>{info}</b>}}/></li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.start" values={{ b: (info) => <b>{info}</b>}}/></li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.campus" values={{ b: (info) => <b>{info}</b>}}/></li>
                    <li className={styles.overviewList}>
                        <FormattedMessage id="page.home.sidebar.overview.domestic" values={{ b: (info) => <b>{info}</b>}}/>
                        <Link href={'https://www.bcit.ca/admission/tuition-fees/full-time-studies/'}><span className={styles.blue}>
                            <FormattedMessage id="page.home.sidebar.overview.domestic.num"/>
                        </span></Link>
                    *</li>
                    <li className={styles.overviewList}>
                        <FormattedMessage id="page.home.sidebar.overview.int" values={{ b: (info) => <b>{info}</b>}}/>
                        <Link href={'https://www.bcit.ca/admission/tuition-fees/international-students/'}><span className={styles.blue}>
                            <FormattedMessage id="page.home.sidebar.overview.int.num"/>
                        </span></Link>
                    *</li>
                    <li className={styles.overviewList}><FormattedMessage id="page.home.sidebar.overview.cost"/></li>
                </ul>
                <Link href={'https://www.bcit.ca/business-media/study/'}><h5 className={styles.allPrograms}><FormattedMessage id="page.home.sidebar.overview.link"/></h5></Link>
            </div>
            <div className={styles.recent}>
                <h2 className={styles.headerOverview}><FormattedMessage id="page.home.sidebar.recent.header"/></h2>
                <p className={styles.programName}>
                    <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/'}><span className={styles.blue}>
                        <FormattedMessage id="page.home.sidebar.recent.link.one.blue"/>
                    </span></Link>
                    <FormattedMessage id="page.home.sidebar.recent.link.one"/>
                </p>
                <p className={styles.programName}>
                    <Link href={'https://www.bcit.ca/programs/clinical-genetics-technology-advanced-diploma-full-time-5670advdip/'}><span className={styles.blue}>
                        <FormattedMessage id="page.home.sidebar.recent.link.two.blue"/>
                    </span></Link>
                    <FormattedMessage id="page.home.sidebar.recent.link.two"/>
                </p>
            </div>
        </div>
    )
}