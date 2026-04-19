import type { TranslationKeys } from './es';
export const es: TranslationKeys = {

  // Sitio
  site: {
    title: 'Seguridad Online',
    description: 'Organización independiente dedicada a la auditoría digital. Investigamos reportes de infracciones, notificamos preventivamente y gestionamos casos ante proveedores.',
  },

  // Navegación
  nav: {
    home: 'Inicio',
    audit: 'Auditoria',
    about: 'Sobre Nosotros',
    contact: 'Contacto',
    donate: 'Donar',
    terms: 'Terminos',
    privacy: 'Privacidad',
    cookies: 'Cookies',
  },

  // Inicio
  home: {
    meta: {
    title: "Organización Independiente de Protección Digital",
    description: "Organización independiente dedicada a la auditoría digital. Investigamos reportes de infracciones, notificamos preventivamente y gestionamos casos ante proveedores."
  },
  hero: {
    badge: "Organización Independiente",
    titleStart: "Bienvenido a",
    titleHighlight: "Seguridad Online",
    titleEnd: ".",
    description: "Actuamos como un mediador para mantener el entorno digital seguro. Recibimos reportes, investigamos infracciones a políticas de uso y notificamos a los responsables para que corrijan la situación antes de escalar el caso a los proveedores.",
    btnPrimary: "Enviar un reporte",
    btnSecondary: "Conocer nuestro proceso",
    features: [
      "Proceso 100% Anónimo",
      "Revisión por Humanos",
      "Reportes Institucionales"
    ]
  },
  coverage: {
    title: "Nuestro campo de acción",
    description: "Nos enfocamos en auditorías de contenido donde los sistemas automáticos suelen fallar, priorizando un entorno sano.",
    items: [
      {
        title: "Prevención de Contenido Inadecuado",
        description: "Auditamos casos de contenido para adultos (como enlaces, tutoriales o promociones) que están indebidamente alojados en plataformas públicas con acceso a menores."
      },
      {
        title: "Prácticas No Éticas",
        description: "Investigamos sitios engañosos, intentos de suplantación de identidad (phishing) y recopilamos la información para notificar a los proveedores de hosting o dominio."
      },
      {
        title: "Derechos de Autor",
        description: "Actuamos como representantes para gestionar reclamos de derechos de autor, solicitando el retiro de la propiedad intelectual copiada o distribuida sin autorización."
      }
    ]
  },
  whyUs: {
    title: "Un proceso de auditoría formal e independiente.",
    description: "Los infractores suelen burlar los reportes automatizados de las redes sociales. <strong>Seguridad Online</strong> actúa de forma distinta: utilizamos tiempo y recursos humanos para estructurar casos completos.",
    items: [
      {
        title: "Análisis Detallado",
        description: "Nos tomamos el tiempo para recopilar datos públicos, medios de contacto y verificar en qué términos específicos se está incumpliendo."
      },
      {
        title: "Aviso Preventivo",
        description: "Antes de escalar al proveedor, brindamos al usuario un aviso claro sobre sus infracciones, dándole la oportunidad de corregirlas sin arriesgar la pérdida de su cuenta o sitio."
      },
      {
        title: "Comunicación Profesional",
        description: "Los proveedores y plataformas de internet confían en nuestros reportes porque enviamos documentación clara, ordenada y desde correos institucionales de la organización."
      }
    ],
    sidebar: {
      title: "Trato humano y directo",
      description: "Tu reporte siempre será gestionado por una persona real. Nuestro equipo se comunicará contigo mediante correos claros para mantenerte al tanto.",
      mails: [
        {
          title: "Mail de Confirmación:",
          description: "Te notificamos que hemos recibido tu reporte y comenzaremos a investigar."
        },
        {
          title: "Mail de Consulta (Opcional):",
          description: "Si necesitamos más contexto, un agente te escribirá para pedir detalles extra."
        },
        {
          title: "Mail de Resolución:",
          description: "Te informamos el resultado (si el usuario retiró el contenido o si escalamos el caso a la plataforma)."
        }
      ]
    }
  },
  process: {
    title: "Nuestra Metodología de Acción",
    description: "Un proceso estandarizado de 6 pasos para garantizar resoluciones justas, objetivas y que protegen tu privacidad en todo momento.",
    items: [
      { step: "01", title: "Recepción", desc: "El usuario envía su reporte a través de la web o por mail. Lo registramos en nuestra base temporal de forma segura." },
      { step: "02", title: "Análisis Normativo", desc: "Verificamos si la situación descrita infringe las políticas de servicio (TOS) del proveedor o plataforma involucrada." },
      { step: "03", title: "Investigación", desc: "Recopilamos enlaces, medios de contacto públicos y observamos si existen otras infracciones relacionadas al caso." },
      { step: "04", title: "Aviso de Cumplimiento", desc: "Contactamos al responsable indicando qué normativas está incumpliendo, dándole la oportunidad de solucionarlo voluntariamente." },
      { step: "05", title: "Plazo de Espera", desc: "Otorgamos un periodo (entre 24 horas y una semana, según la urgencia) para que el usuario retire o corrija el contenido reportado." },
      { step: "06", title: "Escalamiento", desc: "Si no hay cooperación, enviamos un informe institucional con las evidencias al proveedor o plataforma para que tome medidas." }
    ]
  },
  faq: {
    title: "Preguntas Frecuentes",
    description: "Información clara para quienes desean enviar un reporte.",
    items: [
      { q: "¿El usuario reportado sabrá que fui yo?", a: "Bajo ninguna circunstancia. Tu reporte es 100% anónimo. No almacenamos datos personales y el aviso de cumplimiento siempre se envía en nombre de la organización 'Seguridad Online', nunca del solicitante." },
      { q: "¿Atienden casos de robo de cuentas, hackeos o soporte técnico?", a: "No. Seguridad Online no es un servicio de soporte técnico para recuperar cuentas personales. Nos dedicamos exclusivamente a auditar infracciones a las normativas de las plataformas. Si perdiste tu cuenta, debes acudir al soporte oficial de dicha red." },
      { q: "¿Reportan delitos graves como ventas ilegales o actos criminales?", a: "No. Gestionamos faltas de políticas de servicio en el ámbito digital (ej. contenido inapropiado en zonas de menores, phishing). Ante delitos graves o situaciones de emergencia legal, te recomendamos contactar directamente a las autoridades o fuerzas de seguridad de tu país." },
      { q: "¿Cuánto tiempo toma el proceso de auditoría?", a: "Recibirás nuestro primer correo confirmando la recepción muy rápido. Luego, los plazos de resolución varían, otorgando entre 24 horas y una semana de plazo al usuario notificado para corregir la falta." },
      { q: "¿El servicio de reporte tiene algún costo?", a: "No, todo nuestro proceso es totalmente gratuito. Operamos como una organización independiente financiada únicamente por donaciones voluntarias de quienes apoyan la iniciativa." }
    ]
  },
  donations: {
    title: "Apoya a Seguridad Online",
    description: "Nuestra organización se mantiene íntegramente por donaciones voluntarias. Tu aporte nos ayuda a costear el alojamiento, el dominio y a seguir invirtiendo el tiempo necesario para gestionar cada reporte con seriedad y profesionalismo.",
    privacyNoteTitle: "Nota de privacidad:",
    privacyNote: "Las donaciones son totalmente anónimas y no otorgan ventajas o funciones extra al momento de hacer reportes.",
    btn: "Hacer una donación"
  }
},

// Auditoria
audit: {
    meta: {
      title: "Auditoría y Cumplimiento",
      description: "Información oficial sobre avisos de infracción, plazos de cumplimiento y proceso de apelación de Seguridad Online."
    },
    hero: {
      badge: "Departamento de Auditoría",
      title: "Información sobre Avisos de Infracción",
      description: "Esta página está destinada a usuarios, administradores de sitios web o titulares de cuentas que han recibido una <strong>Notificación de Cumplimiento</strong> por parte de nuestra organización."
    },
    notice: {
      title: "Consulte su notificación personal",
      description: "La información expuesta en esta página es de carácter general. <strong>Los detalles específicos de su caso</strong> (enlaces exactos, políticas que está infringiendo y el tiempo límite exacto para solucionarlo) <strong>se encuentran detallados en el correo electrónico o mensaje directo que le hemos enviado.</strong>"
    },
    protocol: {
      title: "Protocolo de Acción y Consecuencias",
      reason: {
        title: "1. ¿Por qué he recibido un aviso?",
        description: "Nuestros analistas han investigado un reporte o detectado proactivamente que su cuenta, publicación o sitio web incumple directamente con los <strong>Términos de Servicio (TOS)</strong> de la plataforma donde está alojado. Las infracciones más comunes que auditamos incluyen: exposición de menores a contenido inadecuado, suplantación de identidad (phishing), o infracciones de derechos de autor."
      },
      deadlines: {
        title: "2. Plazos de Cumplimiento",
        description: "Al recibir una notificación de nuestra organización, se le otorga un periodo de gracia para retirar o corregir el contenido infractor voluntariamente. Este acto previene el cierre repentino de su cuenta.",
        standard: "<strong>Infracciones estándar:</strong> Se otorga un plazo máximo de hasta 1 semana (7 días hábiles).",
        severe: "<strong>Infracciones graves (Riesgo a menores / Estafas activas):</strong> Se exige la retirada en un plazo no mayor a 24 - 48 horas.",
        note: "* El tiempo exacto aplicable a su caso se indica en la notificación que recibió."
      },
      consequences: {
        title: "3. Consecuencias de ignorar el requerimiento",
        description: "Seguridad Online <strong>no bloquea</strong> sus cuentas directamente. Sin embargo, si usted decide ignorar la notificación y el plazo expira, nuestro equipo armará un <strong>dossier completo de evidencias</strong>. <br/><br/> Este informe es escalado mediante canales corporativos directamente a los equipos de moderación (Trust & Safety) de su red social, proveedor de dominio o alojamiento web (ej. Vercel, GitHub, Cloudflare, Meta, TikTok, etc.). <strong>Los proveedores suelen proceder con la eliminación permanente de la cuenta y los datos alojados</strong> al recibir nuestras investigaciones documentadas."
      },
      appeal: {
        title: "4. ¿Qué hago si considero que es un error?",
        description: "Si usted cree firmemente que su contenido no infringe ninguna política del proveedor o tiene los derechos legales sobre el mismo (Falso Positivo), tiene derecho a presentar una objeción.",
        procedureLabel: "Procedimiento:",
        steps: [
          "<strong>No ignore el mensaje.</strong> El silencio se interpreta como falta de cooperación.",
          "<strong>Responda directamente</strong> al correo electrónico o mensaje por el cual fue notificado.",
          "<strong>Adjunte pruebas.</strong> Explique el contexto, envíe licencias si corresponde, o demuestre por qué el contenido está en regla con los Términos de la plataforma."
        ],
        note: "Nuestro equipo humano revisará su apelación. Si se comprueba que el contenido es lícito, el caso será cerrado y archivado inmediatamente sin consecuencias para usted."
      }
    },
    footer: {
      title: "Organización Independiente",
      description: "Seguridad Online actúa como entidad auditora independiente y no está afiliada legalmente a las plataformas de alojamiento o redes sociales, aunque colabora reportando infracciones comprobadas a sus normativas."
    }
  },

// Sobre nosotros
about: {
    meta: {
      title: "Sobre Nosotros",
      description: "Conoce la historia, misión y valores de Seguridad Online. Una organización independiente dedicada a hacer de internet un lugar más seguro."
    },
    hero: {
      title: "Defensores del usuario.<br /> <span class=\"text-brand-500\">Auditores de la red.</span>",
      description: "Seguridad Online no es una red social ni un proveedor de internet. Somos una <strong>organización independiente</strong> formada por personas reales, dedicada a proteger a los usuarios frente al contenido peligroso y las prácticas poco éticas."
    },
    origin: {
      badge: "Nuestro Origen",
      title: "El sistema de reporte tradicional está roto.",
      paragraphs: [
        "Seguridad Online nació de una frustración compartida. Hoy en día, la mayoría de las redes sociales y proveedores de alojamiento utilizan Inteligencia Artificial para moderar su contenido.",
        "El problema es que los infractores han aprendido \"trucos\" para burlar a las máquinas. Cuando un usuario normal intenta reportar un contenido peligroso —como material inadecuado expuesto a menores—, suele recibir una respuesta automática diciendo: <em>\"No hemos encontrado ninguna infracción\"</em>.",
        "Sabemos que la gente no tiene el tiempo, ni los conocimientos técnicos para redactar apelaciones complejas. Por eso creamos esta organización: <strong>para actuar por ti.</strong>"
      ],
      cards: {
        automated: {
          title: "Sistemas Automatizados",
          description: "Ignoran el contexto y son fácilmente evadidos por infractores experimentados."
        },
        human: {
          title: "Análisis Humano",
          description: "Nosotros investigamos manualmente, uniendo las piezas que una IA jamás vería."
        }
      }
    },
    pillars: {
      title: "Nuestros Pilares",
      description: "Cómo trabajamos y qué defendemos al tomar cada uno de los casos.",
      items: [
        {
          title: "Privacidad Absoluta",
          description: "Protegemos al usuario, no al infractor. Todo reporte es anónimo. No almacenamos tus datos ni los compartimos. Nosotros damos la cara frente al proveedor para que tú no tengas que exponerte."
        },
        {
          title: "Protección Infantil",
          description: "Nuestra mayor prioridad es evitar que los menores sean expuestos o normalicen el contenido para adultos publicado indebidamente en plataformas de acceso general."
        },
        {
          title: "Objetividad Formal",
          description: "No actuamos por venganza personal ni odios. Emitimos avisos de cumplimiento formales, dando al usuario la oportunidad de retirar el contenido antes de perder el esfuerzo de su trabajo."
        }
      ]
    },
    funding: {
      title: "Financiados por la comunidad",
      description: "Seguridad Online es una iniciativa independiente y sin fines de lucro. <strong>Nuestros servicios de auditoría y reporte son y siempre serán 100% gratuitos.</strong>",
      note: "Nos mantenemos a flote gracias a las donaciones de personas que apoyan nuestra misión. Estos fondos no compran funciones \"Premium\" ni aceleran reportes; se utilizan exclusivamente para pagar el alojamiento web, el dominio institucional y para compensar el tiempo que nuestro equipo invierte en investigar a fondo cada caso.",
      btnPrimary: "Apoyar nuestra labor",
      btnSecondary: "Hacer un reporte"
    }
  },

// Contacto
contact: {
    meta: {
      title: "Contacto y Reportes",
      description: "Envía tu reporte de forma anónima y segura. Nuestro equipo humano analizará la infracción y actuará en consecuencia."
    },
    hero: {
      title: "Contacto y Reportes",
      description: "Utiliza este formulario para enviarnos un reporte de infracción o para consultas generales. Todo proceso es <strong class=\"text-foreground\">estrictamente confidencial y anónimo</strong>. Nuestro equipo humano revisará tu caso y te responderá lo antes posible."
    },
    form: {
      title: "Enviar un caso",
      name: {
        label: "Nombre o Alias (Opcional)",
        placeholder: "Ej. Usuario Anónimo"
      },
      email: {
        label: "Correo Electrónico",
        placeholder: "tu@correo.com",
        hint: "Solo lo usaremos para responderte. No lo guardaremos."
      },
      subject: {
        label: "Asunto del reporte",
        placeholder: "Selecciona una opción...",
        options: [
          { value: "contenido_inadecuado", label: "Prevención: Contenido inadecuado en zonas de menores" },
          { value: "phishing", label: "Prácticas no éticas: Phishing o Estafas web" },
          { value: "derechos_autor", label: "Derechos de Autor: Propiedad intelectual copiada" },
          { value: "consulta_general", label: "Consulta general o duda sobre un reporte" }
        ]
      },
      url: {
        label: "Enlace a la infracción (Opcional pero recomendado)",
        placeholder: "https://ejemplo.com/enlace-al-problema"
      },
      message: {
        label: "Detalles del caso",
        placeholder: "Describe brevemente la situación, dónde se encuentra el contenido y qué política crees que está infringiendo..."
      },
      submitBtn: "Enviar Reporte"
    },
    sidebar: {
      contact: {
        title: "Otros medios de contacto",
        email: {
          label: "Vía Correo Electrónico",
          value: "reportes@seguridadonline.org"
        },
        twitter: {
          label: "Vía X (Twitter)",
          value: "@sguridadonline"
        }
      },
      rules: {
        title: "Antes de enviar",
        items: [
          { bold: "No recuperamos cuentas:", text: " Si te hackearon tu red social, debes usar el soporte oficial de esa plataforma." },
          { bold: "No atendemos crímenes severos:", text: " Ante un delito grave (venta de drogas, etc.), contacta a las autoridades policiales de tu país de inmediato." },
          { bold: "Paciencia:", text: " Somos un equipo humano. Normalmente intercambiaremos un promedio de 3 correos contigo para darte el estado final de tu reporte." }
        ]
      }
    }
},

// Donar
donate: {
    meta: {
      title: "Haz una Donación",
      description: "Apoya a Seguridad Online. Somos una organización independiente financiada por la comunidad para mantener un internet más seguro."
    },
    hero: {
      badge: "Apoyo Comunitario",
      title: "Financiados por personas como tú",
      description: "Seguridad Online es una iniciativa 100% independiente. No recibimos fondos corporativos ni gubernamentales. Tu aporte voluntario nos permite mantener nuestra infraestructura y dedicar el tiempo necesario a cada investigación."
    },
    transparency: {
      title: "¿A dónde van los fondos?",
      items: [
        {
          title: "Infraestructura Técnica",
          description: "Pago de dominios (seguridadonline.org), alojamiento web (hosting), servicios de correo corporativo para los reportes y protección en la nube."
        },
        {
          title: "Recursos Humanos",
          description: "Compensación simbólica por las horas que nuestro equipo invierte en investigar a los infractores, recopilar evidencias y redactar apelaciones formales."
        }
      ]
    },
    disclaimer: {
      title: "Garantía de Privacidad y Equidad",
      description: "Las donaciones son <strong>estrictamente anónimas</strong>. Aportar fondos no te otorga prioridad en la fila de reportes ni funciones \"Premium\". Tratamos todos los casos con la misma urgencia y seriedad, hayas donado o no."
    },
    methods: {
      title: "Métodos de Donación",
      binance: {
        title: "Binance Pay",
        description: "Escanea el código QR desde tu app de Binance o copia nuestro Pay ID para enviar USDT u otras criptomonedas sin comisiones.",
        payIdLabel: "Binance Pay ID:",
        payIdValue: "1220702494", // Reemplaza esto con tu Pay ID real
        copyBtn: "Copiar ID",
        copiedBtn: "¡Copiado!",
        qrAlt: "QR de Binance Pay"
      },
      kofi: {
        title: "Ko-fi / Tarjeta",
        badge: "Próximamente",
        description: "Pronto habilitaremos donaciones mediante dinero fiat (tarjetas de crédito/débito) para quienes no utilizan criptomonedas."
      }
    }
  },

// Politica de Privacidad
privacy: {
    meta: {
      title: "Política de Privacidad",
      description: "Conoce cómo protegemos tu identidad. Política estricta de recolección mínima, anonimato garantizado y eliminación de datos en 7 días."
    },
    hero: {
      badge: "Documento Oficial",
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: abril de 2026",
      description: "La privacidad es el núcleo de nuestra organización. En este documento detallamos de forma transparente y sin jerga legal innecesaria cómo tratamos la poca información que procesamos."
    },
    sections: [
      {
        title: "1. Responsable del tratamiento",
        content: "<p>El responsable del tratamiento de datos es el equipo de Seguridad Online, colectivo independiente operado bajo la identidad organizacional de seguridadonline.org. No se identifican personas físicas individuales en este documento por razones de seguridad operativa y coherencia con los valores de anonimato que defendemos.</p><p class='mt-3'>Para consultas relacionadas con esta política, podés contactarnos a través del formulario oficial del sitio.</p>"
      },
      {
        title: "2. Datos que recolectamos",
        content: "<p>Practicamos una estricta política de <strong>recolección mínima</strong>. Solo procesamos los siguientes datos:</p><ul class='list-disc list-inside mt-3 mb-3 space-y-2 text-foreground/90 ml-2'><li><strong>Dirección de correo electrónico</strong> del reportante, utilizada exclusivamente para comunicar el estado del caso.</li><li><strong>Evidencia</strong> proporcionada en el reporte (capturas de pantalla, URLs, descripciones), necesaria para llevar adelante la investigación.</li></ul><p>No recolectamos nombres completos, documentos de identidad, números telefónicos ni ningún otro dato personal adicional.</p>"
      },
      {
        title: "3. Finalidad del tratamiento",
        content: "<p>Los datos recolectados se utilizan únicamente para:</p><ul class='list-disc list-inside mt-3 mb-3 space-y-2 text-foreground/90 ml-2'><li>Gestionar y dar seguimiento al reporte presentado.</li><li>Comunicarnos con el reportante sobre el estado de su caso.</li><li>Elaborar el reporte formal dirigido al proveedor de hosting o plataforma correspondiente.</li></ul><p><strong>No utilizamos los datos para fines comerciales, publicitarios ni estadísticos.</strong></p>"
      },
      {
        title: "4. Infraestructura técnica",
        content: "<p>Seguridad Online opera sobre las siguientes plataformas de confianza:</p><ul class='list-disc list-inside mt-3 mb-3 space-y-2 text-foreground/90 ml-2'><li><strong>Google Cloud / Resend:</strong> utilizado para el procesamiento y recepción de formularios de reporte y correos.</li><li><strong>Cloudflare:</strong> utilizado como capa de infraestructura, seguridad y protección DDoS del sitio web.</li></ul><p>Ambos proveedores cuentan con sus propias políticas de privacidad y estándares de seguridad internacionales. Les recomendamos consultarlas si desean conocer el tratamiento técnico que aplican a los datos en tránsito.</p>"
      },
      {
        title: "5. Retención y eliminación de datos",
        content: "Todos los datos asociados a un reporte —incluyendo el correo electrónico y las evidencias— son <strong>eliminados de forma definitiva e irrecuperable dentro de los 7 días corridos posteriores al cierre del caso</strong>, independientemente del resultado obtenido.<br/><br/>No conservamos archivos históricos ni bases de datos de reportes anteriores.",
        highlight: true
      },
      {
        title: "6. Anonimato garantizado frente al infractor",
        content: "El infractor nunca sabrá quién realizó el reporte. Esta es una garantía central de nuestro servicio.<br/><br/>En ningún paso del proceso —incluyendo el aviso de cortesía al infractor y el reporte formal al proveedor— se menciona, insinúa ni transmite información que pueda identificar al reportante. Las evidencias se presentan de forma desvinculada de la identidad del denunciante.",
        highlight: true
      },
      {
        title: "7. Donaciones",
        content: "<p>Las donaciones voluntarias a Seguridad Online se procesan con la mayor reserva (ej. vía Binance u otros medios). La información asociada a los donantes —incluyendo direcciones de billetera y montos— es tratada con absoluta privacidad y <strong>no es compartida con terceros bajo ninguna circunstancia</strong>.</p><p class='mt-3'>Las donaciones no otorgan ningún tipo de trato preferencial en la gestión de reportes.</p>"
      },
      {
        title: "8. Derechos del usuario",
        content: "<p>En tanto tratamos una cantidad mínima de datos y los eliminamos en el plazo indicado, los derechos de acceso, rectificación y supresión pueden ejercerse en cualquier momento <strong>durante la vigencia del caso</strong>, contactándonos a través del formulario del sitio.</p>"
      },
      {
        title: "9. Modificaciones a esta política",
        content: "<p>Seguridad Online se reserva el derecho de actualizar esta política. Cualquier cambio relevante será comunicado mediante un aviso visible en el sitio web.</p>"
      }
    ]
  },

  // Terminos y Condiciones
  terms: {
    meta: {
      title: "Términos de Servicio",
      description: "Términos oficiales que rigen el uso de los servicios de auditoría, gestión de reportes y limitaciones de responsabilidad de Seguridad Online."
    },
    hero: {
      badge: "Documento Legal",
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: abril de 2026",
      description: "Al utilizar los servicios de reporte y auditoría de Seguridad Online, usted acepta los procedimientos, exclusiones y limitaciones de responsabilidad descritos a continuación."
    },
    sections: [
      {
        title: "1. Naturaleza del servicio",
        content: "<p>Seguridad Online es una organización de auditoría ética digital que actúa como intermediaria entre usuarios afectados y plataformas o proveedores de hosting. <strong>No somos una autoridad legal, judicial ni gubernamental.</strong></p><p class='mt-3'>Nuestro rol es facilitar el reporte formal de infracciones a las políticas de uso de plataformas —especialmente aquellas que ponen en riesgo la seguridad de menores o la salud del entorno digital— utilizando canales oficiales y procedimientos documentados.</p><p class='mt-3'>Al utilizar nuestros servicios, el usuario acepta íntegramente estos términos.</p>"
      },
      {
        title: "2. Procedimiento de gestión de reportes",
        content: "<p>Todos los reportes recibidos son gestionados por personas humanas capacitadas. No utilizamos inteligencia artificial ni sistemas automatizados para analizar o procesar los casos. El proceso consta de seis etapas:</p>",
        steps: [
          {
            name: "Paso 1 — Recepción",
            desc: "El equipo de Seguridad Online recibe el reporte a través del formulario oficial del sitio y confirma su recepción al reportante por correo electrónico."
          },
          {
            name: "Paso 2 — Análisis de políticas",
            desc: "Se revisan las políticas de uso de la plataforma o proveedor involucrado para determinar si existe una infracción verificable y accionable."
          },
          {
            name: "Paso 3 — Investigación de fuentes públicas",
            desc: "Se identifican los canales de contacto oficiales y públicos del presunto infractor (sitio web, correo de soporte, perfiles en redes sociales, registros WHOIS públicos, etc.). En ningún caso se accede a información privada ni se realizan actividades que excedan la consulta de fuentes de acceso público."
          },
          {
            name: "Paso 4 — Aviso de cortesía al infractor",
            desc: "Se notifica al infractor sobre la infracción detectada, indicando el plazo disponible para resolverla voluntariamente. Este aviso es formal, documentado y no revela la identidad del reportante."
          },
          {
            name: "Paso 5 — Plazo de espera",
            desc: "Se otorga al infractor un plazo de entre 24 horas y 7 días corridos para corregir la situación, dependiendo de la gravedad de la infracción detectada."
          },
          {
            name: "Paso 6 — Reporte formal al proveedor",
            desc: "En caso de que el infractor no tome medidas correctivas dentro del plazo, se presenta un reporte formal —con evidencias documentadas— ante el proveedor de hosting, la red social o la plataforma correspondiente, solicitando la revisión y eventual remoción del contenido infractor."
          }
        ]
      },
      {
        title: "3. Casos aceptados",
        content: "<p>Seguridad Online acepta reportes relacionados con:</p><ul class='list-disc list-inside mt-3 space-y-2 text-foreground/90 ml-2'><li>Contenido para adultos publicado en entornos accesibles a menores de edad.</li><li>Infracciones a las políticas de uso de plataformas como Vercel, GitHub, Meta, X (Twitter), TikTok, y similares.</li><li>Sitios web o cuentas que violan los términos de servicio de sus proveedores de hosting o dominio.</li><li>Otros casos de infracciones digitales que afecten la seguridad del entorno online.</li></ul>"
      },
      {
        title: "4. Exclusiones expresas",
        content: "<p>Seguridad Online no acepta ni gestiona los siguientes tipos de casos:</p><ul class='list-disc list-inside mt-3 space-y-2 text-foreground/90 ml-2'><li><strong>Denuncias relacionadas con actividades ilícitas graves</strong> (tráfico de sustancias, delitos penales, pornografía infantil). Estos casos deben ser reportados directamente a las autoridades competentes.</li><li>Recuperación de cuentas comprometidas o hackeadas.</li><li>Disputas comerciales, de propiedad intelectual o contractuales entre partes.</li><li>Casos que requieran intervención judicial o policial.</li></ul>"
      },
      {
        title: "5. Limitación de responsabilidad",
        content: "<p>Seguridad Online actúa como facilitadora y no tiene control sobre las decisiones de los proveedores de hosting, plataformas o redes sociales. <strong>No garantizamos la eliminación del contenido reportado</strong>, ya que la decisión final corresponde exclusivamente a cada proveedor.</p><p class='mt-3'>Nuestro compromiso es gestionar cada reporte con rigor, documentación adecuada y dentro de los plazos establecidos. No asumimos responsabilidad por demoras, omisiones o decisiones de terceros plataformas.</p>"
      },
      {
        title: "6. Política frente a reportes malintencionados o falsos",
        content: "<p>Seguridad Online se reserva el derecho de rechazar, ignorar o desestimar cualquier reporte que, a criterio del equipo, sea manifiestamente falso, malintencionado, o tenga por objetivo hostigar, dañar o perjudicar injustamente a un tercero.</p><p class='mt-3'>El uso de nuestros servicios para fines de acoso, difamación o daño intencionado queda expresamente prohibido. Seguridad Online no asume responsabilidad alguna por el uso indebido de la plataforma por parte de usuarios de mala fe.</p>"
      },
      {
        title: "7. Propiedad del proceso",
        content: "<p>El reporte formal presentado ante proveedores y plataformas es elaborado íntegramente por el equipo de Seguridad Online. El reportante cede el uso de las evidencias proporcionadas exclusivamente para la gestión del caso, sin que ello implique transferencia de derechos adicionales.</p>"
      },
      {
        title: "8. Jurisdicción y ley aplicable",
        content: "<p>Estos términos se rigen por las leyes de la República Argentina. Cualquier controversia derivada de la interpretación o aplicación de estos términos será sometida a la jurisdicción de los tribunales ordinarios competentes de la República Argentina.</p>"
      },
      {
        title: "9. Modificaciones",
        content: "<p>Seguridad Online podrá modificar estos términos en cualquier momento. El uso continuado del servicio tras la publicación de cambios implica la aceptación de los nuevos términos.</p>"
      }
    ]
  },

  // Politica de Cookies
  cookies: {
    meta: {
      title: "Política de Cookies",
      description: "Información sobre el uso de cookies en Seguridad Online. Solo utilizamos cookies técnicas esenciales y no realizamos rastreo."
    },
    hero: {
      badge: "Documento Técnico",
      title: "Política de Cookies",
      lastUpdated: "Última actualización: abril de 2026",
      description: "La transparencia es fundamental para nosotros. En esta página explicamos qué tecnologías de almacenamiento utilizamos y, más importante aún, cuáles no."
    },
    sections: [
      {
        title: "1. ¿Qué son las cookies?",
        content: "<p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo para garantizar su correcto funcionamiento o para recordar tus preferencias de navegación.</p>"
      },
      {
        title: "2. Cookies que utilizamos",
        content: "<p>En Seguridad Online utilizamos <strong>únicamente cookies técnicas esenciales</strong>. Estas son indispensables para el funcionamiento básico y la seguridad del sitio, y no pueden desactivarse sin afectar la experiencia de navegación.</p><p class='mt-3'>Las cookies técnicas presentes en este sitio son proporcionadas por:</p><ul class='list-disc list-inside mt-3 space-y-2 text-foreground/90 ml-2'><li><strong>Cloudflare:</strong> para la protección de seguridad, gestión del tráfico y prevención de amenazas (DDoS).</li><li><strong>Resend / Proveedores de correo:</strong> para el procesamiento del formulario de reporte y la comunicación segura de datos hacia nuestros servidores.</li></ul>"
      },
      {
        title: "3. Preferencias del usuario (Almacenamiento Local)",
        content: "<p>Para recordar tu preferencia de tema visual (modo claro / modo oscuro), utilizamos el almacenamiento local de tu navegador (<em>localStorage</em>). Esta información <strong>nunca sale de tu dispositivo</strong> y no es transmitida a ningún servidor.</p>"
      },
      {
        title: "4. Lo que NO hacemos",
        content: "<p>Seguridad Online declara expresamente que en este sitio web:</p>",
        noList: [
          "No utilizamos cookies de marketing ni publicidad.",
          "No utilizamos cookies de rastreo o analíticas de terceros (como Google Analytics).",
          "No compartimos datos de navegación con redes publicitarias ni data brokers.",
          "No generamos perfiles de usuario ni análisis de comportamiento."
        ]
      },
      {
        title: "5. Gestión de cookies",
        content: "<p>Podés gestionar, bloquear o eliminar las cookies desde la configuración de tu navegador en cualquier momento. Ten en cuenta que si fuerzas la desactivación de las cookies técnicas o de seguridad, es posible que no puedas enviar reportes a través de nuestro formulario.</p>"
      },
      {
        title: "6. Contacto",
        content: "<p>Si tenés preguntas sobre nuestra política de cookies o el funcionamiento técnico del sitio, podés comunicarte a través del formulario oficial disponible en la sección de contacto.</p>"
      }
    ]
  }
} as const;
