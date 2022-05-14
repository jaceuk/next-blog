import * as React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [form, setForm] = React.useState({
    state: '',
    message: '',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (inputs.name && inputs.email && inputs.message) {
      setForm({ state: 'loading', message: 'Loading.' });
      try {
        const res = await fetch(`api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: 'error',
            message: error,
          });
          return;
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.',
        });
        setInputs({
          name: '',
          email: '',
          message: '',
        });
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong',
        });
      }
    }
  };

  return (
    <Layout home>
      <Head>
        <title>NextJS Blog</title>
      </Head>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <input id="name" type="text" value={inputs.name} onChange={handleChange} placeholder="Name" required />
        <input id="email" type="email" value={inputs.email} onChange={handleChange} placeholder="Email" required />
        <textarea id="message" value={inputs.message} onChange={handleChange} placeholder="Message" rows={5} required />
        <input type="submit" />
        {form.state === 'loading' ? (
          <div>Sending....</div>
        ) : form.state === 'error' ? (
          <div>{form.message}</div>
        ) : (
          form.state === 'success' && <div>Sent successfully</div>
        )}
      </form>
    </Layout>
  );
}
