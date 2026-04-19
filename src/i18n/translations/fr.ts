import type { TranslationKeys } from './fr';
export const fr: TranslationKeys = {

  // Site
  site: {
    title: 'Seguridad Online',
    description: "Organisation indépendante dédiée à l'audit numérique. Nous enquêtons sur les signalements d'infractions, envoyons des notifications préventives et gérons les cas auprès des fournisseurs.",
  },

  // Navigation
  nav: {
    home: 'Accueil',
    audit: 'Audit',
    about: 'À propos',
    contact: 'Contact',
    donate: 'Faire un don',
    terms: 'Conditions',
    privacy: 'Confidentialité',
    cookies: 'Cookies',
  },

  // Accueil
  home: {
    meta: {
    title: "Organisation Indépendante de Protection Numérique",
    description: "Organisation indépendante dédiée à l'audit numérique. Nous enquêtons sur les signalements d'infractions, envoyons des notifications préventives et gérons les cas auprès des fournisseurs."
  },
  hero: {
    badge: "Organisation Indépendante",
    titleStart: "Bienvenue sur",
    titleHighlight: "Seguridad Online",
    titleEnd: ".",
    description: "Nous agissons en tant que médiateur pour maintenir l'environnement numérique sûr. Nous recevons des signalements, enquêtons sur les violations des politiques d'utilisation et notifions les responsables afin qu'ils corrigent la situation avant d'escalader le cas auprès des fournisseurs.",
    btnPrimary: "Envoyer un signalement",
    btnSecondary: "Découvrir notre processus",
    features: [
      "Processus 100% Anonyme",
      "Révision par des Humains",
      "Rapports Institutionnels"
    ]
  },
  coverage: {
    title: "Notre champ d'action",
    description: "Nous nous concentrons sur les audits de contenu où les systèmes automatisés ont tendance à échouer, en privilégiant un environnement sain.",
    items: [
      {
        title: "Prévention des Contenus Inappropriés",
        description: "Nous auditons les cas de contenu pour adultes (tels que des liens, tutoriels ou promotions) hébergés de manière inappropriée sur des plateformes publiques accessibles aux mineurs."
      },
      {
        title: "Pratiques Non Éthiques",
        description: "Nous enquêtons sur les sites trompeurs, les tentatives d'hameçonnage (phishing) et collectons les informations pour notifier les fournisseurs d'hébergement ou de domaine."
      },
      {
        title: "Droits d'Auteur",
        description: "Nous agissons en tant que représentants pour gérer les réclamations de droits d'auteur, en demandant le retrait de la propriété intellectuelle copiée ou distribuée sans autorisation."
      }
    ]
  },
  whyUs: {
    title: "Un processus d'audit formel et indépendant.",
    description: "Les contrevenants contournent souvent les signalements automatisés des réseaux sociaux. <strong>Seguridad Online</strong> fonctionne différemment : nous utilisons du temps et des ressources humaines pour constituer des dossiers complets.",
    items: [
      {
        title: "Analyse Détaillée",
        description: "Nous prenons le temps de collecter des données publiques, des moyens de contact et de vérifier les termes spécifiques qui sont enfreints."
      },
      {
        title: "Avis Préventif",
        description: "Avant d'escalader auprès du fournisseur, nous donnons à l'utilisateur un avis clair sur ses infractions, lui offrant la possibilité de les corriger sans risquer la perte de son compte ou de son site."
      },
      {
        title: "Communication Professionnelle",
        description: "Les fournisseurs et plateformes Internet font confiance à nos rapports car nous envoyons une documentation claire, bien organisée et depuis les adresses email institutionnelles de l'organisation."
      }
    ],
    sidebar: {
      title: "Un traitement humain et direct",
      description: "Votre signalement sera toujours géré par une personne réelle. Notre équipe communiquera avec vous par des emails clairs pour vous tenir informé.",
      mails: [
        {
          title: "Email de Confirmation :",
          description: "Nous vous informons que nous avons reçu votre signalement et que nous allons commencer l'enquête."
        },
        {
          title: "Email de Demande (Optionnel) :",
          description: "Si nous avons besoin de plus de contexte, un agent vous écrira pour demander des détails supplémentaires."
        },
        {
          title: "Email de Résolution :",
          description: "Nous vous informons du résultat (si l'utilisateur a retiré le contenu ou si nous avons escaladé le cas à la plateforme)."
        }
      ]
    }
  },
  process: {
    title: "Notre Méthodologie d'Action",
    description: "Un processus standardisé en 6 étapes pour garantir des résolutions équitables et objectives qui protègent votre vie privée à tout moment.",
    items: [
      { step: "01", title: "Réception", desc: "L'utilisateur soumet son signalement via le site web ou par email. Nous l'enregistrons de manière sécurisée dans notre base temporaire." },
      { step: "02", title: "Analyse des Politiques", desc: "Nous vérifions si la situation décrite enfreint les conditions d'utilisation (CGU) du fournisseur ou de la plateforme concernée." },
      { step: "03", title: "Enquête", desc: "Nous collectons des liens, des coordonnées publiques et observons s'il existe d'autres infractions liées au cas." },
      { step: "04", title: "Avis de Conformité", desc: "Nous contactons le responsable en indiquant quelles réglementations il enfreint, lui donnant la possibilité de les résoudre volontairement." },
      { step: "05", title: "Délai d'Attente", desc: "Nous accordons une période (entre 24 heures et une semaine, selon l'urgence) à l'utilisateur pour retirer ou corriger le contenu signalé." },
      { step: "06", title: "Escalade", desc: "En l'absence de coopération, nous envoyons un rapport institutionnel avec les preuves au fournisseur ou à la plateforme pour qu'ils prennent des mesures." }
    ]
  },
  faq: {
    title: "Questions Fréquentes",
    description: "Des informations claires pour ceux qui souhaitent soumettre un signalement.",
    items: [
      { q: "L'utilisateur signalé saura-t-il que c'est moi ?", a: "En aucun cas. Votre signalement est 100% anonyme. Nous ne stockons pas de données personnelles et l'avis de conformité est toujours envoyé au nom de l'organisation 'Seguridad Online', jamais au nom du demandeur." },
      { q: "Traitez-vous les cas de vol de compte, de piratage ou de support technique ?", a: "Non. Seguridad Online n'est pas un service de support technique pour récupérer des comptes personnels. Nous nous consacrons exclusivement à l'audit des violations des réglementations des plateformes. Si vous avez perdu votre compte, vous devez contacter le support officiel de ce réseau." },
      { q: "Signalez-vous des crimes graves tels que des ventes illégales ou des actes criminels ?", a: "Non. Nous gérons les violations des politiques de service dans le domaine numérique (par ex. contenu inapproprié dans des zones accessibles aux mineurs, hameçonnage). Pour les crimes graves ou les situations d'urgence légale, nous vous recommandons de contacter directement les autorités ou forces de sécurité de votre pays." },
      { q: "Combien de temps dure le processus d'audit ?", a: "Vous recevrez notre premier email de confirmation de réception très rapidement. Ensuite, les délais de résolution varient, accordant à l'utilisateur notifié entre 24 heures et une semaine pour corriger l'infraction." },
      { q: "Le service de signalement est-il payant ?", a: "Non, l'intégralité de notre processus est totalement gratuite. Nous fonctionnons comme une organisation indépendante financée uniquement par des dons volontaires de ceux qui soutiennent l'initiative." }
    ]
  },
  donations: {
    title: "Soutenez Seguridad Online",
    description: "Notre organisation est entièrement soutenue par des dons volontaires. Votre contribution nous aide à couvrir l'hébergement, le domaine et à continuer à investir le temps nécessaire pour gérer chaque signalement avec sérieux et professionnalisme.",
    privacyNoteTitle: "Note de confidentialité :",
    privacyNote: "Les dons sont totalement anonymes et n'accordent aucun avantage ou fonctionnalité supplémentaire lors des signalements.",
    btn: "Faire un don"
  }
},

// Audit
audit: {
    meta: {
      title: "Audit et Conformité",
      description: "Informations officielles sur les avis d'infraction, les délais de conformité et le processus d'appel de Seguridad Online."
    },
    hero: {
      badge: "Département d'Audit",
      title: "Informations sur les Avis d'Infraction",
      description: "Cette page est destinée aux utilisateurs, administrateurs de sites web ou titulaires de comptes qui ont reçu une <strong>Notification de Conformité</strong> de notre organisation."
    },
    notice: {
      title: "Consultez votre notification personnelle",
      description: "Les informations présentées sur cette page sont de nature générale. <strong>Les détails spécifiques de votre cas</strong> (liens exacts, politiques que vous enfreignez et délai limite exact pour les résoudre) <strong>sont détaillés dans l'email ou le message direct que nous vous avons envoyé.</strong>"
    },
    protocol: {
      title: "Protocole d'Action et Conséquences",
      reason: {
        title: "1. Pourquoi ai-je reçu un avis ?",
        description: "Nos analystes ont enquêté sur un signalement ou détecté de manière proactive que votre compte, publication ou site web enfreint directement les <strong>Conditions d'Utilisation (CGU)</strong> de la plateforme où il est hébergé. Les infractions les plus courantes que nous auditons comprennent : l'exposition des mineurs à du contenu inapproprié, l'usurpation d'identité (hameçonnage) ou les violations des droits d'auteur."
      },
      deadlines: {
        title: "2. Délais de Conformité",
        description: "À la réception d'une notification de notre organisation, un délai de grâce vous est accordé pour retirer ou corriger volontairement le contenu en infraction. Cet acte prévient la fermeture soudaine de votre compte.",
        standard: "<strong>Infractions standard :</strong> Un délai maximum allant jusqu'à 1 semaine (7 jours ouvrables) est accordé.",
        severe: "<strong>Infractions graves (Risque pour les mineurs / Arnaques actives) :</strong> Le retrait est exigé dans un délai de 24 à 48 heures maximum.",
        note: "* Le délai exact applicable à votre cas est indiqué dans la notification que vous avez reçue."
      },
      consequences: {
        title: "3. Conséquences en cas d'ignorance de la demande",
        description: "Seguridad Online ne <strong>bloque pas</strong> directement vos comptes. Cependant, si vous choisissez d'ignorer la notification et que le délai expire, notre équipe constituera un <strong>dossier complet de preuves</strong>. <br/><br/> Ce rapport est escaladé via des canaux corporatifs directement aux équipes de modération (Trust & Safety) de votre réseau social, fournisseur de domaine ou hébergeur web (par ex. Vercel, GitHub, Cloudflare, Meta, TikTok, etc.). <strong>Les fournisseurs procèdent généralement à la suppression permanente du compte et des données hébergées</strong> à réception de nos enquêtes documentées."
      },
      appeal: {
        title: "4. Que faire si je pense que c'est une erreur ?",
        description: "Si vous êtes fermement convaincu que votre contenu n'enfreint aucune politique du fournisseur ou que vous détenez les droits légaux sur celui-ci (Faux Positif), vous avez le droit de déposer une objection.",
        procedureLabel: "Procédure :",
        steps: [
          "<strong>N'ignorez pas le message.</strong> Le silence est interprété comme un manque de coopération.",
          "<strong>Répondez directement</strong> à l'email ou au message par lequel vous avez été notifié.",
          "<strong>Joignez des preuves.</strong> Expliquez le contexte, envoyez des licences si applicable, ou démontrez pourquoi le contenu est conforme aux Conditions de la plateforme."
        ],
        note: "Notre équipe humaine examinera votre appel. Si le contenu s'avère licite, le cas sera clôturé et archivé immédiatement sans conséquences pour vous."
      }
    },
    footer: {
      title: "Organisation Indépendante",
      description: "Seguridad Online agit en tant qu'entité d'audit indépendante et n'est pas légalement affiliée aux plateformes d'hébergement ou aux réseaux sociaux, bien qu'elle collabore en signalant les violations avérées de leurs réglementations."
    }
  },

// À propos
about: {
    meta: {
      title: "À Propos",
      description: "Découvrez l'histoire, la mission et les valeurs de Seguridad Online. Une organisation indépendante dédiée à faire d'Internet un endroit plus sûr."
    },
    hero: {
      title: "Défenseurs des utilisateurs.<br /> <span class=\"text-brand-500\">Auditeurs du web.</span>",
      description: "Seguridad Online n'est pas un réseau social ni un fournisseur d'accès à Internet. Nous sommes une <strong>organisation indépendante</strong> composée de personnes réelles, dédiée à protéger les utilisateurs contre les contenus dangereux et les pratiques non éthiques."
    },
    origin: {
      badge: "Notre Origine",
      title: "Le système de signalement traditionnel est défaillant.",
      paragraphs: [
        "Seguridad Online est né d'une frustration partagée. Aujourd'hui, la plupart des réseaux sociaux et des fournisseurs d'hébergement utilisent l'Intelligence Artificielle pour modérer leur contenu.",
        "Le problème, c'est que les contrevenants ont appris des \"astuces\" pour tromper les machines. Lorsqu'un utilisateur ordinaire tente de signaler un contenu dangereux — comme du matériel inapproprié exposé à des mineurs —, il reçoit généralement une réponse automatique disant : <em>\"Aucune infraction n'a été trouvée\"</em>.",
        "Nous savons que les gens n'ont ni le temps ni les connaissances techniques pour rédiger des appels complexes. C'est pourquoi nous avons créé cette organisation : <strong>pour agir en votre nom.</strong>"
      ],
      cards: {
        automated: {
          title: "Systèmes Automatisés",
          description: "Ils ignorent le contexte et sont facilement contournés par des contrevenants expérimentés."
        },
        human: {
          title: "Analyse Humaine",
          description: "Nous enquêtons manuellement, en reliant les points qu'une IA ne verrait jamais."
        }
      }
    },
    pillars: {
      title: "Nos Piliers",
      description: "Comment nous travaillons et ce que nous défendons dans chaque cas que nous prenons en charge.",
      items: [
        {
          title: "Confidentialité Absolue",
          description: "Nous protégeons l'utilisateur, pas le contrevenant. Chaque signalement est anonyme. Nous ne stockons pas vos données ni ne les partageons. Nous faisons face au fournisseur en votre nom pour que vous n'ayez pas à vous exposer."
        },
        {
          title: "Protection de l'Enfance",
          description: "Notre priorité absolue est d'empêcher les mineurs d'être exposés ou de normaliser le contenu pour adultes publié de manière inappropriée sur des plateformes d'accès général."
        },
        {
          title: "Objectivité Formelle",
          description: "Nous n'agissons pas par vengeance personnelle ou animosité. Nous émettons des avis de conformité formels, donnant à l'utilisateur la possibilité de retirer le contenu avant de perdre le fruit de son travail."
        }
      ]
    },
    funding: {
      title: "Financés par la communauté",
      description: "Seguridad Online est une initiative indépendante et à but non lucratif. <strong>Nos services d'audit et de signalement sont et resteront toujours 100% gratuits.</strong>",
      note: "Nous restons à flot grâce aux dons de personnes qui soutiennent notre mission. Ces fonds n'achètent pas de fonctionnalités « Premium » ni n'accélèrent les signalements ; ils sont utilisés exclusivement pour payer l'hébergement web, le domaine institutionnel et pour compenser le temps que notre équipe investit à enquêter en profondeur sur chaque cas.",
      btnPrimary: "Soutenir notre travail",
      btnSecondary: "Faire un signalement"
    }
  },

// Contact
contact: {
    meta: {
      title: "Contact et Signalements",
      description: "Envoyez votre signalement de manière anonyme et sécurisée. Notre équipe humaine analysera l'infraction et agira en conséquence."
    },
    hero: {
      title: "Contact et Signalements",
      description: "Utilisez ce formulaire pour nous envoyer un signalement d'infraction ou pour des questions générales. L'ensemble du processus est <strong class=\"text-foreground\">strictement confidentiel et anonyme</strong>. Notre équipe humaine examinera votre cas et vous répondra dans les meilleurs délais."
    },
    form: {
      title: "Soumettre un cas",
      name: {
        label: "Nom ou Pseudonyme (Optionnel)",
        placeholder: "Ex. Utilisateur Anonyme"
      },
      email: {
        label: "Adresse Email",
        placeholder: "vous@email.com",
        hint: "Nous l'utiliserons uniquement pour vous répondre. Nous ne le conserverons pas."
      },
      subject: {
        label: "Objet du signalement",
        placeholder: "Sélectionnez une option...",
        options: [
          { value: "contenido_inadecuado", label: "Prévention : Contenu inapproprié dans des zones accessibles aux mineurs" },
          { value: "phishing", label: "Pratiques non éthiques : Hameçonnage ou arnaques web" },
          { value: "derechos_autor", label: "Droits d'auteur : Propriété intellectuelle copiée" },
          { value: "consulta_general", label: "Question générale ou demande d'information sur un signalement" }
        ]
      },
      url: {
        label: "Lien vers l'infraction (Optionnel mais recommandé)",
        placeholder: "https://exemple.com/lien-vers-le-probleme"
      },
      message: {
        label: "Détails du cas",
        placeholder: "Décrivez brièvement la situation, où se trouve le contenu et quelle politique vous pensez qu'il enfreint..."
      },
      submitBtn: "Envoyer le Signalement"
    },
    sidebar: {
      contact: {
        title: "Autres moyens de contact",
        email: {
          label: "Par Email",
          value: "reportes@seguridadonline.org"
        },
        twitter: {
          label: "Via X (Twitter)",
          value: "@sguridadonline"
        }
      },
      rules: {
        title: "Avant d'envoyer",
        items: [
          { bold: "Nous ne récupérons pas de comptes :", text: " Si votre réseau social a été piraté, vous devez utiliser le support officiel de cette plateforme." },
          { bold: "Nous ne traitons pas les crimes graves :", text: " En cas de crime grave (vente de drogues, etc.), contactez immédiatement les autorités policiales de votre pays." },
          { bold: "Patience :", text: " Nous sommes une équipe humaine. En moyenne, nous échangerons environ 3 emails avec vous pour vous donner le statut final de votre signalement." }
        ]
      }
    }
},

// Don
donate: {
    meta: {
      title: "Faire un Don",
      description: "Soutenez Seguridad Online. Nous sommes une organisation indépendante financée par la communauté pour maintenir un Internet plus sûr."
    },
    hero: {
      badge: "Soutien Communautaire",
      title: "Financés par des personnes comme vous",
      description: "Seguridad Online est une initiative 100% indépendante. Nous ne recevons aucun financement d'entreprises ni de gouvernements. Votre contribution volontaire nous permet de maintenir notre infrastructure et de consacrer le temps nécessaire à chaque enquête."
    },
    transparency: {
      title: "Où vont les fonds ?",
      items: [
        {
          title: "Infrastructure Technique",
          description: "Paiement des domaines (seguridadonline.org), hébergement web, services de messagerie institutionnelle pour les signalements et protection cloud."
        },
        {
          title: "Ressources Humaines",
          description: "Compensation symbolique pour les heures que notre équipe investit à enquêter sur les contrevenants, à rassembler des preuves et à rédiger des appels formels."
        }
      ]
    },
    disclaimer: {
      title: "Garantie de Confidentialité et d'Équité",
      description: "Les dons sont <strong>strictement anonymes</strong>. Contribuer des fonds ne vous accorde pas la priorité dans la file des signalements ni des fonctionnalités « Premium ». Nous traitons tous les cas avec la même urgence et le même sérieux, que vous ayez fait un don ou non."
    },
    methods: {
      title: "Méthodes de Don",
      binance: {
        title: "Binance Pay",
        description: "Scannez le code QR depuis votre application Binance ou copiez notre Pay ID pour envoyer des USDT ou d'autres cryptomonnaies sans frais.",
        payIdLabel: "Binance Pay ID :",
        payIdValue: "1220702494",
        copyBtn: "Copier l'ID",
        copiedBtn: "Copié !",
        qrAlt: "QR Binance Pay"
      },
      kofi: {
        title: "Ko-fi / Carte",
        badge: "Prochainement",
        description: "Nous activerons prochainement les dons en monnaie fiduciaire (cartes de crédit/débit) pour ceux qui n'utilisent pas les cryptomonnaies."
      }
    }
  },

// Politique de Confidentialité
privacy: {
    meta: {
      title: "Politique de Confidentialité",
      description: "Découvrez comment nous protégeons votre identité. Politique stricte de collecte minimale, anonymat garanti et suppression des données sous 7 jours."
    },
    hero: {
      badge: "Document Officiel",
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : avril 2026",
      description: "La confidentialité est au cœur de notre organisation. Dans ce document, nous détaillons de manière transparente et sans jargon juridique inutile comment nous traitons les rares informations que nous collectons."
    },
    sections: [
      {
        title: "1. Responsable du traitement",
        content: "<p>Le responsable du traitement des données est l'équipe de Seguridad Online, collectif indépendant opérant sous l'identité organisationnelle de seguridadonline.org. Aucune personne physique individuelle n'est identifiée dans ce document pour des raisons de sécurité opérationnelle et de cohérence avec les valeurs d'anonymat que nous défendons.</p><p class='mt-3'>Pour toute question relative à cette politique, vous pouvez nous contacter via le formulaire officiel du site.</p>"
      },
      {
        title: "2. Données que nous collectons",
        content: "<p>Nous appliquons une politique stricte de <strong>collecte minimale</strong>. Nous ne traitons que les données suivantes :</p><ul class='list-disc list-inside mt-3 mb-3 space-y-2 text-foreground/90 ml-2'><li><strong>Adresse email</strong> du déclarant, utilisée exclusivement pour communiquer l'état du cas.</li><li><strong>Preuves</strong> fournies dans le signalement (captures d'écran, URLs, descriptions), nécessaires à la conduite de l'enquête.</li></ul><p>Nous ne collectons pas de noms complets, documents d'identité, numéros de téléphone ni aucune autre donnée personnelle supplémentaire.</p>"
      },
      {
        title: "3. Finalité du traitement",
        content: "<p>Les données collectées sont utilisées uniquement pour :</p><ul class='list-disc list-inside mt-3 mb-3 space-y-2 text-foreground/90 ml-2'><li>Gérer et assurer le suivi du signalement soumis.</li><li>Communiquer avec le déclarant sur l'état de son cas.</li><li>Élaborer le rapport formel adressé au fournisseur d'hébergement ou à la plateforme concernée.</li></ul><p><strong>Nous n'utilisons pas les données à des fins commerciales, publicitaires ou statistiques.</strong></p>"
      },
      {
        title: "4. Infrastructure technique",
        content: "<p>Seguridad Online opère sur les plateformes de confiance suivantes :</p><ul class='list-disc list-inside mt-3 mb-3 space-y-2 text-foreground/90 ml-2'><li><strong>Google Cloud / Resend :</strong> utilisé pour le traitement et la réception des formulaires de signalement et des emails.</li><li><strong>Cloudflare :</strong> utilisé comme couche d'infrastructure, de sécurité et de protection DDoS du site web.</li></ul><p>Les deux fournisseurs disposent de leurs propres politiques de confidentialité et normes de sécurité internationales. Nous vous recommandons de les consulter si vous souhaitez en savoir plus sur le traitement technique qu'ils appliquent aux données en transit.</p>"
      },
      {
        title: "5. Conservation et suppression des données",
        content: "Toutes les données associées à un signalement — y compris l'adresse email et les preuves — sont <strong>supprimées de manière définitive et irrécupérable dans les 7 jours calendaires suivant la clôture du cas</strong>, quel que soit le résultat obtenu.<br/><br/>Nous ne conservons pas d'archives historiques ni de bases de données des signalements antérieurs.",
        highlight: true
      },
      {
        title: "6. Anonymat garanti vis-à-vis du contrevenant",
        content: "Le contrevenant ne saura jamais qui a effectué le signalement. C'est une garantie fondamentale de notre service.<br/><br/>À aucune étape du processus — y compris l'avis de courtoisie au contrevenant et le rapport formel au fournisseur — aucune information pouvant identifier le déclarant n'est mentionnée, suggérée ou transmise. Les preuves sont présentées de manière dissociée de l'identité du plaignant.",
        highlight: true
      },
      {
        title: "7. Dons",
        content: "<p>Les dons volontaires à Seguridad Online sont traités avec la plus grande discrétion (par ex. via Binance ou d'autres moyens). Les informations associées aux donateurs — y compris les adresses de portefeuille et les montants — sont traitées avec une confidentialité absolue et <strong>ne sont partagées avec aucun tiers en aucune circonstance</strong>.</p><p class='mt-3'>Les dons n'accordent aucun traitement préférentiel dans la gestion des signalements.</p>"
      },
      {
        title: "8. Droits de l'utilisateur",
        content: "<p>Étant donné que nous traitons une quantité minimale de données et que nous les supprimons dans le délai indiqué, les droits d'accès, de rectification et d'effacement peuvent être exercés à tout moment <strong>pendant la durée du cas actif</strong>, en nous contactant via le formulaire du site.</p>"
      },
      {
        title: "9. Modifications de cette politique",
        content: "<p>Seguridad Online se réserve le droit de mettre à jour cette politique. Tout changement pertinent sera communiqué par un avis visible sur le site web.</p>"
      }
    ]
  },

  // Conditions d'Utilisation
  terms: {
    meta: {
      title: "Conditions d'Utilisation",
      description: "Conditions officielles régissant l'utilisation des services d'audit, de gestion des signalements et les limitations de responsabilité de Seguridad Online."
    },
    hero: {
      badge: "Document Juridique",
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour : avril 2026",
      description: "En utilisant les services de signalement et d'audit de Seguridad Online, vous acceptez les procédures, exclusions et limitations de responsabilité décrites ci-dessous."
    },
    sections: [
      {
        title: "1. Nature du service",
        content: "<p>Seguridad Online est une organisation d'audit éthique numérique qui agit en tant qu'intermédiaire entre les utilisateurs affectés et les plateformes ou fournisseurs d'hébergement. <strong>Nous ne sommes pas une autorité légale, judiciaire ou gouvernementale.</strong></p><p class='mt-3'>Notre rôle est de faciliter le signalement formel des violations des politiques d'utilisation des plateformes — notamment celles qui mettent en danger la sécurité des mineurs ou la santé de l'environnement numérique — en utilisant des canaux officiels et des procédures documentées.</p><p class='mt-3'>En utilisant nos services, l'utilisateur accepte intégralement ces conditions.</p>"
      },
      {
        title: "2. Procédure de gestion des signalements",
        content: "<p>Tous les signalements reçus sont traités par des personnes humaines qualifiées. Nous n'utilisons pas l'intelligence artificielle ni des systèmes automatisés pour analyser ou traiter les cas. Le processus se compose de six étapes :</p>",
        steps: [
          {
            name: "Étape 1 — Réception",
            desc: "L'équipe de Seguridad Online reçoit le signalement via le formulaire officiel du site et confirme sa réception au déclarant par email."
          },
          {
            name: "Étape 2 — Analyse des politiques",
            desc: "Les politiques d'utilisation de la plateforme ou du fournisseur concerné sont examinées pour déterminer s'il existe une infraction vérifiable et susceptible d'action."
          },
          {
            name: "Étape 3 — Enquête sur les sources publiques",
            desc: "Les canaux de contact officiels et publics du prétendu contrevenant sont identifiés (site web, email de support, profils sur les réseaux sociaux, enregistrements WHOIS publics, etc.). En aucun cas des informations privées ne sont accédées, ni des activités dépassant la consultation de sources d'accès public ne sont menées."
          },
          {
            name: "Étape 4 — Avis de courtoisie au contrevenant",
            desc: "Le contrevenant est notifié de l'infraction détectée, avec indication du délai disponible pour la résoudre volontairement. Cet avis est formel, documenté et ne révèle pas l'identité du déclarant."
          },
          {
            name: "Étape 5 — Délai d'attente",
            desc: "Un délai de 24 heures à 7 jours calendaires est accordé au contrevenant pour corriger la situation, selon la gravité de l'infraction détectée."
          },
          {
            name: "Étape 6 — Rapport formel au fournisseur",
            desc: "Si le contrevenant ne prend pas de mesures correctives dans le délai imparti, un rapport formel — avec des preuves documentées — est soumis au fournisseur d'hébergement, au réseau social ou à la plateforme concernée, demandant l'examen et l'éventuelle suppression du contenu en infraction."
          }
        ]
      },
      {
        title: "3. Cas acceptés",
        content: "<p>Seguridad Online accepte les signalements relatifs à :</p><ul class='list-disc list-inside mt-3 space-y-2 text-foreground/90 ml-2'><li>Contenu pour adultes publié dans des environnements accessibles aux mineurs.</li><li>Violations des politiques d'utilisation de plateformes telles que Vercel, GitHub, Meta, X (Twitter), TikTok, et similaires.</li><li>Sites web ou comptes qui violent les conditions d'utilisation de leurs fournisseurs d'hébergement ou de domaine.</li><li>Autres cas de violations numériques affectant la sécurité de l'environnement en ligne.</li></ul>"
      },
      {
        title: "4. Exclusions expresses",
        content: "<p>Seguridad Online n'accepte pas et ne gère pas les types de cas suivants :</p><ul class='list-disc list-inside mt-3 space-y-2 text-foreground/90 ml-2'><li><strong>Signalements liés à des activités illicites graves</strong> (trafic de substances, infractions pénales, pornographie infantile). Ces cas doivent être signalés directement aux autorités compétentes.</li><li>Récupération de comptes compromis ou piratés.</li><li>Litiges commerciaux, de propriété intellectuelle ou contractuels entre parties.</li><li>Cas nécessitant une intervention judiciaire ou policière.</li></ul>"
      },
      {
        title: "5. Limitation de responsabilité",
        content: "<p>Seguridad Online agit en tant que facilitateur et n'a aucun contrôle sur les décisions des fournisseurs d'hébergement, des plateformes ou des réseaux sociaux. <strong>Nous ne garantissons pas la suppression du contenu signalé</strong>, car la décision finale appartient exclusivement à chaque fournisseur.</p><p class='mt-3'>Notre engagement est de gérer chaque signalement avec rigueur, une documentation adéquate et dans les délais établis. Nous n'assumons aucune responsabilité pour les retards, omissions ou décisions de plateformes tierces.</p>"
      },
      {
        title: "6. Politique concernant les signalements malveillants ou faux",
        content: "<p>Seguridad Online se réserve le droit de rejeter, ignorer ou écarter tout signalement qui, à la discrétion de l'équipe, est manifestement faux, malveillant ou a pour objectif de harceler, nuire ou porter injustement préjudice à un tiers.</p><p class='mt-3'>L'utilisation de nos services à des fins de harcèlement, de diffamation ou de préjudice intentionnel est expressément interdite. Seguridad Online n'assume aucune responsabilité pour l'utilisation abusive de la plateforme par des utilisateurs de mauvaise foi.</p>"
      },
      {
        title: "7. Propriété du processus",
        content: "<p>Le rapport formel soumis aux fournisseurs et plateformes est élaboré entièrement par l'équipe de Seguridad Online. Le déclarant cède l'utilisation des preuves fournies exclusivement pour la gestion du cas, sans que cela implique un transfert de droits supplémentaires.</p>"
      },
      {
        title: "8. Juridiction et loi applicable",
        content: "<p>Ces conditions sont régies par les lois de la République Argentine. Tout litige découlant de l'interprétation ou de l'application de ces conditions sera soumis à la juridiction des tribunaux ordinaires compétents de la République Argentine.</p>"
      },
      {
        title: "9. Modifications",
        content: "<p>Seguridad Online pourra modifier ces conditions à tout moment. L'utilisation continue du service après la publication des changements implique l'acceptation des nouvelles conditions.</p>"
      }
    ]
  },

  // Politique de Cookies
  cookies: {
    meta: {
      title: "Politique de Cookies",
      description: "Informations sur l'utilisation des cookies sur Seguridad Online. Nous n'utilisons que des cookies techniques essentiels et n'effectuons aucun suivi."
    },
    hero: {
      badge: "Document Technique",
      title: "Politique de Cookies",
      lastUpdated: "Dernière mise à jour : avril 2026",
      description: "La transparence est fondamentale pour nous. Sur cette page, nous expliquons quelles technologies de stockage nous utilisons et, plus important encore, lesquelles nous n'utilisons pas."
    },
    sections: [
      {
        title: "1. Que sont les cookies ?",
        content: "<p>Les cookies sont de petits fichiers texte que les sites web stockent sur votre appareil pour assurer leur bon fonctionnement ou pour mémoriser vos préférences de navigation.</p>"
      },
      {
        title: "2. Cookies que nous utilisons",
        content: "<p>Chez Seguridad Online, nous utilisons <strong>uniquement des cookies techniques essentiels</strong>. Ceux-ci sont indispensables au fonctionnement de base et à la sécurité du site, et ne peuvent pas être désactivés sans affecter l'expérience de navigation.</p><p class='mt-3'>Les cookies techniques présents sur ce site sont fournis par :</p><ul class='list-disc list-inside mt-3 space-y-2 text-foreground/90 ml-2'><li><strong>Cloudflare :</strong> pour la protection de sécurité, la gestion du trafic et la prévention des menaces (DDoS).</li><li><strong>Resend / Fournisseurs de messagerie :</strong> pour le traitement du formulaire de signalement et la communication sécurisée des données vers nos serveurs.</li></ul>"
      },
      {
        title: "3. Préférences de l'utilisateur (Stockage Local)",
        content: "<p>Pour mémoriser votre préférence de thème visuel (mode clair / mode sombre), nous utilisons le stockage local de votre navigateur (<em>localStorage</em>). Cette information <strong>ne quitte jamais votre appareil</strong> et n'est pas transmise à aucun serveur.</p>"
      },
      {
        title: "4. Ce que nous ne faisons PAS",
        content: "<p>Seguridad Online déclare expressément que sur ce site web :</p>",
        noList: [
          "Nous n'utilisons pas de cookies marketing ou publicitaires.",
          "Nous n'utilisons pas de cookies de suivi ou d'analyse tiers (tels que Google Analytics).",
          "Nous ne partageons pas de données de navigation avec des réseaux publicitaires ni des courtiers en données.",
          "Nous ne créons pas de profils utilisateurs ni d'analyses comportementales."
        ]
      },
      {
        title: "5. Gestion des cookies",
        content: "<p>Vous pouvez gérer, bloquer ou supprimer les cookies depuis les paramètres de votre navigateur à tout moment. Veuillez noter que si vous forcez la désactivation des cookies techniques ou de sécurité, il est possible que vous ne puissiez pas soumettre des signalements via notre formulaire.</p>"
      },
      {
        title: "6. Contact",
        content: "<p>Si vous avez des questions sur notre politique de cookies ou sur le fonctionnement technique du site, vous pouvez nous contacter via le formulaire officiel disponible dans la section contact.</p>"
      }
    ]
  }
} as const;