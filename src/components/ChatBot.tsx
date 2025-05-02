
import React, { useState } from "react";
import news from "../assets/data/news.json";
import matches from "../assets/data/matches.json";
import players from "../assets/data/players.json";                                        



interface Message {
  sender: "user" | "bot";
  text: string;
}

const initialBotMessage: Message = {
  sender: "bot",
  text: "🖤💛 E AÍ, FURIOSO(A)! Tamo junto! Pergunta o que quiser sobre a FURIA ou digita *menu* pra ver tudo que posso te contar! 🎯 Bora fazer história? #DIADEFURIA",
};


  // Componente principal do ChatBot
  const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  // Envia a mensagem do usuário e gera resposta do bot
  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage: Message = { sender: "user", text: input };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    setTimeout(() => {
      const botReply = generateBotResponse(input.toLowerCase());
      setMessages([...updatedMessages, { sender: "bot", text: botReply }]);
      setIsLoading(false);
    }, 500);

    setInput("");
  };

  // Reseta o chat
  const handleClear = () => {
    setMessages([initialBotMessage]);
    setInput("");
  };

// Gera a resposta baseada na entrada do usuário
const generateBotResponse = (msg: string): string => {
  const isMatch = (terms: string[]) => terms.some(term => msg.includes(term));

  // Perguntas sobre novidades e notícias
  if (isMatch([
    "novidade", "novidades", "notícia", "notícias", "news", "atualização", "atualizações",
    "últimas", "última", "rola", "aconteceu", "o que tem de novo", "tem novidade", "tem algo novo"
  ])) {
    return news.map(n => `📰 ${n.title}`).join("\n");
  }

// Ajuda / Menu de opções
if (isMatch(["ajuda", "menu", "opções", "help", "o que posso perguntar"])) {
  return (
    "🚀 O que você quer saber, FURIOSO(A)? Escolha uma das opções abaixo:\n" +
    "• 📰 Últimas notícias da FURIA\n" +
    "• 🕹️ Próximo jogo de *CS* e calendário completo\n" +
    "• 🏅 Jogadores do time principal de *CS: arT, KSCERATO, yuurih...*\n" +
    "• 📚 História da nossa tropa\n" +
    "• 🏆 Conquistas e títulos pesados\n" +
    "• 👕 Produtos oficiais\n" +
    "• 🎮 Onde assistir aos jogos AO VIVO\n" +
    "• 📸 Mídias: fotos, vídeos e wallpapers\n" +
    "• 🎖️ Quem é o capitão do time de CS?\n" +
    "• 🎂 Data de fundação da org\n\n" +
    "🔥 Pergunte sem medo, a FURIA é nossa!"
  );
}


  // Perguntas específicas sobre a história
if (isMatch(["história origem", "história Furia"])) {
  return "📖 *Como tudo começou*\n\nA FURIA foi fundada em 2017 por Jaime Pádua e André Akkari, com o intuito de levar a organização ao topo do cenário de esports.";
}
  // Origem do nome
if (isMatch(["história nome", "historia nome"])) {
  return "📖 *Origem do nome FURIA*\n\nO nome 'FURIA' remete à força e paixão, características fundamentais da organização e do time. Representa a garra com que os jogadores enfrentam desafios.";
}
  // Expansão internacional
if (isMatch(["expansção", "historia expansão"])) {
  return "📖 *Expansão internacional*\n\nA FURIA começou no Brasil, mas logo se expandiu para outros países. Sua presença no cenário internacional cresceu com vitórias em grandes torneios, incluindo o Major de CS:GO.";
}

  // Curiosidades gerais
if (isMatch(["curiosidade", "sabia que", "fato", "interessante"])) {
  return "🧠 Sabia que a FURIA foi a primeira organização brasileira a ter uma gaming house nos EUA?";
}

// Pergunta sobre posição no ranking
if (isMatch(["ranking", "posição", "hltv", "colocação", "ranking atual"])) {
  return "📊 A FURIA atualmente ocupa o TOP 20 no ranking da HLTV!\n🔗 https://www.hltv.org/ranking/teams";
}

// Pergunta sobre o treinador
if (isMatch(["coach", "treinador", "quem é o coach", "quem treina"])) {
  return "🎯 O treinador atual da FURIA é *guerri*.";
}

  // Estilo de jogo
if (isMatch(["estilo de jogo", "tática", "jogam como", "são agressivos", "rusham muito", "como a furia joga"])) {
  return (
    "🎯 A FURIA é conhecida por seu estilo *ultra agressivo*, liderado por *arT*. " +
    "Eles pressionam cedo, dominam espaços com granadas e jogam sempre no limite da estratégia. É pura adrenalina!"
  );
}

  // Jogo histórico
if (isMatch(["melhor jogo", "jogo histórico", "jogo inesquecível", "maior vitória", "partida mais marcante"])) {
  return (
    "🔥 Um dos jogos mais marcantes da FURIA foi contra a *Astralis* na *EPL Season 12*, " +
    "onde mostraram domínio tático e espírito de equipe. Reassistir esse jogo é obrigatório!"
  );
}

// Sobre jerseys antigas
if (isMatch(["camisa antiga", "uniforme antigo", "jersey antiga", "primeiro uniforme"])) {
  return (
    "👕 A primeira jersey da FURIA era preta com detalhes em azul, bem diferente do estilo atual. " +
    "Ela se tornou item de colecionador entre os fãs!"
  );
}

  // FURIA streamers
if (isMatch(["streamers", "criadores", "furia stream", "quem faz live", "conteúdo furia"])) {
  return (
    "📺 Além do time profissional, a FURIA tem criadores como *Gaules*, *Rato Borrachudo*, *Liminha* e outros apoiando o time. " +
    "Lives e conteúdos rolam o tempo todo!"
  );
}

  // Majors e grandes torneios
if (isMatch(["major", "participou de major", "eventos grandes", "internacional", "furia em major"])) {
  return (
    "🌍 A FURIA já participou de diversos Majors, com destaque para o TOP 3 no *IEM Rio Major 2022*, " +
    "com apoio insano da torcida brasileira!"
  );
}
 // Perguntas sobre ex-jogadores
if (isMatch(["ex jogadores", "quem já saiu", "quem passou pela furia", "ex integrentes", "antigos jogadores"])) {
  return (
    "📜 Ex-jogadores notáveis da FURIA incluem:\n" +
    "• *VINI* (2017–2021)\n" +
    "• *HEN1* (2020–2021)\n" +
    "• *drop* (2021–2023)\n" +
    "• *saffee* (2022–2023)\n\n" +
    "Esses caras marcaram história e ajudaram a FURIA a chegar no topo!"
  );
}

  // Perguntas sobre a FURIA no Brasil
if (isMatch(["melhor time do brasil", "ranking brasil", "melhor time brasileiro", "furia é top1", "melhor time nacional"])) {
  return (
    "🇧🇷 A FURIA é considerada por muitos como o time brasileiro mais sólido dos últimos anos no cenário internacional!\n" +
    "🟢 Constância, títulos e presença em majors colocam a tropa no topo do Brasil."
  );

}
  // Perguntas sobre a FURIA no cenário internacional
if (isMatch(["salário", "quanto ganham", "ganhos", "ganham bem", "estrutura furia", "investimento"])) {
  return (
    "💰 A FURIA oferece uma das melhores estruturas do Brasil, com centro de treinamento, coachs dedicados e suporte de alto nível. " +
    "Os salários não são divulgados, mas sabe-se que os jogadores são bem valorizados!"
  );
}

  // Perguntas sobre estatísticas e desempenho
if (isMatch(["estatísticas", "stats", "desempenho", "kd", "taxa de vitórias", "melhor jogador furia"])) {
  return (
    "📈 Os destaques estatísticos da FURIA normalmente são *KSCERATO* e *yuurih*, com K/D altíssimo e impacto constante nas partidas. " +
    "Acompanhe as estatísticas completas em: https://www.hltv.org/team/8297/furia"
  );
}

 // Perguntas sobre o time feminino
if (isMatch(["bootcamp", "viajaram", "onde estão", "treinamento fora", "viagem da furia"])) {
  return (
    "✈️ A FURIA frequentemente realiza bootcamps na Europa e nos EUA antes de torneios importantes, buscando adaptação e treinos contra os melhores do mundo."
  );
}

  // Perguntas sobre a torcida
if (isMatch(["torcida", "fãs", "fanbase", "apoiadores", "barulho da torcida", "como é a torcida da furia"])) {
  return (
    "📣 A torcida da FURIA é uma das mais apaixonadas do mundo!\n" +
    "No *IEM Rio Major*, o grito de guerra 'FURIA, FURIA!' ecoou no mundo todo. Quem viu, sabe!"
  );
}

  // Perguntas sobre a FURIA em outros jogos
if (isMatch(["colab", "parceria", "quem patrocina", "quem apoia", "marcas da furia", "colaborações"])) {
  return (
    "🤝 A FURIA já fez parcerias com marcas como *Nike*, *Red Bull*, *Fusion*, *HyperX* e outras grandes empresas que apoiam o cenário gamer!"
  );
}

  // Perguntas sobre a FURIA no cenário internacional
if (isMatch(["meme", "piada", "furia é meme", "rush", "art é maluco"])) {
  return (
    "😂 Memes clássicos da FURIA CS:\n" +
    "• 'RUSH B... não, espera, RUSH A!'\n" +
    "• 'arT é doente!'\n" +
    "• 'KSCERATO não erra'\n" +
    "• 'FURIA STYLE: ou ganha ou perde feio'\n" +
    "• 'A tropa do caos'\n\n" +
    "🎮 A FURIA criou uma identidade única no cenário!"
  );
}

 // Perguntas sobre a FURIA no Brasil
if (isMatch(["onde fica a gh", "onde é a sede", "onde mora a furia", "onde eles treinam", "local da furia"])) {
  return (
    "📍 A FURIA tem sede nos *Estados Unidos* e também estrutura de alto nível no *Brasil*, com centro de treinamento e áreas de performance!\n" +
    "A GH (gaming house) já passou por locais como *Miami* e *São Paulo*."
  );
}
  
  // Perguntas sobre a FURIA no Brasil
if (isMatch(["mudança no elenco", "saiu alguém", "entrou alguém", "última mudança", "nova lineup", "atualização do time"])) {
  return (
    "🔄 A FURIA está sempre em evolução!\n" +
    "Você pode conferir a lineup atualizada e alterações recentes em: https://www.hltv.org/team/8297/furia"
  );
}

  // Perguntas sobre o nome FURIA
if (isMatch(["por que furia", "significado do nome", "de onde vem o nome furia", "nome da furia", "furia significa"])) {
  return (
    "🧬 O nome *FURIA* representa intensidade, garra e paixão.\n" +
    "Foi escolhido para refletir o espírito combativo da equipe dentro e fora dos servidores!"
  );
}

  // Perguntas sobre a FURIA e a comunidade
if (isMatch(["projetos sociais", "apoio a educação", "a furia ajuda jovens", "iniciativas sociais", "furia e educação"])) {
  return (
    "🎓 A FURIA apoia o desenvolvimento social por meio de projetos educacionais, culturais e de inclusão, especialmente no Brasil.\n" +
    "Eles acreditam no poder do esporte eletrônico para transformar vidas!"
  );
}

  // Perguntas sobre a mascote
if (isMatch(["mascote", "símbolo", "logo da furia", "pantera", "animal da furia", "o que é o símbolo"])) {
  return (
    "🐾 A pantera é o símbolo da FURIA — representando agilidade, força e astúcia.\n" +
    "A logo imponente virou ícone no cenário global do CS:GO!"
  );
}

  // Perguntas sobre o conteúdo exclusivo
if (isMatch(["documentário", "documentarios", "conteúdo exclusivo", "história da furia em vídeo", "vídeos especiais"])) {
  return (
    "🎥 A FURIA tem conteúdos incríveis como documentários e bastidores no YouTube!\n" +
    "Dá uma olhada: https://www.youtube.com/@FURIA"
  );
}

  // Perguntas sobre o evento presencial
if (isMatch(["conhecer jogadores", "evento furia", "meet and greet", "encontro com fãs", "evento presencial"])) {
  return (
    "🤝 A FURIA costuma organizar eventos presenciais e participações em campeonatos no Brasil e no exterior!\n" +
    "Fica de olho nas redes sociais oficiais pra não perder a chance de conhecer os brabos!"
  );
}


  // Perguntas sobre jogos
  if (isMatch([
    "jogo", "jogos", "partida", "partidas", "match", "matches",
    "calendário", "agenda", "quando joga", "próximo jogo", "proximo jogo", "tem jogo hoje",
    "data do jogo", "quando é o jogo", "horário do jogo", "próximos jogos"
  ])) {
    if (matches.length === 0) return "🎮 Nenhuma partida de CS da FURIA está agendada no momento.";
    return matches.map(
      (m, i) => `${i + 1}. ${m.opponent} - ${m.date} às ${m.time}\n🔗 ${m.link}`
    ).join("\n\n");
  }
  
  
  // Perguntas sobre jogadores
  if (isMatch([
    "jogador", "jogadores", "player", "players", "atletas", "integrantes", 
    "quem joga", "quem são os jogadores", "quem é"
  ])) {
    return "🤔 Pergunte sobre jogadores específicos, como *KSCERATO*, *yuurih* e outros.";
  }
  
  // Verifica se há menção a algum jogador específico
  const foundPlayer = players.find(p =>
    msg.toLowerCase().includes(p.name.toLowerCase())
  );
  
  if (foundPlayer) {
    const {
      name,
      role,
      since,
      bio,
      trophies = [],
      gear = {} as { sens?: number; dpi?: number },
      hltv,
    } = foundPlayer;
  
    const details = [
      `🧑‍💻 ${name}${role ? ` - ${role}` : ""}${since ? ` | Na FURIA desde ${since}` : ""}`,
      bio ? `📜 ${bio}` : "",
      trophies.length ? `🏆 Conquistas: ${trophies.join(", ")}` : "",
      gear.sens !== undefined && gear.dpi !== undefined
        ? `🎮 Sens: ${gear.sens} | DPI: ${gear.dpi}`
        : "",
      hltv ? `🔗 Perfil: ${hltv}` : ""
    ];
  
    return details.filter(Boolean).join("\n");
  }
  

  // Loja
  if (isMatch([
    "loja", "camisa", "camisas", "merch", "comprar", "uniforme", "roupa", "produtos"
  ])) {
    return "🛍️ Nova Jersey FURIA 2025 já disponível!\n👉 https://furia.gg/loja";
  }

  // Conteúdo de fotos, vídeos e mídias
  if (isMatch([
    "fotos", "imagens", "vídeos", "conteúdo", "mídia", "galeria", "foto", "vídeo",
    "wallpaper", "papel de parede", "wallpapers"
  ])) {
    return "📸 Veja fotos, vídeos e wallpapers oficiais no Instagram e Twitter!\n👉 https://instagram.com/furiagg";
  }

  // Assistir jogos ao vivo
  if (isMatch([
    "assistir", "ao vivo", "live", "transmissão", "ver jogo", "onde assistir", "link do jogo"
  ])) {
    return "📺 Assista aos jogos da FURIA ao vivo em: https://twitch.tv/furiagg ou https://youtube.com/furiagg";
  }

  // Capitão da equipe
  if (isMatch([
    "capitão", "quem é o capitão", "líder", "quem lidera", "quem comanda"
  ])) {
    return "🎖️ O capitão da equipe principal de CS:GO da FURIA é o *arT*!";
  }

  // Títulos da FURIA
  if (isMatch([
    "títulos", "conquistas", "quantos títulos", "quantas conquistas","A FURIA já ganhou algum título importante?", "melhor conquista", "títulos importantes"
  ])) {
    return "🏆 A FURIA já conquistou diversos títulos importantes como a *DreamHack Open*, *ESL Pro League Americas* e outros! Você pode conferir detalhes no site oficial.";
  }

  // Data de fundação
  if (isMatch([
    "data de fundação", "fundação", "quando foi fundada", "que ano começou"
  ])) {
    return "🎂 A FURIA foi fundada em *2017* por *Jaime Pádua* e *André Akkari*.";
  }

  // Saudações
  if (isMatch(["oi", "olá", "ola", "e aí", "fala", "opa", "salve", "bom dia", "boa tarde", "boa noite"])) {
    return "👊 Fala, FURIOSO(A)! Pronto(a) pra saber tudo sobre a tropa? Manda tua pergunta aí! 🔥";
  }

  // Despedidas
  if (isMatch([
    "tchau", "até logo", "adeus", "valeu", "flw", "até mais", "até breve"
  ])) {
    return "👋 Até mais! Volte sempre!";
  }

  // Agradecimentos
  if (isMatch([
    "obrigado", "valeu", "agradeço", "grato", "obrigadão", "thanks", "vlw"
  ])) {
    return "🙏 De nada! Qualquer coisa, estou por aqui.";
  }

  // Se não entender
  return "😅 Não consegui entender sua pergunta... Mas não se preocupe! Tente perguntar sobre as últimas notícias, os jogadores, a loja ou os próximos jogos. Se precisar de ajuda, é só falar 'ajuda' para ver as opções do menu!";

};

  // Verifica se a mensagem deve ser renderizada como lista
  const isListMessage = (text: string): boolean => {
    const knownPrefixes = ["📰", "🎮", "🏆", "1️⃣", "2️⃣", "3️⃣", "4️⃣"];
    const lines = text.split("\n").filter(Boolean);
    return lines.length > 1 && lines.every(line =>
      knownPrefixes.some(prefix => line.trim().startsWith(prefix))
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
        {isLoading && (
          <div className="p-2 text-center text-gray-400">🤖 Pensando...</div>
        )}
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
