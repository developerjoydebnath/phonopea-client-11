import axios from "axios";
import { useState } from "react";


const useToken = (user) => {
    // console.log(user?.user?.email)
    const [token, setToken] = useState('');
    const getToken = async () => {
        const userEmail = user?.user?.email;
        if (userEmail) {
            const { data } = await axios.post('http://localhost:5000/login', { userEmail })
            localStorage.setItem('accessToken', data?.accessToken)
            setToken(data?.accessToken)
        }
    }
    getToken();
    return [token];
}

export default useToken;