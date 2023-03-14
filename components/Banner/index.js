import styles from './Banner.module.css'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'
import Link from 'next/link'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.breadcrumb}>
                <Link href={'https://www.bcit.ca/study/'}><FormattedMessage id="page.home.banner.breadcrumb.one"/></Link>
                <Image
                    src={"/icon/rightArrow.svg"}
                    alt={"Right arrow breadcrumb"}
                    width={20}
                    height={20}
                />
                <Link href={'https://www.bcit.ca/study/business-media/programs/'}><FormattedMessage id="page.home.banner.breadcrumb.two"/></Link>
                <Image
                    src={"/icon/rightArrow.svg"}
                    alt={"Right arrow breadcrumb"}
                    width={20}
                    height={20}
                />
                <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds'}><FormattedMessage id="page.home.banner.breadcrumb.three"/></Link>
            </div>
            <div className={styles.image}>
                <div className={styles.bigImage}>
                    <div className={styles.leftBanner}>
                        <h1 className={styles.header}><FormattedMessage id="page.home.banner.header"/></h1>
                        <p className={styles.program}><FormattedMessage id="page.home.banner.subtitle"/></p>
                        <div className={styles.icons}>
                            <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#'}><Image
                                src={"/icon/printer.svg"}
                                className={styles.icon}
                                width={30}
                                height={30}
                                alt={"printer icon"}
                            /></Link>
                            <Image
                                src={"/icon/mail.svg"}
                                className={styles.icon}
                                width={30}
                                height={30}
                                alt={"mail icon"}
                            />
                            <Link href={'https://www.facebook.com/bcit.ca/'}><Image
                                src={"/icon/fb.svg"}
                                className={styles.icon}
                                width={30}
                                height={30}
                                alt={"facebook icon"}
                            /></Link>
                            <Link href={'https://twitter.com/bcit?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}><Image
                                src={"/icon/twitter.svg"}
                                className={styles.icon}
                                width={30}
                                height={30}
                                alt={"twitter icon"}
                            /></Link>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Link href={'https://secure.bcit.ca/sis/apply/'}><button className={styles.button}>
                            <FormattedMessage id="page.home.banner.button.apply"/>
                            <Image
                                src={"/icon/rightArrowButton.svg"}
                                alt={"arrow on button"}
                                width={15}
                                height={15}
                            />
                        </button></Link>
                        <Link href={'https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh0kpvYS3GumL6QaO3hybpQ5yZZvWB3jWAEJKeJIijLjvJbV5MV74wYaAmqdEALw_wcB&gclsrc=aw.ds#contacts'}><button className={styles.button}>
                            <FormattedMessage id="page.home.banner.button.contact"/>
                            <Image
                                src={"/icon/rightArrowButton.svg"}
                                alt={"arrow on button"}
                                width={15}
                                height={15}
                            />
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}