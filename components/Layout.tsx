import Head from 'next/head';
import Link from 'next/link';

interface IProps {
  children: React.ReactNode;
  home?: boolean;
}

const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }: IProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
      </Head>
      <header>
        {home ? (
          <>
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
