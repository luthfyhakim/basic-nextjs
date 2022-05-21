import { useRouter } from 'next/router';

export default function DetailUser() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <p>
                Detail User
                {' '}
                { id }
                {' '}
            </p>
        </div>
    );
}
