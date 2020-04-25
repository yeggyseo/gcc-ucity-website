import React from "react";
import styles from "./App.module.scss";
import BaseRouter from "./pages/BaseRouter";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
// import { doc } from "prettier";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.AppContent}>
        <Navbar />
        <BaseRouter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
