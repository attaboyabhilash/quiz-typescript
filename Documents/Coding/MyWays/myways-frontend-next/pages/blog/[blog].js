import { useRouter } from "next/router"
import Link from "next/link"
import SinglePost from "../../src/components/SinglePost"

export default function blogs() {
    const router = useRouter()

    const { blog } = router.query
    return (
        <div className="container">
            <h1>Blog about {blog}</h1>
            <div className="post">
                <SinglePost blog={blog} />
            </div>
            <Link href="/blog">
                <a>Go Back</a>
            </Link>
            <style jsx>
                {`
                    .container {
                        width: 40%;
                        margin: 50px auto;
                    }
                    .post {
                        margin-bottom: 20px;
                    }
                `}
            </style>
        </div>
    )
}
