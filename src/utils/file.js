import path from "path";
import { bundleMDX } from "mdx-bundler";
import { sortByDate } from "@/utils";
import fs from "fs";

export const getFileData = async (filePath, fileName, fileType = "mdx") => {
  const fullPath = path.join(filePath, `${fileName}.${fileType}`);
  const source = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX(
    { source: source }
    // {
    //   xdmOptions(options) {
    //     options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
    //     options.rehypePlugins = [
    //       ...(options?.rehypePlugins ?? []),
    //       rehypePrism,
    //     ];
    //     return options;
    //   },
    // }
  );

  return {
    code,
    frontmatter,
  };
};

export const getAllFileName = (filePath, fileType = "mdx") => {
  const files = fs.readdirSync(path.join(filePath));

  const names = files.map((filename) => ({
    slug: filename.replace("." + fileType, ""),
  }));
  return names;
};

export const getAllFileNameAndFrontmatter = async (
  filePath,
  fileType = "mdx"
) => {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join(filePath));

  // Get slug and frontmatter from posts
  const posts = await Promise.all(
    files.map(async (filename) => {
      // Create slug
      const slug = filename.replace("." + fileType, "");

      // Get frontmatter
      const source = fs.readFileSync(path.join(filePath, filename), "utf-8");

      const { frontmatter } = await bundleMDX({ source: source });

      return {
        slug,
        frontmatter,
      };
    })
  );

  return {
    posts: posts.sort(sortByDate),
  };
};
