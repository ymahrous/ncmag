export function getImageUrl(imageUrl?: string): string {
  if (imageUrl) return imageUrl;
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e0e0e0' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='48' fill='%23999'%3E📰%3C/text%3E%3C/svg%3E";
}
