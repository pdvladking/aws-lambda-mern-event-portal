const Videos = ({ videos = [] }) => (
  <section>
    <h2>Videos</h2>
    {videos.length === 0 ? (
      <p>No videos added.</p>
    ) : (
      videos.map((v, i) => (
        <iframe
          key={i}
          src={v.link}
          title={`video-${i}`}
          width="100%"
          height="300"
        />
      ))
    )}
  </section>
);

export default Videos;
