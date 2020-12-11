import BlogPosts from "../../src/components/BlogPosts"
import Head from "next/head"
import Link from "next/link"

export default function blog({ people }) {
    return (
        <div className="container">
            <Head>
                <meta
                    name="description"
                    content="MyWays Blogs is a way to learn on how to excell in your field of choice."
                />
                <title>BlogPost | Myways</title>
            </Head>
            <Link href="/">
                <h4>Go Back To Home</h4>
            </Link>
            <BlogPosts people={people} />
            <style jsx>
                {`
                    .container {
                        width: 70%;
                        margin: 50px auto;
                    }
                `}
            </style>
            <style global jsx>
                {`
                    body {
                        background: #f4f4f4;
                    }
                `}
            </style>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch("http://swapi.dev/api/people/")
    const data = await res.json()

    return {
        props: {
            people: data.results,
        },
    }
}
