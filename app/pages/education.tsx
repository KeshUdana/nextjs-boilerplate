import React from "react";
import '../globals.css';
import Image from 'next/image'

function Education(){
    return(
        <>
            <section className="h-screen w-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="text-center  ">
                <h1 className="text-4xl font-light text-center text-cyan-400 py-14 transform-double ">Academic Background</h1>
                <p className="text-2xl text-zinc-400">Undergraduate Bsc.Computer Science University of Westminster</p>
                <div className="flex items-center justify-center">
                <Image src="/Westminster University-01 (1).svg" alt="uni logo"width={200} height={100} ></Image>
                <Image src="/iitlogo.svg"alt="iit logo"width={100} height={300} ></Image>
                </div>
                <p className="font-mono text-xl text-fuchsia-700"> TECH STACKS</p>
                <div className="flex flex-col items-center container mx-auto px-10 py-4">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
    <Image src="/python-svgrepo-com (1).svg" alt="python" width={50} height={24}/>
    <Image src="/java-4-logo-svgrepo-com (1).svg" alt="java" width={50} height={24}/>
    <Image src="/javascript-svgrepo-com (1).svg" alt="javascript" width={50} height={24}/>
    <Image src="/typescript-logo-svgrepo-com (1).svg" alt="ts" width={50} height={24}/>
    <Image src="/tailwind-svgrepo-com (1).svg" alt="twind" width={50} height={24}/>
    <Image src="/gsap-greensock (1).svg" alt="twind" width={50} height={24}/>


    <Image src="/nodejs-1-logo-svgrepo-com (1).svg" alt="nodejs" width={60} height={24}/>
    <Image src="/react-svgrepo-com (1).svg" alt="react" width={50} height={50}/>
    <Image src="/nextjs-icon-svgrepo-com (1).svg" alt="nextjs" width={50} height={24}/>
    <Image src="/vite-svgrepo-com (1).svg" alt="vite" width={50} height={24}/>
    <Image src="/aws-svgrepo-com (1).svg" alt="" width={50} height={24}/>

    <Image src="/vercel-svgrepo-com (1).svg" alt="vercel" width={60} height={24}/>
    <Image src="/mongo-svgrepo-com.svg" alt="mongodb" width={60} height={24}/>
    <Image src="/tensorflow-svgrepo-com (1).svg" alt="tensoflow" width={50} height={24}/>
    <Image src="/numpy-svgrepo-com (1).svg" alt="numpy" width={50} height={24}/>
    <Image src="/pandas-svgrepo-com (1).svg" alt="pandas" width={50} height={24}/>
  </div>
  <ol className="text-center flex flex-col items-center mt-4">
    <li className="text-xl text-zinc-400">GCSE.Biological Sciences for Advanced Levels at Rahula College Matara</li>
    <Image src="/rahula-college-seeklogo-2 (1).svg" alt="pandas" width={60} height={24}/>
  </ol>
</div>
</div>
            </section>
        
        </>
    ); 
};
export default Education;
