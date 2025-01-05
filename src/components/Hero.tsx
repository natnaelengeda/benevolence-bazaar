import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToDonate = () => {
    const donateSection = document.getElementById("donate");
    donateSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fadeIn text-gray-800">
          Make a Difference Today
        </h1>
        <p className="text-xl md:text-2xl mb-12 animate-fadeIn text-gray-600 max-w-2xl mx-auto">
          Your generosity can change lives. Join us in creating positive impact
          through meaningful donations.
        </p>
        <Button
          onClick={scrollToDonate}
          className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg rounded-full transition-all duration-300 animate-fadeIn"
        >
          Donate Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;