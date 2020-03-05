const reactions = {
  
  ping: { type: 'text', content: 'pong!' },
  
  'nlp-error': {
    type: 'text',
    content: 'Oops, algo  no esta bien con mi sistema y no puedo contactar con mi cerebro, hablemos mas tarde por favor :S'
  },
  
}

const getReactions = () => reactions

export const getStaticReaction = reaction => getReactions()[reaction]

export default getReactions