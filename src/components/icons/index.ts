const iconModules = import.meta.glob<{ default: IconComponent }>(
  "/src/components/icons/**/[A-Z0-9]*.tsx",
  { eager: false },
);

function getIconName(filePath: string): string {
  const fileName = filePath.split("/").pop()!.replace(".tsx", "");
  return `Icon${fileName}`;
}

function getIconVersion(filePath: string): string {
  if (filePath.includes("/version01/")) return "v1";
  if (filePath.includes("/version02/")) return "v2";
  return "";
}

export async function getIcon(
  name: string,
  version?: string,
): Promise<IconComponent | null> {
  for (const [path, importer] of Object.entries(iconModules)) {
    const iconName = getIconName(path);
    const iconVersion = getIconVersion(path);
    if (iconName === name && (!version || iconVersion === version)) {
      const mod = await importer();
      return mod.default;
    }
  }
  return null;
}

export async function loadAllIcons(): Promise<IconMetadata[]> {
  const paths = Object.keys(iconModules);
  const importers = Object.values(iconModules);
  const modules = await Promise.all(importers.map((fn) => fn()));

  return paths.map((path, index) => {
    const Icon = modules[index].default;
    return {
      name: getIconName(path),
      Icon,
      keywords: Icon.keywords || [],
      version: getIconVersion(path),
    };
  });
}
