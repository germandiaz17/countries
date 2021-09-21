import { useParams } from "react-router";
import useFetchData from "../../Hooks/useFetchData";
import '../../styles/weather.css'
import Error from "../pages/Error";
import { Link } from "react-router-dom";

const WeaterView = () => {

    const city = useParams()
    const res = city.weater
    console.log(res)

    const APIKEY = "761b0f097c159be4c4ad3aaeaf4b9fc7"
    const reponse = useFetchData(`https://api.openweathermap.org/data/2.5/weather?q=${res}&appid=${APIKEY}`)
    console.log(reponse.data)


    if(!reponse.data.wind) return <Error />
    return (
        <div className='weather-container'>
            <div className='border-clima'>
                <Link to='/' className='back'>home</Link>
                <h1>city: {reponse.data.name}</h1>
                <h2>Time zone: {reponse.data.timezone}</h2>
                <h2>Visivility: {reponse.data.visibility}</h2>
                <h1>Wind: </h1>
                <p><span>deg:</span> {reponse.data.wind.deg}, <span>gust:</span> {reponse.data.wind.gust}, <span>speed:</span> {reponse.data.wind.speed}</p>
                <h4>description: {reponse.data.weather[0].description}</h4>
            </div>
        </div>
     );
}
 
export default WeaterView;