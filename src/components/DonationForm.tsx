import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const predefinedAmounts = [10, 25, 50, 100];

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const { toast } = useToast();

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your donation!",
      description: `Amount: $${amount || customAmount}`,
    });
  };

  return (
    <form onSubmit={handleDonate} className="max-w-md mx-auto space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {predefinedAmounts.map((preset) => (
          <Button
            key={preset}
            type="button"
            variant={amount === preset.toString() ? "default" : "outline"}
            onClick={() => {
              setAmount(preset.toString());
              setCustomAmount("");
            }}
            className="h-12"
          >
            ${preset}
          </Button>
        ))}
      </div>

      <div className="relative">
        <Input
          type="number"
          placeholder="Custom amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setAmount("");
          }}
          className="h-12 pl-8"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          $
        </span>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary-hover text-white h-12"
        disabled={!amount && !customAmount}
      >
        Donate Now
      </Button>
    </form>
  );
};

export default DonationForm;