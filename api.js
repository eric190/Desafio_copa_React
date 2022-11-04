import react from 'react';

import axios from 'axios';

export default axios.create({
    baseUrl: 'http://localhost:5000/'

});
