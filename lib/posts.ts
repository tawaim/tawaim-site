import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md") && f !== "template.md");

  return files
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags || [],
    content,
  };
}