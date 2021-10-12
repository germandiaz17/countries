//styles
import '../../styles/index.css'

//components
import ContentCountry from './ContentCountry'
import Form from './Form'

//Hooks---customHook 
import { useState } from 'react'
import useFetchData from '../../Hooks/useFetchData'

const Index = () => {

    const [init, setInit] = useState(0)
    const [finish, setFinish] = useState(12)

    const {data} = useFetchData('https://restcountries.com/v2/all')


    //functions
    const Next = () => {
        setInit(init + 12)
        setFinish(finish + 12)

        if(finish === 250) {
            setInit(238)
            setFinish(250)
        }
    }

    const Prev = () => {
        setInit(init - 12)
        setFinish(finish - 12)

        if(init === 0) {
            setInit(0)
            setFinish(12)
        }
    }

    return ( 
        <div className = 'index'>
            <h1 className='title-h1'>PAISES DEL MUNDO</h1>
                
                <Form />

                <div className='content-conutry'>
                    {
                        data.slice(init, finish).map((item) => (
                            <ContentCountry key={item.name} name={item.name} flag={item.flag}/>
                        ))
                    }
                </div>
                
                <button className='btn-index' onClick={Prev}>Prev</button>
                <button className='btn-index' onClick={Next}>Next</button>
        </div>
     );
}
 
export default Index;