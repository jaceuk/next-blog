import * as React from 'react';
import styles from './ContactForm.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import CardTitle from '@components/CardTitle';
import Card from '@components/Card';

export default function ContactForm() {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [form, setForm] = React.useState({
    state: '',
    message: '',
  });

  const handleChange = (element) => {
    setInputs((prev) => ({
      ...prev,
      [element.target.id]: element.target.value,
    }));
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();

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
          message: 'Your message was sent successfully',
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
    <>
      <div className={styles.inner}>
        <div className={styles.narrowContainer}>
          <div className="row">
            <Card>
              <CardTitle text="Contact form" icon={<EmailIcon />} textSize="large" />

              <form onSubmit={(event) => onSubmitForm(event)} className="stack medium">
                <div className="stack small">
                  <label htmlFor="name" className={styles.label}>
                    Your name (required)
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={inputs.name}
                    className={styles.input}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="stack small">
                  <label htmlFor="email" className={styles.label}>
                    Your email address (required)
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={styles.input}
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="stack small">
                  <label htmlFor="message" className={styles.label}>
                    Your message (required)
                  </label>
                  <textarea
                    id="message"
                    className={styles.input}
                    value={inputs.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    required
                  />
                </div>

                <input className={`button ${styles.submit}`} type="submit" value="Send your message" />

                {form.state === 'loading' ? (
                  <div>Sending....</div>
                ) : form.state === 'error' ? (
                  <div>{form.message}</div>
                ) : (
                  form.state === 'success' && <div>Sent successfully</div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
