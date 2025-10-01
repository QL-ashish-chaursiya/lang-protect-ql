import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-background py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 md:p-12 text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Ready to Secure your AI End-to-End?
          </h2>
          <p className="text-base md:text-lg text-slate-200 mb-8 max-w-xl leading-relaxed">
            Join now & get started on your journey to secure all of your AI Systems with 
            simple configurations.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 text-sm rounded-md"
          >
            GET STARTED FREE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;