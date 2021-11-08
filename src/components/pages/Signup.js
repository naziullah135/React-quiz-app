import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

const Signup = () => {
  return (
    <>
      <h1>Create a new account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
