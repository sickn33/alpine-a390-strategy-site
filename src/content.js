/** Capitoli del pitch: ognuno ha titolo chiaro + una riga che dice cosa impari in questa parte */
export const pitchChapters = [
  {
    id: 'opening',
    navLabel: 'Start',
    title: 'Cosa presentiamo',
    takeaway: 'Un piano per far percepire A390 come scelta premium credibile e portare le persone giuste fino alla prova reale, in circa 5 mesi.',
  },
  {
    id: 'tension',
    navLabel: 'Perché',
    title: 'Perché è complicato',
    takeaway: 'L’elettrico cresce, ma chi spende tanto compra anche sicurezza sociale: Alpine deve vincere la paura di “scommettere” su un marchio meno ovvio.',
  },
  {
    id: 'strategy',
    navLabel: 'Strategia',
    title: 'Cosa facciamo',
    takeaway: 'Tre mosse in ordine: cambiare idea di Alpine, parlare solo a chi ci assomiglia, far provare l’auto prima che decidano.',
  },
  {
    id: 'audience',
    navLabel: 'Chi',
    title: 'Chi ha questo problema',
    takeaway: 'Due profili diversi (stile vs tecnologia), stesso punto debole: vogliono distinguersi senza sentirsi esposti.',
  },
  {
    id: 'execution',
    navLabel: 'Piano',
    title: 'Come e quando',
    takeaway: 'Canali selettivi + inviti + esperienze fisiche; budget ripartito su 4 fasi; calendario su 5 mesi.',
  },
  {
    id: 'closing',
    navLabel: 'Chiusura',
    title: 'Cosa decidiamo',
    takeaway: 'Tre risultati che Alpine può tenere d’occhio subito: distinzione, credibilità, prova che porta al commerciale.',
  },
]

export const navItems = pitchChapters.map((c) => [c.id, c.navLabel])

/** Copertina: tre risultati concreti (non slogan astratti) */
export const coverOutcomes = [
  'Far capire in pochi secondi perché A390 non è “un’altra elettrica”.',
  'Competere su fiducia e stile, non solo su tabelline tecniche.',
  'Portare in concessionaria persone già calde, non contatti casuali.',
]

/** Strategia: un solo paragrafo chiaro (sostituisce tre colonne dense) */
export const strategyPlainSummary =
  'Oggi Alpine è spesso letta come nicchia sportiva: per A390 serve sembrare premium anche nella vita di tutti i giorni. Lo facciamo con messaggio coerente, contatti mirati e prove fisiche (Atelier e pista) che abbassano il rischio di una scelta meno ovvia.'

/** Chiusura: cosa serve da decidere in sala (azioni, non filosofia) */
export const nextStepsAlpine = [
  'Allineamento su tono e promessa: “premium colto” vs “sport rumore”.',
  'Date, owner e capacità per Atelier e giornata pista con il network.',
  'Regole minime tra marketing, retail e CRM su inviti e follow-up.',
]

export const sourceMeta = {
  deck: 'ALPINE ITALIA (1).pdf',
  workbook: 'Apline A390 - Media Report (1).xlsx',
  slides: 20,
  workbookSheet: 'Digital media report',
}

/** Hero strip: business context without “report” framing */
export const heroProof = [
  { value: '40–65', label: 'anni', hint: 'target primario' },
  { value: '5', label: 'mesi', hint: 'runway di lancio' },
  { value: '~500k', label: '€ investimento', hint: 'focus su prova e relazione' },
]

export const scenarioStats = [
  {
    value: '+46%',
    label: 'BEV in crescita',
    note: 'il mercato corre; la scelta premium resta selettiva',
  },
  {
    value: 'Alta prova',
    label: 'decisione premium',
    note: 'serve fiducia emotiva, non solo specifiche',
  },
  {
    value: 'White space',
    label: 'eleganza dinamica',
    note: 'spazio poco presidiato tra tech utilitario e badge ovvi',
  },
]

export const positioning = {
  line: 'Racing car in a suit',
  promise:
    'Una performance elettrica elegante, colta e guidabile ogni giorno: non omologazione premium, non puro tech utilitario.',
  opportunity:
    'La decisione premium resta selettiva e ad alta prova: Alpine deve abbattere il pregiudizio psicologico con French Savoir-Faire ed esperienza Atelier.',
}

