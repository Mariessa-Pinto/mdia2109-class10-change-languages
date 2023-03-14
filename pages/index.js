import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Home({dir}) {

  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" })
  const description = intl.formatMessage({ id: "page.home.head.meta.description" })

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang='x=default'/>
        <link rel="icon" href="/favicon.ico" hrefLang='en'/>
        <link rel="icon" href="/favicon.ico" hrefLang='fr'/>
      </Head>
      <Navbar/>
      <Banner/>
      <main dir={dir} className={styles.main}>
          <div className={styles.sidebar}>
            <Sidebar className={styles.sidebar}/>
          </div>
          <div className={styles.headerBox}>
            <h4 className={styles.header}><FormattedMessage id="page.home.sidebar.about.header"/></h4>
            <p className={styles.plus}>+</p>
          </div>
          <div className={styles.mainContent}>
            <h2 className={styles.mainHeader}><FormattedMessage id="page.home.main.header"/></h2>
            <p className={styles.para}><FormattedMessage id="page.home.main.para.one"/></p>
            <p className={styles.listTitle}><FormattedMessage id="page.home.main.para.two"/></p>
            <ul className={styles.list}>
              <li><FormattedMessage id="page.home.main.list.one"/></li>
              <li><FormattedMessage id="page.home.main.list.two"/></li>
              <li><FormattedMessage id="page.home.main.list.three"/></li>
              <li><FormattedMessage id="page.home.main.list.four"/></li>
              <li><FormattedMessage id="page.home.main.list.five"/></li>
              <li><FormattedMessage id="page.home.main.list.six"/></li>
              <li><FormattedMessage id="page.home.main.list.seven"/></li>
              <li><FormattedMessage id="page.home.main.list.eight"/></li>
              <li><FormattedMessage id="page.home.main.list.nine"/></li>
              <li><FormattedMessage id="page.home.main.list.ten"/></li>
              <li><FormattedMessage id="page.home.main.list.eleven"/></li>
              <li><FormattedMessage id="page.home.main.list.twelve"/></li>
            </ul>
            <h3 className={styles.subheader}><FormattedMessage id="page.home.main.subheader"/></h3>
            <p className={styles.para}>
              <FormattedMessage id="page.home.main.sectiontwo.para.one"/>
                <Link href={'https://bcstats.shinyapps.io/so_data_viewer/'}><span className={styles.underlinedBlue}>
                  <FormattedMessage id="page.home.main.sectiontwo.para.one.blue"/>
                </span></Link>
              <FormattedMessage id="page.home.main.sectiontwo.para.one.two"/>
            </p>
            <p className={styles.para}>
              <FormattedMessage id="page.home.main.sectiontwo.para.two"/>
              <Link href={'https://get.adobe.com/reader/'}><span className={styles.underlinedBlue}>
                <FormattedMessage id="page.home.main.sectiontwo.para.two.blue"/>
              </span></Link>
              <FormattedMessage id="page.home.main.sectiontwo.para.two.two"/>
            </p>
            <ul className={styles.list}>
              <li className={styles.underlined}>
                <Link href={''}><FormattedMessage id="page.home.main.sectiontwo.listitem"/></Link></li>
            </ul>
            <div className={styles.controls}>
              <div className={styles.back}>
                <p className={styles.goBack}><FormattedMessage id="page.home.main.goback"/></p>
                <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#details'}><p className={styles.details}><FormattedMessage id="page.home.main.goback.title"/></p></Link>
              </div>
              <div className={styles.forward}>
                <p className={styles.nextUp}><FormattedMessage id="page.home.main.next"/></p>
                <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#contacts'}><p className={styles.contact}><FormattedMessage id="page.home.main.next.title"/></p></Link>
              </div>
            </div>
            <p className={styles.notice}><FormattedMessage id="page.home.main.bottom.para"/></p>
          </div>
          <div className={styles.tablet}>
          <Sidebar className={styles.tablet}/>
          </div>
          <div>
          <p className={styles.noticeTablet}><FormattedMessage id="page.home.main.bottom.para"/></p>
          </div>
      </main>
      <Footer/>
    </>
  )
}
