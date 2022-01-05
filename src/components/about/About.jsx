import './about.css';
import Creator from '../../imgs/creator1.jpg'
import Award from '../../imgs/award.png';

const About = () => {
    return (
        <div className='about_jar'>
            <div className="about_left">
                <div className="about_card bgg" ></div>
                <div className="about_card">
                    <img src={Creator} alt="about me" className='card_img' />
                </div>
            </div>
        <div className="about_right">
            <h1 className="a-title">Ronnie Dsouza</h1>
            <p className="a-sub">
                It is a long established fact that a reader will be distracted by the
                readable content.
            </p>
            <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
            </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>        
        </div>
        </div>
    )
}

export default About;
