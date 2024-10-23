import ContentSection from "../components/AnimatedContentSection";
import MotionImage from "../components/MotionImage";

export default function Home() {
  return (
    <div>
      <main className="container flex flex-col items-center">
        <div className="flex flex-col justify-center items-center gap-2 w-full md:w-1/3">
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
      </main>
      <footer></footer>
    </div>
  );
}
