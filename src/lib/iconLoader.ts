export async function loadIcon(name: string, version: string = "v1") {
  const formattedVersion = version.replace(
    /^v(\d+)$/,
    (_, num) => `version${num.padStart(2, "0")}`
  );

  try {
    const basePath = import.meta.env.BASE_URL;
    const iconPath = `${basePath}icons/${formattedVersion}/${name}.tsx`;

    const response = await fetch(iconPath);
    if (!response.ok) {
      throw new Error(`Failed to load icon: ${response.statusText}`);
    }

    const content = await response.text();
    return content;
  } catch (error) {
    console.error("Error loading icon:", error);
    throw new Error("Icon not found");
  }
}
