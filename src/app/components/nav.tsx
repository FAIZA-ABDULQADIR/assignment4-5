'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-5 right-5 z-50 p-2 bg-[#023e8a] text-[#f0f0f0] rounded-lg md:hidden"
            >
                {isOpen ? 'Hide' : 'Show'} Menu
            </button>

            {/* Sidebar */}
            <aside className={`fixed top-0 right-0 w-full h-full bg-[#fb8500] border-l-2 border-[#ff7043] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}>
                <div className="p-4">
                    <div className="logo text-3xl font-black font-family:Arial  text-[#78290f]">
                        <h2><Link href="/">myBlogs</Link></h2>
                    </div>
                    <nav className="mt-6">
                        <ul className="flex flex-col space-y-4">
                        <li>
  <Link href="/about" className="font-bold text-[#caf0f8] hover:bg-[#ee4266]">
    About
  </Link>
</li>
                           
                        <li className="group relative z-30 w-full">
                                <Link href="/" className="font-bold text-[#caf0f8] link hover:bg-[#ee4266] ">Blogs</Link>
                                <ul className="dropdown-content hidden group-hover:flex flex-col bg-[#023e8a] text-[#f0f0f0] border border-[#ff7043] rounded-lg shadow-lg overflow-auto p-4 space-y-2 absolute left-0 top-full">
                                    <li><Link href='/blog_1' className="text-[#00b4d8] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">The Importance of Positive Reinforcement in Parenting</Link></li>
                                    <li><Link href='/blog_2' className="text-[#00b4d8] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">T10 Effective Ways to Manage Your Child's Screen Time</Link></li>
                                    <li><Link href='/blog_3' className="text-[#00b4d8] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">Navigating Tantrums: Strategies for Calm and Patient Parenting</Link></li>
                                    <li><Link href='/blog_4' className="text-[#00b4d8] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">Fostering Independence in Children: Encouraging Self-Reliance</Link></li>
                                    <li><Link href='/blog_5'className="text-[#00b4d8] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">Nutrition for Kids: Healthy Eating Habits for a Happy Child"</Link></li>
                                    <li><Link href='/blog_6' className="text-[#00b4d8] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">Self-Care for Parents: Prioritizing Mental Health and Wellbeing</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/contact"className="font-bold text-[#caf0f8] hover:bg-[#ee4266]">Contact Us</Link></li>
                        </ul>
                    </nav>
                    <div className="mt-6">
                       
                    </div>
                </div>
            </aside>

            {/* Navbar for larger screens */}
            <nav className="w-full justify-between items-center p-4 text-[#f0f0f0] bg-[#ffb703] md:flex md:justify-between md:items-center md:h-20 md:block hidden z-50">
                <div className="logo text-3xl font-black font-family:Arial  text-[#78290f]">
                    <h2><Link href="/">myBlogs</Link></h2>
                </div>

                <div className="nav-links">
                    <ul className="flex space-x-6">
                    <li>
  <Link href="/about" className="text-2xl text-[#023047] link hover:bg-[#ee4266] hover:text-white transform hover:scale-105 transition-all duration-300 px-2 py-1 rounded">
    About
  </Link>
</li>
                        
                        <li className="group relative z-50">
                        <li>
  <Link href="/about" className="text-2xl text-[#023047] link hover:bg-[#ee4266] hover:text-white transform hover:scale-105 transition-all duration-300 px-2 py-1 rounded">
    Blogs
  </Link>
</li>
                            <div className="dropdown-content hidden group-hover:flex flex-col bg-[#3d5a80] text-[#f0f0f0] border border-[#ff7043] overflow-auto p-4 absolute w-[350px] left-0 top-full">
                                <div className="column mb-2">
                                    <h4>
                                    <Link href='/blog_1' className="text-[#ff7043] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">
  The Importance of Positive Reinforcement in Parenting
</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300">Explores the benefits of positive reinforcement.</p>
                                </div>
                                <div className="column mb-2">
                                    <h4>
                                        <Link href='/blog_2' className="text-[#ff7043] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">10 Effective Ways to Manage Your Child's Screen Time</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300">Practical tips for parents to limit screen time.</p>
                                </div>
                                <div className="column mb-2">
                                    <h4>
                                        <Link href='/blog_3'className="text-[#ff7043] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">Navigating Tantrums: Strategies for Calm and Patient Parenting</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300">Expert advice on staying calm and patient during tantrums</p>
                                </div>
                                <div className="column mb-2">
                                    <h4>
                                        <Link href='/blog_4' className="text-[#ff7043] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">Fostering Independence in Children</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300"> Explores ways parents can promote independence in daily tasks </p>
                                </div>
                                <div className="column mb-2">
                                    <h4>
                                        <Link href='/blog_5' className="text-[#ff7043] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">Nutrition for Kids</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300">Learn how to create balanced meals, establish healthy eating habits</p>
                                </div>
                                <div className="column mb-2">
                                    <h4>
                                        <Link href='/blog_6'className="text-[#ff7043] font-semibold transform hover:underline hover:scale-105  hover:text-[#ffbd00] transition-all duration-300 px-2 py-1 rounded">Self-Care for Parents</Link>
                                    </h4>
                                    <p className="text-sm text-gray-300">Learn how to prioritize mental health, manage stress</p>
                                </div>

                            </div>
                        </li>
                        <li>
  <Link href="/about" className="text-2xl text-[#023047] link hover:bg-[#ee4266] hover:text-white transform hover:scale-105 transition-all duration-300 px-2 py-1 rounded">
   Contact Us
  </Link>
</li>
                    </ul>
                </div>

               
            </nav>
        </div>
    );
};

export default Navbar;