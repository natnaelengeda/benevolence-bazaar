const stats = [
  { value: "10K+", label: "Lives Impacted" },
  { value: "$500K", label: "Donations Raised" },
  { value: "50+", label: "Active Campaigns" },
  { value: "100%", label: "Funds Delivered" },
];

const ImpactStats = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;