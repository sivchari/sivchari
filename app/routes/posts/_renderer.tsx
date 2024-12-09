import { jsxRenderer } from "hono/jsx-renderer";
import SnsButton from "../../islands/ShareButton";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const _title = `${frontmatter?.title} | sivchari Blog`;
  const _meta = `${frontmatter?.meta}`;
  return (
    <Layout title={_title} description={frontmatter?.description}>
      <div class="markdown">{children}</div>
      <SnsButton title={_title} meta={_meta} />
    </Layout>
  );
});
