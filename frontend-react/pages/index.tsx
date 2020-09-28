import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { Logger } from '../services/logger';


export default function Home({ hello }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        This is index : { hello }
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context): Promise<any> => {
  Logger.info('getStaticProps');
  return Promise.resolve({
    props: {
      hello: "world"
    }
  });
}


// export const getStaticPaths: GetStaticPaths = async (context): Promise<any> => {
//   Logger.info('getStaticPaths invoked');
//   return {
//     paths: [
//       { params: { id: '1' } },
//       { params: { id: '2' } }
//     ],
//     fallback: true
//   }
// }

// export const getServerSideProps: GetServerSideProps = async (context): Promise<any> => {
//   Logger.info("getServerSideProps invoked");
//   return {
//     props: {
//       world: "this is a world"
//     }
//   }
// }
