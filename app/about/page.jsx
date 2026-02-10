import React from "react"
import Image from "next/image"
import { Award, BookOpen, CameraIcon, Code, Coffee, Heart, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <h1 className="page-header text-center">About Me</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-muted-foreground">
            A passionate .NET Developer with a love for creating innovative web solutions
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <Image
  src="/saadiabt.png"
  alt="saadiabt"
  width={400}
  height={400}
  className="object-cover rounded-xl"
/>

              </div>
            </div>
            <div className="md:w-3/5">
              <h2 className="page-subheader">Who I Am</h2>
              <p className="text-muted-foreground mb-6">
                I'm Saad Mehmood, a .NET Developer with a passion for web development.
              </p>
              <p className="text-muted-foreground mb-6">
                My journey in technology began during my studies at the University of Gujrat, where I developed a strong
                foundation in computer science principles and discovered my love for coding.
              </p>
              <p className="text-muted-foreground">
                I specialize in modern web technologies and frameworks, with a particular focus on creating responsive,
                user-friendly websites that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="page-subheader text-center mb-12">My Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Heart className="w-8 h-8" />}
              title="Passion"
              description="I approach every project with enthusiasm and dedication, putting my heart into creating the best possible solutions."
            />
            <ValueCard
              icon={<Zap className="w-8 h-8" />}
              title="Innovation"
              description="I constantly seek new ideas and approaches, pushing the boundaries of what's possible in web development."
            />
            <ValueCard
              icon={<Coffee className="w-8 h-8" />}
              title="Dedication"
              description="I'm committed to delivering high-quality work, paying attention to every detail and persisting until the job is done right."
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="page-subheader text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillBadge icon={<Code />} name="C#" />
            <SkillBadge icon={<Code />} name="ASP.NET Core" />
            <SkillBadge icon={<Code />} name="Bootstrap" />
            <SkillBadge icon={<Code />} name="Entity Framework Core" />
            <SkillBadge icon={<Code />} name="HTML/CSS" />
            <SkillBadge icon={<Code />} name="SQL Server" />
            <SkillBadge icon={<Code />} name="MySQL" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="page-subheader text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Crypto Marketing"
              company="SFS Tech Venture"
              period="2024-2025"
              description="Developed and executed strategic marketing campaigns to promote blockchain projects and cryptocurrency services. Managed community engagement, social media growth, and influencer collaborations to enhance brand visibility in the crypto space."
              skills={["Blockchain Marketing", "Social Media Management", "Community Building", "Content Strategy", "Influencer Outreach"]}
            />

          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="page-subheader text-center">Beyond Coding</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            When I'm not in front of a computer, you can find me exploring these interests:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <InterestCard
              title="Photography"
              description="Capturing moments and exploring visual storytelling through photography."
            />
            <InterestCard
              title="Billiard"
              description="Exploring the game and enjoying the outdoor activity whenever possible."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard(props) {
  return (
    <Card>
      <CardHeader>
        <div className="text-primary mx-auto mb-4">{props.icon}</div>
        <CardTitle className="text-center">{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground">{props.description}</p>
      </CardContent>
    </Card>
  );
}

function SkillBadge(props) {
  return (
    <div className="flex items-center gap-2 bg-card p-4 rounded-lg shadow-sm border">
      <div className="text-primary">{props.icon}</div>
      <span className="font-medium">{props.name}</span>
    </div>
  );
}

function ExperienceCard(props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <p className="text-muted-foreground">
          {props.company} • {props.period}
        </p>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{props.description}</p>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function InterestCard(props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{props.description}</p>
      </CardContent>
    </Card>
  );
}

function CertificationCard(props) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 pt-6">
        <div className="text-primary flex-shrink-0">{props.icon}</div>
        <div>
          <h3 className="font-semibold">{props.title}</h3>
          <p className="text-sm text-muted-foreground">
            {props.issuer} • {props.date}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}


