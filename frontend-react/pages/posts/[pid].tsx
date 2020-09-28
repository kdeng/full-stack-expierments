import {useRouter} from "next/router";
import {GetStaticProps} from "next";
import {Logger} from "../../services/logger";

import {PostService} from '../../services/post.api';

const postService = new PostService();


const Post = () => {
  const router = useRouter();
  const {pid} = router.query;
  return (
    <div>post ID: {pid}</div>
  )
}

export const getStaticProps: GetStaticProps = async (context): Promise<any> => {
  Logger.info('getStaticProps invoked');
  const posts = await postService.getPosts();
  return Promise.resolve({
    props: {
      posts,
    }
  });
}

export const getStaticPaths: (context) => Promise<any> = async (context): Promise<any> => {
  return {
    paths: [
      {params: {pid: '1'}}
    ],
    fallback: true,
  }
}

export default Post;