export const strategySummary = {
  ambition: 'Portare Alpine A390 da brand di nicchia a scelta premium distintiva nel mercato italiano.',
  thesis:
    'Non facciamo awareness massiva: costruiamo credibilità selettiva, intercettiamo persone affini e trasformiamo il dubbio in esperienza fisica.',
  move: 'La leggerezza evolve, la natura resta.',
  outcome: 'Far percepire A390 come alternativa credibile ai badge ovvi, poi accompagnare il target fino ad Atelier, test drive e lead commerciali caldi.',
}

export const strategyNarrative = [
  {
    title: 'Il problema che risolviamo',
    text:
      'Alpine ha una forte identità sportiva, ma in Italia A390 deve diventare comprensibile come scelta premium quotidiana. Il target non deve solo scoprire l’auto: deve credere che una scelta meno ovvia possa avere lo stesso status dei marchi più riconosciuti.',
  },
  {
    title: 'La scelta strategica',
    text:
      'Posizioniamo A390 come “racing car in a suit”: una performance elettrica elegante, non rumorosa, capace di unire piacere di guida, design e uso reale. La campagna non spinge il prodotto come semplice EV, ma come nuova forma di leggerezza premium.',
  },
  {
    title: 'Come la implementiamo',
    text:
      'Costruiamo un percorso selettivo: prima rendiamo Alpine visibile nei contesti giusti, poi invitiamo i profili più coerenti in esperienze private, infine usiamo il test drive dinamico per trasformare curiosità e desiderio in convinzione.',
  },
]

export const notStrategy = [
  'Non è una campagna di massa per inseguire tutti gli acquirenti EV.',
  'Non è una comunicazione tecnica centrata solo su autonomia, motori o prestazioni.',
  'Non è uno storytelling decorativo: ogni touchpoint deve portare il target più vicino alla prova.',
]

export const strategyMoves = [
  {
    label: 'Riposizionare',
    title: 'Da nicchia sportiva a premium colto',
    text: 'Usiamo il territorio “racing car in a suit” per occupare uno spazio più elegante, dinamico e personale rispetto ai SUV elettrici premium.',
  },
  {
    label: 'Selezionare',
    title: 'Meno massa, più affinità',
    text: 'LinkedIn ABM, native premium, CRM e contesti airport filtrano persone già vicine a design, performance, tecnologia e alto potere di spesa.',
  },
  {
    label: 'Far provare',
    title: 'La promessa diventa esperienza',
    text: 'Private Atelier e Alpine Escape riducono il rischio percepito: materiali, configurazione e guida dinamica rendono credibile la nuova idea di leggerezza.',
  },
]

export const actionModel = [
  ['1', 'Costruire desiderabilità', 'Far emergere A390 come scelta colta, dinamica e distinta dai SUV premium più prevedibili.'],
  ['2', 'Ridurre il rischio percepito', 'Mostrare che Alpine non è una scommessa di nicchia, ma una scelta credibile, elegante e guidabile ogni giorno.'],
  ['3', 'Creare relazione', 'Passare da comunicazione a invito: contesti privati, configurazione assistita, materiali e contatto diretto con il brand.'],
  ['4', 'Portare alla prova', 'Usare l’esperienza di guida come momento decisivo: la leggerezza promessa deve essere sentita, non solo raccontata.'],
]

export const activationRoles = [
  {
    title: 'Media selettivi',
    text: 'Servono a intercettare persone coerenti con il profilo Alpine: professionisti, alto-spendenti, appassionati di design, tecnologia e performance.',
  },
  {
    title: 'CRM e inviti',
    text: 'Servono a trasformare interesse generico in relazione: chi mostra segnali di affinità viene accompagnato verso esperienze più personali.',
  },
  {
    title: 'Atelier e prova',
    text: 'Servono a chiudere il dubbio: A390 deve essere vista, configurata e guidata per diventare una scelta credibile.',
  },
]

