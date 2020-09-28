import React from 'react';
import Head from 'next/head'
import {GetStaticProps, GetStaticPaths, GetServerSideProps} from 'next';
import styles from '../../styles/Home.module.css'
import { Logger } from '../../services/logger';
import { PostService } from '../../services/post.api';

const postService = new PostService();
export default class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await postService.getPosts();
    console.log("posts", JSON.stringify(posts));
    this.setState({ posts });
  }

  render() {
    console.log(this.state);
    return (
      <div className={styles.container}>
        <Head>
          <title>Posts</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>User ID</th>
            </tr>
            </thead>
            <tbody>

            { this.state.posts.map(({ id, userId, title }) => (
              <tr key={id}>
                <td>{ id }</td>
                <td>{ title }</td>
                <td>{ userId }</td>
              </tr>
            ))}
            </tbody>

          </table>
        </main>

        <footer className={styles.footer}>

        </footer>
      </div>
    );
  }

}
// const Posts = ({ posts }) => (
//   <div className={styles.container}>
//     <Head>
//       <title>Posts</title>
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//
//     <main className={styles.main}>
//       <table>
//         <thead>
//         <tr>
//           <th>ID</th>
//           <th>Title</th>
//           <th>User ID</th>
//         </tr>
//         </thead>
//         <tbody>
//         { posts.map(({ id, userId, title }) => (
//           <tr key={id}>
//             <td>{ id }</td>
//             <td>{ title }</td>
//             <td>{ userId }</td>
//           </tr>
//         ))}
//         </tbody>
//
//       </table>
//     </main>
//
//     <footer className={styles.footer}>
//
//     </footer>
//   </div>
// )

// Posts.getInitialProps = async (ctx) => {
//   Logger.info(`getInitialProps invoked`);
//   const posts = await postService.getPosts();
//   return { posts };
// }

// export const getStaticProps: GetStaticProps = async (context): Promise<any> => {
//   Logger.info('getStaticProps invoked');
//   const posts = await postService.getPosts();
//   return Promise.resolve({
//     props: {
//       posts,
//     }
//   });
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const posts = await postService.getPosts();
//   return {
//     props: {
//       posts
//     }
//   }
// }

// export default Posts;
