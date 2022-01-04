import './intro.css';
import logo from '../../imgs/mainLogo.png';

const Intro = () => {
    return (
        <div className='intro_jar'>
            <div className='intro_jar_left'>
                <div className='left_wrapper'>
                    <h2 className='greeting'>Hello, Thanks for checking out</h2>
                    <h1 className='podName'>The 2CoinPodcast</h1>
                    <div className='left_title'>
                        <div className='title_wrapper'>
                            <div className="title_item">Sports</div>
                            <div className="title_item">Music</div>
                            <div className="title_item">Fashion</div>
                            <div className="title_item">Culture</div>
                            <div className="title_item">Business</div>
                        </div>
                    </div>
                    <div className="title_desc">
                        The 2Coin Podcast is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus
                        vestibulum sed. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant.
                        Consequat interdum varius sit amet mattis vulputate.
                    </div>
                </div>
            </div>
            <div className='intro_jar_right'>
                <div className="bg"></div>
                <img src={logo} alt='2Coin Podcast' className='logo'/>
            </div>
        </div>
    )
}

export default Intro
