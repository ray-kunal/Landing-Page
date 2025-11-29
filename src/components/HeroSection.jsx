import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Main Heading */}
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Transform Your Workflow with Powerful SaaS Tools
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Streamline your business operations and boost productivity with our
          all-in-one platform designed for modern teams.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg" className="text-base sm:text-lg">
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  );
}
