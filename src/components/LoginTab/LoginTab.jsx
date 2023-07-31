import { useRef } from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../redux/slices/auth-slice";
import UserController from "../../controller/user-controller";
import User from "../../models/user-model";

const LoginTab = () => {
  let controller = new UserController();
  let emailRef = useRef();
  let passwordRef = useRef();
  let dispatch = useDispatch();
  let onFormSubmitHandler = async (event) => {
    event.preventDefault();
    let response = await controller.signIn(user());
    if (response.status) {
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("token", response.data.idToken);
      // for new task take userid
      localStorage.setItem("userId", response.data.localId);
      dispatch(
        authSliceActions.setToken({
          token: response.data.idToken,
          userId: response.data.localId,
        })
      );
      //   navigator("/Dashboard", { replace: true });
    }
    alert(response.message);
    // login();
  };
  let user = () => {
    return new User(null, emailRef.current.value, passwordRef.current.value);
  };
  return (
    <div
      className="tab-pane  fade show active"
      id="pills-login"
      role="tabpanel"
      aria-labelledby="tab-login">
      <form onSubmit={onFormSubmitHandler}>
        <SocialMedia message="Login To Task System with " />

        <h4 className="mb-5 mt-2 text-center">or</h4>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="loginName"
            className="form-control"
            placeholder="Email or username"
            ref={emailRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>

        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="loginCheck"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="loginCheck">
                Remember me
              </label>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-main btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginTab;
