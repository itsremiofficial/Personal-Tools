export const VIRTUALIZATION_CONFIG = {
  OVERSCAN: 15,
  MIN_COLUMN_WIDTH: 200,
  ROW_HEIGHT: 160,
  GAP: 16,
  ROW_GAP: 16,
  SCROLL_THRESHOLD: 0.8,
  CHUNK_SIZE: 50,
  SCROLL_UPDATE_INTERVAL: 100,
} as const;

export const CONTAINER: React.CSSProperties = {
  height: "90vh",
  overflowY: "auto",
  overflowX: "hidden",
  paddingRight: "0.5rem",
  WebkitOverflowScrolling: "touch",
  transform: "translateZ(0)",
  willChange: "transform",
  contain: "strict",
};
