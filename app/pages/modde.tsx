import React from "react";
import "../globals.css"

function Modde(){
    return(
        <>
        <section className="h-screen w-screen bg-gradient-to-br from-purple-900 via-purple-400 to-purple-300">
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
            <div className="max-w-lg p-6 bg-white/20 rounded-lg items-center md:w-screen">
            <h5 className="mb-2 text-7xl text-center font-bold tracking-tight text-purple-700 dark:text-pink md:text-9xl md:mt-10">MODDE</h5>
                <p className="text-xl text-white text-center">Discover Your Style with AI</p>
                            <p className="mb-3 font-bold text-stone-800 text-center"><br/>
                            Experience cutting-edge fashion technology on our AI-powered web platform. 
                            Upload any image and instantly find and purchase products that match your style from top shops. 
                            Revolutionize your shopping experience with personalized, 
                            high-quality fashion recommendations.    
                            </p>
                            <a href="#" className="inline-flex justify-center items-center w-full px-3 py-2 text-lg font-medium text-white text-center bg-fuchsia-700 rounded-lg hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:bg-purple-700 dark:hover:bg-purple-950 ">
                            Visit Us</a>

                        
            </div>
            
            </div>
        </div>
        </section>
        </>
    )
};
export default Modde
