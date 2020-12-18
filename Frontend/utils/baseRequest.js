
const axios = require('axios');

const postUserInfo = async (userInfo) => {
    axios.post('localhost:8000/auth/signup', 
        {userInfo}
    )
}

