import SocialMedia from "../SocialMedia/SocialMedia";

const RegisterTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="pills-register"
      role="tabpanel"
      aria-labelledby="tab-register">
      {/* rigestar tab */}
      <form>
        <SocialMedia message="Register To Task System with " />

        <h4 className="mb-4 mt-5 text-center">or:</h4>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerUsername"
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            placeholder="password"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            placeholder="repeat password"
          />
        </div>
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            checked
            aria-describedby="registerCheckHelpText"
          />
          <label className="form-check-label" for="registerCheck">
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
