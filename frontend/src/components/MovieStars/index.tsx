import { ReactComponent as StarFull } from '../../assests/img/starFull.svg';
import { ReactComponent as StarHalf } from '../../assests/img/starHalf.svg';
import { ReactComponent as StarEmpty } from '../../assests/img/starEmpty.svg';
import './styles.css';

function MovieStars () {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;