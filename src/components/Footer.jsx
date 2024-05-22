import React from 'react'

const Footer = () => {
  return (
    <div className="py-12  px-4">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex flex-col md:flex-row gap-5">
          <h5 className="text-lg font-semibold mb-4">Related Links:</h5>
        </div>

        <hr className="border-0 h-px bg-black" />
        <div className=" py-12">
          <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">Resources</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    Teacher Handbook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    Grading Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    Lesson Plans & Activities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    Professional Development
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Support</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    Submit a Ticket
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">About Tailwebs</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    The Tailwebs Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black-700 hover:text-zinc-900">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr className="border-0 h-px bg-black" />
        <div className="bg-customorange p-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-col items-center">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-start">
                <h1 className="text-xl font-bold text-red-600 pr-4">Tailwebs</h1>
                                <div className="grid grid-cols-2 gap-6 mt-4 sm:flex sm:flex-wrap sm:gap-5 sm:mt-0">
                                    <h1 className="text-lg  md:text-lg">books</h1>
                                    <h1 className="text-lg md:text-lg">mark score</h1>
                                    <h1 className="text-lg md:text-lg">documents</h1>
                                    <h1 className="text-lg md:text-lg">laptops</h1>
                                </div>
                            </div>


                        </div>
                        <div className="flex flex-col my-6 md:flex-row items-center gap-6">
                            
                            <div className="flex space-x-6 my-8">
                                <a href="#" className="block"><img src="\facebook.svg" alt="Facebook" /></a>
                                <a href="#" className="block"><img src="\twitter.svg" alt="Twitter" /></a>
                                <a href="#" className="block"><img src="\instagram.svg" alt="Instagram" /></a>
                                <a href="#" className="block"><img src="\linkedin.svg" alt="LinkedIn" /></a>
                                <a href="#" className="block"><img src="\youtube.svg" alt="YouTube" /></a>
                                <a href="#" className="block"><img src="\pinterest.svg" alt="Pinterest" /></a>
                            </div>
                        </div>
                        <div className="mb-8 md:mb-0 flex flex-col md:flex-row mt-6 items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                            <select className="border border-zinc-400 rounded py-1 px-2">
                                <option>English</option>
                            </select>
                            <h2 className="text-center text-xs mt-4 md:mt-0">
                                ©2001-2024 All Rights Reserved. Tailwebs is a registered  Tech Development Company building Stellar Products. <a href="#" className="underline">Privacy</a> | <a href="#" className="underline">Terms</a> | <a href="#" className="underline">Legal</a> | <a href="#" className="underline">Cookie Preferences</a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer