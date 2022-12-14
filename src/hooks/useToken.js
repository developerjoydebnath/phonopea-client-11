import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const useToken = (user) => {
    // console.log(user?.user?.email)
    const [token, setToken] = useState('');
    const userEmail = user?.user?.email;
    useEffect(() => {
        const getToken = async () => {
            if (userEmail) {
                const { data } = await axios.post('https://warehouse-manager-258000.herokuapp.com/login', { userEmail })
                localStorage.setItem('accessToken', data?.accessToken)
                setToken(data?.accessToken)
            }
        }
        getToken();

    }, [userEmail])
    return [token];
}

export default useToken;