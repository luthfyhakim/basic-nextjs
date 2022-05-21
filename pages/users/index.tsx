/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Layout from '../../components/Layout';

interface UsersProps{
    dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
    const { dataUsers } = props;
    console.log(dataUsers);

    return (
        <Layout pageTitle="Users">
            {dataUsers.map((user) => (
                <>
                    <p className={user.id}>{user.name}</p>
                    <p className={user.id}>{user.email}</p>
                </>
            ))}
        </Layout>
    );
}

// data fetching API
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await response.json();

    return {
        props: {
            dataUsers,
        },
    };
}
