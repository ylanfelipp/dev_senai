import Carrossel from "@/components/Carrossel/Carrossel";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import SectionProjetos from "@/components/SectionProjetos/SectionProjetos";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Navbar />
      </header>
      <main>
        <Carrossel />
        <SectionProjetos />
      </main>
    </div>
  );
}
