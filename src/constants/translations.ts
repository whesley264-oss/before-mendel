export const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'zh', name: 'Mandarin', flag: '🇨🇳' },
];

export type LanguageCode = 'pt' | 'en' | 'es' | 'it' | 'zh';

export const translations = {
  pt: {
    nav: { title: "Proto-Genética" },
    sections: [
      {
        title: "A Origem do Invisível",
        content: "Como as características eram explicadas antes da genética? Antes de Mendel, a hereditariedade era um mistério envolto em filosofia e mitos.",
        emotion: "Curiosidade",
        button: "Explorar a Jornada"
      },
      {
        title: "Antes da Ciência",
        content: "O cenário era dominado por crenças e observações sem método. O invisível era explicado pelo místico.",
        emotion: "Intriga"
      },
      {
        title: "Filósofos e Ideias Antigas",
        content: "Aristóteles e as primeiras tentativas. Acreditava-se em uma 'mistura' de essências vitais dos pais.",
        emotion: "Compreensão"
      },
      {
        title: "Teorias Pré-Científicas",
        content: "A Pangênese sugeria que cada parte do corpo enviava 'partículas' para os órgãos reprodutores.",
        emotion: "Dúvida"
      },
      {
        title: "Primeiras Observações",
        content: "Botânicos começam a cruzar plantas, mas sem padrões claros. Resultados pareciam caóticos e irrepetíveis.",
        emotion: "Evolução"
      },
      {
        title: "As Limitações",
        content: "Sem microscópios ou conhecimento do DNA, a ciência estava presa ao que os olhos podiam ver.",
        emotion: "Frustração"
      },
      {
        title: "Erros e Confusões",
        content: "A ideia de 'herança por mistura' impedia o entendimento de como traços recessivos reapareciam.",
        emotion: "Clareza"
      },
      {
        title: "Transição para a Mudança",
        content: "A necessidade de rigor matemático e método científico começava a pulsar na mente dos pesquisadores.",
        emotion: "Expectativa"
      },
      {
        title: "A Chegada de Mendel",
        content: "Gregor Mendel entra em cena com suas ervilhas. Não apenas observando, mas contando e analisando.",
        emotion: "Descoberta"
      },
      {
        title: "O Legado do Erro",
        content: "A ciência não nasce pronta. Ela evolui através de falhas. O caminho para a verdade foi pavimentado por curiosos.",
        emotion: "Reflexão"
      }
    ]
  },
  en: {
    nav: { title: "Proto-Genetics" },
    sections: [
      {
        title: "The Origin of the Invisible",
        content: "How were traits explained before genetics? Before Mendel, heredity was a mystery wrapped in philosophy and myth.",
        emotion: "Curiosity",
        button: "Explore the Journey"
      },
      {
        title: "Before Science",
        content: "The landscape was dominated by beliefs and observations without method. The invisible was explained by the mystical.",
        emotion: "Intrigue"
      },
      {
        title: "Philosophers and Ancient Ideas",
        content: "Aristotle and the first attempts. It was believed in a 'blend' of vital essences from the parents.",
        emotion: "Understanding"
      },
      {
        title: "Pre-Scientific Theories",
        content: "Pangenesis suggested that every part of the body sent 'particles' to the reproductive organs.",
        emotion: "Doubt"
      },
      {
        title: "First Observations",
        content: "Botanists begin to cross-breed plants, but without clear patterns. Results seemed chaotic and unrepeatable.",
        emotion: "Evolution"
      },
      {
        title: "The Limitations",
        content: "Without microscopes or DNA knowledge, science was stuck with what the eyes could see.",
        emotion: "Frustration"
      },
      {
        title: "Errors and Confusions",
        content: "The idea of 'blending inheritance' prevented the understanding of how recessive traits reappeared.",
        emotion: "Clarity"
      },
      {
        title: "Transition to Change",
        content: "The need for mathematical rigor and scientific method began to pulse in the minds of researchers.",
        emotion: "Expectation"
      },
      {
        title: "The Arrival of Mendel",
        content: "Gregor Mendel steps in with his peas. Not just observing, but counting and analyzing.",
        emotion: "Discovery"
      },
      {
        title: "The Legacy of Error",
        content: "Science is not born ready. It evolves through failures. The path to truth was paved by the curious.",
        emotion: "Reflection"
      }
    ]
  },
  es: {
    nav: { title: "Proto-Genética" },
    sections: [
      {
        title: "El Origen de lo Invisible",
        content: "¿Cómo se explicaban los rasgos antes de la genética? Antes de Mendel, la herencia era um misterio envuelto en filosofía y mitos.",
        emotion: "Curiosidad",
        button: "Explorar el Viaje"
      },
      {
        title: "Antes de la Ciencia",
        content: "El escenario estaba dominado por creencias y observaciones sin método. Lo invisible se explicaba por lo místico.",
        emotion: "Intriga"
      },
      {
        title: "Filósofos e Ideas Antiguas",
        content: "Aristóteles y los primeros intentos. Se creía en una 'mezcla' de esencias vitales de los padres.",
        emotion: "Comprensión"
      },
      {
        title: "Teorías Pre-Científicas",
        content: "La Pangénesis sugería que cada parte del cuerpo enviaba 'partículas' a los órganos reproductores.",
        emotion: "Duda"
      },
      {
        title: "Primeras Observaciones",
        content: "Los botánicos comienzan a cruzar plantas, pero sin patrones claros. Los resultados parecían caóticos e irrepetibles.",
        emotion: "Evolución"
      },
      {
        title: "Las Limitaciones",
        content: "Sin microscopios ni conocimiento del ADN, la ciencia estaba atrapada en lo que los ojos podían ver.",
        emotion: "Frustración"
      },
      {
        title: "Errores y Confusiones",
        content: "La idea de 'herencia por mezcla' impedía comprender cómo reaparecían los rasgos recesivos.",
        emotion: "Claridad"
      },
      {
        title: "Transición al Cambio",
        content: "La necesidad de rigor matemático y método científico comenzaba a latir en la mente de los investigadores.",
        emotion: "Expectativa"
      },
      {
        title: "La Llegada de Mendel",
        content: "Gregor Mendel entra en escena con sus guisantes. No solo observando, sino contando y analizando.",
        emotion: "Descubrimiento"
      },
      {
        title: "El Legado del Error",
        content: "La ciencia no nace lista. Evoluciona a través de los fallos. El camino a la verdad fue pavimentado por los curiosos.",
        emotion: "Reflexión"
      }
    ]
  },
  it: {
    nav: { title: "Proto-Genetica" },
    sections: [
      {
        title: "L'Origine dell'Invisibile",
        content: "Come venivano spiegati i tratti prima della genetica? Prima di Mendel, l'ereditarietà era un mistero avvolto nella filosofia e nel mito.",
        emotion: "Curiosità",
        button: "Esplora il Viaggio"
      },
      {
        title: "Prima della Scienza",
        content: "Il panorama era dominato da credenze e osservazioni senza metodo. L'invisibile era spiegato dal mistico.",
        emotion: "Intrigo"
      },
      {
        title: "Filosofi e Idee Antiche",
        content: "Aristotele e i primi tentativi. Si credeva in una 'miscela' di essenze vitali dei genitori.",
        emotion: "Comprensione"
      },
      {
        title: "Teorie Pre-Scientifiche",
        content: "La Pangenesi suggeriva che ogni parte del corpo inviasse 'particelle' agli organi riproduttivi.",
        emotion: "Dubbio"
      },
      {
        title: "Prime Osservazioni",
        content: "I botanici iniziano a incrociare le piante, ma senza schemi chiari. I risultati sembravano caotici e irripetibili.",
        emotion: "Evoluzione"
      },
      {
        title: "Le Limitazioni",
        content: "Senza microscopi o conoscenza del DNA, la scienza era bloccata su ciò che gli occhi potevano vedere.",
        emotion: "Frustrazione"
      },
      {
        title: "Errori e Confusioni",
        content: "L'idea di 'eredità per mescolanza' impediva di capire come ricomparissero i tratti recessivi.",
        emotion: "Chiarezza"
      },
      {
        title: "Transizione al Cambiamento",
        content: "Il bisogno di rigore matematico e metodo scientifico cominciava a pulsare nelle menti dei ricercatori.",
        emotion: "Aspettativa"
      },
      {
        title: "L'Arrivo di Mendel",
        content: "Gregor Mendel entra in scena con i suoi piselli. Non solo osservando, ma contando e analizzando.",
        emotion: "Scoperta"
      },
      {
        title: "L'Eredità dell'Errore",
        content: "La scienza non nasce pronta. Si evolve attraverso i fallimenti. La via per la verità è stata spianata dai curiosi.",
        emotion: "Riflessione"
      }
    ]
  },
  zh: {
    nav: { title: "原始遗传学" },
    sections: [
      {
        title: "无形的起源",
        content: "在遗传学出现之前，特征是如何解释的？在孟德尔之前，遗传是一个包裹在哲学和神话中的谜团。",
        emotion: "好奇心",
        button: "探索旅程"
      },
      {
        title: "科学之前",
        content: "当时的景观由没有方法的信仰和观察所主导。无形之物由神秘主义解释。",
        emotion: "阴谋"
      },
      {
        title: "哲学家与古代思想",
        content: "亚里士多德和最初的尝试。人们相信父母生命精华的“混合”。",
        emotion: "理解"
      },
      {
        title: "前科学理论",
        content: "泛生论认为身体的每个部位都向生殖器官发送“颗粒”。",
        emotion: "怀疑"
      },
      {
        title: "最初的观察",
        content: "植物学家开始杂交植物，但没有清晰的模式。结果似乎是混乱且不可重复的。",
        emotion: "进化"
      },
      {
        title: "局限性",
        content: "没有显微镜或DNA知识，科学受限于肉眼所能见到的事物。",
        emotion: "挫败感"
      },
      {
        title: "错误与混淆",
        content: "“融合遗传”的思想阻碍了对隐性性状如何重新出现的理解。",
        emotion: "清晰"
      },
      {
        title: "向变革过渡",
        content: "对数学严谨性和科学方法的需求开始在研究人员的思想中跳动。",
        emotion: "期待"
      },
      {
        title: "孟德尔的到来",
        content: "格雷戈尔·孟德尔带着他的豌豆登场。不仅是观察，还有计数和分析。",
        emotion: "发现"
      },
      {
        title: "错误的遗产",
        content: "科学并非生来就完善的。它通过失败进化。通往真理的道路是由好奇者铺就的。",
        emotion: "反思"
      }
    ]
  }
};
