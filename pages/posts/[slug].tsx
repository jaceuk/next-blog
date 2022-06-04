import Layout from '@components/Layout';
import { getAllPostSlugs, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Card from '@components/Card';
import styles from './[slug].module.scss';

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
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={styles.inner}>
        <div className={styles.narrowContainer}>
          <Card>
            <h1>{postData.title}</h1>
            <div className="stack" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </Card>
        </div>
      </div>
    </Layout>
  );
}
