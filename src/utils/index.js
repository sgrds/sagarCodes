export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
export const randomBlogReturn = (arr, max = 4) => {
  const randomBlogs = new Set();
  for (let i = 0; i < max; i++) {
    const randomBlog = arr[Math.floor(Math.random() * (arr.length + 1))];
    randomBlogs.add(randomBlog);
  }
  const randomBlogsList = [...randomBlogs];
  return randomBlogsList;
};
