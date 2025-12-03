import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.15)",
        padding: "30px",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        width: "350px",
        textAlign: "center",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)"
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>QR Code Generator</h1>

      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "12px",
          width: "90%",
          borderRadius: "10px",
          fontSize: "16px",
          marginBottom: "20px"
        }}
      />

      <div style={{ marginTop: "20px" }}>
        {text ? (
          <QRCode value={text} size={200} />
        ) : (
          <p>Type something to generate QR code</p>
        )}
      </div>
    </div>
  );
}

export default App;
