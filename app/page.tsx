import Header from "./common/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-light-background text-gray-900 dark:bg-dark-background dark:text-gray-100">
      <Header />
    </div>
  );
}
