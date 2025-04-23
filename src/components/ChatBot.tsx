import React, { useState } from "react";
import news from "../assets/data/news.json";
import match from "../assets/data/match.json";
import players from "../assets/data/players.json";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatBot: React.FC = () => {
  const initialMessage: Message = {
    sender: "bot",
    text:
      "🔥 Fala, FURIOSO(A)! Bem-vindo ao canal direto com a FURIA!\n\n" +
      "Aqui vai o que você pode perguntar:\n\n" +
      "1️⃣ Últimas notícias da equipe\n" +
      "2️⃣ Próximo jogo da FURIA\n" +
      "3️⃣ Informações sobre jogadores (ex: *arT*, *KSCERATO*)\n" +
      "4️⃣ Loja oficial da FURIA\n\n",
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    setIsLoading(true);

    setTimeout(() => {
      const botResponse = getBotResponse(input.toLowerCase());
      setMessages([...newMessages, { sender: "bot", text: botResponse }]);
      setIsLoading(false);
    }, 500);

    setInput("");
  };

  const handleClear = () => {
    setMessages([initialMessage]);
    setInput("");
  };

  const getBotResponse = (msg: string): string => {
    const lowerMsg = msg.toLowerCase();

    // Resposta para notícias
    if (
      lowerMsg.includes("novidade") ||
      lowerMsg.includes("notícia") ||
      lowerMsg.includes("noticias") ||
      lowerMsg.includes("novidades") ||
      lowerMsg.includes("news") ||
      lowerMsg.includes("atualização") ||
      lowerMsg.includes("atualizações") ||
      lowerMsg.includes("últimas") ||
      lowerMsg.includes("ultimas") ||
      lowerMsg.includes("fatos") ||
      lowerMsg.includes("aconteceu") ||
      lowerMsg.includes("rola") ||
      lowerMsg.includes("tá rolando") ||
      lowerMsg.includes("ta rolando") ||
      lowerMsg.includes("denovida") || // erro de digitação incluído
      lowerMsg.includes("de novidade")
    ) {
      return news.map((n) => `📰 ${n.title}`).join("\n");
    }

    // Resposta para partidas
    if (
      lowerMsg.includes("jogo") ||
      lowerMsg.includes("jogos") ||
      lowerMsg.includes("partida") ||
      lowerMsg.includes("partidas") ||
      lowerMsg.includes("match") ||
      lowerMsg.includes("próximo jogo") ||
      lowerMsg.includes("proximo jogo") ||
      lowerMsg.includes("quando joga") ||
      lowerMsg.includes("quando é o jogo") ||
      lowerMsg.includes("quando vai jogar") ||
      lowerMsg.includes("calendário") ||
      lowerMsg.includes("agenda") ||
      lowerMsg.includes("data do jogo") ||
      lowerMsg.includes("horário do jogo") ||
      lowerMsg.includes("jga") || // erro comum de digitação
      lowerMsg.includes("jg")    // abreviação
    ) {
      if (match.length === 0) return "🎮 Nenhuma partida agendada no momento.";

      return match
        .map(
          (m, i) =>
            `${i + 1}. ${m.opponent} - ${m.date} às ${m.time}\n🔗 Detalhes: ${m.link}`
        )
        .join("\n\n");
    }

    // Resposta para jogadores
    if (
      lowerMsg.includes("jogador") ||
      lowerMsg.includes("jogadores") ||
      lowerMsg.includes("player") ||
      lowerMsg.includes("players") ||
      lowerMsg.includes("quem é") ||
      lowerMsg.includes("quem são") ||
      lowerMsg.includes("quem é o jogador") ||
      lowerMsg.includes("quem são os jogadores") ||
      lowerMsg.includes("informações sobre jogador") ||
      lowerMsg.includes("informações sobre jogadores")
    ) {
      return "🤔 Você pode perguntar sobre jogadores específicos, como *arT*, *KSCERATO*, *yuurih* e outros.";
    }

    const player = players.find((p) => msg.includes(p.name.toLowerCase()));

    if (player) {
      const {
        name = "",
        role = "",
        since = "",
        bio = "",
        trophies = [],
        gear: { sens = "", dpi = "" } = {},
        hltv = "",
      } = player;

      return `🧑‍💻 ${name || "Jogador desconhecido"}${role ? ` é ${role}` : ""}${
        since ? ` da FURIA desde ${since}` : ""
      }.${bio ? ` ${bio}` : ""}\n` +
        `${trophies.length ? `🏆 ${trophies.join(", ")}` : ""}\n` +
        `${sens || dpi ? `🎮 Sens: ${sens} | DPI: ${dpi}` : ""}\n` +
        `${hltv ? `🔗 ${hltv}` : ""}`.trim();
    }

    // Resposta para conteúdo da FURIA (fotos, vídeos, etc)
    if (lowerMsg.includes("fotos") || lowerMsg.includes("imagens") || lowerMsg.includes("vídeos") || lowerMsg.includes("conteúdo")) {
      return "📸 Confira nosso conteúdo exclusivo no Instagram e Twitter!";
    }

    // Resposta para loja
    if (lowerMsg.includes("loja") || lowerMsg.includes("camisa") || lowerMsg.includes("merch")) {
      return `🛍️ Nova Jersey FURIA 2025 já disponível!\n👉 https://furia.gg/loja`;
    }

    return "😅 Ainda não entendi essa... Tenta perguntar sobre notícias, jogadores, loja ou próximo jogo.";
  };

  const isListMessage = (text: string): boolean => {
    const knownPrefixes = ["📰", "🎮", "🏆", "1️⃣", "2️⃣", "3️⃣", "4️⃣"];
    const lines = text.split("\n").filter(Boolean);
    return lines.length > 1 && lines.every((line) =>
      knownPrefixes.some((prefix) => line.trim().startsWith(prefix))
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-zinc-900 text-white rounded-2xl shadow-lg h-[600px] flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4 px-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-xl max-w-[80%] transition-opacity duration-500 whitespace-pre-wrap ${
              msg.sender === "user" ? "bg-blue-600 self-end" : "bg-gray-700 self-start"
            }`}
          >
            {msg.sender === "bot" && isListMessage(msg.text) ? (
              <ol className="list-decimal list-inside space-y-1">
                {msg.text.split("\n").map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ol>
            ) : (
              msg.text
            )}
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
        <button
          className="px-4 py-2 bg-zinc-700 rounded-xl hover:bg-zinc-600 transition"
          onClick={handleClear}
        >
          Limpar
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
