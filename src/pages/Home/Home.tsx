import { useState } from 'react';
import Navgrid from '../../components/Navgrid/Navgrid';
import { content } from '../../components/Navgrid/content';
import './Home.scss';

const contents = content;

export default function Home() {
  const [content, setContent] = useState(<>
    <p>Hello and welcome to my website. This website is for the purpose of letting you know more about me, through showcasing various projects that I have worked on.</p>
    <p>This site is currently under construction for a full React.js rewrite, and I apologise for the inconvenience caused.</p>
    <p>However, please feel free to take a look at my socials to learn more about me, and projects that I have worked on.</p>
    <ul>
      <li><a href="https://github.com/JulianGrey" target="_blank">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/julianrgrey/" target="_blank">LinkedIn</a></li>
    </ul>
  </>);
  const [selection, setSelection] = useState('');

  function handleSelection(category: string) {
    const categoryContent = contents.find(content => content.category === category);
    if (categoryContent) {
      setContent(<>{categoryContent.description}</>);
    }
    setSelection(category);
  }

  return (
    <div>
      <section className="container">
        <div className="navgrid-text">
          <div className="request-text">
            {content}
          </div>
        </div>
        <Navgrid selection={selection} onSelect={handleSelection} />
        <div className="clearfix"></div>
      </section>
    </div>
  );
}
