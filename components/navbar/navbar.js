"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import MiniButtons from "../buttons/miniButtons";

export const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  function toggleSidebar() {
    setHidden(!hidden);
  }

  return (
    <nav className={styles.navbar}>
      <ul
        className={[`${styles.navList} ${styles.sidebar}`]}
        style={{ display: hidden ? "none" : "flex" }}
      >
        <li onClick={toggleSidebar}>
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#e3e3e3"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/"} className={styles.navLink}>
            Desafios
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/"} className={styles.navLink}>
            Randomizador
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/"} className={styles.navLink}>
            Dicas
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/"} className={styles.navLink}>
            Guias
          </Link>
        </li>
        <li>
          <MiniButtons link={"/"} text={"login"} buttonType={"#187f9c"} />
        </li>
        <li>
          <MiniButtons link={"/"} text={"Cadastro"} buttonType={"#31b0b8"} />
        </li>
      </ul>

      <ul className={styles.navList}>
        <li className={[`${styles.navItem}`]}>
          <Link href={"/"}>
            <Image src="/logo.png" alt="" height={45} width={130} />
          </Link>
        </li>
        <li className={[`${styles.navItem} ${styles.hideOnMobile}`]}>
          <Link href={"/"} className={styles.navLink}>
            Desafios
          </Link>
        </li>
        <li className={[`${styles.navItem} ${styles.hideOnMobile}`]}>
          <Link href={"/"} className={styles.navLink}>
            Randomizador
          </Link>
        </li>
        <li className={[`${styles.navItem} ${styles.hideOnMobile}`]}>
          <Link href={"/"} className={styles.navLink}>
            Dicas
          </Link>
        </li>
        <li className={[`${styles.navItem} ${styles.hideOnMobile}`]}>
          <Link href={"/"} className={styles.navLink}>
            Guias
          </Link>
        </li>
        <li onClick={toggleSidebar} className={styles.menuButton}>
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#e3e3e3"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </Link>
        </li>
        <li className={[`${styles.hideOnMobile}`]}>
          <MiniButtons link={"/"} text={"Login"} buttonType={"#187f9c"} />
        </li>
        <li className={[` ${styles.hideOnMobile}`]}>
          <MiniButtons link={"/"} text={"Cadastro"} buttonType={"#31b0b8"} />
        </li>
      </ul>
    </nav>
  );
};
