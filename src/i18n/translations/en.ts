import type { TranslationKeys } from './en';
export const en: TranslationKeys = {

  // Site
  site: {
    title: 'Seguridad Online',
    description: 'Independent organization dedicated to digital auditing. We investigate infringement reports, send preventive notifications, and manage cases with providers.',
  },

  // Navigation
  nav: {
    home: 'Home',
    audit: 'Audit',
    about: 'About Us',
    contact: 'Contact',
    donate: 'Donate',
    terms: 'Terms',
    privacy: 'Privacy',
    cookies: 'Cookies',
  },

  // Home
  home: {
    meta: {
    title: "Independent Digital Protection Organization",
    description: "Independent organization dedicated to digital auditing. We investigate infringement reports, send preventive notifications, and manage cases with providers."
  },
  hero: {
    badge: "Independent Organization",
    titleStart: "Welcome to",
    titleHighlight: "Seguridad Online",
    titleEnd: ".",
    description: "We act as a mediator to keep the digital environment safe. We receive reports, investigate violations of usage policies, and notify those responsible so they can correct the situation before escalating the case to providers.",
    btnPrimary: "Submit a report",
    btnSecondary: "Learn about our process",
    features: [
      "100% Anonymous Process",
      "Human Review",
      "Institutional Reports"
    ]
  },
  coverage: {
    title: "Our scope of action",
    description: "We focus on content audits where automated systems tend to fail, prioritizing a healthy environment.",
    items: [
      {
        title: "Prevention of Inappropriate Content",
        description: "We audit cases of adult content (such as links, tutorials, or promotions) that are improperly hosted on public platforms accessible to minors."
      },
      {
        title: "Unethical Practices",
        description: "We investigate deceptive websites, phishing attempts, and gather information to notify hosting or domain providers."
      },
      {
        title: "Copyright",
        description: "We act as representatives to manage copyright claims, requesting the removal of intellectual property copied or distributed without authorization."
      }
    ]
  },
  whyUs: {
    title: "A formal and independent auditing process.",
    description: "Infringers often bypass automated reports on social networks. <strong>Seguridad Online</strong> works differently: we use time and human resources to build complete cases.",
    items: [
      {
        title: "Detailed Analysis",
        description: "We take the time to gather public data, contact information, and verify which specific terms are being violated."
      },
      {
        title: "Preventive Notice",
        description: "Before escalating to the provider, we give the user a clear notice about their violations, giving them the opportunity to correct them without risking the loss of their account or site."
      },
      {
        title: "Professional Communication",
        description: "Internet providers and platforms trust our reports because we send clear, well-organized documentation from the organization's institutional email addresses."
      }
    ],
    sidebar: {
      title: "Human and direct treatment",
      description: "Your report will always be handled by a real person. Our team will communicate with you through clear emails to keep you informed.",
      mails: [
        {
          title: "Confirmation Email:",
          description: "We notify you that we have received your report and will begin investigating."
        },
        {
          title: "Inquiry Email (Optional):",
          description: "If we need more context, an agent will write to you to request additional details."
        },
        {
          title: "Resolution Email:",
          description: "We inform you of the outcome (whether the user removed the content or whether we escalated the case to the platform)."
        }
      ]
    }
  },
  process: {
    title: "Our Action Methodology",
    description: "A standardized 6-step process to ensure fair, objective resolutions that protect your privacy at all times.",
    items: [
      { step: "01", title: "Reception", desc: "The user submits their report through the website or by email. We register it in our temporary database securely." },
      { step: "02", title: "Policy Analysis", desc: "We verify whether the described situation violates the terms of service (TOS) of the provider or platform involved." },
      { step: "03", title: "Investigation", desc: "We gather links, public contact information, and observe whether there are other related violations in the case." },
      { step: "04", title: "Compliance Notice", desc: "We contact the responsible party indicating which regulations they are violating, giving them the opportunity to resolve it voluntarily." },
      { step: "05", title: "Waiting Period", desc: "We grant a period (between 24 hours and one week, depending on urgency) for the user to remove or correct the reported content." },
      { step: "06", title: "Escalation", desc: "If there is no cooperation, we send an institutional report with evidence to the provider or platform for them to take action." }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Clear information for those wishing to submit a report.",
    items: [
      { q: "Will the reported user know it was me?", a: "Under no circumstances. Your report is 100% anonymous. We do not store personal data, and the compliance notice is always sent on behalf of the organization 'Seguridad Online', never on behalf of the requester." },
      { q: "Do you handle account theft, hacking, or technical support cases?", a: "No. Seguridad Online is not a technical support service for recovering personal accounts. We are exclusively dedicated to auditing violations of platform regulations. If you lost your account, you must contact the official support of that network." },
      { q: "Do you report serious crimes such as illegal sales or criminal acts?", a: "No. We handle violations of service policies in the digital realm (e.g., inappropriate content in areas accessible to minors, phishing). For serious crimes or legal emergencies, we recommend contacting the authorities or law enforcement agencies in your country directly." },
      { q: "How long does the auditing process take?", a: "You will receive our first email confirming receipt very quickly. Afterwards, resolution timelines vary, granting the notified user between 24 hours and one week to correct the violation." },
      { q: "Is the reporting service free?", a: "Yes, our entire process is completely free. We operate as an independent organization funded solely by voluntary donations from those who support the initiative." }
    ]
  },
  donations: {
    title: "Support Seguridad Online",
    description: "Our organization is sustained entirely by voluntary donations. Your contribution helps us cover hosting, the domain, and continue investing the time needed to handle each report with seriousness and professionalism.",
    privacyNoteTitle: "Privacy note:",
    privacyNote: "Donations are completely anonymous and do not grant any advantages or extra features when making reports.",
    btn: "Make a donation"
  }
},

// Audit
audit: {
    meta: {
      title: "Audit & Compliance",
      description: "Official information about infringement notices, compliance deadlines, and the appeal process of Seguridad Online."
    },
    hero: {
      badge: "Audit Department",
      title: "Information About Infringement Notices",
      description: "This page is intended for users, website administrators, or account holders who have received a <strong>Compliance Notification</strong> from our organization."
    },
    notice: {
      title: "Check your personal notification",
      description: "The information on this page is of a general nature. <strong>The specific details of your case</strong> (exact links, policies you are violating, and the exact deadline to resolve them) <strong>are detailed in the email or direct message we have sent you.</strong>"
    },
    protocol: {
      title: "Action Protocol and Consequences",
      reason: {
        title: "1. Why have I received a notice?",
        description: "Our analysts have investigated a report or proactively detected that your account, post, or website directly violates the <strong>Terms of Service (TOS)</strong> of the platform where it is hosted. The most common violations we audit include: exposing minors to inappropriate content, identity theft (phishing), or copyright infringement."
      },
      deadlines: {
        title: "2. Compliance Deadlines",
        description: "Upon receiving a notification from our organization, you are granted a grace period to voluntarily remove or correct the infringing content. This act prevents the sudden closure of your account.",
        standard: "<strong>Standard violations:</strong> A maximum period of up to 1 week (7 business days) is granted.",
        severe: "<strong>Serious violations (Risk to minors / Active scams):</strong> Removal is required within no more than 24–48 hours.",
        note: "* The exact time applicable to your case is indicated in the notification you received."
      },
      consequences: {
        title: "3. Consequences of ignoring the requirement",
        description: "Seguridad Online does <strong>not block</strong> your accounts directly. However, if you choose to ignore the notification and the deadline expires, our team will compile a <strong>complete dossier of evidence</strong>. <br/><br/> This report is escalated through corporate channels directly to the moderation (Trust & Safety) teams of your social network, domain provider, or web hosting (e.g., Vercel, GitHub, Cloudflare, Meta, TikTok, etc.). <strong>Providers typically proceed with permanent deletion of the account and hosted data</strong> upon receiving our documented investigations."
      },
      appeal: {
        title: "4. What do I do if I think it's a mistake?",
        description: "If you firmly believe that your content does not violate any provider policy or that you hold the legal rights to it (False Positive), you have the right to file an objection.",
        procedureLabel: "Procedure:",
        steps: [
          "<strong>Do not ignore the message.</strong> Silence is interpreted as a lack of cooperation.",
          "<strong>Reply directly</strong> to the email or message through which you were notified.",
          "<strong>Attach evidence.</strong> Explain the context, submit licenses if applicable, or demonstrate why the content complies with the platform's Terms."
        ],
        note: "Our human team will review your appeal. If the content is found to be lawful, the case will be closed and archived immediately with no consequences for you."
      }
    },
    footer: {
      title: "Independent Organization",
      description: "Seguridad Online acts as an independent auditing entity and is not legally affiliated with hosting platforms or social networks, although it collaborates by reporting verified violations of their regulations."
    }
  },

// About Us
about: {
    meta: {
      title: "About Us",
      description: "Learn about the history, mission, and values of Seguridad Online. An independent organization dedicated to making the internet a safer place."
    },
    hero: {
      title: "User advocates.<br /> <span class=\"text-brand-500\">Network auditors.</span>",
      description: "Seguridad Online is not a social network or an internet provider. We are an <strong>independent organization</strong> made up of real people, dedicated to protecting users from dangerous content and unethical practices."
    },
    origin: {
      badge: "Our Origin",
      title: "The traditional reporting system is broken.",
      paragraphs: [
        "Seguridad Online was born out of a shared frustration. Today, most social networks and hosting providers use Artificial Intelligence to moderate their content.",
        "The problem is that infringers have learned \"tricks\" to fool the machines. When a regular user tries to report dangerous content — such as inappropriate material exposed to minors — they usually receive an automated response saying: <em>\"We found no violation\"</em>.",
        "We know that people don't have the time or technical knowledge to draft complex appeals. That's why we created this organization: <strong>to act on your behalf.</strong>"
      ],
      cards: {
        automated: {
          title: "Automated Systems",
          description: "They ignore context and are easily evaded by experienced infringers."
        },
        human: {
          title: "Human Analysis",
          description: "We manually investigate, connecting the dots that an AI would never see."
        }
      }
    },
    pillars: {
      title: "Our Pillars",
      description: "How we work and what we uphold with every case we take on.",
      items: [
        {
          title: "Absolute Privacy",
          description: "We protect the user, not the infringer. Every report is anonymous. We do not store your data or share it. We face the provider on your behalf so you don't have to expose yourself."
        },
        {
          title: "Child Protection",
          description: "Our highest priority is to prevent minors from being exposed to or normalizing adult content that is improperly published on general-access platforms."
        },
        {
          title: "Formal Objectivity",
          description: "We do not act out of personal vendettas or animosity. We issue formal compliance notices, giving users the opportunity to remove the content before losing the effort put into their work."
        }
      ]
    },
    funding: {
      title: "Community-funded",
      description: "Seguridad Online is an independent, non-profit initiative. <strong>Our auditing and reporting services are and will always be 100% free.</strong>",
      note: "We stay afloat thanks to donations from people who support our mission. These funds do not purchase 'Premium' features or accelerate reports; they are used exclusively to pay for web hosting, the institutional domain, and to compensate the time our team invests in thoroughly investigating each case.",
      btnPrimary: "Support our work",
      btnSecondary: "Submit a report"
    }
  },

// Contact
contact: {
    meta: {
      title: "Contact & Reports",
      description: "Submit your report anonymously and securely. Our human team will analyze the violation and act accordingly."
    },
    hero: {
      title: "Contact & Reports",
      description: "Use this form to send us a violation report or for general inquiries. The entire process is <strong class=\"text-foreground\">strictly confidential and anonymous</strong>. Our human team will review your case and get back to you as soon as possible."
    },
    form: {
      title: "Submit a case",
      name: {
        label: "Name or Alias (Optional)",
        placeholder: "E.g. Anonymous User"
      },
      email: {
        label: "Email Address",
        placeholder: "you@email.com",
        hint: "We will only use it to reply to you. We will not store it."
      },
      subject: {
        label: "Report subject",
        placeholder: "Select an option...",
        options: [
          { value: "contenido_inadecuado", label: "Prevention: Inappropriate content in areas accessible to minors" },
          { value: "phishing", label: "Unethical practices: Phishing or web scams" },
          { value: "derechos_autor", label: "Copyright: Copied intellectual property" },
          { value: "consulta_general", label: "General inquiry or question about a report" }
        ]
      },
      url: {
        label: "Link to the violation (Optional but recommended)",
        placeholder: "https://example.com/link-to-the-issue"
      },
      message: {
        label: "Case details",
        placeholder: "Briefly describe the situation, where the content is located, and which policy you believe is being violated..."
      },
      submitBtn: "Submit Report"
    },
    sidebar: {
      contact: {
        title: "Other contact methods",
        email: {
          label: "Via Email",
          value: "reportes@seguridadonline.org"
        },
        twitter: {
          label: "Via X (Twitter)",
          value: "@sguridadonline"
        }
      },
      rules: {
        title: "Before submitting",
        items: [
          { bold: "We do not recover accounts:", text: " If your social media account was hacked, you must use the official support of that platform." },
          { bold: "We do not handle serious crimes:", text: " For a serious crime (drug sales, etc.), contact your country's law enforcement authorities immediately." },
          { bold: "Patience:", text: " We are a human team. On average, we will exchange about 3 emails with you to provide the final status of your report." }
        ]
      }
    }
},

// Donate
donate: {
    meta: {
      title: "Make a Donation",
      description: "Support Seguridad Online. We are an independent organization funded by the community to maintain a safer internet."
    },
    hero: {
      badge: "Community Support",
      title: "Funded by people like you",
      description: "Seguridad Online is a 100% independent initiative. We do not receive corporate or government funding. Your voluntary contribution allows us to maintain our infrastructure and dedicate the necessary time to each investigation."
    },
    transparency: {
      title: "Where do the funds go?",
      items: [
        {
          title: "Technical Infrastructure",
          description: "Payment of domains (seguridadonline.org), web hosting, corporate email services for reports, and cloud protection."
        },
        {
          title: "Human Resources",
          description: "Symbolic compensation for the hours our team invests in investigating infringers, gathering evidence, and drafting formal appeals."
        }
      ]
    },
    disclaimer: {
      title: "Privacy and Fairness Guarantee",
      description: "Donations are <strong>strictly anonymous</strong>. Contributing funds does not grant you priority in the report queue or any 'Premium' features. We treat all cases with the same urgency and seriousness, whether you have donated or not."
    },
    methods: {
      title: "Donation Methods",
      binance: {
        title: "Binance Pay",
        description: "Scan the QR code from your Binance app or copy our Pay ID to send USDT or other cryptocurrencies with no fees.",
        payIdLabel: "Binance Pay ID:",
        payIdValue: "1220702494",
        copyBtn: "Copy ID",
        copiedBtn: "Copied!",
        qrAlt: "Binance Pay QR"
      },
      kofi: {
        title: "Ko-fi / Card",
        badge: "Coming Soon",
        description: "We will soon enable fiat donations (credit/debit cards) for those who do not use cryptocurrency."
      }
    }
  },

// Privacy Policy
privacy: {
    meta: {
      title: "Privacy Policy",
      description: "Learn how we protect your identity. Strict policy of minimal data collection, guaranteed anonymity, and data deletion within 7 days."
    },
    hero: {
      badge: "Official Document",
      title: "Privacy Policy",
      lastUpdated: "Last updated: April 2026",
      description: "Privacy is the core of our organization. In this document we transparently detail, without unnecessary legal jargon, how we handle the limited information we process."
    },
    sections: [
      {
        title: "1. Data controller",
        content: "<p>The data controller is the Seguridad Online team, an independent collective operated under the organizational identity of seguridadonline.org. Individual physical persons are not identified in this document for reasons of operational security and consistency with the anonymity values we uphold.</p><p class='mt-3'>For inquiries related to this policy, you can contact us through the official form on the site.</p>"
      },
      {
        title: "2. Data we collect",
        content: "<p>We follow a strict <strong>minimal collection</strong> policy. We only process the following data:</p><ul class='list-disc list-inside mt-3 mb-3 space-y-2 text-foreground/90 ml-2'><li><strong>Email address</strong> of the reporter, used exclusively to communicate the status of the case.</li><li><strong>Evidence</strong> provided in the report (screenshots, URLs, descriptions), necessary to carry out the investigation.</li></ul><p>We do not collect full names, identity documents, phone numbers, or any other additional personal data.</p>"
      },
      {
        title: "3. Purpose of data processing",
        content: "<p>The data collected is used solely to:</p><ul class='list-disc list-inside mt-3 mb-3 space-y-2 text-foreground/90 ml-2'><li>Manage and follow up on the submitted report.</li><li>Communicate with the reporter about the status of their case.</li><li>Prepare the formal report addressed to the relevant hosting provider or platform.</li></ul><p><strong>We do not use data for commercial, advertising, or statistical purposes.</strong></p>"
      },
      {
        title: "4. Technical infrastructure",
        content: "<p>Seguridad Online operates on the following trusted platforms:</p><ul class='list-disc list-inside mt-3 mb-3 space-y-2 text-foreground/90 ml-2'><li><strong>Google Cloud / Resend:</strong> used for processing and receiving report forms and emails.</li><li><strong>Cloudflare:</strong> used as the infrastructure, security, and DDoS protection layer for the website.</li></ul><p>Both providers have their own privacy policies and international security standards. We recommend consulting them if you wish to learn about the technical processing they apply to data in transit.</p>"
      },
      {
        title: "5. Data retention and deletion",
        content: "All data associated with a report — including the email address and evidence — is <strong>permanently and irrecoverably deleted within 7 calendar days after the case is closed</strong>, regardless of the outcome.<br/><br/>We do not maintain historical archives or databases of previous reports.",
        highlight: true
      },
      {
        title: "6. Guaranteed anonymity from the infringer",
        content: "The infringer will never know who filed the report. This is a core guarantee of our service.<br/><br/>At no stage of the process — including the courtesy notice to the infringer and the formal report to the provider — is any information mentioned, implied, or transmitted that could identify the reporter. Evidence is presented in a way that is disconnected from the identity of the complainant.",
        highlight: true
      },
      {
        title: "7. Donations",
        content: "<p>Voluntary donations to Seguridad Online are processed with the utmost discretion (e.g., via Binance or other means). Information associated with donors — including wallet addresses and amounts — is treated with absolute privacy and <strong>is not shared with third parties under any circumstances</strong>.</p><p class='mt-3'>Donations do not grant any preferential treatment in the handling of reports.</p>"
      },
      {
        title: "8. User rights",
        content: "<p>Since we process a minimal amount of data and delete it within the stated timeframe, the rights of access, rectification, and erasure can be exercised at any time <strong>during the active period of the case</strong>, by contacting us through the form on the site.</p>"
      },
      {
        title: "9. Changes to this policy",
        content: "<p>Seguridad Online reserves the right to update this policy. Any relevant changes will be communicated through a visible notice on the website.</p>"
      }
    ]
  },

  // Terms and Conditions
  terms: {
    meta: {
      title: "Terms of Service",
      description: "Official terms governing the use of Seguridad Online's auditing, report management services, and liability limitations."
    },
    hero: {
      badge: "Legal Document",
      title: "Terms of Service",
      lastUpdated: "Last updated: April 2026",
      description: "By using the reporting and auditing services of Seguridad Online, you accept the procedures, exclusions, and liability limitations described below."
    },
    sections: [
      {
        title: "1. Nature of the service",
        content: "<p>Seguridad Online is a digital ethical auditing organization that acts as an intermediary between affected users and platforms or hosting providers. <strong>We are not a legal, judicial, or governmental authority.</strong></p><p class='mt-3'>Our role is to facilitate the formal reporting of violations of platform usage policies — especially those that endanger the safety of minors or the health of the digital environment — using official channels and documented procedures.</p><p class='mt-3'>By using our services, the user fully accepts these terms.</p>"
      },
      {
        title: "2. Report management procedure",
        content: "<p>All received reports are handled by trained human beings. We do not use artificial intelligence or automated systems to analyze or process cases. The process consists of six stages:</p>",
        steps: [
          {
            name: "Step 1 — Reception",
            desc: "The Seguridad Online team receives the report through the official site form and confirms its receipt to the reporter via email."
          },
          {
            name: "Step 2 — Policy analysis",
            desc: "The usage policies of the relevant platform or provider are reviewed to determine whether there is a verifiable and actionable violation."
          },
          {
            name: "Step 3 — Public source investigation",
            desc: "Official and publicly available contact channels of the alleged infringer are identified (website, support email, social media profiles, public WHOIS records, etc.). Under no circumstances is private information accessed, nor are activities conducted that go beyond consulting publicly available sources."
          },
          {
            name: "Step 4 — Courtesy notice to the infringer",
            desc: "The infringer is notified about the detected violation, indicating the available period to resolve it voluntarily. This notice is formal, documented, and does not reveal the identity of the reporter."
          },
          {
            name: "Step 5 — Waiting period",
            desc: "The infringer is granted a period of between 24 hours and 7 calendar days to correct the situation, depending on the severity of the detected violation."
          },
          {
            name: "Step 6 — Formal report to the provider",
            desc: "If the infringer fails to take corrective action within the deadline, a formal report — with documented evidence — is submitted to the relevant hosting provider, social network, or platform, requesting the review and eventual removal of the infringing content."
          }
        ]
      },
      {
        title: "3. Accepted cases",
        content: "<p>Seguridad Online accepts reports related to:</p><ul class='list-disc list-inside mt-3 space-y-2 text-foreground/90 ml-2'><li>Adult content published in environments accessible to minors.</li><li>Violations of usage policies of platforms such as Vercel, GitHub, Meta, X (Twitter), TikTok, and similar.</li><li>Websites or accounts that violate the terms of service of their hosting or domain providers.</li><li>Other cases of digital violations that affect the safety of the online environment.</li></ul>"
      },
      {
        title: "4. Express exclusions",
        content: "<p>Seguridad Online does not accept or handle the following types of cases:</p><ul class='list-disc list-inside mt-3 space-y-2 text-foreground/90 ml-2'><li><strong>Reports related to serious illegal activities</strong> (drug trafficking, criminal offenses, child pornography). These cases must be reported directly to the competent authorities.</li><li>Recovery of compromised or hacked accounts.</li><li>Commercial, intellectual property, or contractual disputes between parties.</li><li>Cases requiring judicial or police intervention.</li></ul>"
      },
      {
        title: "5. Limitation of liability",
        content: "<p>Seguridad Online acts as a facilitator and has no control over the decisions of hosting providers, platforms, or social networks. <strong>We do not guarantee the removal of reported content</strong>, as the final decision rests exclusively with each provider.</p><p class='mt-3'>Our commitment is to handle each report rigorously, with adequate documentation, and within established timelines. We assume no responsibility for delays, omissions, or decisions by third-party platforms.</p>"
      },
      {
        title: "6. Policy on malicious or false reports",
        content: "<p>Seguridad Online reserves the right to reject, ignore, or dismiss any report that, at the team's discretion, is manifestly false, malicious, or intended to harass, harm, or unjustly damage a third party.</p><p class='mt-3'>The use of our services for the purposes of harassment, defamation, or intentional harm is expressly prohibited. Seguridad Online assumes no liability for the misuse of the platform by bad-faith users.</p>"
      },
      {
        title: "7. Ownership of the process",
        content: "<p>The formal report submitted to providers and platforms is prepared entirely by the Seguridad Online team. The reporter grants the use of the provided evidence exclusively for case management, without implying any additional transfer of rights.</p>"
      },
      {
        title: "8. Jurisdiction and applicable law",
        content: "<p>These terms are governed by the laws of the Argentine Republic. Any dispute arising from the interpretation or application of these terms shall be submitted to the jurisdiction of the competent ordinary courts of the Argentine Republic.</p>"
      },
      {
        title: "9. Modifications",
        content: "<p>Seguridad Online may modify these terms at any time. Continued use of the service after changes are published implies acceptance of the new terms.</p>"
      }
    ]
  },

  // Cookie Policy
  cookies: {
    meta: {
      title: "Cookie Policy",
      description: "Information about the use of cookies on Seguridad Online. We only use essential technical cookies and do not perform tracking."
    },
    hero: {
      badge: "Technical Document",
      title: "Cookie Policy",
      lastUpdated: "Last updated: April 2026",
      description: "Transparency is fundamental to us. On this page we explain which storage technologies we use and, more importantly, which ones we do not."
    },
    sections: [
      {
        title: "1. What are cookies?",
        content: "<p>Cookies are small text files that websites store on your device to ensure their proper functioning or to remember your browsing preferences.</p>"
      },
      {
        title: "2. Cookies we use",
        content: "<p>At Seguridad Online we use <strong>only essential technical cookies</strong>. These are indispensable for the basic operation and security of the site, and cannot be disabled without affecting the browsing experience.</p><p class='mt-3'>The technical cookies present on this site are provided by:</p><ul class='list-disc list-inside mt-3 space-y-2 text-foreground/90 ml-2'><li><strong>Cloudflare:</strong> for security protection, traffic management, and threat prevention (DDoS).</li><li><strong>Resend / Email providers:</strong> for processing the report form and secure data communication to our servers.</li></ul>"
      },
      {
        title: "3. User preferences (Local Storage)",
        content: "<p>To remember your visual theme preference (light mode / dark mode), we use your browser's local storage (<em>localStorage</em>). This information <strong>never leaves your device</strong> and is not transmitted to any server.</p>"
      },
      {
        title: "4. What we do NOT do",
        content: "<p>Seguridad Online expressly states that on this website:</p>",
        noList: [
          "We do not use marketing or advertising cookies.",
          "We do not use third-party tracking or analytics cookies (such as Google Analytics).",
          "We do not share browsing data with advertising networks or data brokers.",
          "We do not create user profiles or behavioral analytics."
        ]
      },
      {
        title: "5. Cookie management",
        content: "<p>You can manage, block, or delete cookies from your browser settings at any time. Please note that if you force the deactivation of technical or security cookies, you may not be able to submit reports through our form.</p>"
      },
      {
        title: "6. Contact",
        content: "<p>If you have questions about our cookie policy or the technical operation of the site, you can reach us through the official form available in the contact section.</p>"
      }
    ]
  }
} as const;