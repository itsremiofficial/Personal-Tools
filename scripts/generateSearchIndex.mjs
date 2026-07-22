import fs from "fs";
import path from "path";

const ICON_DIRS = [
  path.resolve("public/icons/version01"),
  path.resolve("public/icons/version02"),
];
const OUTPUT_FILE = path.resolve("public/search-index.json");

const SHAPE_SYNONYMS = {
  circle: ["round", "circular", "ring", "dot", "cycle", "orb", "loop"],
  square: ["box", "block", "rectangle", "quad", "tile", "grid", "frame"],
  line: ["stroke", "rule", "bar", "stripe", "dash", "border", "edge"],
  arrow: ["chevron", "direction", "pointer", "caret", "triangle"],
  path: ["curve", "trail", "trace", "route", "track", "stroke"],
  cross: ["x", "close", "cancel", "remove", "delete", "multiply"],
  check: ["tick", "yes", "confirm", "done", "complete", "verified"],
  heart: ["love", "favorite", "like", "care"],
  star: ["favorite", "rating", "review", "sparkle", "shine"],
  lock: ["secure", "lock", "privacy", "safety", "protected"],
  mail: ["email", "message", "envelope", "letter", "inbox"],
  phone: ["call", "telephone", "contact", "mobile", "smartphone"],
  search: ["find", "magnifier", "explore", "lookup", "scan"],
  home: ["house", "building", "residence", "dashboard"],
  user: ["person", "profile", "account", "avatar", "member"],
  settings: ["gear", "preferences", "configuration", "options", "control"],
  bell: ["notification", "alert", "alarm", "ring", "reminder"],
  calendar: ["date", "event", "schedule", "time", "day"],
  camera: ["photo", "image", "picture", "video", "record"],
  download: ["save", "import", "receive", "install", "arrow down"],
  upload: ["export", "send", "share", "publish", "arrow up"],
  trash: ["delete", "bin", "remove", "discard", "garbage"],
  edit: ["pencil", "write", "modify", "change", "update", "pen"],
  add: ["plus", "new", "create", "include", "append", "increase"],
  minus: ["subtract", "remove", "delete", "decrease", "reduce"],
  play: ["start", "run", "begin", "video", "music", "media"],
  pause: ["stop", "break", "wait", "hold", "freeze"],
  music: ["audio", "sound", "tune", "song", "melody", "note"],
  document: ["file", "paper", "text", "page", "doc", "report"],
  folder: ["directory", "file", "storage", "organize", "collection"],
  alert: ["warning", "danger", "caution", "attention", "error"],
  info: ["information", "help", "support", "detail", "about"],
  question: ["help", "faq", "support", "inquiry", "unknown"],
};

function extractSvgShapes(svgContent) {
  const elements = [];
  const elementRegex = /<(\w+)([^>]*)>/gs;
  let match;
  while ((match = elementRegex.exec(svgContent)) !== null) {
    const tag = match[1].toLowerCase();
    if (["path", "circle", "rect", "line", "polyline", "polygon", "ellipse"].includes(tag)) {
      elements.push(tag);
    }
  }
  return elements;
}

function extractPathCommands(svgContent) {
  const dRegex = /d="([^"]*)"/g;
  const commands = new Set();
  let match;
  while ((match = dRegex.exec(svgContent)) !== null) {
    const d = match[1];
    const cmdMatch = d.match(/[MLHVCSQTAZ]/gi);
    if (cmdMatch) cmdMatch.forEach(c => commands.add(c.toUpperCase()));
  }
  return [...commands];
}

function generateLabels(name, elements, pathCommands) {
  const words = name
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  const labels = new Set(words);

  const elementCounts = {};
  elements.forEach(el => { elementCounts[el] = (elementCounts[el] || 0) + 1; });

  if (elementCounts["circle"]) {
    labels.add("circle");
    labels.add("round");
    if (elementCounts["circle"] >= 2) labels.add("multiple circles");
  }
  if (elementCounts["rect"]) {
    labels.add("rectangle");
    labels.add("square");
  }
  if (elementCounts["line"]) labels.add("line");
  if (elementCounts["path"]) labels.add("path");

  if (pathCommands.includes("C") || pathCommands.includes("S")) {
    labels.add("curved");
    labels.add("smooth");
  }
  if (pathCommands.includes("A")) {
    labels.add("arc");
    labels.add("curve");
  }
  if (pathCommands.includes("Z") || pathCommands.includes("z")) {
    labels.add("closed");
  }

  for (const [word, synonyms] of Object.entries(SHAPE_SYNONYMS)) {
    if (words.includes(word)) synonyms.forEach(s => labels.add(s));
    for (const s of synonyms) {
      if (words.includes(s)) labels.add(word);
    }
  }

  return [...labels];
}

function extractAllSvg(tsxContent) {
  const svgBlocks = [];
  const svgRegex = /<svg[\s\S]*?<\/svg>/g;
  let match;
  while ((match = svgRegex.exec(tsxContent)) !== null) {
    svgBlocks.push(match[0]);
  }
  return svgBlocks;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const nameMatch = content.match(/const Icon(\w+):/);
  if (!nameMatch) return null;

  const name = `Icon${nameMatch[1]}`;
  const svgBlocks = extractAllSvg(content);
  const allElements = [];
  const allCommands = new Set();

  svgBlocks.forEach(svg => {
    const elements = extractSvgShapes(svg);
    allElements.push(...elements);
    const commands = extractPathCommands(svg);
    commands.forEach(c => allCommands.add(c));
  });

  const labels = generateLabels(name, allElements, [...allCommands]);

  return {
    name,
    displayName: name.replace(/^Icon/, "").replace(/([A-Z])/g, " $1").trim(),
    pathCount: allElements.filter(e => e === "path").length,
    elementCounts: allElements.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {}),
    labels: [...new Set(labels)],
    pathCommands: [...allCommands],
  };
}

function buildIndex() {
  const index = [];

  for (const dir of ICON_DIRS) {
    if (!fs.existsSync(dir)) {
      console.warn(`Directory not found: ${dir}`);
      continue;
    }
    const version = dir.includes("version01") ? "v1" : "v2";
    const files = fs.readdirSync(dir).filter(f => f.endsWith(".tsx") && f !== "index.tsx" && f !== "Component.tsx" && f !== "Component1.tsx");

    for (const file of files) {
      const filePath = path.join(dir, file);
      const result = processFile(filePath);
      if (result) {
        index.push({ ...result, version });
      }
    }
  }

  const output = { version: 1, generatedAt: new Date().toISOString(), icons: index };
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), "utf-8");
  console.log(`Search index generated: ${index.length} icons at ${OUTPUT_FILE}`);
}

buildIndex();
