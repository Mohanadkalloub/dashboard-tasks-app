import axios from "axios";

class User {
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }
    async signIn(){
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-CuGLpsnO3xio6gRH1q6f2tYfcZAszlo` , 
            {
                email:this.email,
                password:this.password,
                returnSecureToken:true
            });
        } catch (error) {
            // return false
        }
    }
    async signOut() {
        /// sign out not request 
        // used with local storge 
    }
    async register(){
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-CuGLpsnO3xio6gRH1q6f2tYfcZAszlo`,
            {
                email:this.email,
                password:this.password,
                returnSecureToken:true
            });
        } catch (error) {
            // return false
        }
    }
}
export default User;