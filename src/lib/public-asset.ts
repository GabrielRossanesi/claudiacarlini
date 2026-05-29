const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function publicAsset(path: string) {
  if (!path) {
    return path;
  }

  if (/^(?:https?:)?\/\//.test(path) || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${publicBasePath}${normalizedPath}`;
}
