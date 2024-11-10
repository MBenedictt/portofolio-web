import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardComponentProps {
    title: string;
    techStack: string;
    link: string;
    imgSrc: string;
    alt: string;
    desc: string;
}

const ProjectCardComponent: React.FC<ProjectCardComponentProps> = ({ title, techStack, link, imgSrc, alt, desc }) => {
    return (
        <div className="p-7 max-sm:px-4 max-sm:py-7 border-2 border-b-[6px] h-full border-black rounded-xl bg-white flex items-center max-[991px]:flex-col max-sm:h-fit">
            <div className=" h-full rounded-lg">
                <Image src={imgSrc} alt={alt} width={550} height={466} loading="lazy" className='rounded-lg' />
            </div>
            <div className="flex flex-col justify-between pl-5 max-sm:pl-0 h-full w-full">
                <div className="max-[991px]:py-5">
                    <h1 className="font-medium text-2xl mb-3 max-[991px]:mb-1 max-md:text-[16px] max-md:font-semibold">{title}</h1>
                    <p className="font-light text-sm text-neutral-600 max-sm:text-[12px]">Built with :</p>
                    <p className="text-neutral-600 text-sm max-sm:text-[12px]">{techStack}</p>
                    <p className="text-neutral-600 text-sm max-sm:text-[12px] mt-2">{desc}</p>
                </div>
                <Link href={link} target="_blank" className="group relative inline-block focus:outline-none focus:ring w-fit">
                    <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#8cfc03] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="relative inline-block border-2 border-current px-3 py-2 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                        See More &raquo;
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCardComponent;