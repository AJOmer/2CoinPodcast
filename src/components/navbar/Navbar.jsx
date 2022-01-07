import './navbar.css';
import SpinCoin from '../../imgs/spincoin.gif';

const Navbar = () => {
    return (
        <div className="topbar">
            <div className="topLeft">
                <a href='https://www.instagram.com/2coinpodcast/'><i className="iconList" class="fab fa-instagram" ></i></a>
                <a href='https://twitter.com/2coinpodcast'><i className="iconList" class="fab fa-twitter"></i></a>
                <a href='https://podcasts.apple.com/us/podcast/2coin-podcast/id1500805497'><i className="iconList" class="fas fa-podcast"></i></a>
                <a href='https://open.spotify.com/show/4dqXBPhlMS4ooqo8T5nWQV?si=f50e1b4423444c59'><i className="iconList" class="fab fa-spotify"></i></a>
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li id='aboutit' className='topListItem'>ABOUT</li>
                    <li className='topListItem'>PODCAST</li>
                </ul>
            </div>
            <div className="topRight">
                <img src={SpinCoin} alt='coin icon' className='topImage'/>
            </div>
        </div>
    )
}

export default Navbar
