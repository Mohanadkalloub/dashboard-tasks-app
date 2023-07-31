import { useRef } from "react";
import UserController from "../../controller/user-controller";
import SocialMedia from "../SocialMedia/SocialMedia";
import User from "../../models/user-model";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../redux/slices/auth-slice";

const RegisterTab = () => {
  let controller = new UserController();
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let passwordConfirmationRef = useRef();
  let dispatch = useDispatch();
  let onFormSubmitHandler = async (event) => {
    event.preventDefault();
    let response = await controller.register(user());
    if (response.status) {
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      dispatch(authSliceActions.setToken(response.data.id));
      dispatch(
        authSliceActions.setToken({
          token: response.data.idToken,
          userId: response.data.localId,
        })
      );
    }
    alert(response.message);
  };
  let user = () => {
    return new User(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      passwordConfirmationRef.current.value
    );
  };
  return (
    <div
      className="tab-pane fade"
      id="pills-register"
      role="tabpanel"
      aria-labelledby="tab-register">
      {/* rigestar tab */}
      <form onSubmit={onFormSubmitHandler}>
        <SocialMedia message="Register To Task System with " />

        <h4 className="mb-4 mt-5 text-center">or:</h4>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            placeholder="Name"
            ref={nameRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            placeholder="Email"
            ref={emailRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            placeholder="password"
            ref={passwordRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            placeholder="repeat password"
            ref={passwordConfirmationRef}
          />
        </div>
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            defaultChecked
            aria-describedby="registerCheckHelpText"
          />
          <label className="form-check-label" htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
        </div>
        <button type="submit" className="btn btn-main btn-block mb-3">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default RegisterTab;
