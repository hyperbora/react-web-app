import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
`

function ToolsUtf8() {
    const [utf8EncSrc, setUtf8EncSrc] = useState('')
    const [utf8EncRst, setUtf8EncRst] = useState('')
    function utf8encode(e) {
        setUtf8EncSrc(e.target.value);
        setUtf8EncRst(encodeURIComponent(e.target.value));
    }
    const style = {
        paddingLeft: "10px",
        paddingRight: "10px"
    }

    return <div style={style}>
        <h2>UTF-8 ENCODE</h2>
        <StyledTextarea placeholder="input here" value={utf8EncSrc} onChange={utf8encode}></StyledTextarea>
        <h2>OUTPUT</h2>
        <StyledTextarea placeholder="output here" value={utf8EncRst} readOnly></StyledTextarea>
        <div>
            <button>Clear!</button>
        </div>
    </div>;
}
export default ToolsUtf8;