export const VIRTUALIZATION_CONFIG = {
  OVERSCAN: 50,
  MIN_COLUMN_WIDTH: 200,
  ROW_HEIGHT: 160,
  GAP: 16,
  ROW_GAP: 16,
  SCROLL_THRESHOLD: 0.8,
  CHUNK_SIZE: 20,
  INITIAL_CHUNK_SIZE: 40,
  SCROLL_UPDATE_INTERVAL: 16,
  PREFETCH_THRESHOLD: 1000,
  SCROLL_DEBOUNCE: 50,
  BUFFER_SIZE: 60,
  PRELOAD_SCREENS: 1.5,
} as const;

export const CONTAINER: React.CSSProperties = {
  height: "89vh",
  overflowY: "auto",
  overflowX: "hidden",
  paddingRight: "0.5rem",
  WebkitOverflowScrolling: "touch",
  transform: "translateZ(0)",
  willChange: "transform",
  contain: "strict",
};
