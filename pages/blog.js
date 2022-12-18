import Head from "next/head";
import Link from "next/link";

const Blog = () => {
    return (
        <div>
            <Head>
                <title>
                    Blog
                </title>
            </Head>
            <h1>Blog</h1>
            <Link href='/blog1'>Blog1</Link>
        </div>
    );
};

export default Blog;