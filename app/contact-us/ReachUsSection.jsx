export default function ReachUsSection({ data }) {

  function renderHTML(html) {
    if (!html) return null;

    // remove <p>
    let clean = html.replace(/<\/?p>/g, "").trim();

    // decode HTML entities
    const txt = document.createElement("textarea");
    txt.innerHTML = clean;
    clean = txt.value;

    // split by <br>
    const lines = clean.split(/<br\s*\/?>/gi).filter(Boolean);

    return lines.map((line, i) => {
      const parts = line.split(/(<em>.*?<\/em>)/g).filter(Boolean);

      return (
        <span key={i}>
          {parts.map((part, j) => {
            if (part.startsWith("<em>")) {
              const text = part.replace(/<\/?em>/g, "");
              return <em key={j}>{text}</em>;
            }
            return <span key={j}>{part}</span>;
          })}
          <br />
        </span>
      );
    });
  }
  return (
    <section className="reach-wrap">
      <div className="reach-left" />

      <div
        className="reach-right"
        style={{
          backgroundImage: `url(${data?.contact_banner})`,
        }}
      />

      <div className="reach-center">
        <span className="reach-small">{data?.contact_banner_title}</span>

        <h1 className="reach-title">
          {renderHTML(data?.contact_banner_maintitle)}
        </h1>
      </div>
    </section>
  );
}
