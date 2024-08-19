import React, { useState } from 'react';
import './AdDesigner.css';

const flavors = ['Vanilla', 'Chocolate', 'Strawberry'];

const AdDesigner = () => {
  const [selectedFlavor, setSelectedFlavor] = useState('Vanilla')
  

  const handleFlavorChange = (flavor) => {
    setSelectedFlavor(flavor)
  }

  const handleThemeChange = () => {
    setIsLightTheme(!isLightTheme)
  }

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2)
  }

  const adStyle = {
    backgroundColor: isLightTheme ? '#fff' : '#222',
    color: isLightTheme ? '#000' : '#fff',
    borderColor: isLightTheme ? '#222' : '#444',
    fontSize: `${fontSize}px`,
  }

  return (
    <div className="ad-designer">
      <div className="ad" style={adStyle}>
        <p>Try our {selectedFlavor} ice cream!</p>
      </div>
      <div className="controls">
       
        </div>
    </div>
  )
}

export default AdDesigner;