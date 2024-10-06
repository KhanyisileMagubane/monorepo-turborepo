import { Button } from "@repo/ui/components/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button variant="destructive">
          Click Me
        </Button>
      </main>
    </div>
  );
}
