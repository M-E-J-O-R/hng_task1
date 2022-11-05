import { useNavigate } from "react-router-dom"

const ContactForm = () => {
    let navigate = useNavigate() //navigation 


    //this function prevents default submission and also help navigate back to the Home page
    const handleSubmit = (e) => {
        e.preventDefault()
        setTimeout(navigate('/'), 500)
    }
    return (<>

        <form onSubmit={handleSubmit} className='form-container'>

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
            <button id='btn__submit'> Send Message</button>

        </form>
    </>);
}

export default ContactForm;