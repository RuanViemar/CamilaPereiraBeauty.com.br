import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  faqItems,
  galleryItems,
  navigation,
  services,
  siteLinks,
} from "@/app/content";
import { ServiceGallery } from "@/app/service-gallery";

const whatsappLabel = "Agendar atendimento com Camila pelo WhatsApp";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Camila Pereira Beauty — início">
          <span className="brand-monogram" aria-hidden="true">
            CP
          </span>
          <span className="brand-name">
            Camila Pereira
            <small>Beauty</small>
          </span>
        </a>

        <nav aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href={siteLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label={whatsappLabel}
        >
          Agendar
          <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" />
            Estética do olhar &amp; beleza natural
          </p>
          <h1>
            Beleza que valoriza
            <em>quem você já é.</em>
          </h1>
          <p className="hero-intro">
            Cílios, sobrancelhas e cuidados pensados para realçar seu olhar
            com técnica, leveza e intenção.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={siteLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Agendar atendimento com Camila pelo WhatsApp"
            >
              <MessageCircle aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
            <a className="text-link" href="#procedimentos">
              Conhecer procedimentos
              <ArrowDownRight aria-hidden="true" />
            </a>
          </div>

          <div className="hero-signature" aria-label="Atendimento personalizado">
            <strong>01</strong>
            <span>
              Atendimento com hora marcada
              <small>Cuidado individual em cada detalhe</small>
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <Image
              src="https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/camila-hero.webp"
              alt="Camila Pereira, especialista em cílios e sobrancelhas"
              width={1086}
              height={1448}
              priority
              sizes="(max-width: 820px) 92vw, 48vw"
            />
          </div>
          <p className="hero-caption">
            <span>Camila Pereira</span>
            Lash &amp; Brow Designer
          </p>
          <Sparkles className="hero-sparkle" aria-hidden="true" />
        </div>
      </section>

      <section id="procedimentos" className="services section-shell">
        <div className="section-heading services-heading">
          <div>
            <p className="eyebrow eyebrow-dark">Procedimentos</p>
            <h2>
              Seu olhar,
              <em>do seu jeito.</em>
            </h2>
          </div>
          <p>
            Cada técnica é escolhida para conversar com seus traços e com o
            resultado que você deseja — sempre com leveza e naturalidade.
          </p>
        </div>

        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <p>{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-actions">
                <a
                  className="service-action-link"
                  href={siteLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Agendar ${service.title} com Camila pelo WhatsApp`}
                >
                  Quero agendar
                  <ArrowUpRight aria-hidden="true" />
                </a>
                {service.photos?.length ? (
                  <ServiceGallery
                    title={service.title}
                    photos={service.photos}
                    triggerLabel="Ver fotos"
                  />
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="resultados" className="results">
        <div className="results-copy">
          <p className="eyebrow">A experiência</p>
          <h2>
            Delicadeza em cada
            <em>escolha.</em>
          </h2>
          <p>
            Um atendimento próximo, em uma atmosfera serena, para você se
            sentir confortável do primeiro contato ao resultado final.
          </p>
        </div>

        <div className="gallery" aria-label="Galeria Camila Pereira Beauty">
          {galleryItems.map((item, index) => (
            <figure
              className={`gallery-item gallery-item-${index + 1} ${item.tone}`}
              key={item.src}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: index === 2 ? "cover" : "contain" }}
                sizes={index === 0 ? "(max-width: 820px) 92vw, 56vw" : "(max-width: 820px) 92vw, 28vw"}
              />
            </figure>
          ))}
        </div>
      </section>

      <section id="sobre" className="about section-shell">
        <div className="about-art" aria-hidden="true">
          <Image
            src="https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/brand-botanicals.jpg"
            alt=""
            fill
            sizes="(max-width: 820px) 100vw, 44vw"
          />
          <span className="about-seal">CP</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow eyebrow-dark">Sobre mim</p>
          <h2>
            Técnica com intenção.
            <em>Cuidado de verdade.</em>
          </h2>
          <p className="about-lead">
            Cada atendimento que realizo é pensado nos detalhes. Mais do que
            um procedimento, eu crio uma experiência de cuidado que respeita
            seus traços, valoriza sua beleza natural e fortalece a forma como
            você se vê.
          </p>
          <blockquote>
            “Você não sai só mais bonita. Sai mais segura, mais forte e ainda
            mais você.”
          </blockquote>
          <a
            className="text-link text-link-dark"
            href={siteLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar atendimento com Camila pelo WhatsApp"
          >
            Falar comigo
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="duvidas" className="faq section-shell">
        <div className="faq-heading">
          <p className="eyebrow eyebrow-dark">Antes de agendar</p>
          <h2>
            Dúvidas
            <em>frequentes.</em>
          </h2>
          <p>
            Informação clara também faz parte de uma experiência tranquila.
          </p>
        </div>

        <Accordion className="faq-list" type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem value={`faq-${index + 1}`} key={item.question}>
              <AccordionTrigger>
                <span className="faq-number">0{index + 1}</span>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="location section-shell">
        <div className="location-card">
          <MapPin aria-hidden="true" />
          <p className="eyebrow">Onde encontrar</p>
          <h2>Um espaço pensado para receber você com calma e conforto.</h2>
          <a
            className="button button-light"
            href={siteLinks.maps}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir a localização de Camila Pereira Beauty no Google Maps"
          >
            Ver rota no Google Maps
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="location-image">
          <Image
            src="https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/location-coffee.webp"
            alt="Café com flores em uma composição acolhedora"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 820px) 100vw, 50vw"
          />
        </div>
      </section>

      <section id="mentoria" className="mentoring section-shell">
        <div className="mentoring-copy">
          <p className="eyebrow eyebrow-dark">Para profissionais</p>
          <h2>
            Aprenda a técnica.
            <em>Construa sua confiança.</em>
          </h2>
          <p>
            Cursos para quem deseja começar ou se aperfeiçoar nas áreas de
            cílios e sobrancelhas, com técnicas atualizadas e foco na prática
            real.
          </p>
          <a
            className="button button-outline"
            href={siteLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar atendimento com Camila pelo WhatsApp"
          >
            Saber mais sobre a mentoria
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="mentoring-visual">
          <span className="mentor-orbit" aria-hidden="true" />
          <Image
            src="https://camilapereirabeauty.ruanwildner123.chatgpt.site/images/mentorship.png"
            alt="Material visual da mentoria Camila Pereira Beauty"
            width={640}
            height={800}
            sizes="(max-width: 820px) 68vw, 28vw"
          />
        </div>
      </section>

      <footer id="contato">
        <div className="footer-brand">
          <p>Camila Pereira</p>
          <span>Beauty</span>
        </div>
        <p className="footer-invite">
          Pronta para reservar
          <em>seu momento?</em>
        </p>
        <a
          className="button button-light"
          href={siteLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Agendar atendimento com Camila pelo WhatsApp"
        >
          Agendar pelo WhatsApp
          <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Camila Pereira Beauty</span>
          <a
            href={siteLinks.maps}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir a localização de Camila Pereira Beauty no Google Maps"
          >
            Como chegar
          </a>
        </div>
      </footer>

      <a
        className="mobile-whatsapp"
        href={siteLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar atendimento com Camila pelo WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
        Agendar
      </a>
    </main>
  );
}
