import styles from "./page.module.css";
import CompanySection from "@/app/components/CompanySection";
import Card from "@/app/components/Card";
import Footer from "@/app/components/Footer";

const companies = [
  {
    name: "Anke Yapı ve İnşaat",
    description:
      "Anke Yapı ve İnşaat, 2010 yılında kurulmuş olup, inşaat sektöründe faaliyet göstermektedir. İnşaat sektöründe 10 yıllık tecrübesiyle, müşteri memnuniyetini ön planda tutarak, kaliteli ve güvenilir hizmet anlayışıyla çalışmalarını sürdürmektedir.",
    link: "https://www.ankeyapi.com",
    iconSrc: "/anke-logo.png",
    iconWidth: 200,
    iconHeight: 150,
  },
  {
    name: "Anke Yapı ve İnşaat",
    description: "lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20",
    link: "https://www.ankeyapi.com",
    iconSrc: "/anke-logo.png",
    iconWidth: 200,
    iconHeight: 150,
  },
  {
    name: "Anke Yapı ve İnşaat",
    description:
      "Anke Yapı ve İnşaat, 2010 yılında kurulmuş olup, inşaat sektöründe faaliyet göstermektedir. İnşaat sektöründe 10 yıllık tecrübesiyle, müşteri memnuniyetini ön planda tutarak, kaliteli ve güvenilir hizmet anlayışıyla çalışmalarını sürdürmektedir.",
    link: "https://www.ankeyapi.com",
    iconSrc: "/anke-logo.png",
    iconWidth: 200,
    iconHeight: 150,
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
      <Footer>
        <div className={styles.footer}>
          <Footer />
        </div>
      </Footer>
    </main>
  );
}
