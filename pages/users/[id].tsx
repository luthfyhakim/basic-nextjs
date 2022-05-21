/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface UserDetailProps{
    user: User;
}

export default function DetailUser(props: UserDetailProps) {
    const router = useRouter();
    const { user } = props;

    return (
        <Layout pageTitle="Detail User">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <button type="button" onClick={() => { router.push('/users'); }}>Back</button>
        </Layout>
    );
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await response.json();

    const paths = dataUsers.map((user: User) => ({
        params: {
            id: `${user.id}`,
        },
    })); // mereturn ke paths dg isi list params id dr api

    return {
        paths,
        fallback: false,
    };
}

interface GetStaticProps{
    params: {
        id: string;
    }
}

export async function getStaticProps(context: GetStaticProps) {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();

    return {
        props: {
            user,
        },
    };
}
