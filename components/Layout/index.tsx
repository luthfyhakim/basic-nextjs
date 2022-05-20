/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

interface LayoutPage {
    children: ReactNode;
    pageTitle: string; // mendefinisikan variable
}

export default function Layout(props: LayoutPage) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>
                    NextJs Basic |
                    {' '}
                    {pageTitle}
                </title>
                <meta name="description" content="Website Next Js Basic" />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    );
}
