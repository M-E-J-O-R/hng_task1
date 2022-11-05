import motto from '../assests/motto.svg';
const HomeFooter = () => {
    return (
        <>
            <section className='zuri_footer'>
                <p>Zuri<b>.</b>Intership</p>
                <p>HNG Internship 9 Frontend Task</p>
                <img src={motto} alt="motto" />
            </section>

        </>
    );
}

export default HomeFooter;