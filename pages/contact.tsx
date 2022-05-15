import Head from 'next/head';
import Layout from '@components/Layout/Layout';
import ContactTitle from '@components/ContactTitle';
import ContactForm from '@components/ContactForm';

export default function Contact() {
  return (
    <Layout title={<ContactTitle />}>
      <Head>
        <title>Contact Jason Newington</title>
      </Head>
      <ContactForm />
    </Layout>
  );
}
