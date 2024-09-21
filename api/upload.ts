import { put } from "@vercel/blob";

const getExtension = (str: string) => str.slice(str.lastIndexOf("."));

export async function POST(request: Request) {
  const form = await request.formData();
  const file = form.get("image") as File;
  const blob = await put(new Date().valueOf() + getExtension(file.name), file, {
    access: "public",
  });

  return new Response(JSON.stringify(blob));
}
