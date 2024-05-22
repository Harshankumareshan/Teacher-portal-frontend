import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
    <div>
      <Header />

      {/* Hero section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-4 text-red-600">Welcome to Teacher Portal</h1>
              <p className="text-lg text-black-700"> Manage classes, track student progress, and collaborate with peers effortlessly. Enhance your teaching experience with our user-friendly interface, organized tools, and accessible resources. Empower your teaching journey with our innovative portal.</p>
            </div>
            <div className="md:w-1/2">
              <img src="\teacher.png" alt="Teacher" className="w-full rounded-md shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-200 rounded-lg hover:shadow-lg">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Manage Students</h3>
              <p className="text-gray-700">Easily create, update, and delete students. Keep track of all your students in one place.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg hover:shadow-lg">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Organized Tools for Teachers</h3>
              <p className="text-gray-700">Keep all your teaching materials in one place, organize lesson plans, and track student assignments efficiently. Our portal provides a seamless way to manage your classroom and engage with your students.</p>
              </div>
            <div className="p-6 bg-gray-200 rounded-lg hover:shadow-lg">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Student Management</h3>
              <p className="text-gray-700">Manage student information, grades, and attendance with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-red-300 py-16 text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-8">Sign up now and experience the power of Teacher Portal.</p>
          <button className="bg-white text-red-600 py-3 px-8 rounded-full font-bold hover:bg-opacity-75 transition duration-300">Sign up</button>
        </div>
      </section>

      <Footer />
    </div>
  </>
  
  )
}

export default Homepage