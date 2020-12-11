import Head from "next/head"
import { useRouter } from "next/router"
import Error404 from "../src/components/Error404"

export default function My404() {
    const router = useRouter()

    // This replacement of internships / internship with opportunites / opportunity is done because path
    // were changed to /opportunites from /internships . So that user does not gets 404 we redirect them
    // to /opportunites

    if (router.asPath.includes("/internships")) router.push("/opportunities")

    if (router.asPath.includes("/internship")) router.push("/opportunity")

    return (
        <div className="container">
            <Head>
                <title>404 Error | Myways</title>
            </Head>
            <Error404 />
            <style jsx>
                {`
                    .container {
                        position: relative;
                        width: 90%;
                        margin: 10px auto;
                        text-align: center;
                        align-items: center;
                    }
                `}
            </style>
        </div>
    )
}
