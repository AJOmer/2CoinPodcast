import './episode.css';

const Episode = ({img, link}) => {
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="blank blank" className="p-img" />
            </a>
        </div>
    )
}

export default Episode
