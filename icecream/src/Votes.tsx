import { useState } from 'react';
import './Votes.css';



const flavors = ['Vanilla', 'Chocolate', 'Strawberry'];
const flavorColors = {
  Vanilla: '#4f2c2c',
  Chocolate: '#cbc0ac',
  Strawberry: '#de8c91'
};

const Votes = ({ count, setCount}) => {
    return (
        <div>
            <div className="votesChoc">
            <button onClick={() => setCount(c => c + 1)}>
                Chocolate
            </button>
            <div>{count}</div>
            </div>
            <div className="votesVani">
            <button onClick={() => setCount(c => c + 1)}>
                Vanilla
            </button>
            <div>{count}</div>
            </div>
            <div className="votesStraw">
            <button onClick={() => setCount(c => c + 1)}>
                Strawberry
            </button>
            <div>{count}</div>
            </div>
        </div>
    )
}
  
export default Votes;