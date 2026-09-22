export const siteLinks = {
  whatsapp: "https://wa.me/message/EXJAM66AC6JHC1",
  maps: "https://maps.app.goo.gl/4A1NJmaUCM6jyDhn8?g_st=ic",
} as const;

export const navigation = [
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Experiência", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

export type Service = {
  title: string;
  eyebrow: string;
  description: string;
  photos?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
    label?: string;
  }>;
};

export const services: Service[] = [
  {
    title: "Extensão de cílios",
    eyebrow: "Olhar",
    description:
      "Aplicação personalizada para valorizar o olhar com leveza, harmonia e acabamento delicado.",
    photos: [
      {
        src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/extension-1.webp",
        alt: "Resultado de extensão de cílios visto de frente",
        width: 1600,
        height: 1200,
      },
      {
        src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/extension-2.webp",
        alt: "Resultado de extensão de cílios em detalhe",
        width: 1569,
        height: 1600,
      },
    ],
  },
  {
    title: "Design de sobrancelhas",
    eyebrow: "Expressão",
    description:
      "Desenho pensado para o seu rosto, respeitando seus traços e a naturalidade dos fios.",
    photos: [
      {
        src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/design-before.webp",
        alt: "Sobrancelha antes do design",
        width: 1600,
        height: 1200,
        label: "Antes",
      },
      {
        src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/design-after.webp",
        alt: "Sobrancelha depois do design",
        width: 1600,
        height: 1200,
        label: "Depois",
      },
    ],
  },
  {
    title: "Brow lamination",
    eyebrow: "Sobrancelhas",
    description:
      "Fios alinhados e modelados para um efeito mais definido, preenchido e elegante.",
    photos: [
      {
        src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/brow-lamination-1.webp",
        alt: "Resultado de brow lamination com fios alinhados",
        width: 1600,
        height: 1200,
      },
      {
        src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/brow-lamination-2.webp",
        alt: "Resultado natural de brow lamination",
        width: 1235,
        height: 1206,
      },
    ],
  },
  {
    title: "Lash lifting",
    eyebrow: "Curvatura",
    description:
      "Curvatura e destaque para os cílios naturais, com um resultado leve e prático.",
    photos: [
      {
        src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/lash-lifting-1.webp",
        alt: "Resultado de lash lifting nos cílios naturais",
        width: 1600,
        height: 1200,
      },
    ],
  },
  {
    title: "Limpeza de pele",
    eyebrow: "Cuidado",
    description:
      "Um cuidado completo para renovar a pele e devolver uma aparência fresca e bem cuidada.",
  },
  {
    title: "Micropigmentação",
    eyebrow: "Definição",
    description:
      "Técnica semipermanente para realçar e harmonizar as sobrancelhas, com desenho personalizado e acabamento natural.",
    photos: [
      {
        src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/micropigmentation-1.webp",
        alt: "Resultado de micropigmentação em detalhe",
        width: 1122,
        height: 1402,
      },
      {
        src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/micropigmentation-2.webp",
        alt: "Resultado frontal de micropigmentação",
        width: 1280,
        height: 960,
      },
      {
        src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/micropigmentation-3.webp",
        alt: "Resultado natural de micropigmentação",
        width: 1280,
        height: 960,
      },
    ],
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  tone: "portrait" | "landscape";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/editorial-treatment.webp",
    alt: "Camila realizando um procedimento de sobrancelhas",
    tone: "landscape",
  },
  {
    src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/editorial-artist.webp",
    alt: "Camila concentrada durante um atendimento",
    tone: "portrait",
  },
  {
    src: "https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/editorial-brows.webp",
    alt: "Aplicação de máscara durante uma limpeza de pele",
    tone: "portrait",
  },
];

export const faqItems = [
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Você pode pagar com cartão de crédito, cartão de débito ou Pix. Também disponibilizo parcelamento no cartão de crédito.",
  },
  {
    question: "Extensão de cílios pode estragar os fios naturais?",
    answer:
      "Quando aplicada corretamente, com materiais de qualidade e respeitando o ciclo natural dos fios, a extensão não causa danos aos cílios naturais.",
  },
  {
    question: "Quais procedimentos você realiza?",
    answer:
      "Eu realizo brow lamination, extensão de cílios, lash lifting, limpeza de pele, design de sobrancelhas e micropigmentação, sempre com atenção aos detalhes e ao resultado natural.",
  },
] as const;
