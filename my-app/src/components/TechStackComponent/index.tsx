import Image from 'next/image';

interface TechStackComponentProps {
    imgSrc: string;
    alt: string;
    techStack: string;
}

const TechStackComponent: React.FC<TechStackComponentProps> = ({ imgSrc, alt, techStack }) => {
    return (
        <div className="relative inline-block group cursor-pointer max-md:w-full max-md:flex max-md:justify-center">
            <img
                src={imgSrc}
                alt={alt}
                className="border-r-2 border-neutral-300 px-5 max-xl:px-3 max-md:border-none"
            />
            <div className="absolute z-10 w-full max-md:w-fit flex justify-center mt-3 max-md:mt-[50px] rounded-lg p-2 shadow-lg bg-neutral-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-lg:text-[14px] text-center">
                <p>{techStack}</p>
            </div>
        </div>
    );
};

export default TechStackComponent;