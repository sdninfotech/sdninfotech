import React from 'react';
import { Code2, Cpu, Globe2, MessageSquare, Users2, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SDN Infotech</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Innovating Technology</span>
              <span className="block text-blue-600">Empowering Business</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Leading the digital transformation journey with cutting-edge solutions and expert services.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-xl text-gray-500">Comprehensive technology solutions for your business needs</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Globe2 className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold">Web Development</h3>
              <p className="mt-2 text-gray-500 text-center">Custom web applications and responsive websites built with modern technologies.</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Cpu className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold">Software Solutions</h3>
              <p className="mt-2 text-gray-500 text-center">Tailored software development to streamline your business processes.</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Users2 className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold">IT Consulting</h3>
              <p className="mt-2 text-gray-500 text-center">Strategic technology consulting to drive your business forward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About SDN Infotech</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A leading technology startup committed to delivering innovative solutions that drive business growth and digital transformation.
            </p>
          </div>

          <div className="mt-20">
            <img
              className="rounded-lg shadow-xl mx-auto"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-xl text-gray-500">Get in touch with our team</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Mail className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium">Email</h3>
              <p className="mt-2 text-gray-500">contact@sdninfotech.co.in</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Phone className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium">Phone</h3>
              <p className="mt-2 text-gray-500">+91-9440776601</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-lg font-medium">Location</h3>
              <p className="mt-2 text-gray-500 text-center">
                Singanamala, Ananthapur<br />
                Andhra Pradesh, India<br />
                515435
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">SDN Infotech</span>
            </div>
            <p className="text-gray-400">© 2024 SDN Infotech Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;