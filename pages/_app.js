
import Head from 'next/head'
import Link from 'next/link'
import styles from '../css/styles.module.css';
import DailyGuess from '../components/daily-guess';

function getLocallyAcquiredCases() {
  return fetch('https://data.nsw.gov.au/data/api/3/action/datastore_search?resource_id=2f1ba0f3-8c21-4a86-acaf-444be4401a6d');
}

function MyApp({ Component, pageProps }) {

  // const data = getLocallyAcquiredCases().then((response) => {
  //   response.json().then((data) => console.log(data))
  // });


  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Covid Comp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1>Welcome to CovidComp!</h1>
          <DailyGuess />
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
