import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Database, Layout, Briefcase, GraduationCap, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-secondary to-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Hello, I'm <span className="text-foreground">Saad Rajpoot</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-lg">
                Computer Science Graduate & Web Developer passionate about creating modern digital experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/sr.png"
                  alt="Saad Rajpoot"
                  fill
                  className="rounded-full object-cover border-4 border-background shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="page-subheader text-center mb-12">My Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard
              icon={<Code className="w-10 h-10" />}
              title="Web Development"
              description="Building responsive and performant web applications using modern frameworks and technologies."
            />
            <SkillCard
              icon={<Layout className="w-10 h-10" />}
              title="UI/UX Design"
              description="Creating intuitive and visually appealing user interfaces with a focus on user experience."
            />
            <SkillCard
              icon={<Database className="w-10 h-10" />}
              title="Backend Development"
              description="Developing robust server-side applications and RESTful APIs."
            />
            <SkillCard
              icon={<Camera className="w-10 h-10" />}
              title="Video & photo editing"
              description="Professional video & photo editing to make your content stand out."
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-muted">
  <div className="container">
    <h2 className="page-subheader text-center mb-12">Education</h2>
    <div className="flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Bachelor of Computer Science</h3>
          <p className="text-muted-foreground">University of Gujrat, 2021 - 2025</p>
          <ul className="mt-4 space-y-2">
            <li>Data Structures & Algorithms</li>
            <li>Web Development</li>
            <li>Database Management Systems</li>
            <li>Software Engineering</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="page-subheader text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Documind"
              description="A full-stack AI based document creator using proper Authentication with payment integration."
              tags={["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "API Integration"]}
            />
            <ProjectCard
              title="Portfolio"
              description="A descriptive and detailed information about myself including my  skills,projects and contact info."
              tags={["Shadecn/UI", "Next.js", "Tailwind CSS"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="page-subheader text-center mb-12">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Saad is an exceptional developer with a keen eye for detail. His work on our e-commerce platform exceeded our expectations."
              author="MUHAMMAD SIDDIQUE"
              position="CEO, TechRetail"
            />
            <TestimonialCard
              quote="Working with Saad was a pleasure. He's not only technically proficient but also a great communicator and team player."
              author="HASNAIN AFZAL"
              position="Project Manager, WebSolutions"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your ideas to life?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-primary-foreground/80">
            I'm currently available for freelance work and open to new opportunities. Let's create something amazing
            together!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <div className="text-primary mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ title, description, tags }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ quote, author, position }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <blockquote className="text-lg text-muted-foreground mb-4">"{quote}"</blockquote>
        <footer>
          <strong className="font-semibold">{author}</strong>
          <p className="text-sm text-muted-foreground">{position}</p>
        </footer>
      </CardContent>
    </Card>
  );
}