export const phaseNarrative = [
  ['Fase 1', 'Rendere Alpine visibile al target giusto', 'Contenuti, LinkedIn ABM, native premium, DEM e search lavorano insieme per far emergere A390 nei contesti in cui il target cerca segnali di status, design e innovazione.'],
  ['Fase 2', 'Portare il brand fuori dal solo ambiente automotive', 'Le private preview in aeroporto intercettano frequent traveller e alto-spendenti: l’auto entra in un contesto premium, dinamico e coerente con mobilità e lifestyle.'],
  ['Fase 3', 'Trasformare interesse in desiderio tangibile', 'Il Private Atelier a Milano e Torino rende fisico il racconto: materiali, configurazione, relazione con il brand e ambiente curato fanno percepire valore.'],
  ['Fase 4', 'Convertire con la prova dinamica', 'Alpine Escape porta i lead caldi in circuito: la promessa di leggerezza, performance e controllo viene dimostrata attraverso la guida.'],
]

export const competitors = [
  {
    name: 'Audi Q4 e-tron',
    mix: 'Eventi urbani, design week, test drive, pop-up / boutique temporanee',
    timing: 'Picchi in corrispondenza di lanci e release prodotto',
    intensity: 'Alta su attivazioni locali impatto',
    message: 'Progresso, sostenibilità, performance premium ma accessibile',
  },
  {
    name: 'BMW iX2',
    mix: 'TV, social globali, hero video, OOH localizzato',
    timing: 'Launch window concentrata e presidio multicanale',
    intensity: 'Alta con forte supporto di brand globale',
    message: 'Emozione, sporty-tech, lifestyle digitale',
  },
  {
    name: 'Tesla Model Y',
    mix: 'Ecosistema owned, configuratore, CRM, referral, D2C',
    timing: 'Always-on, senza forte dipendenza da flight media',
    intensity: 'Paid contenuto, elevato',
    message: "Superiorità di prodotto fluida, frizione nulla all’acquisto",
  },
  {
    name: 'Porsche Macan EV',
    mix: 'Storytelling cinematico, club / community, experience center, eventi premium',
    timing: 'Presidio continuativo con forte attivazione aspirazionale',
    intensity: 'Alta su experience e contenuti premium',
    message: 'Status, heritage, prestigio evoluto senza perdita di identità',
  },
]

export const parityDifference = {
  parity: [
    'Autonomia WLTP credibile oltre la soglia psicologica dei 500 km.',
    'Ricarica rapida, ecosistema digitale chiaro, configurazione e prenotazione test drive semplici.',
    'Abitabilità premium, 5 posti, comfort everyday, ADAS e interfacce contemporanee.',
    'Percezione di qualità costruttiva, sicurezza e valore residuo coerenti col prezzo.',
  ],
  difference: [
    'La leggerezza come idea guida di marca: non solo tecnica, ma culturale e percettiva.',
    'Tre motori elettrici + Alpine Active Torque Vectoring: agilità distintiva, non semplice potenza.',
    'French savoir-faire e produzione a Dieppe: firma identitaria, diversa dal tech utilitario.',
    'Halo motorsport e design racing car in a suit: performance elegante, non rumorosa né ostentata.',
  ],
}

export const problems = {
  business: [
    'Resistenza del target alla pubblicità',
    'Ostacolo psicologico',
    'Cambio radicale di percezione del brand',
    'Saturazione del mercato',
    'Competizione con i giganti',
    'Sfida tecnica: agilità vs peso',
  ],
  consumer: [
    'Omologazione sociale: necessità di distinguersi mantenendo uno status alto',
    'Barriera di acquisto: timore di fare una scelta non convenzionale',
  ],
  synthesis:
    "La campagna risolve il consumatore bloccato tra dovere elettrico/praticità e piacere adrenalina/status, offrendo Alpine come l’unica soluzione capace di unire questi due mondi in modo elegante e coerente.",
}

export const brandDrivers = [
  {
    label: 'Leggerezza percepita',
    text: 'Un’idea di marca: agilità, controllo e piacere quotidiano — non una scheda tecnica.',
  },
  {
    label: 'Anima racing, tono colto',
    text: 'Prestazione elegante: emozione senza ostentazione, distanza dai SUV “da salone”.',
  },
  {
    label: 'French savoir-faire',
    text: 'Firma e craft distintivi: rassicurazione di gusto per chi vuole distinguersi con misura.',
  },
  {
    label: 'Esperienza Atelier',
    text: 'Ciò che i generalisti non replicano: relazione, materiali, invito, prova — il valore si tocca.',
  },
]

