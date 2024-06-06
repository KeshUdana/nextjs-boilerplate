import React from "react";
import '../globals.css';
import Image from 'next/image'

function Education(){
    return(
        <>
            <section className="h-screen bg-gradient-to-r from-rose-950 from-20% via-indigo-800 via-30% to-fuchsia-600 to-90%">
            <div className="text-center  ">
                <h1 className="text-4xl font-light text-center text-cyan-400 py-12 transform-double ">Academic Background</h1>
                <p className="text-2xl text-zinc-400">Undergraduate Bsc.Computer Science University of Westminster</p>
                <div className="flex items-center justify-center min-h-1/2">
                <Image className="rounded mx-10"src="/Westminster University-01.jpg" alt="uni logo"width={100} height={200} ></Image>
                <Image className="rounded mx-10"src="/IIT-Campus-Logo.jpg"alt="iit logo"width={150} height={300} ></Image>
                </div>
                <p className="font-mono text-xl text-fuchsia-700"> TECH STACKS</p>

                <ul className="flex justify-center w-full space-x-6 hover:">
                    <i className='bx bxl-python bx-lg text-lime-600 ' ></i>
                    <i className='bx bxl-java bx-lg text-orange-600'></i>
                    <i className='bx bxl-javascript bx-lg text-yellow-500' ></i>
                    <i className='bx bxl-mongodb bx-lg text-green-700' ></i>
                    <i className='bx bxl-react bx-lg text-sky-700' ></i>
                    </ul>
                <ul>
                    <li className="text-2xl font-mono mt-8">Machine Learning & Data Mining</li>
                </ul>
            </div>
            <div className="text-center">
                <p className="text-2xl text-zinc-400"> GCSE.Biological Sciences for Advanced Levels at Rahula College Matara</p>
            </div>
            </section>
        
        </>
    ); 
};
export default Education;
