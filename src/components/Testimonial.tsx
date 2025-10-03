 import { Card, CardContent } from "./ui/card";
export const Testimonial = (): JSX.Element => {
  const testimonials = [
    {
      name: "Emily Carter",
      title: "Chief Information Security Officer, Meditech Systems (US)",
      content:
        "LangProtect Armor gave us peace of mind by blocking prompt injections and sensitive data leaks before they ever touched our RCM database. It feels like a firewall purpose-built for AI.",
      bgColor: "bg-[#f4f6ff]",
      rounded: "rounded-xl",
    },
    {
      name: "Ravi Menon",
      title: "CIO, Aarav Hospitals (India)",
      content:
        "We were concerned about PHI exposure when deploying AI assistants in radiology. LangProtect's PII/PHI scanner ensured zero leaks, helping us stay HIPAA and NABH compliant.",
      bgColor: "bg-[#f4f6ff]",
      rounded: "rounded-xl",
    },
    {
      name: "Michael Ross",
      title: "VP of Engineering, Radiant HealthTech (US)",
      content:
        "We integrated LangProtect in under a week. Our AI workflows are faster, more compliant, and most importantly, safe from data exfiltration attempts.",
      bgColor: "bg-[#f4f6ff]",
      rounded: "rounded-xl",
    },
    {
      name: "Sophia Martinez",
      title: "Director of Compliance, BrightPath Insurance (US)",
      content:
        "Guardia has completely transformed how our teams use AI tools like ChatGPT and Gemini. Employees can experiment freely knowing sensitive client data is automatically protected.",
      bgColor: "bg-[#f4f6ff]",
      rounded: "rounded-xl",
    },
    {
      name: "James O'Neill",
      title: "CTO, Evercore Analytics (US)",
      content:
        "With Breachers Red, the red-team assessment uncovered vulnerabilities in our LLM apps we didn't even know existed. Their AI-first penetration testing is leagues ahead of traditional audits.",
      bgColor: "bg-[#f3f5ff]",
      rounded: "rounded-3xl",
    },
    {
      name: "Neha Sinha",
      title: "Head of Product, FinTrust Solutions (India)",
      content:
        "Our developers use Armor as the default layer in every new AI integration. It has reduced the time and cost of building secure AI apps by at least 40%",
      bgColor: "bg-[#f4f6ff]",
      rounded: "rounded-xl",
    },
  ];

  const columnOne = testimonials.slice(0, 2);
  const columnTwo = testimonials.slice(2, 4);
  const columnThree = testimonials.slice(4, 6);

  return (
    <section className="relative w-full md:mt-[55px] md:mb-[120px]" id="Testimonials">
      <div className="flex flex-col w-full max-w-[1262px] mx-auto items-center gap-8 md:gap-[50px]">
        <header className="flex flex-col w-full max-w-[593px] items-center justify-center gap-4">
          <h2 className="text-[#19162F] mozilla-text font-semibold text-2xl md:text-3xl lg:text-[40px] text-center tracking-[0] leading-tight md:leading-[normal]">
            <span>See What People H</span>
            <span className="text-3xl md:text-4xl lg:text-[42px]">ave</span>
            <span> To Say</span>
          </h2>
          <div className="md:px-2">
            <p className="w-full max-w-[584px] font-light text-textsecondary-color text-base md:text-lg text-center tracking-[0] leading-6 md:leading-[27px]">
              See how LangProtect is helping users stay secure without
              compromising productivity.
            </p>
          </div>
        </header>

        {/* Mobile: Single Column (no scroll, normal list) */}
        <div className="flex md:hidden flex-col items-start gap-5 w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`mobile-${index}`}
              className={`${testimonial.bgColor} ${testimonial.rounded} border-0 shadow-none w-full`}
            >
              <CardContent className="p-4 flex flex-col gap-2">
                <div className="text-sm tracking-[0] leading-[normal]">
                  <span className="font-semibold text-[#202532]">
                    {testimonial.name} -
                  </span>
                  <span className="font-semibold text-black">&nbsp;</span>
                  <span className="text-[#4E5976]">{testimonial.title}</span>
                </div>
                <div className="text-[#202532] mozilla-text font-light text-[15px] leading-[normal]">
                  {testimonial.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop: Three Columns with Infinite Scroll */}
        <div className="hidden md:flex items-start gap-[19px] w-full">
          {/* Column One */}
          <div className="relative overflow-hidden h-[500px] flex flex-col w-full max-w-[406px]">
            <div className="flex flex-col gap-5 animate-[scrollUp_10s_linear_infinite]">
              {[...columnOne, ...columnOne].map((testimonial, index) => (
                <Card
                  key={`col1-${index}`}
                  className={`${testimonial.bgColor} ${testimonial.rounded} border-0 shadow-none`}
                >
                  <CardContent className="p-4 flex flex-col gap-2">
                    <div className="text-sm font-normal">
                      <span className="font-semibold text-[#19162f]">
                        {testimonial.name} -
                      </span>
                      <span className="text-[#4e5976]">{testimonial.title}</span>
                    </div>
                    <div className="text-[#202532] font-light text-[15px]">
                      {testimonial.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Column Two */}
          <div className="relative overflow-hidden h-[500px] flex flex-col w-full max-w-[406px]">
            <div className="flex flex-col gap-5 animate-[scrollUp_12s_linear_infinite]">
              {[...columnTwo, ...columnTwo].map((testimonial, index) => (
                <Card
                  key={`col2-${index}`}
                  className={`${testimonial.bgColor} ${testimonial.rounded} border-0 shadow-none`}
                >
                  <CardContent className="p-4 flex flex-col gap-2">
                    <div className="text-sm font-normal">
                      <span className="font-semibold text-[#19162f]">
                        {testimonial.name} -
                      </span>
                      <span className="text-[#4e5976]">{testimonial.title}</span>
                    </div>
                    <div className="text-[#202532] font-light text-[15px]">
                      {testimonial.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Column Three */}
          <div className="relative overflow-hidden h-[500px] flex flex-col w-full max-w-[406px]">
            <div className="flex flex-col gap-5 animate-[scrollUp_10s_linear_infinite]">
              {[...columnThree, ...columnThree].map((testimonial, index) => (
                <Card
                  key={`col3-${index}`}
                  className={`${testimonial.bgColor} ${testimonial.rounded} border-0 shadow-none`}
                >
                  <CardContent className="p-4 flex flex-col gap-2">
                    <div className="text-sm font-normal">
                      <span className="font-semibold text-[#19162f]">
                        {testimonial.name} -
                      </span>
                      <span className="text-[#4e5976]">{testimonial.title}</span>
                    </div>
                    <div className="text-[#202532] font-light text-[15px]">
                      {testimonial.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
