import {useState} from "react";
import axios from "axios";

export default function <T>() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<T>()

    const customFetch = (url: string) => {
        setLoading(true)
        axios
            .get(url)
            .then(({data}) => {
                setData(data.meals[0])
            })
            .finally(() => setLoading(false))

    }


    return {loading, data, customFetch}
}