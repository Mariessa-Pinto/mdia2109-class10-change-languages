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
