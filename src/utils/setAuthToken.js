import axios from 'axios';

//this utility will adt eh authorized user's JWT to the request header
//any routes that are ptrotected will require the JWT in order to acess them

const setAuthToken = (token) => {
    if (token) {
        //Apply the token to every request header
        axios.defaults.headers.common['Authorization'] = token;
        console.log('-- HEADERSA --');
        console.log(axios.defaults.headers.common)
     } else {
        delete axios.defaults.headers.common['Authorization'];   
     }
}

export default setAuthToken;