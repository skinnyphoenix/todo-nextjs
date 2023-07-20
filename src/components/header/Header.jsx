import styles from "./Header.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MainContext } from "@/pages/state";
import { Main } from "next/document";
import { actionAsyncStorage } from "next/dist/client/components/action-async-storage";

const Header = () => {
  const router = useRouter();
  const { dispatch } = useContext(MainContext);
  const onHandleClick = () => {
    router.push("/login");
  };

  return (
    <div className={styles.wrapperHeader}>
      <ul>
        <li></li>
        <li>Home</li>
        <li onClick={onHandleClick}>Login</li>
      </ul>
    </div>
  );
};

export default Header;
