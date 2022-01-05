import './episodelist.css';
import Episode from '../episode/Episode';
import { episodes } from '../../data';

const EpisodeList = () => {
    return (
        <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Keep up with the latest episodes</h1>
          <p className="pl-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Morbi blandit cursus risus at ultrices. Condimentum
            vitae sapien pellentesque habitant. Interdum varius sit amet
            mattis. Interdum consectetur libero id faucibus nisl tincidunt.
            Sapien nec sagittis aliquam malesuada bibendum.
          </p>
        </div>
        <div className="pl-list">
          {episodes.map((item) => (
            <Episode key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    )
}

export default EpisodeList
