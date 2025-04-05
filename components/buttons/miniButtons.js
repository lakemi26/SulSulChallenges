import React from "react";
import styles from "./miniButtons.module.css";

function MiniButtons({ link, text, buttonType }) {
  return (
    <a
      href={link}
      className={styles.miniButton}
      style={{ backgroundColor: buttonType }}
    >
      {text}
    </a>
  );
}

export default MiniButtons;
