//styles
import '../../styles/error.css'

import { Link } from 'react-router-dom';

const Error = () => {
    return ( 
        <div className='error'>
            <div className='content-error'>
                <h1>No Found</h1>
                <p>sorry, something has gone wrong!</p>
                <p>or the search you have done is not valid</p>
                <Link to='/' className='link-error'>back to home</Link>
            </div>
        </div>
     );
}
 
export default Error;