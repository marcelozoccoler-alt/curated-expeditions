import { SUPPORTED_LANGS, type Lang } from "@/i18n/config";

export interface LeadGateCopy {
  title: string;
  description: string;
  name: string;
  phone: string;
  phonePlaceholder: string;
  email: string;
  interest: string;
  interestPlaceholder: string;
  when: string;
  whenPlaceholder: string;
  travelers: string;
  budget: string;
  select: string;
  notes: string;
  notesPlaceholder: string;
  submit: string;
  skip: string;
  privacy: string;
  errors: {
    name: string;
    email: string;
    phone: string;
    interest: string;
    when: string;
    travelers: string;
    budget: string;
  };
  travelerOptions: string[];
  budgetOptions: string[];
  /** Rótulos usados na mensagem enviada ao WhatsApp */
  fields: {
    intro: string;
    name: string;
    email: string;
    phone: string;
    interest: string;
    when: string;
    travelers: string;
    budget: string;
    notes: string;
  };
  toastError: string;
}

const pt: LeadGateCopy = {
  title: "Antes de conversarmos",
  description:
    "Um consultor Create Travel prepara sua proposta a partir deste breve briefing — assim a conversa já começa no ponto certo.",
  name: "Nome completo",
  phone: "WhatsApp (com DDD)",
  phonePlaceholder: "(11) 99999-9999",
  email: "E-mail",
  interest: "Destino ou roteiro de interesse",
  interestPlaceholder: "Ex.: Egito abril/2027, Patagônia, Toscana",
  when: "Quando pretende viajar",
  whenPlaceholder: "Ex.: julho/2027",
  travelers: "Número de viajantes",
  budget: "Faixa de investimento por pessoa",
  select: "Selecione",
  notes: "Algo que devemos saber (opcional)",
  notesPlaceholder: "Ritmo desejado, celebração, preferências de hospedagem…",
  submit: "Continuar no WhatsApp",
  skip: "Prefiro falar direto",
  privacy:
    "Seus dados são usados apenas para o atendimento Create Travel. Não compartilhamos com terceiros.",
  errors: {
    name: "Informe seu nome completo",
    email: "E-mail inválido",
    phone: "Informe o WhatsApp com DDD",
    interest: "Diga o destino ou roteiro de interesse",
    when: "Informe quando pretende viajar",
    travelers: "Selecione o número de viajantes",
    budget: "Selecione a faixa de investimento",
  },
  travelerOptions: [
    "1 viajante",
    "2 viajantes",
    "3 a 4 viajantes",
    "5 a 8 viajantes",
    "Grupo (9+)",
  ],
  budgetOptions: [
    "Até R$ 25 mil por pessoa",
    "R$ 25 mil a R$ 40 mil por pessoa",
    "R$ 40 mil a R$ 70 mil por pessoa",
    "Acima de R$ 70 mil por pessoa",
    "Prefiro conversar sobre o investimento",
  ],
  fields: {
    intro: "Olá, Create Travel! Quero criar um roteiro sob medida.",
    name: "Nome",
    email: "E-mail",
    phone: "WhatsApp",
    interest: "Interesse",
    when: "Quando pretendo viajar",
    travelers: "Viajantes",
    budget: "Faixa de investimento",
    notes: "Observações",
  },
  toastError: "Não conseguimos registrar seu contato. Vamos seguir pelo WhatsApp.",
};

