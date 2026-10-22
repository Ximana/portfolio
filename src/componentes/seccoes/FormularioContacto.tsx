"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { perfil } from "@/dados/perfil";
import { IconeAlerta, IconeVerificar } from "@/componentes/icones/Icones";
import { Botao } from "@/componentes/ui/Botao";

type EstadoEnvio = "inactivo" | "a-enviar" | "sucesso" | "erro" | "alternativa";

const tempoLimiteMs = 15000;

const idFormspree = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const urlFormspree = idFormspree ? `https://formspree.io/f/${idFormspree}` : null;

const classesCampo =
  "w-full rounded-lg border border-linha bg-fundo/60 px-4 py-3 text-base text-marfim placeholder:text-esbatido/60 transition-colors duration-200 hover:border-esbatido/40 focus:border-jade focus:outline-none focus:ring-2 focus:ring-jade/30";

const tiposDeContacto = ["Colaboração", "Projecto freelance", "Oportunidade de trabalho", "Outro assunto"];
const limiteMensagem = 1500;

export function FormularioContacto() {
  const [estado, definirEstado] = useState<EstadoEnvio>("inactivo");
  const [tipo, definirTipo] = useState(tiposDeContacto[0]);
  const [mensagem, definirMensagem] = useState("");
  const refMensagem = useRef<HTMLTextAreaElement>(null);

  // Permite ligações como /contacto?assunto=PulmoVision, usadas nas páginas de projecto.
  useEffect(() => {
    const assunto = new URLSearchParams(window.location.search).get("assunto");
    if (assunto) {
      // Lê a URL só no navegador (evita diferenças de hidratação).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      definirMensagem(`Olá Paulo, gostaria de falar consigo sobre ${assunto.slice(0, 80)}.\n\n`);
    }
  }, []);

  async function tratarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const formulario = evento.currentTarget;

    const dados = new FormData(formulario);

    if (!urlFormspree) {
      // Sem NEXT_PUBLIC_FORMSPREE_ID: abre o programa de email do visitante com a
      // mensagem preenchida, para o contacto nunca ficar bloqueado.
      const assunto = encodeURIComponent(`${tipo}: contacto através do portfolio`);
      const corpo = encodeURIComponent(`${dados.get("message") ?? ""}\n\n${dados.get("name") ?? ""}\n${dados.get("email") ?? ""}`);
      window.location.href = `mailto:${perfil.email}?subject=${assunto}&body=${corpo}`;
      definirEstado("alternativa");
      return;
    }

    definirEstado("a-enviar");
    const controlador = new AbortController();
    const temporizador = setTimeout(() => controlador.abort(), tempoLimiteMs);

    try {
      const resposta = await fetch(urlFormspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: dados,
        signal: controlador.signal,
      });

      if (resposta.ok) {
        definirEstado("sucesso");
        formulario.reset();
        definirMensagem("");
      } else {
        definirEstado("erro");
      }
    } catch {
      definirEstado("erro");
    } finally {
      clearTimeout(temporizador);
    }
  }

  if (estado === "sucesso") {
    return (
      <div className="painel p-8 md:p-10" role="status">
        <p className="etiqueta-mono inline-flex items-center gap-2">
          <IconeVerificar tamanho={18} /> Mensagem enviada
        </p>
        <h2 className="mt-4 text-2xl font-semibold">Obrigado pelo contacto.</h2>
        <p className="mt-3 leading-7 text-esbatido">
          Recebi a sua mensagem e respondo o mais brevemente possível.
        </p>
        <Botao
          type="button"
          variante="secundario"
          tamanho="sm"
          className="mt-6"
          onClick={() => definirEstado("inactivo")}
        >
          Enviar outra mensagem
        </Botao>
      </div>
    );
  }

  return (
    <form onSubmit={tratarEnvio} className="painel space-y-6 p-6 md:p-8">
      <div>
        <label htmlFor="nome" className="mb-2 block text-sm font-medium">
          Nome
        </label>
        <input
          id="nome"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="O seu nome"
          className={classesCampo}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="oseu@email.com"
          className={classesCampo}
        />
      </div>

      <div>
        <label htmlFor="tipo" className="mb-2 block text-sm font-medium">
          Motivo do contacto
        </label>
        <select
          id="tipo"
          name="tipo"
          value={tipo}
          onChange={(e) => definirTipo(e.target.value)}
          className={classesCampo}
        >
          {tiposDeContacto.map((opcao) => (
            <option key={opcao} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
        <input type="hidden" name="_subject" value={`${tipo}: contacto através do portfolio`} />
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-2 block text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          ref={refMensagem}
          name="message"
          required
          minLength={10}
          maxLength={limiteMensagem}
          rows={6}
          value={mensagem}
          onChange={(e) => definirMensagem(e.target.value)}
          aria-describedby="ajuda-mensagem"
          placeholder="Conte-me sobre o projecto ou a oportunidade."
          className={`${classesCampo} resize-y`}
        />
        <p id="ajuda-mensagem" className="mt-2 text-right font-mono text-xs text-esbatido">
          {mensagem.length}/{limiteMensagem}
        </p>
      </div>

      {/* Campo-armadilha para reduzir spam, invisível para pessoas, lido por robôs. */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <Botao type="submit" variante="primario" disabled={estado === "a-enviar"} className="w-full sm:w-auto">
        {estado === "a-enviar" ? "A enviar…" : "Enviar mensagem"}
      </Botao>

      <p className="text-sm text-esbatido">
        Prefere email? Escreva para{" "}
        <a href={`mailto:${perfil.email}`} className="text-marfim underline decoration-linha underline-offset-4 hover:decoration-jade">
          {perfil.email}
        </a>
        . Costumo responder em poucos dias úteis.
      </p>

      {estado === "alternativa" && (
        <p role="status" className="rounded-lg border border-linha bg-fundo/60 px-4 py-3 text-sm leading-6 text-esbatido">
          Abrimos o seu programa de email com a mensagem preenchida. Se nada abriu, escreva para{" "}
          <a href={`mailto:${perfil.email}`} className="font-medium text-jade underline underline-offset-4">
            {perfil.email}
          </a>
          .
        </p>
      )}

      {estado === "erro" && (
        <p
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-ouro/40 bg-ouro/10 px-4 py-3 text-sm leading-6 text-marfim"
        >
          <IconeAlerta tamanho={18} className="mt-0.5 shrink-0 text-ouro" />
          <span>
          Não foi possível enviar a mensagem agora. Tente novamente, ou escreva directamente para{" "}
          <a href={`mailto:${perfil.email}`} className="font-medium text-jade underline underline-offset-4">
            {perfil.email}
          </a>
          .
          </span>
        </p>
      )}
    </form>
  );
}
