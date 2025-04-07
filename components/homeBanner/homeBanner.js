import Image from "next/image";
import React from "react";
import styles from "./homeBanner.module.css";

export const HomeBanner = () => {
  return (
    <div className={styles.homeBanner}>
      <Image
        className={styles.imgBanner}
        src="/homeBanner.png"
        alt="Home Banner"
        width={1200}
        height={400}
      />
    </div>
  );
};
