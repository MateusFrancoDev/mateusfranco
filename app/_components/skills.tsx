import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "React Native", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Docker", level: 50 },
        { name: "MySQL", level: 50 },
        { name: "PostgreSQL", level: 55 },
        { name: "Prisma (ORM)", level: 55 },
      ],
    },
    {
      title: "DevOps & Ferramentas",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Git", level: 95 },
        { name: "Azure", level: 70 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Vue.js",
    "Python",
    "Docker",
    "AWS",
    "Git",
    "Figma",
    "React Native",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Habilidades & Tecnologias</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
              e eficientes.
            </p>
          </div>

          {/* Skill Progress Bars */}
          <div className="mb-16">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="min-w-[85%] snap-center flex-shrink-0 md:min-w-0"
                >
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology Tags */}
          <div className="text-center">
            <h3 className="mb-8">Tecnologias que Utilizo</h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 hover:bg-[#043C86] hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
