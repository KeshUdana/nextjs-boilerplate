import React from "react";
import '../globals.css';
import Image from 'next/image';

function ForgeLab() {
    return (
        <>
          <section className="relative h-screen w-screen">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 object-cover w-full h-full"
                >
                    <source src="/mixkit-burning-lava-particles-leaping-through-the-air-4426-hd-ready.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay to darken the video */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Image className="rounded-full" src="/ForgeLabLogo.png" alt="Forge Lab Logo" width={500} height={600} />
                    <button className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
                        See More
                    </button>
                </div>
            </section>
        </>
    );
};

export default ForgeLab;
