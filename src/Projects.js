import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <ul>
        <li>
          <a
            className="weatherApp btn btn-branding"
            href="https://nervous-ride-46d7d1.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Weather App
          </a>
        </li>
        <li>
          <a
            className="dictionaryApp btn btn-branding"
            href="https://xenodochial-knuth-564e6b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Dictionary App
          </a>
        </li>
      </ul>
    </div>
  );
}
