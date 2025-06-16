"use client";

import dynamic from "next/dynamic";

// MDXRenderer 자체가 mdx 파일을 import해서 매핑하는 역할
const MDXRenderer = dynamic(() => import("./MDXRenderer"), { ssr: false });

export default function MDXRendererWrapper(props: { category: string; slug: string }) {
  return <MDXRenderer {...props} />;
}