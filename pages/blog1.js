import Head from "next/head";
import Link from "next/link";

const blog1 = () => {
    return (
        <div>
            <Head>
                <title>
                    Blog1
                </title>
            </Head>
            <h1>Blog1 is created.</h1>
            <Link href='/blog'>Blog</Link>
        </div>
    );
};

export default blog1;