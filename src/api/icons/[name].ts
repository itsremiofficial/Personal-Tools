import { readFile } from "fs/promises";
import { join } from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name } = req.query;
    const iconName = Array.isArray(name) ? name[0] : name;

    if (!iconName) {
      return res.status(400).json({ message: "Icon name is required" });
    }

    const filePath = join(
      process.cwd(),
      "src",
      "components",
      "icons",
      `${iconName}.tsx`
    );
    const content = await readFile(filePath, "utf-8");

    res.setHeader("Content-Type", "text/plain");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${iconName}.tsx`
    );
    return res.status(200).send(content);
  } catch (error) {
    console.error("Error serving icon:", error);
    return res.status(404).json({ message: "Icon not found" });
  }
}
