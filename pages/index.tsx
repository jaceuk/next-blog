import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Head from 'next/head';
import Date from '../components/Date';

interface IProps {
  allPostsData: IPostData[];
}

interface IPostData {
  slug: string;
  date: string;
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
    <Layout home>
      <Head>
        <title>NextJS Blog</title>
      </Head>
      <Link href={'/contact/'}>
        <a>Contact</a>
      </Link>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ slug, date, title }: IPostData) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
