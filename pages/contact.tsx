import * as React from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@components/Layout/Layout';
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
      const toastId = toast.loading('Please wait...');
      setForm({ state: 'loading', message: 'Loading.' });
      try {
        const res = await fetch(`api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

        toast.dismiss(toastId);

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
          message: 'Your message was sent successfully',
        });
        setInputs({
          name: '',
          email: '',
          message: '',
        });

        toast.success('Your message was sent successfully');
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong',
        });
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <Layout>
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </Layout>
  );
}
