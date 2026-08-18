# Pulsar Media — site institucional (build de produção)

Site estático. Basta servir a pasta inteira; `index.html` é a home.

## Publicar

Qualquer hospedagem estática serve — arraste a pasta `dist/` no Netlify Drop,
Vercel, Cloudflare Pages, ou envie por FTP para a raiz do domínio.
Não há build step, banco de dados nem servidor.

## Antes de subir — 2 pendências

1. **Domínio nos metadados.** `index.html` está com `https://pulsarmedia.com.br`
   em `canonical`, `og:url`, `og:image` e `twitter:image`. Se o domínio final for
   outro, troque essas 4 ocorrências (redes sociais exigem URL absoluta na imagem).
2. **Formulário de contato.** O envio usa o FormSubmit (formsubmit.co), sem backend.
   O primeiro envio dispara um e-mail de ativação da FormSubmit para
   contato@pulsarmedia.com.br — alguém com acesso à caixa precisa clicar no link
   uma única vez. Até isso, as mensagens não chegam.

## Estrutura

    index.html                     página única (hero, quem somos, vídeo, veículos, contato)
    support.js                     runtime que renderiza a página
    ds-base.js                     carrega os estilos do design system
    _ds/…                          design system Pulsar (tokens, estilos, componentes)
    assets/                        logo, vídeo, imagens de marca e logos dos veículos
    assets/og-pulsar.png           imagem de compartilhamento (WhatsApp/LinkedIn)
    robots.txt

## Observações

- **Ícones** vêm do unpkg.com (CDN) — o site precisa de internet para exibi-los.
  Para removê-la, baixe o `lucide` e sirva localmente.
- **Cor de assinatura** varia por visita (verde, cyan, amarelo, âmbar), conforme
  as combinações aprovadas do design system.
- **Vídeo** toca automaticamente e sem som quando entra na tela; o botão
  "Ativar som" liga o áudio.
