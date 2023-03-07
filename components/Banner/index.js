import styles from './Banner.module.css'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.breadcrumb}>
                <FormattedMessage id="page.home.banner.breadcrumb.one"/>
                <Image
                    src={"/icon/rightArrow.svg"}
                    alt={"Right arrow breadcrumb"}
                    width={20}
                    height={20}
                />
                <FormattedMessage id="page.home.banner.breadcrumb.two"/>
                <Image
                    src={"/icon/rightArrow.svg"}
                    alt={"Right arrow breadcrumb"}
                    width={20}
                    height={20}
                />
                <FormattedMessage id="page.home.banner.breadcrumb.three"/>
            </div>
            <div className={styles.image}>
                <div className={styles.bigImage}>
                    <div className={styles.leftBanner}>
                        <h1 className={styles.header}><FormattedMessage id="page.home.banner.header"/></h1>
                        <p><FormattedMessage id="page.home.banner.subtitle"/></p>
                        <div className={styles.icons}>
                            <Image
                                src={"/icon/printer.svg"}
                                className={styles.icon}
                                width={30}
                                height={30}
                                alt={"printer icon"}
                            />
                            <Image
                                src={"/icon/mail.svg"}
                                className={styles.icon}
                                width={30}
                                height={30}
                                alt={"mail icon"}
                            />
                            <Image
                                src={"/icon/fb.svg"}
                                className={styles.icon}
                                width={30}
                                height={30}
                                alt={"facebook icon"}
                            />
                            <Image
                                src={"/icon/twitter.svg"}
                                className={styles.icon}
                                width={30}
                                height={30}
                                alt={"twitter icon"}
                            />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button}>
                            <FormattedMessage id="page.home.banner.button.apply"/>
                            <Image
                                src={"/icon/rightArrowButton.svg"}
                                alt={"arrow on button"}
                                width={15}
                                height={15}
                            />
                        </button>
                        <button className={styles.button}>
                            <FormattedMessage id="page.home.banner.button.contact"/>
                            <Image
                                src={"/icon/rightArrowButton.svg"}
                                alt={"arrow on button"}
                                width={15}
                                height={15}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}