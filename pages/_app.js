
import { Global } from "@emotion/react";
import { reset } from "@/styles/reset";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={reset} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
