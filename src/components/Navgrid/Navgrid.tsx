import './Navgrid.scss';

interface NavgridProps {
  selection: string;
  onSelect: (category: string) => void
}

type Alignment = 'h' | 'v';

export default function Navgrid({ selection, onSelect }: NavgridProps) {
  const about = composeWord('about', 'h');
  const contact = composeWord('contact', 'v');
  const creative = composeWord('creative', 'h');
  const interactive = composeWord('interactive', 'v');
  const portfolio = composeWord('portfolio', 'h');
  const responsive = composeWord('responsive', 'h');
  const simple = composeWord('simple', 'h');

  /**
   * Create an element for a given category, which is passed computed classes
   * in order to be rendered correctly by rules set in the stylesheet.
   * @param category
   * @param alignment Should the word be aligned (h)orizontally or (v)ertically?
   * @returns
   */
  function composeWord(category: string, alignment: Alignment) {
    const categoryStr = category.toUpperCase();
    const stringArray = categoryStr.split('');

    return (
      <p
        className={`grid-link ${categoryStr} ${alignment}Word ${ selection === category ? 'active' : '' }`}
        onClick={() => onSelect(category)}
      >
        {
          stringArray.map((char, index) => (
            <span key={`${char}${index}`} className={`${categoryStr}-char char${ index + 1 }`}>{ char }</span>
          ))
        }
      </p>
    );
  }

  return (
    <div className='navgrid'>
      {about}{contact}{creative}{interactive}{portfolio}{responsive}{simple}
    </div>
  );
}
