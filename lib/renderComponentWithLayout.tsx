import Layout from "@views/layout";
import {
  renderToReadableStream,
  type ReactDOMServerReadableStream,
} from "react-dom/server";

export async function renderComponentWithLayout(
  children: React.ReactNode
): Promise<ReactDOMServerReadableStream> {
  return await renderToReadableStream(<Layout>{children}</Layout>);
}
