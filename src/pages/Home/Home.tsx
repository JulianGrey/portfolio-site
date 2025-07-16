import { useEffect, useState } from 'react';
import Navgrid from '../../components/Navgrid/Navgrid';
import { content } from '../../components/Navgrid/content';
import './Home.scss';

const contents = content;

export default function Home() {
  const [content, setContent] = useState(<></>);
  const [selection, setSelection] = useState('');

  function handleSelection(category: string) {
    const categoryContent = contents.find(content => content.category === category);
    if (categoryContent) {
      setContent(<>{categoryContent.description}</>);
    }
    setSelection(category);
  }

  useEffect(() => {
    handleSelection('about');
  }, []);

  return (
    <div>
      <section>
        <div className="navgrid-content">
          <div className="request-text">
            {content}
          </div>
        </div>
        <Navgrid selection={selection} onSelect={handleSelection} />
      </section>
    </div>
  );
}
