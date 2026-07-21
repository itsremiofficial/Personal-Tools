const VERSION_MAP: Record<string, string> = {
  v1: "version01",
  v2: "version02",
};

export function getIconFileName(name: string): string {
  return name.replace(/^Icon/, "");
}

export function getIconVersionDirectory(version: string): string {
  return VERSION_MAP[version] ?? version;
}

export function getIconDownloadUrl(name: string, version: string): string {
  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const dir = getIconVersionDirectory(version);
  const fileName = getIconFileName(name);
  return `${baseUrl}icons/${dir}/${fileName}.tsx`;
}

export async function downloadIconSource(
  name: string,
  version: string,
): Promise<void> {
  const iconUrl = getIconDownloadUrl(name, version);
  const response = await fetch(iconUrl);
  if (!response.ok)
    throw new Error(`Download failed: ${response.statusText}`);
  const content = await response.text();
  const blob = new Blob([content], { type: "text/typescript" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${getIconFileName(name)}.tsx`;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => { URL.revokeObjectURL(url); }, 100);
}
