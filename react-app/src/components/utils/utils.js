import decode from 'jwt-decode'

const utils = ({
    setToken(idToken) {
        localStorage.setItem('id_token', idToken)
    },

    getToken() {
        return localStorage.getItem('id_token')
    },

    loggedIn() {
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token)
    },

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    },

    logout() {
        localStorage.removeItem('id_token');
    }
})

export default utils;
