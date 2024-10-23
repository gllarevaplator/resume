import ContentSection from "../components/AnimatedContentSection";
import ProjectSection from "../components/ProjectSection";
import MotionImage from "../components/MotionImage";
import { projects } from "../constants/projects";

export default function Home() {
  return (
    <div>
      <main className="container">
        <div className="flex flex-col justify-center items-center gap-2 w-full md:w-1/3 mx-auto mt-16 mb-32">
          <MotionImage
            src="/assets/plator-gllareva-main-image.webp"
            width={150}
            height={150}
            alt="Plator Gllareva - Picture"
            className="mt-4 rounded-full"
          />
          <ContentSection title="Plator Gllareva" />
          <ContentSection
            title=""
            description="Passionate Frontend Engineer with over 4 years of experience in
              developing dynamic and responsive web applications."
          />
          <ContentSection
            title=""
            description="Experienced in JavaScript, TypeScript, React, Redux, Next.js,
            Tailwind CSS, GraphQL, Firebase, Wordpress, Elementor, ACF,
            Woocommerce, Shopify."
            button="Let's collaborate"
            buttonLink="mailto: plator.gllareva@gmail.com"
          />
        </div>
        <section className="my-16">
          <ContentSection
            title="Some of the latest projects"
            className="mb-4"
            headingLevel="h2"
            headingSize="text-2xl"
          />
          <ProjectSection projects={projects} />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