const en: LeadGateCopy = {
  title: "Before we talk",
  description:
    "A Create Travel advisor prepares your proposal from this short briefing — so the conversation starts exactly where it should.",
  name: "Full name",
  phone: "WhatsApp (with country code)",
  phonePlaceholder: "+1 555 000 0000",
  email: "Email",
  interest: "Destination or itinerary of interest",
  interestPlaceholder: "E.g.: Amazon, Pantanal, Rio de Janeiro",
  when: "When do you plan to travel",
  whenPlaceholder: "E.g.: July 2027",
  travelers: "Number of travellers",
  budget: "Investment range per person",
  select: "Select",
  notes: "Anything we should know (optional)",
  notesPlaceholder: "Preferred pace, celebration, accommodation preferences…",
  submit: "Continue on WhatsApp",
  skip: "I'd rather talk directly",
  privacy:
    "Your data is used only for Create Travel's service. We never share it with third parties.",
  errors: {
    name: "Please enter your full name",
    email: "Invalid email",
    phone: "Enter your WhatsApp with country code",
    interest: "Tell us the destination or itinerary",
    when: "Tell us when you plan to travel",
    travelers: "Select the number of travellers",
    budget: "Select the investment range",
  },
  travelerOptions: [
    "1 traveller",
    "2 travellers",
    "3 to 4 travellers",
    "5 to 8 travellers",
    "Group (9+)",
  ],
  budgetOptions: [
    "Up to USD 5,000 per person",
    "USD 5,000 to 8,000 per person",
    "USD 8,000 to 14,000 per person",
    "Above USD 14,000 per person",
    "I'd rather discuss the investment",
  ],
  fields: {
    intro: "Hi Create Travel! I'd like to plan a tailor-made trip.",
    name: "Name",
    email: "Email",
    phone: "WhatsApp",
    interest: "Interest",
    when: "Travel dates",
    travelers: "Travellers",
    budget: "Investment range",
    notes: "Notes",
  },
  toastError: "We couldn't save your details. Let's continue on WhatsApp.",
};

const es: LeadGateCopy = {
  title: "Antes de conversar",
  description:
    "Un asesor de Create Travel prepara tu propuesta a partir de este breve briefing — así la conversación empieza en el punto justo.",
  name: "Nombre completo",
  phone: "WhatsApp (con código de país)",
  phonePlaceholder: "+54 9 11 0000 0000",
  email: "Correo electrónico",
  interest: "Destino o itinerario de interés",
  interestPlaceholder: "Ej.: Amazonas, Pantanal, Río de Janeiro",
  when: "Cuándo planeas viajar",
  whenPlaceholder: "Ej.: julio 2027",
  travelers: "Número de viajeros",
  budget: "Rango de inversión por persona",
  select: "Selecciona",
  notes: "Algo que debamos saber (opcional)",
  notesPlaceholder: "Ritmo deseado, celebración, preferencias de alojamiento…",
  submit: "Continuar en WhatsApp",
  skip: "Prefiero hablar directamente",
  privacy:
    "Tus datos se usan solo para la atención de Create Travel. No los compartimos con terceros.",
  errors: {
    name: "Indica tu nombre completo",
    email: "Correo inválido",
    phone: "Indica tu WhatsApp con código de país",
    interest: "Dinos el destino o itinerario",
    when: "Indica cuándo planeas viajar",
    travelers: "Selecciona el número de viajeros",
    budget: "Selecciona el rango de inversión",
  },
  travelerOptions: [
    "1 viajero",
    "2 viajeros",
    "3 a 4 viajeros",
    "5 a 8 viajeros",
    "Grupo (9+)",
  ],
  budgetOptions: [
    "Hasta USD 5.000 por persona",
    "USD 5.000 a 8.000 por persona",
    "USD 8.000 a 14.000 por persona",
    "Más de USD 14.000 por persona",
    "Prefiero conversar sobre la inversión",
  ],
  fields: {
    intro: "¡Hola Create Travel! Quiero crear un viaje a medida.",
    name: "Nombre",
    email: "Correo",
    phone: "WhatsApp",
    interest: "Interés",
    when: "Fechas de viaje",
    travelers: "Viajeros",
    budget: "Rango de inversión",
    notes: "Observaciones",
  },
  toastError: "No pudimos registrar tus datos. Sigamos por WhatsApp.",
};

