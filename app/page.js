import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/navbar/navbar";
import { HomeBanner } from "@/components/homeBanner/homeBanner";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <HomeBanner />
    </div>
  );
}
