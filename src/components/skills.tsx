import type { FC } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Database, Wrench, Code, Lightbulb } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface SkillsData {
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
  other: string[];
}

interface SkillsProps {
  skills: SkillsData;
}

const getCategoryIcon = (category: keyof SkillsData) => {
  switch (category) {
    case 'frontend':
      return Code;
    case 'backend':
      return BrainCircuit;
    case 'databases':
      return Database;
    case 'tools':
      return Wrench;
    case 'other':
      return Lightbulb;
    default:
      return Code;
  }
};

export const Skills: FC<SkillsProps> = ({ skills }) => {
  const t = useTranslations('Skills');
  const categories = Object.keys(skills) as Array<keyof SkillsData>;

   const getCategoryTitle = (category: keyof SkillsData) => {
    return t(category);
   };

  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto max-w-screen-lg px-4 animate-fade-in animation-delay-400">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);
            const title = getCategoryTitle(category);
            const categorySkills = skills[category];

            if (!categorySkills || categorySkills.length === 0) {
              return null;
            }

            return (
              <Card key={category} className="shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] flex flex-col">
                <CardHeader className="flex flex-row items-center gap-3 pb-4">
                    <Icon className="h-6 w-6 text-accent flex-shrink-0" />
                    <CardTitle className="text-xl font-semibold text-primary">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm whitespace-nowrap transition-colors duration-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
