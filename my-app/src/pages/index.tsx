import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faInstagram, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileArrowDown, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import TechStackComponent from '@/components/TechStackComponent';
import ProjectCardComponent from '@/components/projectCardComponent';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <Head>
        <title>Matthew Benedict | Fullstack Web Developer</title>
        <meta name="description" content="Portfolio of Matthew Benedict, a Fullstack Web Developer from Surabaya, Indonesia." />
        <meta property="og:title" content="Matthew Benedict - Fullstack Web Developer" />
        <meta property="og:description" content="Portfolio of Matthew Benedict, showcasing skills, projects, and contact information." />
        <meta property="og:image" content="/assets/profile.webp" />
      </Head>
      <Navbar></Navbar>

      <div id="home" className='W-full h-full flex flex-col justify-center py-[120px]'>
        <div className='flex justify-center items-center px-[200px] max-xl:px-20 max-md:px-5 max-md:flex-col-reverse'>
          <div className='w-7/12 max-md:w-full'>
            <h1 className='text-6xl font-bold leading-[80px] max-xl:text-5xl max-xl:leading-[60px] max-md:text-4xl max-md:leading-[50px] max-md:text-center max-md:mt-5'><span className='bg-[#8cfc03] px-3 w-fit'>Fullstack</span> Web Developer</h1>
            <p className='mt-5 leading-[28px] text-neutral-600 text-md max-xl:text-[14px] max-xl:leading-[24px] max-md:text-center'>Hi there! I'm Matthew Benedict, a 20 year old Fullstack Web Developer based in Surabaya, Indonesia.</p>
            <div className='mt-5 flex gap-5 max-md:flex-col max-md:items-center'>
              <Link href={"/assets/resume.pdf"} target="_blank" rel="noopener noreferrer" className='bg-black text-white hover:bg-slate-600 transition-colors duration-300 flex items-center gap-2 px-5 py-2 rounded'>
                <p className='text-[14px]'>Resume</p>
                <i className='text-lg'>
                  <FontAwesomeIcon icon={faFileArrowDown} />
                </i>
              </Link>
              <div className='flex gap-5'>
                <Link href={"https://linkedin.com/in/matthew-benedictt/"} target='_blank' className='text-black hover:text-slate-600 transition-colors duration-300'>
                  <i className='text-[30px]'>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </i>
                </Link>
                <Link href={"https://github.com/MBenedictt"} target='_blank' className='text-black hover:text-slate-600 transition-colors duration-300'>
                  <i className='text-[30px]'>
                    <FontAwesomeIcon icon={faSquareGithub} />
                  </i>
                </Link>
                <Link href="mailto:iammattbenedict@gmail.com" className='text-black hover:text-slate-600 transition-colors duration-300'>
                  <i className='text-[30px]'>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-5/12 flex justify-center pl-5 max-md:pl-0 max-md:w-9/12'>
            <Image src="/assets/profile.webp" alt="profile" width={350} height={350} priority loading="eager" className='border-4 border-black rounded-full' />
          </div>
        </div>
        <div className='px-[200px] mt-10 max-xl:px-20 max-md:px-5 max-md:flex max-md:flex-col max-md:items-center'>
          <h1 className='font-medium text-lg'>Tech Stack</h1>
          <div className='w-full mt-3 flex max-xl:w-11/12 max-md:grid max-md:grid-cols-3 max-md:gap-x-5 max-md:gap-y-10 max-[540px]:grid-cols-2 max-[540px]:w-10/12'>
            <TechStackComponent
              imgSrc="https://skillicons.dev/icons?i=html,css"
              alt="html-css"
              techStack="HTML, CSS"
            />
            <TechStackComponent
              imgSrc="https://skillicons.dev/icons?i=javascript,typescript"
              alt="js-ts"
              techStack="Javascript, Typescript"
            />
            <TechStackComponent
              imgSrc="https://skillicons.dev/icons?i=react,next"
              alt="react-next"
              techStack="React.js, Next.js"
            />
            <TechStackComponent
              imgSrc="https://skillicons.dev/icons?i=vue,express"
              alt="php-lara"
              techStack="Vue.js, Express.js"
            />
            <TechStackComponent
              imgSrc="https://skillicons.dev/icons?i=php,laravel"
              alt="php-lara"
              techStack="PHP, Laravel"
            />
            <TechStackComponent
              imgSrc="https://skillicons.dev/icons?i=tailwind,bootstrap"
              alt="tailwind-bootstrap"
              techStack="Tailwind, Bootstrap"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id='about' className='w-full h-full bg-neutral-100 px-[200px] py-20 flex justify-center items-center max-xl:px-20 max-md:px-5 max-md:flex-col'>
        <Image src="/assets/about.webp" alt="about" width={600} height={600} className='w-[350px] h-[350px] object-cover rounded-lg border-2 border-slate-300' />
        <div className='ml-20 w-2/4 max-xl:w-3/4 max-md:ml-0 max-md:flex max-md:flex-col max-md:items-center max-md:mt-10'>
          <h1 className='font-semibold text-2xl text-black w-fit max-md:text-xl bg-[#8cfc03] px-3 py-1'>About Me</h1>
          <h1 className='font-bold text-5xl mt-5 max-xl:text-4xl max-md:text-4xl max-md:leading-[50px] max-md:text-center'>Matthew Benedict</h1>
          <p className='mt-5 leading-[28px] text-neutral-600 text-md max-xl:text-[14px] max-xl:leading-[24px] max-md:text-center'>An Informatics student at Petra Christian University, Indonesia with a strong interest in technology. I specialize in web development and have experience with several tech stacks to build clean, user-friendly websites. </p>
          <p className='mt-5 leading-[28px] text-neutral-600 text-md max-xl:text-[14px] max-xl:leading-[24px] max-md:text-center'>
            I enjoy learning new things and tackling projects that help me grow in both technical and creative ways.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div id='projects' className='w-full h-full px-[200px] py-20 max-xl:px-20 max-md:px-5'>
        <h1 className='font-semibold text-2xl text-black w-fit max-md:text-xl bg-[#8cfc03] px-3 py-1 mb-10'>My Projects</h1>
        <div className='grid grid-cols-1 gap-10'>
          <ProjectCardComponent
            title="INDEX 2024 Event's Website"
            techStack="HTML, JS, PHP, Laravel, Tailwind"
            link="index.png"
            imgSrc="/assets/indexpetra.webp"
            alt="index"
            desc="I was trusted to be a vice coordinator of IT division for INDEX 2024, an international exhibition for interior design students, and I created the homepage and directed the front-end team to create the website's interface."
          />
          <ProjectCardComponent
            title="EPICLAIR 2024 Event's Website"
            techStack="HTML, CSS, JS, PHP, Laravel"
            link="epiclair.png"
            imgSrc="/assets/epiclair.webp"
            alt="epiclair"
            desc="I was selected as a member of the IT division for EPICLAIR 2024, an international university competition and I built key sections of the website, including the homepage, landing page, and registration page."
          />
          <ProjectCardComponent
            title="FusionWorks Art Gallery"
            techStack="React, Tailwind"
            link="https://fusion-works.vercel.app/"
            imgSrc="/assets/fusionworks.webp"
            alt="fusionworks"
            desc="My team, Koko's Fam, won 1st place in the BYTEFEST 2024 Web Design Competition hosted by Universitas Sebelas Maret Surakarta with our victorious creation, &quot;FusionWorks&quot; website led us to victory."
          />
          <div className='p-7 border-2 border-b-[6px] h-[250px] border-black rounded-xl bg-white flex justify-center items-center'>
            <h1 className='font-bold text-2xl'>Coming Soon... 🍵</h1>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className='w-full h-full px-[200px] py-20 max-xl:px-20 max-md:px-10 bg-neutral-100 flex justify-between items-center'>
        <div className='w-2/4 max-md:w-full'>
          <h1 className='font-semibold text-2xl text-black w-fit max-md:text-xl bg-[#8cfc03] px-3 py-1 mb-5'>Contact</h1>
          <h1 className='font-bold text-5xl text-black max-xl:text-4xl'>Get in touch</h1>
          <p className='text-neutral-600 mt-5 max-xl:text-[14px]'>If you have any questions or inquiries, please don't hesitate to contact me.</p>
          <ul className='mt-10'>
            <li className='flex items-center py-1'><FontAwesomeIcon icon={faEnvelope} className='w-5 h-5 text-neutral-700 mr-3' /> <Link href="mailto:iammattbenedict@gmail.com" className='hover:underline max-xl:text-[14px]'>iammattbenedict@gmail.com</Link></li>
            <li className='flex items-center py-1'><FontAwesomeIcon icon={faInstagram} className='w-5 h-5 text-neutral-700 mr-3' /> <Link href={"https://instagram.com/mbenedictt/"} target='_blank' className='hover:underline max-xl:text-[14px]'>mbenedictt</Link></li>
            <li className='flex items-center py-1'><FontAwesomeIcon icon={faMapLocation} className='w-5 h-5 text-neutral-700 mr-3' /> <p className='hover:underline max-xl:text-[14px]'>Surabaya, East Java, Indonesia</p></li>
          </ul>
        </div>
        <Image src={"/assets/contact.png"} alt="contact" width={300} height={300} className='max-md:hidden' />
      </div>

      <div className='w-full h-full text-white py-3 px-20 max-md:px-10 bg-neutral-600 flex justify-between items-center'>
        <p className='font-light text-[14px] max-md:text-[12px] max-md:w-2/4'>© 2024 MBTheDev. All rights reserved</p>
        <div className='flex gap-5'>
          <Link href={"https://linkedin.com/in/matthew-benedictt/"} target='_blank' className='text-white hover:text-slate-300 transition-colors duration-300'>
            <i className='text-[30px]'>
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </Link>
          <Link href={"https://github.com/MBenedictt"} target='_blank' className='text-white hover:text-slate-300 transition-colors duration-300'>
            <i className='text-[30px]'>
              <FontAwesomeIcon icon={faSquareGithub} />
            </i>
          </Link>
        </div>
      </div>
    </div>
  )
}