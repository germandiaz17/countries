import { useState } from 'react'
import '../../styles/form.css'

//customhook
import { Link } from 'react-router-dom'

const Form = () => {

    const [letter, setLetter] = useState('')

    const hanldeChange = (e) => {
        setLetter(e.target.value)
    }

    return ( 
        <form className='form'>
            <label>
                Country: 
                <input type="text" onChange={hanldeChange}/>
            </label>
            <Link className='btn' to={`/country/${letter}`}>serch</Link>
        </form>
     );
}
 
export default Form;