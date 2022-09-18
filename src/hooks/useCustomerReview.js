import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const useCustomerReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('https://warehouse-manager-258000.herokuapp.com/review')
            data && setReviews(data);
        }
        fetchData()
    }, []);
    return { reviews, setReviews };
}

export default useCustomerReview;