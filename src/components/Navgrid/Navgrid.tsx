import './Navgrid.scss';

const myCellWidth = 30;
const horizPlacement = 25;
const vertPlacement = 35;

function displayWord(id: string, direction: string, placement: number, cellWidth: number) {
  let elementString = "";
  let styleString = "";
  let reference = "";
  const character = id + '-char';

  if (direction === "h") {
    reference = "left";
  }
  else {
    reference = "top";
  }

  elementString = '<p class="' + id + ' grid-link ' + direction + 'Word">';
  styleString = '.' + character + ' { position: absolute; width: ' + cellWidth + 'px; }';

  for(let i = 0; i < id.length; i++) {
    elementString += '<span class="' + character + ' char' + (i + 1) + '">' + id.charAt(i) + '</span>';
    styleString += '.' + direction + 'Word .char' + (i + 1) + ' { ' + reference + ': ' + (i * placement) + 'px; }';
  }
  elementString += '</p>';

  return elementString;
}

const simple = displayWord("SIMPLE", "h", horizPlacement, myCellWidth);
const portfolio = displayWord("PORTFOLIO", "h", horizPlacement, myCellWidth);
const responsive = displayWord("RESPONSIVE", "h", horizPlacement, myCellWidth);
const creative = displayWord("CREATIVE", "h", horizPlacement, myCellWidth);
const about = displayWord("ABOUT", "h", horizPlacement, myCellWidth);
const interactive = displayWord("INTERACTIVE", "v", vertPlacement, myCellWidth);
const contact = displayWord("CONTACT", "v", vertPlacement, myCellWidth);

const navgridHtml = simple + portfolio + responsive + creative + about + interactive + contact;

const Navgrid = () => (
  <div className="my-navgrid" dangerouslySetInnerHTML={{__html: navgridHtml}}></div>
);

export default Navgrid;
