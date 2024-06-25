import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import "../Projects/project.css";
import { projectData } from "../../data/data";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";

export const Projects = () => {

  const [t] = useTranslation();

  return (
    <>
      <section>
        <div className="container">
          <h3 className="mb-10 text-5xl font-medium text-teal-400 ">
            {t("main.projects_page.projects_title")}
          </h3>
          <ul className="list-unstyled flex justify-between flex-wrap gap-12 h-[500px] mb-14 p-10 border rounded-md overflow-y-auto">
            {
              projectData.map((item) => <ProjectCard key={item.id} {...item} />)
            }
          </ul>
          <SocialMedia/>
        </div>
      </section>
    </>
  );
};
