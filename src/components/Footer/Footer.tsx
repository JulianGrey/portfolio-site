import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="column-footer">
          <h3>Julian Grey</h3>
          <ul className="no-indent">
            <li className="no-bullet"><a href="mailto:contact@juliangrey.dev">contact@juliangrey.dev</a></li>
            <li className="no-bullet"><a href="http://www.linkedin.com/in/julianrgrey" target="_blank">LinkedIn</a></li>
            <li className="no-bullet"><a className="link-github" href="http://github.com/JulianGrey" target="_blank">GitHub</a></li>
          </ul>
        </div>
        <div className="column-footer">
          <h3>SiteMap</h3>
          <ul className="no-indent">
            <li className="no-bullet"><a className="link-home" href="/">Home</a></li>
          </ul>
        </div>
        <div className="column-footer">
          <h3>-----</h3>
          <ul className="no-indent">
          </ul>
        </div>
      </div>
    </footer>
  );
};
