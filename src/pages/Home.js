
import '../styles/home.css'
import HomeFooter from '../components/HomeFooter';
import LinkCard from '../components/LinkCard';

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
                <LinkCard />
            </main>

            <hr />

            <footer>
                <HomeFooter />
            </footer>

        </div>
    </>);
}

export default Home;