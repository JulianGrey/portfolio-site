import './Header.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <a href="/"></a>
        <div id="navigation">
          <div className="nav-handler">
            <a id="logo-link" href="/"><img id="logo" src="/images/nameLogoW.png" /></a>
          </div>
        </div>
      </nav>
    </header>
  );
}
