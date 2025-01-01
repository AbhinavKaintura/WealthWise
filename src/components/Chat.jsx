import React, { useState } from "react";
import axios from "axios";
import './Chat.css';
import { Link } from 'react-router-dom';


function Chat() {
    const [input, setInput] = useState("");
    const [file, setFile] = useState(null);
    const [isDocumentMode, setIsDocumentMode] = useState(false);
    const [response, updateResponse] = useState([{
        text: "Welcome to WealthWise! I'm your personal financial advisor. How can I help you with your financial goals today?",
        isBot: true
    }]);

    const handleFileUpload = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                await axios.post('http://localhost:5000/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setIsDocumentMode(true);
                updateResponse([
                    ...response,
                    {
                        text: "Financial document uploaded successfully! Ask me anything about your financial records.",
                        isBot: true
                    }
                ]);
            } catch (error) {
                console.error("Error uploading file:", error);
                updateResponse([
                    ...response,
                    {
                        text: "Error uploading document. Please try again.",
                        isBot: true
                    }
                ]);
            }
        }
    };

    const handleSendMessage = async () => {
        if (!input.trim()) return;
        
        const userMessage = input;
        setInput("");
        
        updateResponse([
            ...response,
            { text: userMessage, isBot: false }
        ]);

        try {
            let apiResponse;
            if (isDocumentMode) {
                apiResponse = await axios.post('http://localhost:5000/api/query', {
                    query: userMessage
                });
                updateResponse(prev => [...prev, {
                    text: apiResponse.data.answer,
                    isBot: true
                }]);
            } else {
                apiResponse = await axios.post('http://localhost:5000/api/chat', {
                    message: userMessage
                });
                updateResponse(prev => [...prev, {
                    text: apiResponse.data.response,
                    isBot: true
                }]);
            }
        } catch (error) {
            console.error("Error sending message:", error);
            updateResponse(prev => [...prev, {
                text: "Sorry, I encountered an error. Please try again.",
                isBot: true
            }]);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div>
            <div className="container">
                <div className="chat-section">
                    <div className="header">
                        WealthWise: Your Personal Financial Advisor
                    </div>
                    <div className="chat-container">
                        {response.map((message, index) => (
                            <div key={index} className={message.isBot ? "message bot-message" : "message user-message"}>
                                <p>{message.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="input-container">
                        <input 
                            type="file" 
                            accept=".pdf"
                            onChange={handleFileUpload}
                            style={{ display: 'none' }}
                            id="file-upload"
                        />
                        <label htmlFor="file-upload" className="file-upload-label">
                            {file ? '📄 Statement Uploaded' : '📎 Upload Statement'}
                        </label>
                        <input 
                            type="text" 
                            placeholder={isDocumentMode ? "Ask about your financial document..." : "Ask your financial questions..."}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button className="greenbtn" onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
                <div className="resources-section">
                    <div className="resource-card">
                        <h2>Financial Resources</h2>
                        <div className="resource-links">
                            <Link to="/investBasics" className='resource-link'>Investment Basics</Link>
                            {/* <a href="#" className="resource-link">Investment Basics</a> */}
                            <a href="https://www.moneyhelper.org.uk/en/everyday-money/budgeting/budget-planner" className="resource-link">Budgeting Tools</a>
                            <a href="/tax" className="resource-link">Tax Planning Guide</a>
                            <a href="#" className="resource-link">Retirement Calculator</a>
                            <a href="#" className="resource-link">Market Analysis</a>
                        </div>
                    </div>
                    <div className="resource-card">
                        <div className="disclaimer">
                            "Financial freedom is a journey of knowledge, discipline, and strategic planning. Let's build your wealth, one smart decision at a time."
                            <br />
                            – WealthWise Team
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                WealthWise © 2025 - Your Journey to Financial Freedom
            </div>
        </div>
    );
}

export default Chat;