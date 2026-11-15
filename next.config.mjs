const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "thandoraagency";
const isProjectPage = process.env.GITHUB_ACTIONS === "true" && repoName !== `${process.env.GITHUB_REPOSITORY?.split("/")[0]}.github.io`;

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isProjectPage ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` } : {}),
};

export default nextConfig;
