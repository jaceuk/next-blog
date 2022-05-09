import Layout from '@components/Layout';
import { getAllPostSlugs, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '@components/Date';

interface IProps {
  postData: {
    slug: string;
    date: string;
    title: string;
    contentHtml: string;
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: IProps) {
  return (
    <Layout title="Post">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
