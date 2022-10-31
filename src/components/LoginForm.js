import TextInput from "./TextInput";
import classes from "../styles/Login.module.css";
import Button from "./Button";
import Form from "./Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function LoginForm() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email,password);
      navigate("/");

    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login an account!");
    }
  }

  return (
    <Form className={`${classes.login} form`} onSubmit={handleSubmit}>
      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" disabled={loading}>
        <span>Login your account</span>
      </Button>
      <div className="info">
        Don't have an account? <a href="signup.html">Signup</a> instead.
      </div>
    </Form>
  );
}
