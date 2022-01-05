import './aboutw.css';
import Creator from '../../imgs/creator1.jpg'
import Award from '../../imgs/award.png';

const About = () => {
    return (
        <div className='about_jarw'>
            <div className="about_leftw">
                <h1 className="a-titlew">Waleed Elkhalifa</h1>
                <p className="a-subw">
                It is a long established fact that a reader will be distracted by the
                readable content.
                </p>
                <p className="a-descw">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
            <div className="a-awardw">
                <img src={Award} alt="" className="a-award-imgw" />
            <div className="a-award-textsw">
                <h4 className="a-award-titlew">International Design Awards 2021</h4>
                <p className="a-award-descw">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                and fugit.
                </p>
            </div>
        </div>  
            </div>
        <div className="about_rightw">
            <div className="about_cardw bgg" ></div>
                <div className="about_cardw">
                    <img src={Creator} alt="about me" className='card_imgw' />
                </div>
            </div>
        </div>
    )
}

export default About;
