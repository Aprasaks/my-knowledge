import Sidebar from '@/components/Sidebar';
import MDXRendererWrapper from '@/components/MDXRendererWrapper';

interface Params {
  category: string;
  slug: string;
}

interface Props {
  params: Params;
}

export default function DocsPage({ params }: Props) {
  const { category, slug } = params;

  return (
    <main className="min-h-screen flex">
      {/* 왼쪽: 사이드바 */}
      <Sidebar />
      {/* 가운데: 문서 본문 */}
      <section className="flex-1 p-10">
        <MDXRendererWrapper category={category} slug={slug} />
      </section>
    </main>
  );
}