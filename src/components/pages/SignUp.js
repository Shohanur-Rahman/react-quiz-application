import Illustration from "../Illustration";
import signupImage from "../../assets/images/signup.svg";
import SignupForm from "../SignupForm";

export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={signupImage} />
        <SignupForm />
      </div>
    </>
  );
}