const it: LeadGateCopy = {
  title: "Prima di parlare",
  description:
    "Un consulente Create Travel prepara la tua proposta partendo da questo breve briefing — così la conversazione inizia dal punto giusto.",
  name: "Nome completo",
  phone: "WhatsApp (con prefisso internazionale)",
  phonePlaceholder: "+39 333 000 0000",
  email: "E-mail",
  interest: "Destinazione o itinerario di interesse",
  interestPlaceholder: "Es.: Amazzonia, Pantanal, Rio de Janeiro",
  when: "Quando pensi di viaggiare",
  whenPlaceholder: "Es.: luglio 2027",
  travelers: "Numero di viaggiatori",
  budget: "Fascia di investimento per persona",
  select: "Seleziona",
  notes: "Qualcosa che dovremmo sapere (opzionale)",
  notesPlaceholder: "Ritmo desiderato, celebrazione, preferenze di alloggio…",
  submit: "Continua su WhatsApp",
  skip: "Preferisco parlare direttamente",
  privacy:
    "I tuoi dati sono usati solo per il servizio Create Travel. Non li condividiamo con terzi.",
  errors: {
    name: "Inserisci il tuo nome completo",
    email: "E-mail non valida",
    phone: "Inserisci il WhatsApp con prefisso",
    interest: "Indica la destinazione o l'itinerario",
    when: "Indica quando pensi di viaggiare",
    travelers: "Seleziona il numero di viaggiatori",
    budget: "Seleziona la fascia di investimento",
  },
  travelerOptions: [
    "1 viaggiatore",
    "2 viaggiatori",
    "3 o 4 viaggiatori",
    "5 a 8 viaggiatori",
    "Gruppo (9+)",
  ],
  budgetOptions: [
    "Fino a USD 5.000 per persona",
    "USD 5.000 a 8.000 per persona",
    "USD 8.000 a 14.000 per persona",
    "Oltre USD 14.000 per persona",
    "Preferisco parlarne",
  ],
  fields: {
    intro: "Ciao Create Travel! Vorrei un viaggio su misura.",
    name: "Nome",
    email: "E-mail",
    phone: "WhatsApp",
    interest: "Interesse",
    when: "Date di viaggio",
    travelers: "Viaggiatori",
    budget: "Fascia di investimento",
    notes: "Note",
  },
  toastError: "Non abbiamo potuto registrare i dati. Continuiamo su WhatsApp.",
};

const de: LeadGateCopy = {
  title: "Bevor wir sprechen",
  description:
    "Ein Create-Travel-Berater erstellt Ihr Angebot auf Basis dieses kurzen Briefings — so beginnt das Gespräch genau richtig.",
  name: "Vollständiger Name",
  phone: "WhatsApp (mit Ländervorwahl)",
  phonePlaceholder: "+49 170 0000000",
  email: "E-Mail",
  interest: "Reiseziel oder Reiseroute",
  interestPlaceholder: "z. B.: Amazonas, Pantanal, Rio de Janeiro",
  when: "Wann möchten Sie reisen",
  whenPlaceholder: "z. B.: Juli 2027",
  travelers: "Anzahl der Reisenden",
  budget: "Investitionsrahmen pro Person",
  select: "Auswählen",
  notes: "Was wir wissen sollten (optional)",
  notesPlaceholder: "Gewünschtes Tempo, Anlass, Hotelvorlieben…",
  submit: "Auf WhatsApp fortfahren",
  skip: "Ich möchte direkt schreiben",
  privacy:
    "Ihre Daten werden ausschließlich für die Beratung von Create Travel genutzt. Keine Weitergabe an Dritte.",
  errors: {
    name: "Bitte geben Sie Ihren vollständigen Namen an",
    email: "Ungültige E-Mail",
    phone: "WhatsApp mit Ländervorwahl angeben",
    interest: "Nennen Sie Reiseziel oder Route",
    when: "Geben Sie Ihren Reisezeitraum an",
    travelers: "Anzahl der Reisenden auswählen",
    budget: "Investitionsrahmen auswählen",
  },
  travelerOptions: [
    "1 Reisender",
    "2 Reisende",
    "3 bis 4 Reisende",
    "5 bis 8 Reisende",
    "Gruppe (9+)",
  ],
  budgetOptions: [
    "Bis USD 5.000 pro Person",
    "USD 5.000 bis 8.000 pro Person",
    "USD 8.000 bis 14.000 pro Person",
    "Über USD 14.000 pro Person",
    "Ich spreche lieber darüber",
  ],
  fields: {
    intro: "Hallo Create Travel! Ich wünsche eine maßgeschneiderte Reise.",
    name: "Name",
    email: "E-Mail",
    phone: "WhatsApp",
    interest: "Interesse",
    when: "Reisezeitraum",
    travelers: "Reisende",
    budget: "Investitionsrahmen",
    notes: "Anmerkungen",
  },
  toastError: "Wir konnten Ihre Daten nicht speichern. Wir machen auf WhatsApp weiter.",
};

