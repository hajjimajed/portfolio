import './contact.styles.scss'
import Button from '../../components/button/button.component'
import FormInput from '../../components/form-input/form-input.component'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { ReactComponent as Mail } from '../../assets/mail.svg'
import { ReactComponent as Phone } from '../../assets/phone.svg'
import { ReactComponent as Pin } from '../../assets/pin.svg'

import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'

import { ReactComponent as Deal } from '../../assets/deal.svg'

import { contactMessage } from '../../utils/firebase.utils'

const defaultFormFields = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.2,
            delay: 0.3
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const Contact = () => {

    const [hasValue, setHasValue] = useState(true);
    const [labelHasValue, setLabelHasValue] = useState(false);

    function handleInput(event) {
        if (event.target.value.trim() === "") {
            setHasValue(false);
            setLabelHasValue(false);
        } else {
            setHasValue(true);
            setLabelHasValue(true);
        }
    }

    function handleBlur(event) {
        if (event.target.value.trim() === "") {
            setHasValue(false);
            setLabelHasValue(false);
        }
    }

    const [formfields, setFormfields] = useState(defaultFormFields);
    const { name, email, subject, message } = formfields;
    const [isMessageSent, setIsMessageSent] = useState(false);

    const resetFormFields = () => {
        setFormfields(defaultFormFields);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        contactMessage(name, email, subject, message);
        resetFormFields();
        setIsMessageSent(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormfields({ ...formfields, [name]: value })
    }


    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className='contact-container'>

            <motion.div variants={item} className='contact-infos'>
                <h2 className='contact-me'>contact me</h2>
                <h1 className='problematique'>Got a problem to solve?</h1>
                <p className='intro'>Get your space suit ready and tell me your ideas to develop your dream application.</p>
                <div className='myinfos'>
                    <div className='info'><Mail className='info-icon' /><h1>hajjimajed78@gmail.com</h1></div>
                    <div className='info'><Phone className='info-icon' /><h1>+216 52 047 045</h1></div>
                    <div className='info'><Pin className='info-icon' /><h1>Sidi Bouzid, Tunisia</h1></div>
                </div>
                <div className='social-media'>
                    <Github className='social-media-icon' />
                    <Linkedin className='social-media-icon' />
                    <Instagram className='social-media-icon' />
                </div>
            </motion.div>

            {
                isMessageSent ? (
                    <motion.div variants={item} className='message-sent-container'>
                        <Deal className='deal-icon' />
                        <h1>thank you for your time</h1>
                        <h2>we'll be in touch shortly</h2>
                    </motion.div>
                ) : (
                    <motion.div variants={item} className='contact-form'>
                        <form action="" onSubmit={handleSubmit}>
                            <FormInput label="Name" required type="name" name="name" value={name} onChange={handleChange} />
                            <FormInput label="Email" required type="email" name="email" value={email} onChange={handleChange} />
                            <FormInput label="Subject" required type="subject" name="subject" value={subject} onChange={handleChange} />
                            <div className='message-container'>
                                <textarea required
                                    className={`message ${hasValue ? "" : "no-value"}`}
                                    onFocus={() => setHasValue(true)}
                                    onBlur={handleBlur}
                                    onInput={handleInput}
                                    name="message" id="" cols="30" rows="5"
                                    value={message}
                                    onChange={handleChange}></textarea>
                                <label className={`message-label ${labelHasValue ? "shrink" : ""}`}>Message<span> *</span></label>
                            </div>
                            <Button type='submit' buttonType='primary'>Send Message</Button>
                        </form>
                    </motion.div>
                )
            }



        </motion.div>
    )
}

export default Contact;