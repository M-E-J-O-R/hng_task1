import '../styles/contact.css'
import ContactForm from '../components/ContactForm';
const Contact = () => {



    return (
        <div className="Contact">

            <header className='contact-header'>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything in you have in your mind</p>
            </header>

            <main>
                <ContactForm />
            </main>

        </div>
    );
}

export default Contact;