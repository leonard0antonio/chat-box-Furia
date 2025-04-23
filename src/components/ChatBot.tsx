import React, { useState } from "react";
import news from "../assets/data/news.json";
import match from "../assets/data/match.json";
import players from "../assets/data/players.json";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Fala, FURIOSO(A)! Em que posso te ajudar hoje? 🔥" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    setIsLoading(true); // Começa o carregamento

    setTimeout(() => {
      const botResponse = getBotResponse(input.toLowerCase());
      setMessages([...newMessages, { sender: "bot", text: botResponse }]);
      setIsLoading(false); // Finaliza o carregamento
    }, 500);

    setInput("");
  };

  const getBotResponse = (msg: string): string => {
    if (msg.includes("novidade") || msg.includes("notícia")) {
      return news.map((n) => `📰 ${n.title}`).join("\n");
    }

    if (msg.includes("jogo") || msg.includes("partida")) {
      return `🎮 A próxima partida da FURIA é dia ${match.date} às ${match.time} contra a ${match.opponent}!\n📺 ${match.link}`;
    }

    const player = players.find(p => msg.includes(p.name.toLowerCase()));
    if (player) {
      return `🧑‍💻 ${player.name} é ${player.role} da FURIA desde ${player.since}. ${player.bio}\n🏆 ${player.trophies.join(", ")}\n🎮 Sens: ${player.gear.sens} | DPI: ${player.gear.dpi}\n🔗 ${player.hltv}`;
    }

    if (msg.includes("loja") || msg.includes("camisa") || msg.includes("merch")) {
      return `🛍️ Nova Jersey FURIA 2025 já disponível!\n👉 https://furia.gg/loja`;
    }

    return "😅 Ainda não entendi essa... Tenta perguntar sobre notícias, jogadores, loja ou próximo jogo.";
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-zinc-900 text-white rounded-2xl shadow-lg h-[600px] flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4 px-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-xl max-w-[80%] transition-opacity duration-500 ${
              msg.sender === "user" ? "bg-blue-600 self-end" : "bg-gray-700 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && <div className="p-2 text-center text-gray-400">🤖 Pensando...</div>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Digite sua pergunta..."
        />
        <button
          className="px-4 py-2 bg-fuchsia-600 rounded-xl hover:bg-fuchsia-700 transition"
          onClick={handleSend}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
