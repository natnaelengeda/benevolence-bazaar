import Hero from "@/components/Hero";
import CampaignCard from "@/components/CampaignCard";
import DonationForm from "@/components/DonationForm";
import ImpactStats from "@/components/ImpactStats";

const campaigns = [
  {
    title: "Education for All",
    description: "Help provide education to underprivileged children.",
    raised: 15000,
    goal: 25000,
    image: "/placeholder.svg",
  },
  {
    title: "Clean Water Initiative",
    description: "Bring clean water to communities in need.",
    raised: 8000,
    goal: 20000,
    image: "/placeholder.svg",
  },
  {
    title: "Healthcare Access",
    description: "Support medical care for vulnerable populations.",
    raised: 12000,
    goal: 30000,
    image: "/placeholder.svg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <ImpactStats />

      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Featured Campaigns
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <CampaignCard key={index} {...campaign} />
          ))}
        </div>
      </section>

      <section id="donate" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Make a Donation
          </h2>
          <DonationForm />
        </div>
      </section>

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2024 Donation Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;