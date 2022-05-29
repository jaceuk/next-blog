import Layout from '@components/Layout';
import { getSortedPostsData } from '@lib/posts';
import Link from 'next/link';
import Head from 'next/head';
import Card from '@components/Card';
import BlogTitle from '@components/BlogTitle';
import styles from './blog.module.scss';

interface IProps {
  allPostsData: IPostData[];
}

interface IPostData {
  slug: string;
  excerpt: string;
  title: string;
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: IProps) {
  return (
    <Layout title={<BlogTitle />}>
      <Head>
        <title>Blog</title>
      </Head>

      <div className={styles.inner}>
        {allPostsData.map(({ slug, excerpt, title }: IPostData) => (
          <Card key={slug}>
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <Link href={`/posts/${slug}`}>
              <a className={styles.button}>Read more</a>
            </Link>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
