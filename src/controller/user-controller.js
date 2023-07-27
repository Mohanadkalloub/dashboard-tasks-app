class UserController {
    async register(User){
        let response = await User.register();
    }
    async signIn(User){
        let response = await User.signIn();
    }
    async signOut(User){
        let response = User.signOut();
    }
}
export default UserController;