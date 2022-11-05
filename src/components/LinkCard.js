import github from '../assests/github.svg';
import slack from '../assests/slack-logo.svg';
import { Link } from 'react-router-dom';

const LinkCard = () => {
    return (
        <>
            <section className='link_section'>


                <a id='twitter' href='https://twitter.com/M_E_J_O_R' target={'_blank'} rel="noreferrer">Twitter</a>

                <a id='btn__zuri' href='https://training.zuri.team/' target={'_blank'} rel="noreferrer">Zuri Team</a>

                <a id='books' href='http://books.zuri.team' target={'_blank'} rel="noreferrer">Zuri Books</a>

                <a id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=mejor' target={'_blank'} rel="noreferrer">Python Books</a>

                <a id='pitch' href='https://background.zuri.team' target={'_blank'} rel="noreferrer">Background Checks for Coders</a>

                <a id='book__design' href='https://books.zuri.team/design-rules' target={'_blank'} rel="noreferrer">Design Books</a>

                <Link id='contact' to={'/contact'}>Contact Me</Link>

                <div className='social_media'>

                    <img src={slack} alt="slack" />

                    <a href="https://github.com/M-E-J-O-R">
                        <img src={github} alt="github" />
                    </a>


                </div>
                
            </section>
        </>
    );
}

export default LinkCard;