import { Cursor } from '@/components/cursor';
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
      <Cursor />
      <section className="relative min-h-screen ">
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
      </section>
    </Main>
  );
};

export default Index;
