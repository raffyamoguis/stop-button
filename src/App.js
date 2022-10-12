import { useState } from 'react'
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(50);
  const [fontsize, setFontSize] = useState(16);

  const growButton = () => {
    setColor(Math.floor(Math.random() * 16777215).toString(16));//Set randomized color
    setWidth(width + 100);
    setHeight(height + 50);
    setFontSize(fontsize + 20);
  }

  return (
    <div className="wrapper">
      <div className='content'>
        <button
          className='button'
          onClick={growButton}
          style={{ backgroundColor: `#${color}`, width: `${width}px`, height: `${height}px`, fontSize: `${fontsize}px` }}
        >
          STOP
        </button>
      </div>
    </div>
  );
}

export default App;
