
const axios = require('axios');

export const postUserInfo = (userInfo) => {
    axios.post('http://localhost:8000/auth/signup',
        userInfo
    )
    .then((response) => {
        console.log(response);
    })
}

