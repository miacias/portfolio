import React, { useState } from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

type errors = {
    name?: string;
    email?: string;
    message?: string;
}

export default  function Contact() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    const onSubmit = async (event: any) => {
        console.log(event)
        await emailjs.sendForm('service_tjsoedn', 'template_ly5vrzm', '#contact-form', 'DOsrgnZ-5O0QZj-fu')
            .then((response: any) => {
                console.log(response.text);
            }, (error: any) => {
                console.log(error.text);
            });
            alert("Thank you for your message! I will get back to you shortly.")
            // event.reset();
    };
    // disables form Submit if there is an error
    const validate = (event: any): any => {
        const errors: errors = {};
        if (event.name && event.name.length < 2) {
            errors.name = 'missing name'
        }
        // email regex https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
        if (event.email && !event.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
            errors.email = 'please complete email';
        }
        if (event.message && event.message.length < 5) {
            errors.message = 'message too short';
        }
        return errors;
    };
    return (
    <>
        <Form 
            onSubmit={onSubmit} 
            validate={validate} 
            render={( {handleSubmit} ) => (
                <form onSubmit={handleSubmit} id='contact-form'>
                    <div className={styles.field}>
                        <Field
                            name='name' 
                            render={({input, meta}) => (
                                <div>
                                    <label>name</label>
                                    <textarea {...input} />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        />
                    </div>
                    <div className={styles.field}>
                        <Field
                            name='email' 
                            render={({input, meta}) => (
                                <div>
                                    <label>email</label>
                                    <textarea {...input} />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        />
                    </div>
                    <div className={styles.field}>
                        <Field
                            name='message' 
                            render={({input, meta}) => (
                                <div>
                                    <label>message</label>
                                    <textarea {...input} />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        />
                    </div>
                    <button type='submit'>Send</button>
                </form>
            )
        }/>
    </>
    )
}