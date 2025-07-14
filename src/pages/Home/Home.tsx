import './Home.scss';
import Navgrid from '../../components/Navgrid/Navgrid';

export default function Home() {
  return (
    <div>
      <section className="container">
        <div className="navgrid-text">
          <div className="request-text">
            <p>Hello and welcome to my website. This website is for the purpose of letting you know more about me, through showcasing various projects that I have worked on.</p>
            <p>This site is currently under construction for a full React.js rewrite, and I apologise for the inconvenience caused.</p>
            <p>However, please feel free to take a look at my socials to learn more about me, and projects that I have worked on.</p>
            <ul>
              <li><a href="https://github.com/JulianGrey" target="_blank">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/julianrgrey/" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <Navgrid />
        <div className="clearfix"></div>
      </section>
    </div>
  );
}

// export default class HomePage extends React.Component {



//   elementClicked = (e) => {
//     if (e.target.offsetParent && e.target.offsetParent.className.indexOf('grid-link') > -1 ) {
//       const myContent = document.getElementsByClassName("request-text")[0];

//       if(document.getElementsByClassName('active').length > 0) {
//         document.getElementsByClassName('active')[0].classList.remove('active');
//       }

//       if((" " + e.target.className + " ").indexOf(" SIMPLE-char ") > -1) {
//         myContent.innerHTML = "<p>In a world where apparently everything under the sun needs to be implemented... it is very easy for people to get confused with what a product or technology can do. Where this can be categorised as being convenient having everything in one place, it can present a strain on resources, either on the technology itself or the individual's time, becoming inconvenient.</p><p>My projects are built with <strong>simplicity</strong> at the core, both aesthetically and functionally, resulting in clean and intuitive code and designs that do exactly what they are intended to do, nothing more and nothing less, improving user experience.</p>";
//         document.getElementsByClassName('SIMPLE')[0].classList.add('active');
//       }
//       else if((" " + e.target.className + " ").indexOf(" PORTFOLIO-char ") > -1) {
//         myContent.innerHTML = "<p>The purpose of my website is to serve as a central gateway to various <strong>portfolio</strong> projects I have worked on or am currently working on, as I dive deeper into different forms of software development. As someone who is passionate about programming, I aim to be as skilled as possible in a number of technologies. On the web side of things, I am working on improving my knowledge of ReactJS, whereas on the games side I am most comfortable in Unity3D using C# as a programming language.</p><p>Many of my projects (past and current) can be found on my <a href='http://github.com/JulianGrey' target='_blank'>GitHub</a>.<h3>Planned and Ongoing Projects</h3><ul><li>ReactJS</li><li>NodeJS</li><li>Unity3D</li></ul></p>";
//         document.getElementsByClassName('PORTFOLIO')[0].classList.add('active');
//       }
//       else if((" " + e.target.className + " ").indexOf(" RESPONSIVE-char ") > -1) {
//         myContent.innerHTML = "<p>With the internet becoming available on an increasing number of different devices, new and different methods are required to get the most out of a website on screens of varying shapes, sizes and orientations.</p><p><strong>Responsiveness</strong> is a big focus in my projects, and you can expect cross-browser and cross-platform compatibility.</p>";
//         document.getElementsByClassName('RESPONSIVE')[0].classList.add('active');
//       }
//       else if((" " + e.target.className + " ").indexOf(" CREATIVE-char ") > -1) {
//         myContent.innerHTML = "<p>Although convenience is key to a successful website, I enjoy pushing the boundaries allowing my <strong>creativity</strong> to play and add some personality to my projects.</p><p>My intention will always be to improve user experience, however making a mark with something new, fresh and interesting is a big drive for me.</p>";
//         document.getElementsByClassName('CREATIVE')[0].classList.add('active');
//       }
//       else if((" " + e.target.className + " ").indexOf(" ABOUT-char ") > -1) {
//         myContent.innerHTML = "<p><strong>Hello</strong>, I am Julian Grey, a Tokyo-based software developer.</p><p>A perfectionist and a constant thinker, I strive to better myself by learning new technologies as well as building on existing skills and knowledge, keeping up to speed with the ever-evolving market. I have a keen eye for detail and I am never happy with a project or product unless it has reached its highest possible standard and quality.</p><p>I graduated from the University of Greenwich in the field of Computing with Games Development in 2012, and have since continued to develop myself in numerous technologies. Having studied a technology with interactivity at its core, I gained skills that transfer very kindly to web design and development, including user interaction and UI design, gaining three years of working experience.</p><p>During my downtime I enjoy learning new skills and technologies, listening to music, playing and developing video games. Away from the computer, I enjoy socialising with friends and new people, and studying Japanese.</p>";
//         document.getElementsByClassName('ABOUT')[0].classList.add('active');
//       }
//       else if((" " + e.target.className + " ").indexOf(" INTERACTIVE-char ") > -1) {
//         myContent.innerHTML = "<p>As technology evolves, the world wide web evolves with it. Nowadays if something has a screen, chances are it can connect to the internet in some shape or form. This presents new and interesting ways to access and display information to different people in many different ways.</p><p>I look at all aspects of a project with <strong>interactivity</strong> in mind to make it feel modern with subtle and intuitive interfaces and presentation.</p>";
//         document.getElementsByClassName('INTERACTIVE')[0].classList.add('active');
//       }
//       else if((" " + e.target.className + " ").indexOf(" CONTACT-char ") > -1) {
//         myContent.innerHTML = "<p>I am currently available for freelance work and job opportunities. Feel free to contact me with projects or roles, talk about my website and future goals, or simply have a chit chat.</p><p>Alternatively, you can <a href='https://www.linkedin.com/in/julianrgrey' target='_blank'>connect with me on LinkedIn</a> or <a href='https://www.twitter.com/GreyJ_Dev' target='_blank'>follow me on Twitter</a>.</p>";
//         document.getElementsByClassName('CONTACT')[0].classList.add('active');
//       }
//     }
//   };

//   componentDidMount() {
//     window.addEventListener('click', this.elementClicked, false);
//   }
// }
