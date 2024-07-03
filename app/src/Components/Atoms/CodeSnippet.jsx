import React, { useState } from 'react';

const CodeSnippet = ({ code }) => {
  const [copied, setCopied] = useState(false); // State to track copy status

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => setCopied(true))
      .catch(() => setCopied(false)); // Handle errors (optional)
  };

  return (
    <div className="code-snippet">
      <pre>{code}</pre>
      <button onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
    </div>
  );
};

export default CodeSnippet;