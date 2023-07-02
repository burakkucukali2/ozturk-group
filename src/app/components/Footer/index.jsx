import React from "react";
import styles from "./index.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div>Adres: Ataköy Towers A Blok Kat:15 Bakırköy/İstanbul</div>
      <div>Telefon: +90 212 543 57 53</div>
    </div>
  );
}

export default React.memo(Footer);
