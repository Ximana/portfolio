# syntax=docker/dockerfile:1
#
# Imagem de produção (Node 22, Next.js em modo "standalone").
#
# Construir (as NEXT_PUBLIC_* são incorporadas no build, por isso têm de ser
# passadas aqui e não apenas ao executar o contentor):
#   docker build \
#     --build-arg NEXT_PUBLIC_URL_SITE=https://pauloximana.ao \
#     --build-arg NEXT_PUBLIC_FORMSPREE_ID=abcd1234 \
#     -t portfolio-ximana .
#
# Executar:
#   docker run -d --name portfolio -p 3000:3000 --restart unless-stopped portfolio-ximana

FROM node:22-alpine AS base
WORKDIR /app

# 1. Dependências (camada em cache enquanto package*.json não mudar)
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci

# 2. Build
FROM base AS build
ARG NEXT_PUBLIC_URL_SITE
ARG NEXT_PUBLIC_FORMSPREE_ID
ARG NEXT_PUBLIC_GOOGLE_VERIFICATION
ARG NEXT_PUBLIC_BING_VERIFICATION
ENV NEXT_PUBLIC_URL_SITE=$NEXT_PUBLIC_URL_SITE \
    NEXT_PUBLIC_FORMSPREE_ID=$NEXT_PUBLIC_FORMSPREE_ID \
    NEXT_PUBLIC_GOOGLE_VERIFICATION=$NEXT_PUBLIC_GOOGLE_VERIFICATION \
    NEXT_PUBLIC_BING_VERIFICATION=$NEXT_PUBLIC_BING_VERIFICATION \
    BUILD_STANDALONE=true \
    NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# O build descarrega as fontes do Google Fonts: precisa de acesso à internet.
RUN npm run build

# 3. Execução (imagem final pequena, sem utilizador root)
FROM base AS runner
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs
COPY --from=build --chown=nextjs:nodejs /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:3000/robots.txt || exit 1
CMD ["node", "server.js"]
