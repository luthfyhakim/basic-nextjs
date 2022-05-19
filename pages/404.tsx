import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => { // set time redirect
            router.push('/'); // redirect ke halaman home
        }, 2000);
    }, []);

    return (
        <div className="title-not-found">
            <h1>404</h1>
            <h1>Page Not Found</h1>
        </div>
    );
}
