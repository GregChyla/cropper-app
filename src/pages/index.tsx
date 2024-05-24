import { Inter } from "next/font/google";
import ImageCropper from "@/Cropper";
import styles from "./index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const image =
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className={styles.mainDiv}>
        <ImageCropper src={image} />
      </div>
    </main>
  );
}
