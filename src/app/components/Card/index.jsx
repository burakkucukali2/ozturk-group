"use client";

import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

function Card({ company }) {
  const [containerClassName, setContainerClassName] = React.useState("");
  const transformString = (str) => {
    const characterReplacements = {
      İ: "i",
      i: "i",
      I: "i",
      ı: "i",
      ğ: "g",
      Ğ: "g",
      ü: "u",
      Ü: "u",
      ş: "s",
      Ş: "s",
      ö: "o",
      Ö: "o",
      ç: "c",
      Ç: "c",
    };

    const replaceSpacesWithDash = str.replace(/\s+/g, "-").toLowerCase();
    const replaceCharacters = replaceSpacesWithDash.replace(
      /[İIığüşöç]/g,
      (match) => characterReplacements[match.toLowerCase()]
    );
    return replaceCharacters.toLowerCase();
  };

  return (
    <div
      className={`${styles.container} ${styles[`${containerClassName}}`]}`}
      onClick={() =>
        setContainerClassName((prev) => (prev === "flip" ? "" : "flip "))
      }
    >
      <div className={styles.card}>
        <div className={styles.front}>
          <Image
            src={company.iconSrc}
            alt={transformString(company.name)}
            width={company.iconWidth}
            height={company.iconHeight}
          />
        </div>
        <div className={styles.back}>
          <span className={styles.title}>{company.name}</span>
          <p>{company.description}</p>
          {!company.buttonDisabled && (
              <a className={styles.btn} href={company.link} target="_blank">
                Ziyaret Et
              </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Card);
