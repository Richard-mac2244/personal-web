import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../Style/ProjectStyle.css'

let loaded = null;

function ProjectFade(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  if(isVisible === true) {
    loaded = true;
  }

  return (
    <div
      className={`fade-in-section ${isVisible  || loaded? 'is-visible' : ''}`}
      ref={domRef}

    >
      {props.children}
    </div>
  );
}

export default ProjectFade;
