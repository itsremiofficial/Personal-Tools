export async function downloadAllAsZip(
  outputs: string[],
  names: string[],
  onZipProgress: (percent: number) => void,
  onDownloadProgress: (percent: number) => void
): Promise<void> {
  const JSZip = (await import("jszip")).default;
  const { saveAs } = await import("file-saver");

  const zip = new JSZip();

  outputs.forEach((output, index) => {
    zip.file(`${names[index]}.tsx`, output);
    onZipProgress(Math.min(((index + 1) / outputs.length) * 100, 10));
  });

  const content = await zip.generateAsync(
    {
      type: "blob",
      compression: "DEFLATE",
    },
    (metadata) => {
      onDownloadProgress(metadata.percent);
    }
  );

  saveAs(content, "generated-icons.zip");
}

export async function downloadSingleFile(
  content: string,
  fileName: string
): Promise<void> {
  const { saveAs } = await import("file-saver");
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  saveAs(blob, `${fileName}.tsx`);
}