export const behaviorGoals = [
  {
    label: 'Pensare',
    text: "L’elettrico Alpine non è una rinuncia alla guida, ma una nuova forma di performance.",
    shift: 'Da compromesso a evoluzione',
  },
  {
    label: 'Sentire',
    text: 'Controllo, distinzione, vitalità e appartenenza a una scelta non ovvia.',
    shift: 'Da status badge a gusto tecnico',
  },
  {
    label: 'Fare',
    text: "Approfondire, richiedere invito, partecipare all’Atelier e prenotare il test drive.",
    shift: 'Da interesse a prova concreta',
  },
]

export const personas = [
  {
    id: 'sergio',
    name: "Sergio: l'Esteta Performante",
    age: '52 anni',
    profile: 'Architetto di successo residente a Milano. Reddito elevato, orientato allo status e alla qualità del design.',
    interests: ['Arte contemporanea', 'Barca a vela', 'Viaggi frequenti tra Svizzera e laghi del Nord Italia', 'Architettura sostenibile'],
    values: ['Eleganza discreta', 'Versatilità senza compromessi', 'Pionierismo tecnologico', 'Tempo di qualità con la famiglia'],
    problem:
      "La SUV fatigue: necessità di spazio e 5 posti ma rifiuta estetica ingombrante e massiccia dei SUV tradizionali, cercando un’auto agile che non sacrifichi il prestigio.",
    accent: 'Design, prestigio, agilità quotidiana',
  },
  {
    id: 'laurent',
    name: 'Laurent: il Visionario Tecnologico',
    age: '45 anni',
    profile: 'CTO Expat residente a Torino. Background internazionale, early adopter di tecnologie, alto potenziale di spesa.',
    interests: ['AI', 'Robotica', 'High-altitude trekking', 'Weekend sportivi a Chamonix', 'Test-drive estremi'],
    values: ['Performance tecnica', 'Efficienza energetica', 'Agilità dinamica Alpine DNA', "Esclusività dell’innovazione"],
    problem:
      "Il peso dell’elettrico: percepisce le auto elettriche come pesanti e noiose. Cerca un’alternativa che conservi dinamismo meccanico e divertimento di guida della vecchia scuola.",
    accent: 'Tecnologia racing, motricità, prova dinamica',
  },
]

/** Percorso in linguaggio pitch (sostituisce i nomi funnel inglesi in UI) */
export const journeyBeats = {
  sergio: [
    ['Bisogno reale', "Cinque posti e quotidianità senza accettare il SUV premium ‘da salone’."],
    ['Primo contatto', 'Alpine entra come fastback elegante: EV sì, ma con firma e carattere.'],
    ['Valutazione', 'Confronto con i badge ovvi: A390 come scelta più coerente con identità e stile.'],
    ['Avvicinamento', 'Configuratori, inviti, tempi chiari: riduciamo attrito verso la prova.'],
    ['Prova e fedeltà', 'Se la promessa regge in guida, Alpine diventa marca di gusto, non di moda.'],
  ],
  laurent: [
    ['Bisogno reale', 'Spazio, integrale, vita intensa — senza la pesantezza percepita delle EV premium.'],
    ['Primo contatto', 'Alpine come ingegneria racing applicata all’uso quotidiano, non gadgeteria.'],
    ['Valutazione', 'AWD, dinamica, efficienza: il confronto si sposta su controllo e precisione.'],
    ['Avvicinamento', 'Prove, disponibilità, ownership: il percorso è guidato, non lasciato al caso.'],
    ['Prova e fedeltà', 'Conferma tecnica + piacere: Alpine resta nel suo posizionamento “tech colta”.'],
  ],
}

export const totalCampaignBudget = 500000

