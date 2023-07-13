export interface HomeCardDataProps {
  title: string;
  summary: string;
  cardPosition: string;
  topOffset: string;
  alphabetYOffset: string;
  alphabet: string;
  alphabetXOffset: string;
  cardWidth: string;
  headLine?: string;
  headLineSize?: string;
}

export const HomeCardData: HomeCardDataProps[] = [
  {
    title: 'Web',
    summary:
      'クライアント様の潜在的な課題・問題の改善に対し、客観的な視点で評価されるWeb制作、ユーザーベネフィットを優先したサイトやクリエイティブ全般のメディアデザイン等をご提案させていただきます。',
    cardPosition: 'md:right-0',
    topOffset: 'md:top-[5%]',
    alphabetYOffset: '5%',
    alphabet: 'C',
    alphabetXOffset: '-right-[4vw] md:-left-[5vw]',
    cardWidth: 'md:max-w-[300px]',
  },
  {
    title: 'CG',
    summary:
      '難解な医療従事者向けプロモーションツールを分かりやすいデザインとハイクオリティな3DCGアニメーションやxRで表現\nクライアント様のどんなご相談・ご要望にも誠心誠意向き合って制作しています。',
    cardPosition: 'md:left-0',
    topOffset: 'md:top-[25%]',
    alphabet: 'W',
    alphabetYOffset: '10%',
    alphabetXOffset: 'md:-right-[10%]',
    cardWidth: 'md:max-w-[500px]',
  },
  {
    title: 'GRAPHIC',
    summary:
      '医療業界のKeyVisualは、製品を医療従事者に認知していただくための最も重要なツールの1つ。そのため「製品をいかに分かりやすいビジュアルで伝えられるか？」を元に、ご担当者様と納得するまでご提案させていただきます。',
    cardPosition: 'md:left-0',
    topOffset: 'md:top-[45%]',
    alphabet: 'G',
    alphabetYOffset: '25%',
    alphabetXOffset: 'md:left-60',
    cardWidth: 'md:max-w-[300px]',
  },
  {
    title: '',
    summary: '',
    cardPosition: '',
    topOffset: 'md:top-[60%]',
    alphabet: '',
    alphabetYOffset: '',
    alphabetXOffset: '',
    cardWidth: 'w-full',
    headLine: 'TOKYO\nADMEDICA',
    headLineSize: 'text-6xl',
  },
  {
    title: 'SHOOTING',
    summary:
      '私たちは今まで培ってきた歴史と経験を元に最新のバーチャルスタジオ「HATONOMORI STUDIO」を運営。動画、スチールともにどんな現場でも3つのサイシン＜最新・最深・細心＞でストレスフリーな撮影をデザインします。',
    cardPosition: 'md:right-0',
    topOffset: 'md:top-[70%]',
    alphabet: 'S',
    alphabetYOffset: '40%',
    alphabetXOffset: 'md:-right-[5%]',
    cardWidth: 'md:max-w-[600px]',
  },
  {
    title: 'MOVIE',
    summary:
      'CM・xR動画・インナー向け動画・説明動画等、最新の技術を使った惹き込まれるような企画・演出・編集で映像をデザインして制作。HATONOMORI STUDIOはフォトリアルなCG合成もリアルタイムでご確認頂けるバーチャルシステムです。',
    cardPosition: 'md:left-[40%]',
    topOffset: 'md:top-[75%]',
    alphabet: 'M',
    alphabetYOffset: '69%',
    alphabetXOffset: 'md:left-10',
    cardWidth: 'md:max-w-[20%]',
  },
  // {
  //   title: '',
  //   summary: '',
  //   cardPosition: '',
  //   topOffset: '220%',
  //   alphabet: '',
  //   alphabetYOffset: '',
  //   alphabetXOffset: '',
  //   cardWidth: 'md:w-full',
  //   headLine: 'TOKYO\nADMEDICA',
  //   headLineSize: 'text-6xl',
  // },
];
