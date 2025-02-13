import Carrossel from "@/components/Carrossel/Carrossel";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Navbar />
      </header>
      <main>
        <Carrossel />
      </main>
    </div>
  );
}
