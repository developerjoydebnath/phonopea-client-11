import axios from "axios";
import { useEffect, useState } from "react"


const useShortPhone = () => {
    const [shortPhone, setShortPhone] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('https://warehouse-manager-258000.herokuapp.com/shortPhones');
            setShortPhone(data);
            shortPhone && setLoading(false);
        }
        fetchData()
    }, [shortPhone]);

    return { shortPhone, loading };
}

export default useShortPhone;