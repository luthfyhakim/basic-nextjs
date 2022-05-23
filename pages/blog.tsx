/* eslint-disable max-len */
/* eslint-disable semi */
/* eslint-disable array-callback-return */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
    Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal,
} from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css';

interface Post {
    id: number;
    title: string;
    body: string;
    map: any;
    blog: any;
}

interface BlogPosts {
    dataBlog: Post;
}

export default function Blog(props: BlogPosts) {
    const { dataBlog } = props;

    return (
        <Layout pageTitle="Blog">
            {dataBlog.map((blog: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; body: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                <div key={blog.id} className={styles.card}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                </div>
            ))}
        </Layout>
    );
}

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await response.json();

    return {
        props: {
            dataBlog,
        },
    };
}
