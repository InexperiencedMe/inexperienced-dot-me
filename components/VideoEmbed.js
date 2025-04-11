  export default function VideoEmbed({ url }) {
    return (
      <iframe
        className="blogVideo"
        src={url}
        allow="clipboard-write; encrypted-media"
        allowFullScreen
      ></iframe>
    );
  }