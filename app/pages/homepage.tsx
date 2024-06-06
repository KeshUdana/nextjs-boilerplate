import React from "react";
import '../globals.css';
import Image from 'next/image';

function Homepage() {
    return (
        <> <section className="inset-0 bg-gradient-to-r from-charcoal-grey via-space-blue to-charcoal-grey h-screen ">
            <ul className="flex-col  py-12 px-9">
                <li className="font-Nunito text-9xl font-light text-white decoration-double px-50% py-10">HELLO.</li>
                <li className="font-Roboto text-4xl font-normal text-lime-500 ">Keshawa Udana</li>
                <li className="font-Nunito text-2xl font-extralight text-zinc-500">Software Developer|Entrepreneur</li>
            </ul>

            <div>
            <Image className="absolute top-1/3 left-1/2 w-96 h-96 rounded-full custom-transform border-9 border-sky-950 z-20"src="/mypic.jpeg" alt="MyPic" width={500} height={500} />
            </div>
        </section>
        </>
    );
}
export default Homepage;
