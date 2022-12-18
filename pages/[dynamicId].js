import { useRouter } from 'next/router';
import React from 'react';

const dynamicId = () => {
    const router = useRouter();
    const id = router.query.dynamicId;
    return (
        <div>
            This is dynamic page of {id}
        </div>
    );
};

export default dynamicId;