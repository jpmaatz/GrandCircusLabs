import { useState } from 'react'
import './AdDesigner.css'

const flavors = ['Vanilla', 'Chocolate', 'Strawberry']

const AdDesigner = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(flavors[0])
  const [isNightTheme, setIsNightTheme] = useState(false)
  const [fontSize, setFontSize] = useState(16)

  return (
    <div className={`ad-designer ${isNightTheme ? 'night-theme' : 'light-theme'}`}>
      <div className="ad">
        <h2 style={{ fontSize: `${fontSize}px` }}>{selectedFlavor} Ice Cream</h2>
      </div>
      <div className="controls">
        <div className="flavor-buttons">
          {flavors.map(flavor => (
            <button
              key={flavor}
              disabled={flavor === selectedFlavor}
              onClick={() => setSelectedFlavor(flavor)}
              style={{ backgroundColor: flavor === selectedFlavor ? '#1e60a9' : '#0e3c7e' }}
            >
              {flavor}
            </button>
          ))}
        </div>
        <div className="theme-buttons">
          <button
            onClick={() => setIsNightTheme(false)}
            disabled={!isNightTheme}
          >
            Light Theme
          </button>
          <button
            onClick={() => setIsNightTheme(true)}
            disabled={isNightTheme}
          >
            Night Theme
          </button>
        </div>
        <div className="font-size-buttons">
          <button onClick={() => setFontSize(fontSize - 2)}>-</button>
          <button onClick={() => setFontSize(fontSize + 2)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default AdDesigner