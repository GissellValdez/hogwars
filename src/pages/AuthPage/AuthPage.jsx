import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";

export default function AuthPage(props) {
  return (
    <main>
      <h1>Sign Up!</h1>
      <SignUpForm setUser={props.setUser}/>
      <h1>Log In!</h1>
      <LoginForm setUser={props.setUser}/>
      <div className="intro-img">
        <img src="https://i.ibb.co/K7FRrjF/Hog-WARSIntro.jpg" alt="Hog-WARSIntro" border="0" />
      </div>
    </main>
  );
}
