import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bookmark - Landing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link href="/features">Features</Link>
                </li>
            </ul>
        </main>
    </div>
  )
}
