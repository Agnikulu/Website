import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import Timeline from "@/components/career/timeline";
import SkillsCard from "@/components/skills/skills-card";
import ProjectsCard from "@/components/projects/projects-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredSkills } from "@/config/skills";
import { careerExperiences } from "@/config/career";
import { featuredProjects } from "@/config/projects";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import agnikImg from "../../public/agnik-img.jpg";
import { ContactForm } from "@/components/forms/contact-form";
import { ScrollDownButton } from "@/components/common/scroll-down-button";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description: `${pagesConfig.home.metadata.description} Agnik Banerjee's Portfolio.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Software Engineer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* About Me Section */}
      <section className="space-y-6 pb-8 pt-20 md:pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center" id="about">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mt-4 md:-mt-20">
          <Image
            src={agnikImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
            alt="Agnik Banerjee - Full Stack Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Agnik Banerjee
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            Software Engineer
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base">
              Student at the University of Maryland studying Computer Science minoring in Technology Entrepreneurship &amp; Corporate Innovation. Passionate about building software and technology solutions, exploring AI&apos;s potential in healthcare, and driving innovation in early-stage startups.
            </p>
          </div>
          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "border-2 rounded-xl shadow text-primary hover:bg-primary/10 transition-colors"
                )}
                aria-label="View Agnik Banerjee's GitHub profile"
              >
                <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
              </a>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "border-2 rounded-xl shadow text-primary hover:bg-primary/10 transition-colors"
                )}
                aria-label="Contact Agnik Banerjee"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> Contact
              </a>
            </AnimatedText>
            <AnimatedText delay={1.0}>
              <a
                href="https://linkedin.com/in/agnikbanerjee"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "border-2 rounded-xl shadow text-primary hover:bg-primary/10 transition-colors"
                )}
                aria-label="View Agnik Banerjee's LinkedIn profile"
              >
                <Icons.linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <ScrollDownButton />
          </AnimatedText>
        </div>
      </section>
      {/* Timeline Section */}
      <AnimatedSection className="container space-y-6 py-10 my-14" id="Career">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.career.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.career.description}
          </AnimatedText>
        </div>
        <Timeline
          experiences={[...careerExperiences].sort((a, b) => {
            const aTime = a.startDate instanceof Date ? a.startDate.getTime() : 0;
            const bTime = b.startDate instanceof Date ? b.startDate.getTime() : 0;
            return bTime - aTime; // newest first
          })}
        />
      </AnimatedSection>
      {/* Projects Section */}
      <AnimatedSection className="container space-y-6 py-10 my-14" id="projects">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <ProjectsCard projects={featuredProjects} />
      </AnimatedSection>
      {/* Skills Section */}
      <AnimatedSection className="container space-y-6 bg-muted py-10" id="skills">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
      </AnimatedSection>
      {/* Contact Section */}
      <AnimatedSection className="container space-y-6 py-10 my-14" id="contact">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.contact.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.contact.description}
          </AnimatedText>
        </div>
        <div className="mx-auto max-w-xl w-full">
          <ContactForm />
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
