import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-purple-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have a project in mind? Let's discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you shortly.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  Reach out to us through any of these channels.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Tech Street, Silicon Valley
                      <br />
                      California, USA
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">contact@webagency.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Phone className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              {/* Map Embed */}
              <div className="mt-8 h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282365564083!2d-122.08374688469227!3d37.42199997982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sSilicon+Valley!5e0!3m2!1sen!2sus!4v1565048576297!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;