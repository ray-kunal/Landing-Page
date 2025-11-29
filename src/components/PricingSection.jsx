import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const pricingTiers = [
    {
      title: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 10 projects",
        "5GB storage",
        "Basic analytics",
        "Email support",
        "Standard security",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      title: "Pro",
      price: "$79",
      period: "/month",
      description: "Best for growing teams and businesses",
      features: [
        "Unlimited projects",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "Enhanced security",
        "Custom integrations",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited everything",
        "500GB storage",
        "Custom analytics",
        "24/7 dedicated support",
        "Enterprise security",
        "Custom integrations",
        "API access",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.title}
              className={`relative flex flex-col h-full transition-all duration-300 hover:shadow-lg ${
                tier.highlighted
                  ? "border-primary shadow-md scale-105 lg:scale-110"
                  : "hover:border-primary/50"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-6">
                <CardTitle className="text-2xl mb-2">{tier.title}</CardTitle>
                <CardDescription className="text-sm">
                  {tier.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl sm:text-5xl font-bold">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