const ja: LeadGateCopy = {
  title: "お話しする前に",
  description:
    "この簡単なブリーフィングをもとに、Create Travel のコンサルタントがご提案を準備します。",
  name: "お名前（フルネーム）",
  phone: "WhatsApp（国番号付き）",
  phonePlaceholder: "+81 90 0000 0000",
  email: "メールアドレス",
  interest: "ご関心のある目的地・旅程",
  interestPlaceholder: "例：アマゾン、パンタナル、リオデジャネイロ",
  when: "ご旅行の時期",
  whenPlaceholder: "例：2027年7月",
  travelers: "ご参加人数",
  budget: "お一人あたりのご予算",
  select: "選択してください",
  notes: "ご要望（任意）",
  notesPlaceholder: "希望のペース、記念旅行、ホテルのご希望など",
  submit: "WhatsApp で続ける",
  skip: "直接メッセージを送る",
  privacy:
    "ご記入いただいた情報は Create Travel のご案内のみに使用し、第三者と共有しません。",
  errors: {
    name: "フルネームをご記入ください",
    email: "メールアドレスが正しくありません",
    phone: "国番号付きで WhatsApp 番号をご記入ください",
    interest: "目的地または旅程をご記入ください",
    when: "ご旅行の時期をご記入ください",
    travelers: "ご参加人数を選択してください",
    budget: "ご予算を選択してください",
  },
  travelerOptions: ["1名", "2名", "3〜4名", "5〜8名", "グループ（9名以上）"],
  budgetOptions: [
    "お一人 5,000 USD まで",
    "お一人 5,000〜8,000 USD",
    "お一人 8,000〜14,000 USD",
    "お一人 14,000 USD 以上",
    "相談しながら決めたい",
  ],
  fields: {
    intro: "Create Travel さん、こんにちは。オーダーメイド旅行を希望しています。",
    name: "お名前",
    email: "メール",
    phone: "WhatsApp",
    interest: "ご関心",
    when: "旅行時期",
    travelers: "人数",
    budget: "ご予算",
    notes: "備考",
  },
  toastError: "情報を保存できませんでした。WhatsApp で続けましょう。",
};

const ko: LeadGateCopy = {
  title: "대화 전에",
  description:
    "이 짧은 사전 정보를 바탕으로 Create Travel 컨설턴트가 제안서를 준비합니다.",
  name: "성명",
  phone: "WhatsApp (국가번호 포함)",
  phonePlaceholder: "+82 10 0000 0000",
  email: "이메일",
  interest: "관심 있는 목적지 또는 일정",
  interestPlaceholder: "예: 아마존, 판타나우, 리우데자네이루",
  when: "여행 예정 시기",
  whenPlaceholder: "예: 2027년 7월",
  travelers: "여행 인원",
  budget: "1인 예산 범위",
  select: "선택",
  notes: "알려주실 내용 (선택)",
  notesPlaceholder: "원하는 여행 속도, 기념 여행, 숙소 선호 등",
  submit: "WhatsApp으로 계속하기",
  skip: "바로 문의하고 싶어요",
  privacy:
    "입력하신 정보는 Create Travel 상담에만 사용되며 제3자와 공유하지 않습니다.",
  errors: {
    name: "성명을 입력해 주세요",
    email: "이메일이 올바르지 않습니다",
    phone: "국가번호를 포함해 입력해 주세요",
    interest: "목적지 또는 일정을 알려주세요",
    when: "여행 시기를 알려주세요",
    travelers: "여행 인원을 선택해 주세요",
    budget: "예산 범위를 선택해 주세요",
  },
  travelerOptions: ["1명", "2명", "3~4명", "5~8명", "그룹 (9명 이상)"],
  budgetOptions: [
    "1인 5,000 USD 이하",
    "1인 5,000~8,000 USD",
    "1인 8,000~14,000 USD",
    "1인 14,000 USD 이상",
    "상담하며 정하고 싶어요",
  ],
  fields: {
    intro: "Create Travel 안녕하세요. 맞춤 여행을 원합니다.",
    name: "이름",
    email: "이메일",
    phone: "WhatsApp",
    interest: "관심",
    when: "여행 시기",
    travelers: "인원",
    budget: "예산",
    notes: "비고",
  },
  toastError: "정보를 저장하지 못했습니다. WhatsApp으로 계속하겠습니다.",
};

