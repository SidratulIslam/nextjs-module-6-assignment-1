import React, { useState } from 'react';
import './App.css';

function Header(props) {
    return <div className="header">{props.title}</div>;
}

function Content() {
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleButtonClick = () => {
        setDisplayText(text);
    };

    return (
        <div className="content">
            <textarea onChange={e => setText(e.target.value)} />
            <br />
            <button onClick={handleButtonClick}>Display Text</button>
            <p>{displayText}</p>
        </div>
    );
}

function Footer(props) {
    return <div className="footer">{props.text}</div>;
}

function App() {
    return (
        <div>
            <Header title="My React App" />
            <Content />
            <Footer text="Made by Sidratul Islam" />
        </div>
    );
}

export default App;
