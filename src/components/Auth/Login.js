import React from "react";
import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

function Login(props) {
  const {
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateLogin);
  const [login, setLogin] = React.useState();

  return (
    <div>
      <h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          value={values.name}
          placeholder="your name"
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          values={values.name}
          onChange={handleChange}
          className={errors.email && "error-input"}
          placeholder="Your email"
          autoComplete="off"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          type="password"
          values={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          className={errors.password && "error-input"}
          name="password"
          placeholder="Choose a secure password"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <div className="flex mt3">
          <button
            type="submit"
            className="button pointer mr2"
            disabled={isSubmitting}
            style={{ background: isSubmitting ? "grey" : "orange" }}
          >
            Submit
          </button>
          <button
            type="button"
            className="pointer button"
            onClick={() => setLogin((prevLogin) => !prevLogin)}
          >
            {login ? "need to create an acount" : "already have an account?"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
