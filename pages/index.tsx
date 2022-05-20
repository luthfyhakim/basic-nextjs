/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <h1 className={styles.container}>Welcome Luthfy</h1>
    </Layout>
  );
}
