import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with custom CMS integration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      category: "Web Development",
      client: "Fashion Retailer",
      duration: "3 months",
    },
    {
      title: "Analytics Dashboard",
      description: "Modern analytics dashboard with real-time data visualization",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "UI/UX Design",
      client: "Tech Startup",
      duration: "2 months",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile application for service booking",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Mobile Development",
      client: "Service Provider",
      duration: "4 months",
    },
    {
      title: "Corporate Website Redesign",
      description: "Complete overhaul of corporate website with modern design",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      category: "Web Development",
      client: "Corporate Client",
      duration: "2.5 months",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Latest Projects
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Discover how we've helped businesses transform their digital presence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center gap-2 text-purple-600 mb-2">
                      <Briefcase className="h-4 w-4" />
                      <span className="text-sm font-medium">{project.category}</span>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Duration</p>
                        <p className="font-medium">{project.duration}</p>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
                      onClick={() => console.log(`View ${project.title} details`)}
                    >
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Our team is ready to help
            you create something amazing.
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => window.location.href = '/contact'}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;