// src/app/docs/[category]/[slug]/page.tsx

import Sidebar from '@/components/Sidebar';
import MDXRendererWrapper from '@/components/MDXRendererWrapper';
import { PageProps } from 'next';

export default function DocsPage({ params }: PageProps<{ category: string; slug: string }>) {
  return (
    <main className="min-h-screen flex">
      {/* 왼쪽: 사이드바 */}
      <Sidebar />
      {/* 가운데: 문서 본문 */}
      <section className="flex-1 p-10">
        <MDXRendererWrapper category={params.category} slug={params.slug} />
      </section>
    </main>
  );
}