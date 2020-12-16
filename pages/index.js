import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Answer from '../components/Answer'

const Index = (props) => (
    <div className={styles.container}>
      <Head>
        <title>NextMagic8Ball</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
      </Head>

      <main className={styles.main}>
        <h1>
          Welcome to Magic8Ball!!
        </h1>

        <h6>
          Get started by asking a question below!!
        </h6>   
        <Answer />
      </main>    
    </div>
  )

  

export default Index;
