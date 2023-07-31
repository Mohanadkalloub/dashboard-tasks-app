import axios from "axios";

class User {
    constructor(name, email, password , passwordConfirmation,id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
    }
    async signIn() {
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-CuGLpsnO3xio6gRH1q6f2tYfcZAszlo`,
                {
                    email: this.email,
                    password: this.password,
                    returnSecureToken: true
                });
                return response.data;
        } catch (error) {
            console.log(error.response);
            return null;
        }
    }
    async signOut() {
        /// sign out not request 
        // used with local storge 
    }
    async register() {
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-CuGLpsnO3xio6gRH1q6f2tYfcZAszlo`,
                {
                    email: this.email,
                    password: this.password,
                    returnSecureToken: true
                }); 
                return response.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
export default User;
