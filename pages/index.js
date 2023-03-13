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
            <Sidebar/>
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
            <p className={styles.para}><FormattedMessage id="page.home.main.sectiontwo.para.one"/></p>
            <p className={styles.para}><FormattedMessage id="page.home.main.sectiontwo.para.two"/></p>
            <ul className={styles.list}>
              <li className={styles.underlined}><FormattedMessage id="page.home.main.sectiontwo.listitem"/></li>
            </ul>
            <div className={styles.controls}>
              <div className={styles.back}>
                <p className={styles.goBack}><FormattedMessage id="page.home.main.goback"/></p>
                <p className={styles.details}><FormattedMessage id="page.home.main.goback.title"/></p>
              </div>
              <div className={styles.forward}>
                <p className={styles.nextUp}><FormattedMessage id="page.home.main.next"/></p>
                <p className={styles.contact}><FormattedMessage id="page.home.main.next.title"/></p>
              </div>
            </div>
            <p className={styles.notice}><FormattedMessage id="page.home.main.bottom.para"/></p>
          </div>
            
            
            {/* <h1>
              <FormattedMessage id="page.home.title" values={{ b: (info) => <b>{info}</b>}}/>
            </h1>
            <p className={styles.desctiption}>
              <FormattedMessage id="page.home.description"/>
            </p> */}
      </main>
      <Footer/>
    </>
  )
}
