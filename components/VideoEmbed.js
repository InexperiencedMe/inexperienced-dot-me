export default function VideoEmbed({ src }) {
  const isVideoFile = src.endsWith('.mp4');

  // Local Files
  if (isVideoFile) {
    return (
      <video
        className="blogVideo"
        controls
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  // External Links
  return (
    <iframe
      className="blogVideo"
      src={src}
      allow="clipboard-write; encrypted-media"
      allowFullScreen
    ></iframe>
  );
}