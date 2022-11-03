import sanityClient from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";
// console.log(process.env);
export const client = sanityClient({
  projectId: "ievd52rw", //process.env.REACT_APP_SANITY_PROJECTID,
  dataset: "production",
  apiVersion: "2022-03-03",
  useCdn: true,
  token:
    "skS5Y5p5h9YuqMVY2Juc8mZIqwrxTQ6Lrv3lGyal7DpKBh7EoInIF1inNu2NJd0gjHRbfaMdhwFRIOmYGE4AY7FdKbk4HR05QVjtwgXXdetkhBDzMTo4PfwRNubkVUFed7lQLhnFTA9IOTQwNbDcVPXuI1CIrffAJTjgDQq9ZIAQTkdv964A", //process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
