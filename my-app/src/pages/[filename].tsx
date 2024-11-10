// pages/[filename].tsx
import { useRouter } from 'next/router';
import Image from 'next/image';

const DynamicImagePage = () => {
    const router = useRouter();
    const { filename } = router.query;

    if (!filename) return <p>Loading...</p>;

    const imgPath = `/assets/${filename}`;

    return (
        <div className='bg-black w-full h-full flex justify-center'>
            <Image src={imgPath} alt={filename as string} width={1366} height={768} className='w-3/4 h-full object-contain' />
        </div>
    );
};

export default DynamicImagePage;