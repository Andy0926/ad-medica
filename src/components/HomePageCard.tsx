import type { HomeCardDataProps } from '@/data/HomeCardData';

interface HomePageCardProps extends HomeCardDataProps {}
const HomePageCard = ({
  title,
  summary,
  cardPosition,
  topOffset,
  alphabet,
  alphabetYOffset,
  alphabetXOffset,
  cardWidth,
  headLine,
  headLineSize,
}: HomePageCardProps) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {headLine === undefined ? (
        <>
          <div
            data-cursor-bg
            className={`block md:absolute ${topOffset}  ${cardPosition}  pb-[2rem] pl-[25vw] pr-[2rem] pt-[25vw] ${cardWidth} md:px-10 md:py-0`}
            // style={{ top: topOffset }}
          >
            <div className="select-none font-code_bold text-3xl tracking-xxl text-gray-100">
              {title}
            </div>
            <p className="pt-10 text-sm leading-7">{summary}</p>
          </div>

          <div
            data-cursor-bg
            className={`md:absolute ${alphabetXOffset}  `}
            style={{ top: alphabetYOffset }}
          >
            <h2 className=" m-0 select-none p-0 font-didot_regular text-xxxl text-gray-100">
              {alphabet}
            </h2>
          </div>
        </>
      ) : (
        <div
          data-cursor-bg
          className={`md:absolute ${topOffset}  ${cardPosition}  ${cardWidth} left-0`}
          style={{ top: topOffset }}
        >
          <pre
            className={`font-code_bold ${headLineSize} text-center tracking-xxl text-gray-100`}
          >
            {headLine}
          </pre>
        </div>
      )}
    </>
  );
};

export default HomePageCard;
