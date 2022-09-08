FROM node:16-alpine AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app ./

RUN mkdir -p /app/.next/cache/images \
  && chown nextjs:nodejs /app/.next/cache/images

USER nextjs

ENV PORT 3000

CMD ["yarn", "start"]
