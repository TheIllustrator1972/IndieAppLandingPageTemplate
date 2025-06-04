import AppTitleAndDescription from "./common/AppTitleAndDescription";
import Header from "./common/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AppScreenshots from "./common/AppScreenshots";
import Copyright from "./common/Copytight/Copyright";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-light-background dark:bg-dark-background">
      <Header />
      <main className="mt-8 flex-grow overflow-y-auto">
        <AppTitleAndDescription />
        <AppScreenshots />
      </main>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
}
