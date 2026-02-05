import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Hook personalizado para animar elementos ao rolar a página
 * @param {object} options - Opções de configuração
 * @param {boolean} options.once - Se a animação deve ocorrer apenas uma vez (padrão: true)
 * @param {string} options.margin - Margem para ativar a animação (padrão: "-100px")
 * @returns {object} - { ref, isInView }
 */
export function useAnimacaoScroll(options = {}) {
  const { once = true, margin = "-100px" } = options;
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  return { ref, isInView };
}

/**
 * Variantes de animação prontas para uso
 */
export const variantesAnimacao = {
  // Fade in de baixo para cima
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },

  // Fade in de cima para baixo
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },

  // Fade in da esquerda
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },

  // Fade in da direita
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },

  // Scale in (zoom)
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },

  // Container com stagger children
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  // Item de stagger
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};

/**
 * Transições prontas para uso
 */
export const transicoesAnimacao = {
  // Suave
  suave: { duration: 0.5, ease: "easeOut" },

  // Rápida
  rapida: { duration: 0.3, ease: "easeOut" },

  // Com spring (mola)
  spring: { type: "spring", stiffness: 100, damping: 15 },

  // Com bounce
  bounce: { type: "spring", stiffness: 300, damping: 20 },
};
