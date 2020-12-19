
const axios = require('axios');

export const postUserInfo = async (userInfo) => {
    await axios.post('https://localhost:8000/auth/signup',
        userInfo
    )
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log('Erorr on post.');
    })
}

