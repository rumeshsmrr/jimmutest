import React from 'react';
import { motion } from 'framer-motion';
import img from './assets/Counsiling.jpg';
import './services.css'

const ServiceCard = () => {
    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-white text-[#0f1831]">
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 w-full p-4">
                {/* Left Side - Cards */}
                <div className="space-y-4 flex flex-col items-center md:items-start w-auto mx-5 gap-auto">
                    {/* Card 1 */}
                    <motion.div
                        className="card flex flex-col items-start p-4 rounded-lg transition duration-300 bg-gray-50 w-full"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="icon p-4 bg-green-500 rounded-lg mb-4 transition duration-300">
                            <i className="fas fa-pencil-alt text-white"></i>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[20px]">Warranty documents</h3>
                            <p className="text-gray-700 text-[13px] my-2">An obligation in which a third party agrees to repay a debt.</p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="card flex flex-col items-start p-4 rounded-lg transition duration-300 bg-gray-50 w-full"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <div className="icon p-4 bg-blue-500 rounded-lg mb-4 transition duration-300">
                            <i className="fas fa-money-bill-wave text-white"></i>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[20px]">Quick credit</h3>
                            <p className="text-gray-700 text-[13px] my-2">Money and tangible provided to you by the creditor for use.</p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="card flex flex-col items-start p-4 rounded-lg transition duration-300 bg-gray-50 w-full"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <div className="icon p-4 bg-purple-500 rounded-lg mb-4 transition duration-300">
                            <i className="fas fa-chart-bar text-white"></i>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[20px]">Create deposit</h3>
                            <p className="text-gray-700 text-[13px] my-2">Return the money after a certain period of time with interest.</p>
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        className="card flex flex-col items-start p-4 rounded-lg transition duration-300 bg-gray-50 w-full"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        <div className="icon p-4 bg-red-500 rounded-lg mb-4 transition duration-300">
                            <i className="fas fa-shield-alt text-white"></i>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[20px]">Secure transactions</h3>
                            <p className="text-gray-700 text-[13px] my-2">Ensure your transactions are safe and secure.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 flex flex-col justify-start items-center md:items-start w-full h-full">
                    {/* Title and Description */}
                    <div className="text-center md:text-left w-full mb-4">
                        <h1 className="text-2xl md:text-4xl font-bold mb-4">Get good service from experts</h1>
                        <p className="text-gray-600 text-sm md:text-base mb-8">
                            We offer over 176 digital services and remote services. We constantly serve more than 18 million people, 
                            and today we have 13.5 million digital bank customers.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="image-container relative flex justify-center items-center">
                        <img src={img} alt="Smiling woman with glasses working on a laptop" className="w-full h-auto object-cover rounded-2xl" />
                        
                        {/* Overlay Text */}
                        <motion.div 
                            className="inner-text absolute bottom-0 right-0 bg-white p-4 rounded-tl-2xl rounded-tr-2xl flex flex-col items-center space-y-2 w-full md:w-auto hover:shadow-lg transition duration-300 ease-in-out group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="font-bold text-center">Get Good Service<br />from Experts</span>
                            <div className="relative w-8 h-8 flex justify-center items-center">
                                {/* Arrow Animation */}
                                <i className="fas fa-arrow-right transform rotate-[-45deg] transition-transform duration-500 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-125"></i>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