const zh: LeadGateCopy = {
  title: "在开始沟通之前",
  description:
    "Create Travel 顾问会根据这份简短的需求说明为您准备专属方案。",
  name: "姓名",
  phone: "WhatsApp（含国家代码）",
  phonePlaceholder: "+86 138 0000 0000",
  email: "邮箱",
  interest: "感兴趣的目的地或行程",
  interestPlaceholder: "例如：亚马逊、潘塔纳尔、里约热内卢",
  when: "计划出行时间",
  whenPlaceholder: "例如：2027 年 7 月",
  travelers: "出行人数",
  budget: "每人预算范围",
  select: "请选择",
  notes: "其他需要我们了解的信息（选填）",
  notesPlaceholder: "行程节奏、纪念主题、住宿偏好…",
  submit: "继续使用 WhatsApp",
  skip: "我想直接联系",
  privacy: "您的信息仅用于 Create Travel 的服务，绝不与第三方共享。",
  errors: {
    name: "请填写您的姓名",
    email: "邮箱格式不正确",
    phone: "请填写含国家代码的 WhatsApp 号码",
    interest: "请告知目的地或行程",
    when: "请填写计划出行时间",
    travelers: "请选择出行人数",
    budget: "请选择预算范围",
  },
  travelerOptions: ["1 人", "2 人", "3 至 4 人", "5 至 8 人", "团队（9 人以上）"],
  budgetOptions: [
    "每人 5,000 美元以内",
    "每人 5,000 至 8,000 美元",
    "每人 8,000 至 14,000 美元",
    "每人 14,000 美元以上",
    "希望进一步沟通预算",
  ],
  fields: {
    intro: "Create Travel 你好！我想定制一次旅行。",
    name: "姓名",
    email: "邮箱",
    phone: "WhatsApp",
    interest: "兴趣",
    when: "出行时间",
    travelers: "人数",
    budget: "预算",
    notes: "备注",
  },
  toastError: "未能保存您的信息，我们直接在 WhatsApp 上继续。",
};

const ar: LeadGateCopy = {
  title: "قبل أن نتحدث",
  description:
    "يجهّز مستشار Create Travel عرضك انطلاقًا من هذا الملخص القصير، ليبدأ الحوار من النقطة الصحيحة.",
  name: "الاسم الكامل",
  phone: "واتساب (مع رمز الدولة)",
  phonePlaceholder: "+971 50 000 0000",
  email: "البريد الإلكتروني",
  interest: "الوجهة أو البرنامج المطلوب",
  interestPlaceholder: "مثال: الأمازون، بانتانال، ريو دي جانيرو",
  when: "موعد السفر المتوقع",
  whenPlaceholder: "مثال: يوليو 2027",
  travelers: "عدد المسافرين",
  budget: "نطاق الاستثمار للفرد",
  select: "اختر",
  notes: "أي تفاصيل تهمنا (اختياري)",
  notesPlaceholder: "وتيرة الرحلة، مناسبة خاصة، تفضيلات الإقامة…",
  submit: "المتابعة على واتساب",
  skip: "أفضّل التواصل مباشرة",
  privacy:
    "تُستخدم بياناتك لخدمة Create Travel فقط، ولا نشاركها مع أي طرف آخر.",
  errors: {
    name: "يرجى كتابة الاسم الكامل",
    email: "بريد إلكتروني غير صالح",
    phone: "اكتب رقم واتساب مع رمز الدولة",
    interest: "حدّد الوجهة أو البرنامج",
    when: "حدّد موعد السفر",
    travelers: "اختر عدد المسافرين",
    budget: "اختر نطاق الاستثمار",
  },
  travelerOptions: ["مسافر واحد", "مسافران", "3 إلى 4 مسافرين", "5 إلى 8 مسافرين", "مجموعة (9+)"],
  budgetOptions: [
    "حتى 5,000 دولار للفرد",
    "من 5,000 إلى 8,000 دولار للفرد",
    "من 8,000 إلى 14,000 دولار للفرد",
    "أكثر من 14,000 دولار للفرد",
    "أفضّل مناقشة الميزانية",
  ],
  fields: {
    intro: "مرحبًا Create Travel! أرغب في رحلة مصمّمة خصيصًا.",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "واتساب",
    interest: "الاهتمام",
    when: "موعد السفر",
    travelers: "المسافرون",
    budget: "الميزانية",
    notes: "ملاحظات",
  },
  toastError: "لم نتمكن من حفظ بياناتك. سنتابع على واتساب.",
};

