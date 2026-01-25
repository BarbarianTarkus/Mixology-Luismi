import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({
  url: "https://mixology-luismi.ricardoverduguez.workers.dev/graphql",
  token: "d9128c6b00a8ec015e6e12eaef4557f2f8a4c231",
  queries,
});
export default client;
