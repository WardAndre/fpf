import styles from "./page.module.css";
import PersistentDrawerLeft from "@/app/drawer/page"

export default function Home() {
  return (
    <main className={styles.main}>
      <PersistentDrawerLeft />
    </main>
  );
}
