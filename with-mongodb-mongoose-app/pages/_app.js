import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles.module.css'

function MyApp({ Component, pageProps }) {

  try {
    const res = await fetch(`/api/pets/${id}`, {
    method: 'PUT',
    headers: {
      Accept: contentType,
      'Content-Type': contentType,
    },
    body: JSON.stringify(form),
  })

  // Throw error with status code in case Fetch API req failed
  if (!res.ok) {
    throw new Error(res.status)
  }

  const { data } = await res.json()
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Covid Comp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1>Welcome to CovidComp!</h1>
        </main>

        {/* <div className="grid wrapper">
          <Component {...pageProps} />
        </div> */}
        </div>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
    </>

  )
}

export default MyApp