const he: LeadGateCopy = {
  title: "לפני שנדבר",
  description:
    "יועץ Create Travel מכין את ההצעה שלך על בסיס התדריך הקצר הזה — כך השיחה מתחילה בנקודה הנכונה.",
  name: "שם מלא",
  phone: "וואטסאפ (עם קוד מדינה)",
  phonePlaceholder: "+972 50 000 0000",
  email: "אימייל",
  interest: "יעד או מסלול שמעניין אותך",
  interestPlaceholder: "לדוגמה: אמזונס, פנטנאל, ריו דה ז'ניירו",
  when: "מתי בכוונתך לטוס",
  whenPlaceholder: "לדוגמה: יולי 2027",
  travelers: "מספר המטיילים",
  budget: "טווח השקעה לאדם",
  select: "בחר",
  notes: "משהו שכדאי שנדע (אופציונלי)",
  notesPlaceholder: "קצב הטיול, אירוע מיוחד, העדפות לינה…",
  submit: "להמשיך בוואטסאפ",
  skip: "אני מעדיף לכתוב ישירות",
  privacy:
    "הנתונים שלך משמשים רק לשירות של Create Travel. איננו משתפים אותם עם צד שלישי.",
  errors: {
    name: "נא למלא שם מלא",
    email: "אימייל שגוי",
    phone: "נא למלא וואטסאפ עם קוד מדינה",
    interest: "ציין יעד או מסלול",
    when: "ציין מתי בכוונתך לטוס",
    travelers: "בחר מספר מטיילים",
    budget: "בחר טווח השקעה",
  },
  travelerOptions: ["מטייל אחד", "שני מטיילים", "3 עד 4 מטיילים", "5 עד 8 מטיילים", "קבוצה (9+)"],
  budgetOptions: [
    "עד 5,000 דולר לאדם",
    "5,000 עד 8,000 דולר לאדם",
    "8,000 עד 14,000 דולר לאדם",
    "מעל 14,000 דולר לאדם",
    "מעדיף לשוחח על ההשקעה",
  ],
  fields: {
    intro: "שלום Create Travel! אני מעוניין בטיול מותאם אישית.",
    name: "שם",
    email: "אימייל",
    phone: "וואטסאפ",
    interest: "תחום עניין",
    when: "מועד הטיול",
    travelers: "מטיילים",
    budget: "טווח השקעה",
    notes: "הערות",
  },
  toastError: "לא הצלחנו לשמור את הפרטים. נמשיך בוואטסאפ.",
};

export const LEAD_GATE_COPY: Record<Lang, LeadGateCopy> = {
  pt,
  en,
  es,
  it,
  de,
  ja,
  ko,
  zh,
  ar,
  he,
};

/** Detecta o idioma a partir do primeiro segmento da URL (rotas Incoming). */
export const detectLeadGateLang = (pathname: string): Lang => {
  const first = pathname.split("/").filter(Boolean)[0];
  return (SUPPORTED_LANGS as readonly string[]).includes(first ?? "")
    ? (first as Lang)
    : "pt";
};

export const getLeadGateCopy = (pathname: string): LeadGateCopy =>
  LEAD_GATE_COPY[detectLeadGateLang(pathname)];
