import { Progress } from "@/components/ui/progress";

interface CampaignCardProps {
  title: string;
  description: string;
  raised: number;
  goal: number;
  image: string;
}

const CampaignCard = ({ title, description, raised, goal, image }: CampaignCardProps) => {
  const progress = (raised / goal) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${raised.toLocaleString()} raised</span>
            <span>Goal: ${goal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;