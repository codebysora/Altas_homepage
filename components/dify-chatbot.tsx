'use client'

import Script from 'next/script'

export function DifyChatbot() {
  return (
    <>
      <Script
        id="dify-chatbot-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.difyChatbotConfig = {
              token: 'mfoDx314lV8DBR1D',
              inputs: {},
              systemVariables: {},
              userVariables: {},
            };
          `,
        }}
      />
      <Script
        src="https://udify.app/embed.min.js"
        id="mfoDx314lV8DBR1D"
        strategy="afterInteractive"
        defer
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #dify-chatbot-bubble-button {
              background-color: #1C64F2 !important;
            }
            #dify-chatbot-bubble-window {
              width: 24rem !important;
              height: 40rem !important;
            }
          `,
        }}
      />
    </>
  )
}