export const journeys = {
  sergio: [
    ['Category Need', "Cerca un’auto che unisca 5 posti, comfort e spazio, evitando il SUV premium percepito come banale e da status maturo."],
    ['Brand Awareness', 'Alpine entra nel suo radar come alternativa: non solo EV, ma sport fastback elegante e distintiva.'],
    ['Consideration', 'Associa Alpine a leggerezza, french savoir-faire, performance discreta e sviluppa un atteggiamento positivo.'],
    ['Evaluation', 'Rispetto ai competitor, A390 emerge come scelta più coerente con stile di vita e identità personale.'],
    ['Purchase facilitation', 'La comunicazione semplifica il processo decisionale: test drive, configurazione e accesso.'],
    ['Purchase', "L’acquisto è la conseguenza naturale di fiducia, chiarezza e desiderabilità."],
    ['Satisfaction', 'La promessa è mantenuta: piacere di guida, fascino e praticità confermano la scelta.'],
    ['Brand loyalty', 'Alpine diventa un brand identitario e struttura una relazione emotiva e duratura.'],
    ['Advocacy', 'Sergio diventa ambassador discreto nel suo network come scelta competente e distintiva.'],
  ],
  laurent: [
    ['Category Need', 'Avverte il bisogno di una EV spaziosa, integrale e adatta alla vita sociale e professionale, ma rifiuta peso e goffaggine dei SUV elettrici.'],
    ['Brand Awareness', 'Alpine deve essere associata a tecnologia racing, agilità e uso quotidiano nella nicchia tech-performance.'],
    ['Consideration', 'Collega il brand a ingegneria intelligente, motorsport e innovazione colta; qui nasce il lead.'],
    ['Evaluation', 'Confronta A390 con i competitor e matura l’intenzione quando capisce che unisce spazio, AWD e vera dinamica Alpine.'],
    ['Purchase facilitation', 'La comunicazione rende semplice il passo successivo: prova, disponibilità, ownership, ricarica e configurazione.'],
    ['Purchase', "L’acquisto è il risultato del percorso; Alpine accompagna la decisione senza sostituire prodotto, prezzo e retail."],
    ['Satisfaction', "Se A390 conferma precisione, motricità, comfort e facilità d’uso, la promessa tecnica diventa autentica."],
    ['Brand loyalty', 'Alpine diventa parte della sua identità di innovatore: fiducia e competenza.'],
    ['Advocacy', 'Laurent racconta Alpine come tecnologia evoluta applicata all’uso quotidiano.'],
  ],
}

export const touchpoints = [
  {
    step: 'Entrare nel radar',
    title: 'Segnali nel contesto giusto',
    text: 'Portiamo A390 dove il target già cerca status, design e innovazione — senza rumore di massa.',
  },
  {
    step: 'Far desiderare',
    title: 'Contenuti e configurazione',
    text: 'Racconto coerente e strumenti semplici per esplorare la vettura come oggetto di gusto, non come brochure.',
  },
  {
    step: 'Avvicinare',
    title: 'Invito e relazione',
    text: 'Atelier privati: materiali, luce, tempo. Il premium si misura dalla qualità dell’incontro.',
  },
  {
    step: 'Chiudere il dubbio',
    title: 'Prova che convince',
    text: 'Esperienza dinamica in sicurezza: la promessa di leggerezza diventa sensazione, non slogan.',
  },
]

export const phases = [
  {
    id: 'fase1',
    name: 'Fase 1 · Digital & native',
    budget: 149000,
    share: 29.8,
    objective: 'Awareness qualificata e lead profilati',
    items: [
      'Racconto e asset editoriali allineati al posizionamento',
      'Paid selettivo: executive, alto potenziale, contesti premium',
      'CRM e search per accompagnare verso l’invito',
    ],
  },
  {
    id: 'fase2',
    name: 'Fase 2 · Alpine Private Preview',
    budget: 170000,
    share: 34,
    objective: 'Portare il brand fuori dal solo automotive',
    items: [
      'Presenza aeroportuale su finestre di viaggio business',
      'Co-marketing e allestimento curato per frequent traveller',
      'Primo contatto “da lifestyle”, non da concessionaria',
    ],
  },
  {
    id: 'fase3',
    name: 'Fase 3 · Private Atelier',
    budget: 90000,
    share: 18,
    objective: 'Desiderio tangibile per ospiti selezionati',
    items: [
      'Milano e Torino: inviti, materiali, configurazione assistita',
      'Atmosfera da brand couture: tempo, dettaglio, relazione',
      'Obiettivo: 160–200 ospiti, alta soddisfazione percepita',
    ],
  },
  {
    id: 'fase4',
    name: 'Fase 4 · Alpine Escape',
    budget: 91000,
    share: 18.2,
    objective: 'Prova dinamica su lead caldi',
    items: [
      'Circuito: telemetria, coaching, hospitality',
      'Momento di verità per leggerezza e controllo',
      'Chiusura commerciale con segnali forti di interesse',
    ],
  },
]

