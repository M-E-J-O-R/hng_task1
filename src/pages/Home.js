import github from '../assests/github.svg';
import slack from '../assests/slack-logo.svg';
import motto from '../assests/motto.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (<>
        <div className="Home">
            <header>
                <section className='profile_section'>
                    <img id='profile__img' src="https://images.unsplash.com/photo-1474447976065-67d23accb1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" alt='profile' />
                    <h4>Amujo Babatunde</h4>
                    <span id='slack'>Slack: Mejor</span>

                </section>

            </header>
            <main>
                <section className='link_section'>


                    <a id='twitter' href='https://twitter.com/M_E_J_O_R' target={'_blank'} rel="noreferrer">Twitter</a>

                    <a id='btn__zuri' href='https://training.zuri.team/' target={'_blank'} rel="noreferrer">Zuri Team</a>

                    <a id='books' href='http://books.zuri.team' target={'_blank'} rel="noreferrer">Zuri Books</a>

                    <a id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=mejor' target={'_blank'} rel="noreferrer">Python Books</a>

                    <a id='pitch' href='https://background.zuri.team' target={'_blank'} rel="noreferrer">Background Checks for Coders</a>

                    <a id='book__design' href='https://books.zuri.team/design-rules' target={'_blank'} rel="noreferrer">Design Books</a>

                    <Link to={'/contact'}>Contact Me</Link>

                    <div className='social_media'>

                        <img src={slack} alt="slack" />

                        <a href="https://github.com/M-E-J-O-R">
                            <img src={github} alt="github" />
                        </a>


                    </div>
                </section>


            </main>
            <hr />

            <footer>
                <section className='zuri_footer'>


                    <p>Zuri<b>.</b>Intership</p>
                    <p>HNG Internship 9 Frontend Task</p>
                    <img src={motto} alt="motto" />
                </section>


            </footer>

        </div>
    </>);
}

export default Home;