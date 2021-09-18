//hooks
import { useParams } from "react-router";
import useFetchData from '../../Hooks/useFetchData'

//styles
import '../../styles/moreInfo.css'

import { Link } from "react-router-dom";

//components
import Error from "../pages/Error";

const MoreInfo = () => {

    const {info} = useParams()

    const {data} = useFetchData(`https://restcountries.eu/rest/v2/name/${info}`) 

    if(!data[0]) return <Error /> 
    return(
        <div className='content'>
            <div className='content-recuadre'>
                <Link to='/' className='back'>home</Link>
            <h1 className='title'>{data[0].name}</h1>
            <div className='img-content'>
                <img className='image' src={data[0].flag} alt={info} />
            </div>
            <div className='info'>
                <p><span>Capital:</span> {data[0].capital}</p>
                <p><span>Code:</span> {data[0].alpha3Code}</p>
                <p><span>Region:</span> {data[0].region}</p>
                <p><span>SubRegion:</span> {data[0].subregion}</p>
                <p><span>Lenguaje:</span> {data[0].languages[0].name}</p>
                <p><span>Time Zone:</span> {data[0].timezones}</p>
                <p><span>Area:</span> {data[0].area} km2</p>
                <p><span>borders:</span> {!data[0].borders.length > 0 ? 'is island' : data[0].borders.map((e) => `${e}, `)}</p>
            </div>
            </div>
        </div>
    )
}
 
export default MoreInfo;