/** Executive view: where money goes (detail in workbook) */
export const budgetSplit = [
  { label: 'Intercetto & contenuti', share: 30, hint: 'awareness qualificata' },
  { label: 'Private preview', share: 34, hint: 'contesti premium di viaggio' },
  { label: 'Atelier', share: 18, hint: 'relazione e configurazione' },
  { label: 'Prova in pista', share: 18, hint: 'conversione esperienziale' },
]

export const mediaPillars = [
  {
    title: 'Paid selettivo',
    lead: 'Mensole giuste, non copertura generica.',
    text: 'Executive media, native premium e social B2B per intercettare profili coerenti con design, innovazione e potere d’acquisto.',
  },
  {
    title: 'Contenuti & reputazione',
    lead: 'Il posizionamento si difende con coerenza.',
    text: 'Produzione editoriale e PR: rendere credibile “racing car in a suit” fuori dalla nicchia motorsport.',
  },
  {
    title: 'CRM & invito',
    lead: 'Dal segnale alla conversazione.',
    text: 'DEM, retargeting e inviti personali per spostare l’interesse verso Atelier ed esperienza fisica.',
  },
  {
    title: 'Search mirato',
    lead: 'Chi cerca, è già caldo.',
    text: 'SEM e retargeting per catturare intento e ridurre attrito fino al booking.',
  },
]

/** Kept for reference / future deep-dive; UI no longer lists row-level KPIs */
export const mediaRows = [
  {
    channel: 'Produzione contenuti & press asset',
    type: 'Produzione',
    budget: 32000,
    note: 'Voce abilitante: non genera KPI media diretti.',
  },
  {
    channel: 'LinkedIn ABM',
    type: 'Paid media',
    budget: 55000,
    impressions: 1000000,
    clicks: 4100,
    leads: 360,
    ctr: 0.41,
    crLead: 8.78,
    cpm: 55,
    cpc: 13.41,
    cpl: 152.78,
    output: '126 booking, 91 show-up',
  },
  {
    channel: 'Native riviste premium',
    type: 'Paid media',
    budget: 44000,
    impressions: 1157895,
    clicks: 3642,
    leads: 117,
    ctr: 0.31,
    crLead: 3.21,
    cpm: 38,
    cpc: 12.08,
    cpl: 376.07,
    output: '35 booking, 25 show-up',
  },
  {
    channel: 'DEM / CRM Atelier',
    type: 'Direct/CRM',
    budget: 9000,
    emails: 24250,
    leads: 85,
    crLead: 0.35,
    cpl: 105.88,
    output: '38 booking, 31 show-up',
  },
  {
    channel: 'SEM search + retargeting',
    type: 'Paid media',
    budget: 9000,
    impressions: 269737,
    clicks: 1450,
    leads: 133,
    ctr: 0.54,
    crLead: 9.17,
    cpm: 33.37,
    cpc: 6.21,
    cpl: 67.67,
    output: '66 booking, 53 show-up',
  },
]

export const phaseOneTotals = {
  budget: 149000,
  impressions: 2427632,
  emails: 24250,
  clicks: 9192,
  leads: 695,
  ctr: 0.38,
  crLead: 6.64,
  cpm: 44.49,
  cpc: 16.21,
  cpl: 214.39,
}

export const roadmap = [
  ['Mese 1', 'Impostazione narrativa, asset e infrastruttura di invito'],
  ['Mese 2', 'Intercetto selettivo: burst paid, CRM, avvio preview aeroportuali'],
  ['Mese 3', 'Continuità aeroporti, search, nurturing verso Atelier'],
  ['Mese 4', 'Private Atelier Milano e Torino'],
  ['Mese 5', 'Alpine Escape: prova dinamica e follow-up commerciale'],
]

export const campaignKpis = [
  ['Awareness', '2,43M', 'impression'],
  ['Interesse', '9.192', 'click'],
  ['Lead profiling', '695', 'lead'],
  ['Booking', '265', 'booking'],
  ['Show-up', '200', 'presenze'],
  ['Track proof', '25-30', 'hot lead'],
]

export const businessKpis = [
  ['Private Atelier', '160-200 invitati', 'Attendance attesa 75-80%, configurazioni assistite e satisfaction almeno 8/10.'],
  ['Alpine Escape', 'NPS > 60', 'Test drive completati, show-up almeno 90% e prova concreta della leggerezza elettrica.'],
  ['Follow-up', '12-15 richieste', 'Configurazione o preventivi, con 5-8 manifestazioni forti di interesse.'],
]

