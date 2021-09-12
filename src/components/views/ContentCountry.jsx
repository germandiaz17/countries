//styles
import "../../styles/contentCountries.css";

import {Link} from 'react-router-dom'

const ContentCountry = ({ name, flag }) => {
  return (
    <div className="container">
      <p>{name}</p>
      <Link className='link' to={`/country/${name}`}>Ver mas</Link>
      <div className="image-flag">
        <img className="image" src={flag} alt={name} />
      </div>
    </div>
  );
};

export default ContentCountry;
