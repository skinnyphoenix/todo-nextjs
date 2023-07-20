import styles from "../styles/Login.module.css";
import Router, { useRouter } from "next/router";
import Auth from "@/utils/auth";
import { useContext } from "react";
import { MainContext } from "./state";
import { useState } from "react";
import { auth, provider } from "../../src/plugins/firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const router = useRouter();
  const { dispatch } = useContext(MainContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleUsername = (e) => setUsername(e.target.value);
  const onHandlePassword = (e) => setPassword(e.target.value);

  const onHandleLogin = (e) => {
    e.preventDefault();
    if (Auth.username === username && Auth.password === password) {
      router.push("/");
    } else {
    }
  };

  const onHandleGoogleAuth = async () => {
    const res = await signInWithPopup(auth, provider);
    // dispatch({ type: "SET_USERNAME", payload: res.user.email });
    console.log(res.user.email);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.formWrapper} onSubmit={onHandleLogin}>
        <input type="text" onChange={onHandleUsername} value={username} name="username" id="" />
        <input type="password" onChange={onHandlePassword} value={password} name="username" id="" />
        <input type="submit" value="Log-In" />
        <button onClick={onHandleGoogleAuth}>Sign-In with Google</button>

        <p>Username: 1 Password: 1</p>
      </form>
    </div>
  );
}
