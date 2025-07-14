import './Navgrid.scss';

function composeWord(category: string, alignment: string) {
  const categoryStr = category.toUpperCase();
  const stringArray = categoryStr.split('');

  return (
    <p className={`grid-link ${categoryStr} ${alignment}Word`}>
      {
        stringArray.map((char, index) => (
          <span key={`${char}${index}`} className={`${categoryStr}-char char${ index + 1 }`}>{ char }</span>
        ))
      }
    </p>
  );
}

export default function Navgrid() {
  const about = composeWord("about", "h");
  const contact = composeWord("contact", "v");
  const creative = composeWord("creative", "h");
  const interactive = composeWord("interactive", "v");
  const portfolio = composeWord("portfolio", "h");
  const responsive = composeWord("responsive", "h");
  const simple = composeWord("simple", "h");

  return (
    <div className='navgrid'>
      {about}{contact}{creative}{interactive}{portfolio}{responsive}{simple}
    </div>
  );
}
