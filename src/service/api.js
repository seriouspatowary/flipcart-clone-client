import axios from 'axios';

const url = process.env.REACT_APP_APP_URL;

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}


export const orderPost = async(data)=>{

    try {
        let response = await axios.post(`${url}/payment`, data)
        return response.data;
        
    } catch (error) {
        console.log('Error while calling Payment API: ', error);
        return error.response;
    }

}