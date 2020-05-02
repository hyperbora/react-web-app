import React, { useState } from 'react';

function ToolsUtf8() {
    const [ utf8EncSrc, setUtf8EncSrc ] = useState('init')
    const [ utf8EncRst, setUtf8EncRst ] = useState('')
    function utf8encode(e) {
        setUtf8EncSrc(e.target.value);
    }

    return <>
        <h2>UTF-8 ENCODE</h2>
        <textarea placeholder="input here" value={utf8EncSrc} onChange={utf8encode}></textarea>
        <h2>OUTPUT</h2>
        <textarea value={utf8EncRst}></textarea>
    </>;
}
export default ToolsUtf8;