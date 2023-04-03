import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  
  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Sign-Up with your Email-Id & Password</h2>
      <br />
      <form onSubmit={() => {}}>
        <div>
          <label>Display Name</label>
          <input
            type="text"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
        </div>

        <div>
          <label>Email Id</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
            required
          />
        </div>

        <div className="button">
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
