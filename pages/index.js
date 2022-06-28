import {  signIn } from "next-auth/react";

const Home = () => {
  return (
    <div className="loginBody">
      <button className="loginBtn" onClick={() => signIn("facebook")}>
        Login
      </button>
    </div>
  );
};

export default Home;