export const conclusion = [
  {
    title: 'Distinzione',
    body: 'A390 esce dallo status quo dei SUV elettrici premium e occupa uno spazio più colto, dinamico e personale.',
    line: 'Alternativa ai badge ovvi',
  },
  {
    title: 'Credibilità',
    body: 'Paid selettivo, native premium, CRM e airport experience rendono Alpine visibile nei contesti giusti, senza pressione massiva.',
    line: 'Presenza selettiva, non rumore',
  },
  {
    title: 'Conversione',
    body: 'Private Atelier e Alpine Escape trasformano interesse in relazione, prova reale e segnali commerciali forti.',
    line: 'Dal desiderio alla prova',
  },
]

export const narrativeNav = [
  { id: 'opening', label: 'Start' },
  { id: 'problem', label: 'Problema' },
  { id: 'personas', label: 'Persone' },
  { id: 'phases', label: 'Fasi' },
  { id: 'closing', label: 'Chiusura' },
]

export const narrativeIntro = {
  eyebrow: 'Alpine A390',
  title: 'La leggerezza evolve, la natura resta.',
  subtitle:
    'A390 deve diventare una scelta premium credibile non perché la raccontiamo meglio, ma perché accompagniamo Sergio e Laurent fino a viverla davvero.',
  thesis:
    'La leggerezza evolve, la natura resta: Alpine cambia tecnologia, ma non cambia promessa. Il percorso porta il target dalla scoperta selettiva al Private Atelier, fino all’Alpine Escape come prova finale.',
}

export const simpleProblems = [
  {
    title: 'Alpine parte da una nicchia',
    text: 'Il brand ha un DNA racing forte, ma per A390 deve sembrare premium anche nella vita quotidiana, non solo per appassionati.',
  },
  {
    title: 'Il target vuole distinguersi',
    text: 'Sergio e Laurent cercano una scelta non ovvia, ma non vogliono perdere status, sicurezza o credibilità sociale.',
  },
  {
    title: 'L’elettrico va provato',
    text: 'Il dubbio non si risolve con più dati: va sciolto con materiali, relazione, configurazione e guida dinamica.',
  },
]

export const personaStories = [
  {
    id: 'sergio',
    name: 'Sergio',
    role: 'L’Esteta performante',
    age: '52 anni',
    image: './assets/sergio-clean.png',
    tension: 'Ha bisogno di spazio e prestigio, ma rifiuta il SUV premium massiccio e prevedibile.',
    hook: 'Lo agganciamo dove design, status sobrio e qualità dell’esperienza contano davvero.',
    proof: 'Atelier, materiali e configurazione rendono A390 una scelta di gusto, non una scommessa di nicchia.',
  },
  {
    id: 'laurent',
    name: 'Laurent',
    role: 'Il Visionario tecnologico',
    age: '45 anni',
    image: './assets/laurent-clean.png',
    tension: 'Associa molte EV a peso, noia e perdita di piacere dinamico.',
    hook: 'Lo intercettiamo con tecnologia, performance intelligente e promessa di controllo.',
    proof: 'Alpine Escape gli fa sentire la differenza: telemetria, piloti e guida trasformano il claim in evidenza.',
  },
]

