import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import styles from './Contact.module.css';

type errors = {
    email?: string;
    message?: string;
}

export default function Contact() {
    const onSubmit = (event: EventTarget) => {
        debugger
    };
    // disables form Submit if there is an error
    const validate = (event: any): any => {
        console.log(event)
        const errors: errors = {};
        // email regex https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
        if (event.email && event.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
            errors.email = 'please fix email'
        }
        if (event.message && event.message.length < 5) {
            errors.message = 'message too short'
        }
        console.log(errors)
        return errors;
    };
    return (
    <>
        <Form 
            onSubmit={onSubmit} 
            validate={validate} 
            render={( {handleSubmit} ) => (
                <form onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <label>email</label>
                        <Field name='email' component='input' placeholder='email' />
                    </div>
                    <div className={styles.field}>
                        <Field
                            name='message' render={({input, meta}) => (
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