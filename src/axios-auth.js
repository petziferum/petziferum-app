import axios from 'axios'

const instance = axios.create ({
    //Authentifizierung bei Firestore
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
    //
    // /accounts:signUp?key=[ "AIzaSyDmg53knKxrYOFMWUM2h0jUI8etJyuT_vw" ]
});
instance.defaults.headers.common['header'] = 'something';
export default instance
