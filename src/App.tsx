import React from 'react';
import './styles/app.css';
import zuriInternshipLogo from './assests/zuri_internship_logo.svg';
import github from './assests/github.svg';
import slack from './assests/slack-logo.svg';
import motto from './assests/motto.svg';

function App() {
  return (
    <div className="App">
      <header>
        <section className='profile_section'>
          <img id='profile__img' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='profile' />
          <p id='twitter'>Amujo Babatunde</p>
          <span  id='slack'> Mejor</span>
        </section>

      </header>
      <main>
        <section className='link_section'>


          <a id='twitter' href='https://twitter.com/M_E_J_O_R' target={'_blank'} rel="noreferrer">Twitter</a>

          <a id='btn__zuri' href='https://training.zuri.team/' target={'_blank'} rel="noreferrer">Zuri Team</a>

          <a id='books' href='http://books.zuri.team' target={'_blank'} rel="noreferrer">Zuri Books</a>

          <a id='book__python' href='https://books.zuri.team/python-for-beginners' target={'_blank'} rel="noreferrer">Python Books</a>

          <a id='pitch' href='https://background.zuri.team' target={'_blank'} rel="noreferrer">Background Checks for Coders</a>

          <a id='book design' href='https://books.zuri.team/design-rules' target={'_blank'} rel="noreferrer">Design Books</a>

          <div className='social_media'>
         
              <img  src={slack} alt="" />
          
            <a href="https://github.com/M-E-J-O-R">
              <img src={github} alt="" />
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
  );
}

export default App;
