import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "review",
      type: "string",
    }),
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
