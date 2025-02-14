
import { PricingCard } from "./pricing-card";

interface PricingCategory {
  title: string;
  description: string;
  packages: {
    name: string;
    price: string;
    timeframe: string;
    description: string;
    features: string[];
  }[];
}

export const PricingCategory = ({ category }: { category: PricingCategory }) => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">{category.title}</h2>
      <p className="text-center text-muted-foreground mb-12">{category.description}</p>
      <div className="grid md:grid-cols-2 gap-8">
        {category.packages.map((pkg, index) => (
          <PricingCard key={pkg.name} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};
