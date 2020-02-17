import axios from 'axios'

const instance = axios.create ({
    //Authentifizierung bei Firestore
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
    //
    // /accounts:signUp?key=[ "AIzaSyDmg53knKxrYOFMWUM2h0jUI8etJyuT_vw" ]
    // accounts:signInWithCustomToken?key=
});
instance.defaults.headers.post["Content-type"] = "application/json"
export default instance
