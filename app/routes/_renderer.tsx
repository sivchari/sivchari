import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { LINK } from "../constants";

export default jsxRenderer(({ children, title, description }) => {
  const _title = title ?? "research!sivchari";
  const _description = description ?? "This is sivchari's blog";

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{_title}</title>
        <meta property="og:title" content={_title} />
        <meta property="og:description" content={_description} />
        <meta name="twitter:site" content="@sivchari" />
        <meta name="twitter:card" content="summary_large_image" />
        <Script src="/app/client.ts" />
        {import.meta.env.PROD ? (
          <link
            href="https://sivchari.github.io/sivchari/static/assets/style.css"
            rel="stylesheet"
          />
        ) : (
          <link href="/app/style.css" rel="stylesheet" />
        )}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.css"
        />
      </head>
      <body class="main-container">
        <header class="bg-lime-500">
          <div class="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-6">
            <a
              href="https://sivchari.github.io/sivchari/"
              class="text-white text-base font-bold"
            >
              research!sivchari
            </a>
            <div class="flex items-center gap-2">
              <a href={LINK.X} target={"_blank"} rel={"noreferrer"} class="p-2">
                {import.meta.env.PROD ? (
                  <img
                    src="https://sivchari.github.io/sivchari/static/x.svg"
                    alt="x-icon"
                    class="w-7 h-7"
                  />
                ) : (
                  <img src="/static/x.svg" alt="x-icon" class="w-7 h-7" />
                )}
              </a>
              <a
                href={LINK.GITHUB}
                target={"_blank"}
                rel="noreferrer"
                class="p-2"
              >
                {import.meta.env.PROD ? (
                  <img
                    src="https://sivchari.github.io/sivchari/static/github.svg"
                    alt="github-icon"
                    class="w-7 h-7 text-white"
                  />
                ) : (
                  <img
                    src="/static/github.svg"
                    alt="github-icon"
                    class="w-7 h-7 text-white"
                  />
                )}
              </a>
            </div>
          </div>
        </header>
        <main class="w-full px-4 lg:max-w-4xl lg:px-0 mx-auto">{children}</main>
      </body>
    </html>
  );
});
