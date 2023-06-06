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
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const onChange = (event: any) => {
        // console.log(input)
        // set state based on user input fields
        const {target} = event;
        const inputType = target.name;
        const inputValue = target.value;
        // console.log(inputType, inputValue);
        let newContact: any = contact;
        // console.log(contact);
        switch (inputType) {
            case 'name':
                newContact.name += inputValue;
                break;
                // return setContact(newContact);
            case 'email':
                 newContact.email += inputValue;
                break;
                // return setContact(newContact);
            case 'message':
                 newContact.message += inputValue;
                break;
                // return setContact(newContact);

        }
        // console.log(newContact);
        setContact(newContact);
        // return;
    }

    const onSubmit = (event: any) => {
        // console.log(event);
        emailjs.sendForm('service_tjsoedn', 'template_ly5vrzm', '#contact-form', 'DOsrgnZ-5O0QZj-fu')
            .then((response: any) => {
                if (response.status === 200) {
                    alert("Thank you for your message! I will get back to you shortly.")
                    // set state back to ("") for all fields
                }
            }, (error: any) => {
                console.log(error.text);
            });
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
    {/* set value to onChange, then value will be based on State. */}
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
                                    <label className={styles.label}>name</label>
                                    <input {...input} className={styles.input} /*value={contact.name} onChange={(event) => onChange(event)}*/ />
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
                                    <label className={styles.label}>email</label>
                                    <input {...input} className={styles.input}/>
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
                                    <label className={styles.label}>message</label>
                                    <textarea {...input} className={styles.textarea}/>
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        />
                    </div>
                    <button type='submit' className={styles.contactBtn}>Send</button>
                </form>
            )
        }/>
    </>
    )
}