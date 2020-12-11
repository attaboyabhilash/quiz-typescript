import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import {
    Navbarcomponent,
    HomePage,
    WhatWeDo,
    Review,
    ChatSection,
    Dashboardslider,
    Footer,
    OurCommunity,
    CompaniesHiring,
    LearningPatners,
} from "../src/components/IndexComponents"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>HomePage | Myways</title>
            </Head>
            <div className="wrapper">
                <Navbarcomponent />
                <HomePage />
                <WhatWeDo />
                <Dashboardslider />
                <CompaniesHiring />
                <OurCommunity />
                <LearningPatners />
                <Review />
                <ChatSection />
                <Footer />
            </div>
            <Link href="/blog">
                <a>Go To Blog Page</a>
            </Link>
        </div>
    )
}
