import styles from "./page.module.css";
import CompanySection from "@/app/components/CompanySection";
import Card from "@/app/components/Card";

const companies = [
  {
    name: "Estheturk Danışmanlık",
    description: "2023 yılında kurulan Estheturk Danışmanlık, uzman kadrosuyla plastik cerrahi danışmanlık hizmeti sunmayı hedefleyen bir şirkettir. ",
    link: "http://www.estheturk.com.tr/",
    iconSrc: "/estheturk.webp",
    iconWidth: 210,
    iconHeight: 50,
  },
  {
    name: "Anke Yapı ve İnşaat",
    description: "2011'de kurulan Anke Yapı ve İnşaat, anahtar teslim projeler, kat karşılığı inşaat ve taahhüt hizmetleri veren bir firmadır. Müşteri memnuniyetine odaklanarak kaliteli ve güvenilir hizmet anlayışını benimser.",
    link: "https://www.ankeyapi.com",
    iconSrc: "/anke-logo.webp",
    iconWidth: 200,
    iconHeight: 150,
  },
  {
    name: "RM Hukuk Bürosu",
    description:"2019 yılında kurulan hukuk bürosu, müşterilere en iyi ve kaliteli hizmeti sunmayı hedefleyen bir vizyonla faaliyet göstermektedir. Hukuki ihtiyaçlarınızı karşılamak ve size çözüm sunmak için çalışmalarını sürdürmektedir.",
    link: "/",
    iconSrc: "/rm-logo.webp",
    iconWidth: 100,
    iconHeight: 180,
    buttonDisabled: true,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <CompanySection />
      <section className={styles.section}>
        <div className={styles.content}>
          {companies.map((company, index) => (
            <Card key={index} company={company} />
          ))}
        </div>
      </section>
    </main>
  );
}
