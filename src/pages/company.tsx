import { Cursor } from '@/components/cursor';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Company = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Cursor />

      <div data-cursor-bg className="pt-10">
        <div>Company</div>
        <div className="">
          クライアント様の潜在的な課題・問題の改善に対し、客観的な視点で評価されるWeb制作、ユーザーベネフィットを優先したサイトやクリエイティブ全般のメディアデザイン等をご提案させていただきます。
        </div>
      </div>
    </Main>
  );
};

export default Company;
