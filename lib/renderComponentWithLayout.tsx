/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from "@views/layout";
import {
  renderToReadableStream,
  type ReactDOMServerReadableStream,
} from "react-dom/server";

export async function renderComponentWithLayout(
  viewName: string,
  props: Record<string, any>,
): Promise<ReactDOMServerReadableStream> {
  // Dynamically import the view component based on viewName
  const ViewComponent = (await import(`@views/${viewName}`)).default;
  return await renderToReadableStream(
    <Layout>
      <ViewComponent {...props} />
    </Layout>,
  );
}
