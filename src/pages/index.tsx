import HomePageCard from '@/components/HomePageCard';
import { HomeCardData } from '@/data/HomeCardData';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title="Demo Ad-Medica" description="Demo With React/Next JS" />
      }
    >
      <section className=" block md:pt-[50px]">
        <div className="relative md:pt-[190%]">
          {HomeCardData.map((d) => {
            return (
              <HomePageCard
                key={d.title}
                title={d.title}
                summary={d.summary}
                cardPosition={d.cardPosition}
                topOffset={d.topOffset}
                alphabet={d.alphabet}
                alphabetYOffset={d.alphabetYOffset}
                alphabetXOffset={d.alphabetXOffset}
                cardWidth={d.cardWidth}
                headLine={d.headLine}
                headLineSize={d.headLineSize}
              />
            );
          })}
        </div>
      </section>
      <div className="h-[1000px] w-full" />
    </Main>
  );
};

export default Index;
