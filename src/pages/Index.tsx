import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Ideas into
              <span className="text-purple-400"> Digital Reality</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              We craft beautiful, functional websites and applications that drive results
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600">
                Custom websites and applications built with modern technologies
              </p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-gray-600">
                Beautiful, intuitive interfaces that users love
              </p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Strategy</h3>
              <p className="text-gray-600">
                Strategic solutions to help your business grow online
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                <p className="text-gray-600">
                  A full-featured online store with custom CMS integration
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SaaS Dashboard</h3>
                <p className="text-gray-600">
                  Modern analytics dashboard with real-time data visualization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Start Your Project</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Your Web Agency</h3>
            <p className="text-gray-400 mb-4">Creating digital experiences that matter</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-purple-400">Twitter</a>
              <a href="#" className="hover:text-purple-400">LinkedIn</a>
              <a href="#" className="hover:text-purple-400">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;