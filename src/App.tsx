import { useState } from "react";
import { FaWhatsapp, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import quotesData from "../src/componets/quotes.json";
import "../src/styles.css";

interface Quote {
  quote: string;
  author: string;
};

const getRandomQuote = (): Quote => {
  return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
}

const Citacoes = () => {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());
  const [fade, setFade] = useState<boolean>(true);

  const handleNewQuote = () => {
    setFade(false);

    setTimeout(() => {
      setQuote(getRandomQuote()); 
      setRandomColor(getRandomColor()); 
      setFade(true);
    }, 500);
  };

  const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(`"${quote.quote}" - ${quote.author}`)}`;

  return (
    <div className="background" style={{ backgroundColor: randomColor }}>
      <div id="quote-box" style={{ backgroundColor: "white", color: randomColor, fontFamily: "Trebuchet MS, sans-serif" }}>
        <div style={{ position: "relative", display: "inline-block", marginBottom: "15px" }}>
          <FaQuoteLeft size="20" style={{ position: "absolute", left: "-15px" }} />
            <h2 id="text" className={fade ? "fade-in" : ""} style={{ margin: 0, padding: "0 20px" }}>{quote.quote}</h2>
          <FaQuoteRight size="20" style={{ position: "absolute", right: "-15px" }} />
        </div>
          <h4 id="author" className={fade ? "fade-in" : ""}>- {quote.author}</h4>
        <div className="button-container">
          <a href={whatsappLink} target="_blank" id="tweet-quote" style={{ marginRight: "10px", backgroundColor: randomColor }}>
            <FaWhatsapp color="white" size={20} />
          </a>
          <button onClick={handleNewQuote} id="new-quote" style={{ backgroundColor: randomColor, color: 'white', fontSize: "1rem", fontFamily: "Trebuchet MS, sans-serif" }}>
            Nova Citação
          </button>
        </div>
      </div>
      <footer style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
        <p style={{ fontSize: "0.9rem", fontFamily: "Trebuchet MS, sans-serif" }}>By Tony Souza</p>
      </footer>
    </div>
  );  
};

export default Citacoes;