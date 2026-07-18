import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "currency-exchange",
    icon: "ArrowLeftRight",
    title: { fr: "Change de devises", en: "Currency Exchange", ar: "صرف العملات" },
    description: {
      fr: "Changez vos euros, dollars, livres et autres devises aux meilleurs taux du marché, sans commission.",
      en: "Exchange your euros, dollars, pounds and other currencies at the best market rates, commission-free.",
      ar: "صرف اليورو والدولار والجنيه والعملات الأخرى بأفضل أسعار السوق وبدون عمولة.",
    },
    details: {
      fullDescription: {
        fr: "Notre service de change de devises vous permet d'échanger vos euros, dollars, livres sterling, francs suisses, dirhams des EAU, riyals saoudiens et plus encore aux meilleurs taux du marché. Nous garantissons des taux transparents, une exécution rapide et aucune commission cachée. Que vous voyagiez pour le plaisir ou les affaires, notre équipe professionnelle est à votre disposition pour un service de qualité.",
        en: "Our currency exchange service allows you to exchange euros, US dollars, British pounds, Swiss francs, UAE dirhams, Saudi riyals and more at the best market rates. We guarantee transparent rates, fast execution and no hidden fees. Whether you're traveling for pleasure or business, our professional team is at your disposal for quality service.",
        ar: "يتيح لك خدمة صرف العملات لدينا صرف اليورو والدولار الأمريكي والجنيه الإسترليني والفرنك السويسري والدرهم الإماراتي والريال السعودي والمزيد بأفضل أسعار السوق. نحن نضمن أسعاراً شفافة وتنفيذ سريع وبدون رسوم مخفية. سواء كنت تسافер للترفيه أو الأعمال، فريقنا المحترف في خدمتك لتقديم خدمة عالية الجودة.",
      },
      documents: {
        fr: ["Carte nationale d'identité", "Passeport valide", "Justificatif de domicile (optionnel)"],
        en: ["National ID card", "Valid passport", "Proof of address (optional)"],
        ar: ["بطاقة هوية وطنية", "جواز سفر ساري المفعول", "إثبات العنوان (اختياري)"],
      },
      process: {
        fr: [
          "Présentez-vous à notre guichet avec vos devises",
          "Indiquez le montant et la devise souhaitée",
          "Recevez votre contre-valeur en dirhams marocains",
          "Remplissez le formulaire de change si nécessaire",
          "Recevez votre reçu et les fonds",
        ],
        en: [
          "Visit our counter with your currencies",
          "Indicate the amount and desired currency",
          "Receive your equivalent in Moroccan dirhams",
          "Fill out the exchange form if needed",
          "Receive your receipt and funds",
        ],
        ar: [
          "قم بزيارة صرافتنا مع عملاتك",
          "حدد المبلغ والعملة المطلوبة",
          "احصل على قيمتك المقابلة بالدرهم المغربي",
          "املأ نموذج الصرف إذا لزم الأمر",
          "احصل على الإيصال والأموال",
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
      fr: "Bénéficiez de votre dotation touristique officielle pour vos voyages à l'étranger.",
      en: "Get your official tourist allowance for your trips abroad.",
      ar: "احصل على مخصصك السياحي الرسمي لرحلاتك إلى الخارج.",
    },
    details: {
      fullDescription: {
        fr: "La dotation touristique est un montant en devises étrangères auquel tout ressortissant marocain a droit pour ses voyages à l'étranger. Nous vous aidons à obtenir votre dotation officielle aux taux les plus avantageux. Ce service est disponible pour tous les voyageurs partant pour des vacances, des visites familiales ou des séjours touristiques.",
        en: "The tourist allowance is an amount in foreign currency that every Moroccan citizen is entitled to for their trips abroad. We help you obtain your official allowance at the most favorable rates. This service is available to all travelers departing for holidays, family visits or tourist stays.",
        ar: "المخصص السياحي هو مبلغ بالعملات الأجنبية يحق لكل مواطن مغربي الحصول عليه لرحلاته إلى الخارج. نساعدك في الحصول على مخصصك الرسمي بأفضل الأسعار. هذه الخدمة متاحة لجميع المسافرين المغادرين للعطل أو الزيارات العائلية أو الإقامات السياحية.",
      },
      documents: {
        fr: ["Carte nationale d'identité en cours de validité", "Passeport (si disponible)", "Billet d'avion ou réservation de voyage"],
        en: ["Valid national ID card", "Passport (if available)", "Flight ticket or travel reservation"],
        ar: ["بطاقة هوية وطنية سارية المفعول", "جواز سفر (إذا كان متاحاً)", "تذكرة طيران أو حجز سفر"],
      },
      process: {
        fr: [
          "Présentez-vous avec votre pièce d'identité",
          "Indiquez votre destination et la durée du voyage",
          "Recevez votre dotation en devises",
          "Vérifiez le montant et les taux appliqués",
          "Signez le reçu de change",
        ],
        en: [
          "Visit us with your ID",
          "Indicate your destination and trip duration",
          "Receive your allowance in foreign currency",
          "Verify the amount and rates applied",
          "Sign the exchange receipt",
        ],
        ar: [
          "قم بزيارتنا بهويتك",
          "حدد وجهتك ومدة الرحلة",
          "احصل على مخصصك بالعملة الأجنبية",
          "تحقق من المبلغ والأسعار المطبقة",
          "وقّع إيصال الصرف",
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
      fr: "Préparez votre pèlerinage en toute sérénité avec notre service de change dédié.",
      en: "Prepare for your pilgrimage with peace of mind with our dedicated exchange service.",
      ar: "استعد لحجك بطمأنينة مع خدمة الصرف المخصصة لدينا.",
    },
    details: {
      fullDescription: {
        fr: "Notre service de dotation pèlerinage est spécialement conçu pour les fidèles partant en pèlerinage à La Mecque ou Médine. Nous vous fournissons les devises nécessaires (riyals saoudiens) aux meilleurs taux, avec un service rapide et personnalisé. Notre équipe vous accompagne dans toutes les démarches pour que votre pèlerinage se déroule en toute sérénité.",
        en: "Our pilgrimage allowance service is specially designed for pilgrims traveling to Mecca or Medina. We provide you with the necessary currencies (Saudi riyals) at the best rates, with fast and personalized service. Our team supports you in all the steps to ensure your pilgrimage goes smoothly.",
        ar: "خدمة مخصص الحج مصممة خصيصاً للحجاج المتجهين إلى مكة المكرمة أو المدينة المنورة. نوفر لك العملات اللازمة (الريال السعودي) بأفضل الأسعار، مع خدمة سريعة وشخصية. فريقنا يرافقك في جميع الخطوات لضمان أن يمر حجك بسلاسة.",
      },
      documents: {
        fr: ["Carte nationale d'identité", "Passeport valide", "Justificatif de pèlerinage (attestation de la CFC ou agence)"],
        en: ["National ID card", "Valid passport", "Pilgrimage proof (CFC or agency certificate)"],
        ar: ["بطاقة هوية وطنية", "جواز سفر ساري المفعول", "إثبات الحج (شهادة المجلس أو الوكالة)"],
      },
      process: {
        fr: [
          "Présentez vos documents de pèlerinage",
          "Indiquez le montant souhaité en riyals",
          "Recevez votre dotation en riyals saoudiens",
          "Vérifiez les taux et le montant total",
          "Obtenez votre reçu de change",
        ],
        en: [
          "Present your pilgrimage documents",
          "Indicate the desired amount in riyals",
          "Receive your allowance in Saudi riyals",
          "Verify the rates and total amount",
          "Get your exchange receipt",
        ],
        ar: [
          "قدم وثائق حجك",
          "حدد المبلغ المطلوب بالريالات",
          "احصل على مخصصك بالريال السعودي",
          "تحقق من الأسعار والمبلغ الإجمالي",
          "احصل على إيصال الصرف",
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
      fr: "Financez vos études ou celles de vos enfants à l'étranger avec des taux avantageux.",
      en: "Fund your studies or your children's studies abroad with favorable rates.",
      ar: "ممول دراساتك أو دراسات أطفالك في الخارج بأسعار مميزة.",
    },
    details: {
      fullDescription: {
        fr: "Notre service de dotation scolaire est dédié aux étudiants et aux familles qui financent des études à l'étranger. Nous offrons des taux avantageux pour les devises nécessaires au paiement des frais de scolarité, du logement et des dépenses courantes. Profitez de notre expertise pour optimiser vos transferts vers les établissements d'enseignement à l'international.",
        en: "Our education allowance service is dedicated to students and families funding studies abroad. We offer favorable rates for the currencies needed to pay tuition fees, accommodation and daily expenses. Take advantage of our expertise to optimize your transfers to international educational institutions.",
        ar: "خدمة المخصص المدرسي مخصصة للطلاب والعائلات التي تمول الدراسة في الخارج. نقدم أسعاراً مميزة للعملات اللازمة لدفع الرسوم الدراسية والسكن والمصاريف اليومية. استفد من خبرتنا لتحسين تحويلاتك إلى المؤسسات التعليمية الدولية.",
      },
      documents: {
        fr: ["Carte nationale d'identité", "Passeport valide", "Attestation d'inscription universitaire", "Devis de frais de scolarité"],
        en: ["National ID card", "Valid passport", "University enrollment certificate", "Tuition fee quote"],
        ar: ["بطاقة هوية وطنية", "جواز سفر ساري المفعول", "شهادة التسجيل الجامعي", "عرض أسعار الرسوم الدراسية"],
      },
      process: {
        fr: [
          "Présentez vos documents d'inscription",
          "Indiquez la devise et le montant des frais",
          "Recevez votre dotation en devises",
          "Vérifiez le taux et le montant total",
          "Effectuez le virement ou recevez les fonds",
        ],
        en: [
          "Present your enrollment documents",
          "Indicate the currency and fee amount",
          "Receive your allowance in foreign currency",
          "Verify the rate and total amount",
          "Make the transfer or receive the funds",
        ],
        ar: [
          "قدم وثائق تسجيلك",
          "حدد العملة ومبلغ الرسوم",
          "احصل على مخصصك بالعملة الأجنبية",
          "تحقق من السعر والمبلغ الإجمالي",
          "قم بالتحويل أو استلم الأموال",
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
    title: { fr: "Missions professionnelles", en: "Business Missions", ar: "المهام المهنية" },
    description: {
      fr: "Change rapide et sécurisé pour vos déplacements professionnels à l'international.",
      en: "Fast and secure exchange for your international business trips.",
      ar: "صرف سريع وآمن لرحلاتك التجارية الدولية.",
    },
    details: {
      fullDescription: {
        fr: "Notre service de change professionnel est conçu pour les entreprises et les professionnels qui voyagent fréquemment à l'international. Nous offrons des taux préférentiels, un service rapide et des montants élevés disponibles immédiatement. Que ce soit pour des déplacements d'affaires, des salons professionnels ou des missions à l'étranger, nous répondons à vos besoins en change avec efficacité.",
        en: "Our professional exchange service is designed for businesses and professionals who frequently travel internationally. We offer preferential rates, fast service and large amounts available immediately. Whether for business trips, trade shows or missions abroad, we meet your exchange needs efficiently.",
        ar: "خدمة الصرف المهني مصممة للشركات والمهنيين الذين يسافرون كثيراً إلى الخارج. نقدم أسعاراً تفضيلية وخدمة سريعة ومبالغ كبيرة متاحة فوراً. سواء للرحلات التجارية أو المعارض المهنية أو المهام في الخارج، نلبي احتياجاتك في الصرف بكفاءة.",
      },
      documents: {
        fr: ["Carte nationale d'identité ou passeport", "Badge professionnel ou carte d'entreprise", "Invitation ou programme de mission"],
        en: ["National ID card or passport", "Professional badge or business card", "Mission invitation or program"],
        ar: ["بطاقة هوية وطنية أو جواز سفر", "بادج مهني أو بطاقة عمل", "دعوة أو برنامج المهمة"],
      },
      process: {
        fr: [
          "Contactez-nous à l'avance pour les montants importants",
          "Présentez vos documents professionnels",
          "Indiquez la devise et le montant souhaité",
          "Recevez vos devises rapidement",
          "Obtenez votre reçu détaillé",
        ],
        en: [
          "Contact us in advance for large amounts",
          "Present your professional documents",
          "Indicate the currency and desired amount",
          "Receive your currencies quickly",
          "Get your detailed receipt",
        ],
        ar: [
          "اتصل بنا مسبقاً للمبالغ الكبيرة",
          "قدم وثائقك المهنية",
          "حدد العملة والمبلغ المطلوب",
          "احصل على عملاتك بسرعة",
          "احصل على إيصال مفصل",
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
    title: { fr: "Stages à l'étranger", en: "Internships Abroad", ar: "التمارين في الخارج" },
    description: {
      fr: "Préparez votre stage international avec les fonds nécessaires en toute simplicité.",
      en: "Prepare for your international internship with the necessary funds with ease.",
      ar: "استعد لتدريبك الدولي بالأموال اللازمة بسهولة.",
    },
    details: {
      fullDescription: {
        fr: "Notre service de dotation stage est spécialement adapté aux jeunes professionnels et étudiants partant en stage à l'étranger. Nous vous fournissons les devises nécessaires pour couvrir vos frais de transport, hébergement et vie courante. Profitez de taux avantageux et d'un service personnalisé pour bien préparer votre expérience internationale.",
        en: "Our internship allowance service is specifically tailored for young professionals and students going abroad for internships. We provide you with the necessary currencies to cover your transportation, accommodation and daily living expenses. Enjoy favorable rates and personalized service to prepare well for your international experience.",
        ar: "خدمة مخصص التدريب مصممة خصيصاً للمهنيين الشباب والطلاب المتجهين إلى الخارج للتدريب. نوفر لك العملات اللازمة لتغطية نفقات النقل والسكن والمصاريف اليومية. استمتع بأسعار مميزة وخدمة شخصية للتحضير جيداً لتجربتك الدولية.",
      },
      documents: {
        fr: ["Carte nationale d'identité", "Passeport valide", "Attestation de stage ou convention de stage"],
        en: ["National ID card", "Valid passport", "Internship certificate or agreement"],
        ar: ["بطاقة هوية وطنية", "جواز سفر ساري المفعول", "شهادة تدريب أو اتفاقية تدريب"],
      },
      process: {
        fr: [
          "Présentez votre convention de stage",
          "Indiquez la destination et la durée",
          "Choisissez la devise et le montant",
          "Recevez votre dotation en devises",
          "Vérifiez et signez le reçu",
        ],
        en: [
          "Present your internship agreement",
          "Indicate the destination and duration",
          "Choose the currency and amount",
          "Receive your allowance in foreign currency",
          "Verify and sign the receipt",
        ],
        ar: [
          "قدم اتفاقية تدريبك",
          "حدد الوجهة والمدة",
          "اختر العملة والمبلغ",
          "احصل على مخصصك بالعملة الأجنبية",
          "تحقق ووقّع الإيصال",
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
