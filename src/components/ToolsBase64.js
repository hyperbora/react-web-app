import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
`;

function ToolsBase64() {
  const [base64EncSrc, setBase64EncSrc] = useState('');
  const [base64EncRst, setBase64EncRst] = useState('');
  const [base64DecSrc, setBase64DecSrc] = useState('');
  const [base64DecRst, setBase64DecRst] = useState('');
  function base64Encode(e) {
    setBase64EncSrc(e.target.value);
    const str = e.target.value;
    const result = btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(
        match,
        p1
      ) {
        return String.fromCharCode('0x' + p1);
      })
    );
    setBase64EncRst(result);
  }
  function base64Decode(e) {
    setBase64DecSrc(e.target.value);
    const str = e.target.value;
    const result = decodeURIComponent(
      atob(str)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    setBase64DecRst(result);
  }
  function clear() {
    setBase64EncSrc('');
    setBase64EncRst('');
    setBase64DecSrc('');
    setBase64DecRst('');
  }
  const style = {
    paddingLeft: '10px',
    paddingRight: '10px',
  };

  return (
    <div style={style}>
      <h2>base64 ENCODE</h2>
      <StyledTextarea
        placeholder="input here"
        value={base64EncSrc}
        onChange={base64Encode}
      ></StyledTextarea>
      <h2>base64 ENCODE OUTPUT</h2>
      <StyledTextarea
        placeholder="output here"
        value={base64EncRst}
        readOnly
      ></StyledTextarea>
      <h2>base64 DECODE</h2>
      <StyledTextarea
        placeholder="input here"
        value={base64DecSrc}
        onChange={base64Decode}
      ></StyledTextarea>
      <h2>base64 DECODE OUTOUT</h2>
      <StyledTextarea
        placeholder="output here"
        value={base64DecRst}
        readOnly
      ></StyledTextarea>
      <div>
        <button onClick={clear}>Clear!</button>
      </div>
    </div>
  );
}
export default ToolsBase64;
