import * as React from 'react';
import styles from './ContactForm.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import CardTitle from '@components/CardTitle';
import Card from '@components/Card';
import Alert from '@components/Alert';
import Overlay from '@components/Overlay';
import Loader from '@components/Loader';

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

              {form.state === 'loading' ? (
                <Overlay>
                  <Loader>Sending....</Loader>
                </Overlay>
              ) : form.state === 'error' ? (
                <Alert type="error">
                  There was a problem sending your message, please try again.
                  <br />
                  If the problem perists please email info@jace.info.
                </Alert>
              ) : (
                form.state === 'success' && <Alert type="success">Sent successfully</Alert>
              )}

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
                    rows={5}
                    required
                  />
                </div>

                <input className={`button ${styles.submit}`} type="submit" value="Send your message" />
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
