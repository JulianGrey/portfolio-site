import './Header.scss';

// const Header = (props) => (
//   <header className="header">
//     <div className="header__container">
//       <h1>{props.title}</h1>
//     </div>
//   </header>
// );

/*<div className="nav-handler">
  <ul className="no-indent">
    <li className="no-bullet"><a className="link-portfolio" href="/portfolio">Portfolio</a></li>
  </ul>
</div>*/
export default function Header() {
  return (
    <header>
      <nav>
        <a href="/" name="top"></a>
        <div id="navigation" className="container">
          <div className="nav-handler">
            <a id="logo-link" href="/"><img id="logo" src="/images/nameLogoW.png" /></a>
          </div>
        </div>
      </nav>
    </header>
  );
}
