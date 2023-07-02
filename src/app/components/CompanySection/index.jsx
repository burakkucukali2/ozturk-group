import React from "react";
import styles from "./index.module.css";

function CompanySection() {
  return (
    <div className={styles["wrapper"]}>
      <span className={styles["company-anchor"]}>
        <div className={styles["company-section"]}>
          <div className={styles["company"]}>ÖZTÜRK</div>
          <div className={styles["company-bottom-wrapper"]}>
            <div className={styles["line"]} />
            <div className={styles["company-bottom-text"]}>GRUP</div>
            <div className={styles["line"]} />
          </div>
        </div>
      </span>
    </div>
  );
}

export default React.memo(CompanySection);
