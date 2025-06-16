"use client";
import HTMLIntro from '@/content/html/intro.mdx';
import HTMLForm from '@/content/html/form.mdx';
// 필요시 다른 mdx import

type Props = {
  category: string;
  slug: string;
};

export default function MDXRenderer({ category, slug }: Props) {
  const DOCS_MAP: Record<string, React.ReactNode> = {
    "html/intro": <HTMLIntro />,
    "html/form": <HTMLForm />,
    // ... 추가
  };

  const key = `${category}/${slug}`;

  return (
    <article className="prose prose-invert max-w-4xl mx-auto py-10">
      {DOCS_MAP[key] ?? <div>문서를 찾을 수 없습니다.</div>}
    </article>
  );
}