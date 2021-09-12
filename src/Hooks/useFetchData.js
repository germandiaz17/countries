import { useEffect, useState } from "react";

const useFetchData = url => {

    const [data, setData] = useState([])

    const handleSFetchApi = async () => {
        try {
            const response = await fetch(url)
            const results = await response.json()
            setData(results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleSFetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return {data}
}

export default useFetchData