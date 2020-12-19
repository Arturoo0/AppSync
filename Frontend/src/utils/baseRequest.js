
const axios = require('axios');

export const postUserInfo = async (userInfo) => {
    axios.post('localhost:8000/auth/signup', 
        {userInfo}
    )
}

