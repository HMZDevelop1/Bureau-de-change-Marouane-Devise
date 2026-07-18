import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "currency-exchange",
    icon: "ArrowLeftRight",
    title: { fr: "Change de devises", en: "Currency Exchange", ar: "صرف العملات" },
    description: {
      fr: "Échangez vos euros, dollars, livres et autres devises aux meilleurs taux du marché, sans commission.",
      en: "Exchange your euros, dollars, pounds and more at the best market rates, commission-free.",
      ar: "صرف اليورو والدولار والجنيه والعملات الأخرى بأفضل أسعار السوق وبدون عمولة.",
    },
    details: {
      fullDescription: {
        fr: "Échangez toutes vos devises aux meilleurs taux. EUR, USD, GBP, CHF, AED, SAR et plus encore. Taux transparents, exécution immédiate, zéro frais cachés. Notre équipe vous accompagne pour chaque transaction.",
        en: "Exchange all your currencies at the best rates. EUR, USD, GBP, CHF, AED, SAR and more. Transparent rates, instant execution, zero hidden fees. Our team is here for every transaction.",
        ar: "صرف جميع عملاتك بأفضل الأسعار. اليورو والدولار والجنيه والفرنك السويسري والدرهم الإماراتي والريال السعودي والمزيد. أسعار شفافة، تنفيذ فوري، بدون رسوم مخفية. فريقنا يرافقك في كل معاملة.",
      },
      documents: {
        fr: ["Carte nationale d'identité", "Passeport valide", "Justificatif de domicile (optionnel)"],
        en: ["National ID card", "Valid passport", "Proof of address (optional)"],
        ar: ["بطاقة هوية وطنية", "جواز سفر ساري المفعول", "إثبات العنوان (اختياري)"],
      },
      process: {
        fr: [
          "Présentez-vous avec vos devises",
          "Indiquez le montant souhaité",
          "Recevez vos dirhams immédiatement",
          "Signez et récupérez votre reçu",
          "C'est terminé",
        ],
        en: [
          "Bring your currencies",
          "Tell us the amount you need",
          "Receive your dirhams instantly",
          "Sign and collect your receipt",
          "All done",
        ],
        ar: [
          "أحضر عملاتك",
          "أخبرنا بالمبلغ المطلوب",
          "استلم دراهمك فوراً",
          "وقّع واستلم إيصالك",
          "انتهيت"
        ],
      },
      estimatedTime: {
        fr: "5 à 10 minutes",
        en: "5 to 10 minutes",
        ar: "5 إلى 10 دقائق",
      },
    },
  },
  {
    id: "tourist-allowance",
    icon: "Plane",
    title: { fr: "Dotation touristique", en: "Tourist Allowance", ar: "المخصص السياحي" },
    description: {
      fr: "Obtenez votre dotation touristique officielle pour voyager l'esprit tranquille.",
      en: "Get your official tourist allowance and travel with peace of mind.",
      ar: "احصل على مخصصك السياحي الرسمي وسافر بأمان.",
    },
    details: {
      fullDescription: {
        fr: "Chaque citoyen marocain a droit à une dotation en devises pour ses voyages à l'étranger. Nous vous aidons à obtenir votre dotation officielle aux meilleurs taux. Disponible pour toutes les destinations, vacances ou visites familiales.",
        en: "Every Moroccan citizen is entitled to a foreign currency allowance for travel abroad. We help you get your official allowance at the best rates. Available for all destinations, holidays or family visits.",
        ar: "يحق لكل مواطن مغربي الحصول على مخصص بالعملات الأجنبية للسفر إلى الخارج. نساعدك في الحصول على مخصصك الرسمي بأفضل الأسعار. متاح لجميع الوجهات والعطل والزيارات العائلية.",
      },
      documents: {
        fr: ["Carte nationale d'identité valide", "Passeport (si disponible)", "Billet d'avion ou réservation"],
        en: ["Valid national ID card", "Passport (if available)", "Flight ticket or booking"],
        ar: ["بطاقة هوية وطنية سارية المفعول", "جواز سفر (إذا كان متاحاً)", "تذكرة طيران أو حجز"],
      },
      process: {
        fr: [
          "Présentez votre pièce d'identité",
          "Indiquez votre destination",
          "Recevez vos devises",
          "Vérifiez le montant",
          "Signez et partez l'esprit tranquille",
        ],
        en: [
          "Bring your ID",
          "Tell us your destination",
          "Receive your foreign currency",
          "Check the amount",
          "Sign and travel worry-free",
        ],
        ar: [
          "أحضر هويتك",
          "أخبرنا بوجهتك",
          "استلم عملاتك الأجنبية",
          "تحقق من المبلغ",
          "وقّع وسافر بهدوء"
        ],
      },
      estimatedTime: {
        fr: "10 à 15 minutes",
        en: "10 to 15 minutes",
        ar: "10 إلى 15 دقيقة",
      },
    },
  },
  {
    id: "pilgrimage",
    icon: "Compass",
    title: { fr: "Dotation pèlerinage", en: "Pilgrimage Allowance", ar: "مخصص الحج" },
    description: {
      fr: "Préparez votre pèlerinage en sérénité avec notre service de change dédié.",
      en: "Prepare for your pilgrimage with our dedicated exchange service.",
      ar: "استعد لحجك مع خدمة الصرف المخصصة لدينا.",
    },
    details: {
      fullDescription: {
        fr: "Service spécialisé pour les pèlerins partant à La Mecque ou Médine. Riyals saoudiens aux meilleurs taux, avec un accompagnement personnalisé. Nous simplifions toutes les démarches pour que votre pèlerinage se déroule en paix.",
        en: "Specialized service for pilgrims traveling to Mecca or Medina. Saudi riyals at the best rates, with personalized support. We handle all the details so your pilgrimage goes smoothly.",
        ar: "خدمة مخصصة للحجاج المتجهين إلى مكة أو المدينة. ريال سعودي بأفضل الأسعار مع مرافقة شخصية. نتولى جميع التفاصيل لضمان رحلة حجك بسلاسة.",
      },
      documents: {
        fr: ["Carte nationale d'identité", "Passeport valide", "Attestation de pèlerinage"],
        en: ["National ID card", "Valid passport", "Pilgrimage certificate"],
        ar: ["بطاقة هوية وطنية", "جواز سفر ساري المفعول", "شهادة الحج"],
      },
      process: {
        fr: [
          "Présentez vos documents",
          "Indiquez le montant en riyals",
          "Recevez votre dotation",
          "Vérifiez les taux",
          "Repartez l'esprit serein",
        ],
        en: [
          "Present your documents",
          "Tell us the amount in riyals",
          "Receive your allowance",
          "Verify the rates",
          "Leave with peace of mind",
        ],
        ar: [
          "قدم وثائقك",
          "حدد المبلغ بالريالات",
          "استلم مخصصك",
          "تحقق من الأسعار",
          "انطلق بطمأنينة"
        ],
      },
      estimatedTime: {
        fr: "15 à 20 minutes",
        en: "15 to 20 minutes",
        ar: "15 إلى 20 دقيقة",
      },
    },
  },
  {
    id: "education",
    icon: "GraduationCap",
    title: { fr: "Scolarité", en: "Education", ar: "المخصص المدرسي" },
    description: {
      fr: "Financez vos études à l'étranger avec des taux avantageux.",
      en: "Fund your studies abroad at favorable rates.",
      ar: "ممول دراستك في الخارج بأسعار مميزة.",
    },
    details: {
      fullDescription: {
        fr: "Dédié aux étudiants et familles qui financent des études à l'étranger. Taux avantageux pour les frais de scolarité, logement et dépenses courantes. Nous optimisons vos transferts vers les établissements internationaux.",
        en: "For students and families funding studies abroad. Favorable rates for tuition, accommodation and daily expenses. We optimize your transfers to international institutions.",
        ar: "مخصص للطلاب والعائلات الممولة للدراسة في الخارج. أسعار مميزة للرسوم الدراسية والسكن والمصاريف اليومية. نحسّن تحويلاتك إلى المؤسسات التعليمية الدولية.",
      },
      documents: {
        fr: ["Carte nationale d'identité", "Passeport valide", "Attestation d'inscription", "Devis de frais"],
        en: ["National ID card", "Valid passport", "Enrollment certificate", "Fee quote"],
        ar: ["بطاقة هوية وطنية", "جواز سفر ساري المفعول", "شهادة التسجيل", "عرض أسعار الرسوم"],
      },
      process: {
        fr: [
          "Présentez vos documents d'inscription",
          "Indiquez la devise et le montant",
          "Recevez vos fonds",
          "Effectuez le virement",
          "C'est fait",
        ],
        en: [
          "Present your enrollment documents",
          "Specify the currency and amount",
          "Receive your funds",
          "Make the transfer",
          "All set",
        ],
        ar: [
          "قدم وثائق تسجيلك",
          "حدد العملة والمبلغ",
          "استلم أموالك",
          "قم بالتحويل",
          "تم"
        ],
      },
      estimatedTime: {
        fr: "15 à 25 minutes",
        en: "15 to 25 minutes",
        ar: "15 إلى 25 دقيقة",
      },
    },
  },
  {
    id: "business",
    icon: "Briefcase",
    title: { fr: "Missions professionnelles", en: "Business Trips", ar: "الرحلات المهنية" },
    description: {
      fr: "Change rapide et sécurisé pour vos déplacements professionnels.",
      en: "Fast and secure exchange for your business trips.",
      ar: "صرف سريع وآمن لرحلاتك المهنية.",
    },
    details: {
      fullDescription: {
        fr: "Pour les entreprises et professionnels qui voyagent souvent à l'étranger. Taux préférentiels, gros montants disponibles immédiatement. Salons, déplacements, missions, nous répondons à vos besoins en quelques minutes.",
        en: "For businesses and professionals who travel frequently. Preferential rates, large amounts available immediately. Conferences, trips, missions, we meet your needs in minutes.",
        ar: "للشركات والمهنيين الذين يسافرون بكثرة. أسعار تفضيلية، مبالغ كبيرة متاحة فوراً. معارض ورحلات ومهام، نلبي احتياجاتك في دقائق.",
      },
      documents: {
        fr: ["Carte d'identité ou passeport", "Badge professionnel", "Invitation ou programme"],
        en: ["ID card or passport", "Professional badge", "Invitation or program"],
        ar: ["بطاقة هوية أو جواز سفر", "بادج مهني", "دعوة أو برنامج"],
      },
      process: {
        fr: [
          "Contactez-nous à l'avance si besoin",
          "Présentez vos documents",
          "Choisissez votre devise",
          "Recevez vos fonds rapidement",
          "Récupérez votre reçu",
        ],
        en: [
          "Contact us in advance if needed",
          "Present your documents",
          "Choose your currency",
          "Receive your funds quickly",
          "Get your receipt",
        ],
        ar: [
          "اتصل بنا مسبقاً إن لزم",
          "قدم وثائقك",
          "اختر عملتك",
          "استلم أموالك بسرعة",
          "احصل على إيصالك"
        ],
      },
      estimatedTime: {
        fr: "5 à 15 minutes",
        en: "5 to 15 minutes",
        ar: "5 إلى 15 دقيقة",
      },
    },
  },
  {
    id: "internship",
    icon: "Building2",
    title: { fr: "Stages à l'étranger", en: "Internships Abroad", ar: "التدريب في الخارج" },
    description: {
      fr: "Préparez votre stage international avec les fonds nécessaires.",
      en: "Get the funds you need for your international internship.",
      ar: "احصل على الأموال اللازمة لتدريبك الدولي.",
    },
    details: {
      fullDescription: {
        fr: "Pour les jeunes professionnels et étudiants partant en stage à l'étranger. Devises pour transport, hébergement et vie courante. Taux avantageux et service personnalisé pour bien démarrer votre expérience.",
        en: "For young professionals and students going abroad for internships. Currencies for transport, accommodation and daily expenses. Favorable rates and personalized service to start your experience right.",
        ar: "للمهنيين الشباب والطلاب المتجهين إلى الخارج للتدريب. عملات للنقل والسكن والمصاريف اليومية. أسعار مميزة وخدمة شخصية لبداية جيدة لتجربتك.",
      },
      documents: {
        fr: ["Carte nationale d'identité", "Passeport valide", "Convention de stage"],
        en: ["National ID card", "Valid passport", "Internship agreement"],
        ar: ["بطاقة هوية وطنية", "جواز سفر ساري المفعول", "اتفاقية التدريب"],
      },
      process: {
        fr: [
          "Présentez votre convention",
          "Indiquez la destination et la durée",
          "Choisissez la devise et le montant",
          "Recevez vos fonds",
          "Vérifiez et signez",
        ],
        en: [
          "Present your agreement",
          "Tell us the destination and duration",
          "Choose the currency and amount",
          "Receive your funds",
          "Verify and sign",
        ],
        ar: [
          "قدم اتفاقيتك",
          "حدد الوجهة والمدة",
          "اختر العملة والمبلغ",
          "استلم أموالك",
          "تحقق ووقّع"
        ],
      },
      estimatedTime: {
        fr: "10 à 20 minutes",
        en: "10 to 20 minutes",
        ar: "10 إلى 20 دقيقة",
      },
    },
  },
];
