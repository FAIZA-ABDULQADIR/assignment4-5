import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#011638] text-[#f0f0f0] py-4">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} myBlogs. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
          <a href="/blog_1" className="hover:text-blue-500 mb-2 md:mb-0">Blog1</a>
      <a href="/blog_2" className="hover:text-blue-500 mb-2 md:mb-0">Blog2</a>
      <a href="/blog_3" className="hover:text-blue-500 mb-2 md:mb-0">Blog3</a>
      <a href="/blog_4" className="hover:text-blue-500 mb-2 md:mb-0">Blog4</a>
      <a href="/blog_5" className="hover:text-blue-500 mb-2 md:mb-0">Blog5</a>
      <a href="/blog_6" className="hover:text-blue-500 mb-2 md:mb-0">Blog6</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;