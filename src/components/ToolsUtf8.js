import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
`;

function ToolsUtf8() {
  const [utf8EncSrc, setUtf8EncSrc] = useState('');
  const [utf8EncRst, setUtf8EncRst] = useState('');
  const [utf8DecSrc, setUtf8DecSrc] = useState('');
  const [utf8DecRst, setUtf8DecRst] = useState('');

  function utf8encode(e) {
    setUtf8EncSrc(e.target.value);
    setUtf8EncRst(encodeURIComponent(e.target.value));
  }

  function utf8decode(e) {
    setUtf8DecSrc(e.target.value);
    try {
      setUtf8DecRst(decodeURIComponent(e.target.value));
    } catch (error) {
      setUtf8DecRst('');
    }
  }

  function clear() {
    setUtf8EncSrc('');
    setUtf8EncRst('');
    setUtf8DecSrc('');
    setUtf8DecRst('');
  }
  const style = {
    paddingLeft: '10px',
    paddingRight: '10px',
  };

  return (
    <div style={style}>
      <h2> UTF - 8 ENCODE </h2>{' '}
      <StyledTextarea
        placeholder="input here"
        value={utf8EncSrc}
        onChange={utf8encode}
      ></StyledTextarea>{' '}
      <h2> UTF - 8 ENCODE OUTPUT </h2>{' '}
      <StyledTextarea
        placeholder="output here"
        value={utf8EncRst}
        readOnly
      ></StyledTextarea>{' '}
      <h2> UTF - 8 DECODE </h2>{' '}
      <StyledTextarea
        placeholder="input here"
        value={utf8DecSrc}
        onChange={utf8decode}
      ></StyledTextarea>{' '}
      <h2> UTF - 8 DECODE OUTOUT </h2>{' '}
      <StyledTextarea
        placeholder="output here"
        value={utf8DecRst}
        readOnly
      ></StyledTextarea>{' '}
      <div>
        <button onClick={clear}> Clear! </button>{' '}
      </div>{' '}
    </div>
  );
}
export default ToolsUtf8;
