import { Card, CardContent } from "./ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      message:
        "This platform has transformed how our team collaborates. The intuitive interface and powerful features make it indispensable for our daily workflow.",
      image: "/professional-woman-smiling.png",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      message:
        "I've tried countless tools, but this one stands out. It's helped us scale efficiently while keeping costs down. Highly recommend to any growing business.",
      image: "/professional-man-smiling.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      message:
        "The results speak for themselves. We've seen a 40% increase in productivity since implementing this solution. Our team couldn't be happier.",
      image: "/professional-woman-happy.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Loved by Teams Worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-border transition-colors"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    "{testimonial.message}"
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
