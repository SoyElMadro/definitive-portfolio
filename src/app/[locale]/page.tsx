import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { getTranslations } from 'next-intl/server';

const personalInfo = {
  name: 'Gonzalo',
  surname: 'Madroñal',
  country: 'Argentina',
  age: 18,
  githubUsername: 'SoyElMadro',
  githubLink: 'https://github.com/SoyElMadro',
  linkedInLink: 'https://www.linkedin.com/in/madro',
  email: 'madronalgonzalo06@gmail.com',
};

const projectDataKeys = [
  'codeDocAi', 'expensesTracker', 'usa2Reventas', 'typingGame', 'securePasswordGenerator',  
];

const skillsData = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'jQuery'],
  backend: ['Node.js', 'Express', 'Firebase', 'REST APIs', 'Python', 'Java', 'C'],
  databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firestore', 'SQL'],
  tools: ['Git', 'GitHub', 'Docker', 'VS Code', 'NPM/Yarn', 'Vercel', 'Cloudinary'],
  languages: ['Spanish (Native)', 'English (Intermediate)', 'Portuguese (Basic)'],
  softSkills: ['Teamwork', 'Communication', 'Adaptability', 'Time Management', 'Critical Thinking'],
  other: ['Agile Methodologies', 'Problem Solving', 'UI/UX Principles', 'Responsive Design', 'API Design'],
};

export async function generateMetadata(props: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = props.params;
  const t = await getTranslations({ locale, namespace: 'Header' });

  return {
    title: `${personalInfo.name} ${personalInfo.surname} - ${t('portfolio')}`,
    description: `Portfolio showcasing the projects and skills of ${personalInfo.name} ${personalInfo.surname}, a web programmer from ${personalInfo.country}.`,
  };
}

const projectTags: Record<string, string[]> = {
  codeDocAi: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'React', 'Responsive Design'],
  expensesTracker: ['Next.js', 'TailwindCSS', 'localStorage', 'Responsive Design'],
  usa2Reventas: ['Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB', 'Cloudinary', 'Vercel', 'Responsive Design'],
  typingGame: ['HTML', 'CSS', 'JavaScript'],
  securePasswordGenerator: ['HTML', 'CSS', 'JavaScript'],
};


export default function Home() {
  const t = useTranslations(); 

   const projects = projectDataKeys.map(key => ({
    title: t(`Projects.${key}.title`),
    description: t(`Projects.${key}.description`),
    githubLink: `https://github.com/${personalInfo.githubUsername}/${key === 'codeDocAi' ? 'codedoc-ai' : key === 'expensesTracker' ? 'expenses-tracker' : key === 'typingGame' ? 'typing-game' : 'generador-de-contrasenas-seguras'}`,
    liveLink: key === 'usa2Reventas' ? 'https://usa2-reventa.vercel.app/' : key === 'typingGame' ? 'https://65a429e9e7ac41aa2ac30bca--chimerical-quokka-ccd05e.netlify.app/' : key === 'securePasswordGenerator' ? 'https://darling-sawine-61aa4f.netlify.app/' : key === 'expensesTracker' ? 'https://expenses-tracker-chi-gray.vercel.app/' : 'https://codedoc-ai.vercel.app/',
    tags: projectTags[key] || [], 
  }));

  const staticBio = t('Bio'); // Get translated bio

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Use max-w-screen-xl for the main content area */}
      <main className="flex-1 w-full max-w-screen-xl mx-auto">
        <Hero
            name={personalInfo.name}
            surname={personalInfo.surname}
            country={personalInfo.country}
            age={personalInfo.age}
            githubLink={personalInfo.githubLink}
            linkedInLink={personalInfo.linkedInLink}
        />
        <About bio={staticBio} />
        <Skills skills={skillsData} />
        <Projects projects={projects} />
        <Contact email={personalInfo.email} linkedInLink={personalInfo.linkedInLink} />
      </main>
      <Footer name={`${personalInfo.name} ${personalInfo.surname}`} />
    </div>
  );
}