export const strategyPhases = [
  {
    id: 'discover',
    number: '01',
    label: 'Scoprire',
    title: 'Agganciamo Sergio e Laurent nei touchpoint giusti.',
    short: 'Awareness qualificata, non rumore.',
    image: './assets/phase-approfondire.png',
    narrative:
      'La strategia parte in modo selettivo: non parliamo a tutto il mercato EV, ma intercettiamo i profili più coerenti nei contesti professionali, premium e digitali dove sono già ricettivi.',
    touchpoints: ['LinkedIn ABM', 'Native premium', 'SEM e retargeting', 'DEM/CRM Atelier'],
    outcome: 'Da pubblico freddo a contatti profilati e interessati.',
  },
  {
    id: 'deepen',
    number: '02',
    label: 'Approfondire',
    title: 'Portiamo A390 nelle lounge aeroportuali premium.',
    short: 'La curiosità entra in un contesto esclusivo.',
    image: './assets/phase-scoprire.png',
    narrative:
      'Dopo il primo contatto, A390 esce dallo schermo e incontra Sergio e Laurent in un ambiente coerente con mobilità, status e tempo qualificato: una private preview nelle lounge premium di Linate e Caselle.',
    touchpoints: ['Lounge premium', 'Linate e Caselle', 'QR e opt-in CRM', 'Richiesta invito Atelier'],
    outcome: 'Da curiosità iniziale a relazione dichiarata con il brand.',
  },
  {
    id: 'invite',
    number: '03',
    label: 'Invitare',
    title: 'Portiamo i lead selezionati dentro il Private Atelier.',
    short: 'Il premium si tocca.',
    image: './assets/phase-invitare.png',
    narrative:
      'L’Atelier è il cambio di passo: i lead non guardano più una campagna, entrano in una relazione. Materiali, configurazione, VR, scent e sound design rendono fisico il French savoir-faire.',
    touchpoints: ['Private Atelier Milano', 'Private Atelier Torino', 'Materiali e configurazione', 'Guest list qualificata'],
    outcome: 'Da lead interessato a ospite coinvolto e pronto alla prova.',
  },
  {
    id: 'prove',
    number: '04',
    label: 'Provare',
    title: 'Alpine Escape chiude il percorso con la prova dinamica.',
    short: 'La leggerezza si dimostra.',
    image: './assets/phase-provare.png',
    narrative:
      'Il climax è Alpine Escape: pochi hot lead, una track experience controllata, telemetria, team tecnico, piloti, hospitality e follow-up commerciale. Qui il dubbio diventa sensazione fisica.',
    touchpoints: ['Circuito Langhe / Balocco', 'Test drive dinamico', 'Telemetria e piloti', 'Follow-up commerciale'],
    outcome: 'Da desiderio a intenzione concreta: configurazione, preventivo, preordine.',
  },
]

export const closingStory = {
  title: 'La promessa diventa esperienza',
  text:
    'La strategia non chiede al target di credere subito ad Alpine. Costruisce fiducia per gradi: prima lo intercetta, poi lo informa, poi lo invita, infine gli fa provare la promessa.',
  axes: [
    {
      title: 'Distinzione',
      idea: 'A390 non entra nella gara dei SUV elettrici: diventa una scelta da intenditori.',
      where: 'Contenuti di scoperta, posizionamento premium e narrazione Alpine.',
      effect: 'Performance, design e appartenenza sostituiscono il confronto sui badge.',
    },
    {
      title: 'Credibilità',
      idea: 'La promessa non viene affidata alla pubblicità massiva.',
      where: 'Atelier, lounge, contenuti tecnici e contesti controllati.',
      effect: 'Alpine diventa visibile dove il target è disposto ad ascoltare.',
    },
    {
      title: 'Conversione',
      idea: 'Il percorso trasforma curiosità qualificata in intenzione commerciale.',
      where: 'Private Atelier, configurazione, test drive e Alpine Escape.',
      effect: 'Appuntamento, prova e preordine diventano segnali misurabili.',
    },
  ],
  pipeline: [
    {
      title: 'Selezione',
      text: 'Non parliamo a tutti: filtriamo i profili più coerenti con prezzo, cultura automotive e desiderio di distinzione.',
    },
    {
      title: 'Relazione',
      text: 'L’Atelier trasforma l’interesse in fiducia: consulenza, configurazione e contatto diretto rendono Alpine più personale.',
    },
    {
      title: 'Prova',
      text: 'L’Alpine Escape chiude il cerchio: la leggerezza non resta promessa, diventa esperienza fisica e memorabile.',
    },
  ],
}

export const appendixProof = [
  {
    phase: 'Fase 1',
    timing: 'M1–M3',
    budget: '149.000 €',
    headline: '2,43M impression',
    detail: '695 lead, 265 booking, 221 show-up',
  },
  {
    phase: 'Fase 2',
    timing: 'M2–M3',
    budget: '170.000 €',
    headline: 'Linate + Caselle',
    detail: 'QR scan, opt-in CRM, richieste invito',
  },
  {
    phase: 'Fase 3',
    timing: 'M4',
    budget: '90.000 €',
    headline: '160–200 invitati',
    detail: 'Private Atelier Milano e Torino',
  },
  {
    phase: 'Fase 4',
    timing: 'M5',
    budget: '91.000 €',
    headline: '25–30 hot lead',
    detail: 'Alpine Escape in pista + follow-up',
  },
]
