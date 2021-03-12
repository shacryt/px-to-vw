import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [matches, setMatches] = useState([]);
  const [resolution, setResolution] = useState(1);
  const [replacemenets, setReplacements] = useState([]);

  const proc = (x) => {
    console.log(x);
    return (parseFloat(x) / resolution) * 100;
  };

  useEffect(() => {
    let x = result;
    for (var i = 0; i < matches.length; i++) {
      x = x.replace(matches[i], replacemenets[i]);
    }

    setResult(x);
  }, [matches, replacemenets, result]);

  return (
    <div className='fl-row fl-full-center' style={{height: '100%', width: '100%'}}>
    <div style={{height: '80%', width: '80%', textAlign: 'center'}}>
      <span style={{fontSize: '3vw'}}>PX to VW</span>
      <br/>
      <Link to='/vw-to-px' style={{marginTop: '0.5vw'}}><span style={{fontSize: '2vw'}}>VW to PX</span></Link>
      <div style={{padding: '2vw', paddingBottom: '0'}}><input
        className='fl-row fl-full-width'
        style={{padding: '1vw'}}
        value={resolution}
        onChange={(e) => {
          setResolution(e.target.value);
        }}
      /></div>
      <div className='fl-row fl-full-width' style={{height: '80%'}}>
        <div style={{padding: '2vw', height:'100%', flex: '1'}} className='fl-column'>
          <textarea
            type='text'
            style={{ flex: 1, width: '100%', padding: '1vw' }}
            onChange={(e) => {

                let re = /\b(\w+\.\w+px)|(\w*px*\w)\b/g;
                let s = e.target.value;

                let x = [];
                let z = [];

                var r;
                while ((r = re.exec(s)) !== null) {
                  x.push(r[0]);
                  z.push(
                    Math.round(
                      proc(r.toString().substring(0, r.toString().length - 2)) * 1000
                    )/1000 + 'vw'
                  );
                }

                setResult(e.target.value);
                setMatches(x);
                setReplacements(z);
              }}
          /></div>
          <div style={{padding: '2vw', height: '100%', flex: '1'}} className='fl-column'>
            <textarea
            value={result}
            style={{ flex: 1, width: '100%', padding: '1vw' }}
          /></div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
