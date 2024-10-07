import styles from "./page.module.css";
import prisma from '../lib/prisma';

export default async function Home() {
  const skills = await prisma.skill.findMany();
  return (
    <div>
      <main className={styles.main}>

        <div className="ui-container ui-mx-auto ui-py-8">
          <h1 className="ui-text-3xl ui-font-bold ui-mb-4">Welcome to My Portfolio</h1>
          <p className="ui-text-lg ui-text-gray-700 ui-mb-8">Here are some of my skills:</p>

          <ul className="list-disc ui-pl-5">
            {skills.map((skill: {id: number; name: string; description: string; image: string | null;}) => (
              <li key={skill.id} className="ui-text-lg ui-text-gray-700">
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
