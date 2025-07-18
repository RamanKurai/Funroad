import { CollectionConfig } from "payload";

const Categories: CollectionConfig = { 
  slug: "categories",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export default Categories;
