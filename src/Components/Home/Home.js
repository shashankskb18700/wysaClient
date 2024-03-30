import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../Action";
import { fetch_user } from "../Action/index";
import io from "socket.io-client";

import Logo from "../Logo/Logo";
import Header from "../Header/Header";

import "./Home.css";

const socket = io.connect("https://wysaserver.onrender.com");

const Home = (props) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const handleMessageSend = () => {
    socket.emit("message", inputMessage);
    setInputMessage("");
  };
  return (
    <div className="home">
      <Header></Header>

      <div className="home-chat">
        <div id="message-container">
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>

        <div className="home-chat-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleMessageSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(Home);
