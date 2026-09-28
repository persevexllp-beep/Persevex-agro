export function ImagePanel({ kind, label }: { kind: string; label: string }) {
  return <div className={`image-panel ${kind}`} role="img" aria-label={label} />;
}
