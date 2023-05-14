import { FC } from "react";
import styles from "./HomePage.module.scss";
import Container from "../../components/Container/Container";
import ImagesList from "../../components/ImagesList/ImagesList";

const HomePage: FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <ImagesList />
      </Container>
    </section>
  );
};

export default HomePage;
