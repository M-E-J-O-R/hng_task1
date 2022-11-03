import '../styles/contact.css'
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    let navigate = useNavigate()
    return (
        <div className="Contact">
            <header className='contact-header'>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything in you have in your mind</p>
            </header>
            <main>
                <form className='form-container'>

                    <section className='contact__name'>
                        <label htmlFor="first_name">
                            First name
                            <input required type="text" id="first_name" placeholder="Enter your first name" />
                        </label>
                        <label htmlFor="last_name">
                            Last name
                            <input required type="text" id="last_name" placeholder="Enter your last name" />
                        </label>

                    </section>

                    <label htmlFor="email">
                        Email
                        <input required type="email" id="email" placeholder="yourname@email.com" />
                    </label>

                    <label htmlFor="message">
                        Message
                        <textarea required name="message" id="message" cols="28" rows="17" placeholder="Send a message and I'll reply as soon as possible"></textarea>

                    </label>

                    <label className='terms' htmlFor="terms">
                        <input required type="checkbox" id='terms' />
                        You agree to providing your data to Amujo Babatunde who may contact you.
                    </label>

                    <button onClick={() => navigate('/')} id='btn__submit'> Send Message</button>

                </form>
            </main>



        </div>
    );
}

export default Contact;