/**
 * @fileoverview Bible verses data with multilingual support
 * Read-only collection of Bible verses for random display
 */

import type { BibleVerse } from '@/types'

interface MultilingualBibleVerse {
  en: BibleVerse
  es: BibleVerse
}

export const bibleVersesData: readonly MultilingualBibleVerse[] = [
  {
    en: { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son." },
    es: { ref: "Juan 3:16", text: "Amó Dios al mundo; dio a su Hijo." }
  },
  {
    en: { ref: "Psalm 23:1", text: "The Lord is my shepherd, I lack nothing." },
    es: { ref: "Salmos 23:1", text: "Jehová es mi pastor; nada me faltará." }
  },
  {
    en: { ref: "Philippians 4:13", text: "I can do all things through Christ who strengthens me." },
    es: { ref: "Filipenses 4:13", text: "Todo lo puedo en Cristo que me fortalece." }
  },
  {
    en: { ref: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord." },
    es: { ref: "Jeremías 29:11", text: "Yo sé los planes que tengo para vosotros." }
  },
  {
    en: { ref: "Proverbs 3:5", text: "Trust in the Lord with all your heart." },
    es: { ref: "Proverbios 3:5", text: "Confía en Jehová con todo tu corazón." }
  },
  {
    en: { ref: "Romans 8:28", text: "And we know that all things work together for good." },
    es: { ref: "Romanos 8:28", text: "Todo coopera para bien a los que aman." }
  },
  {
    en: { ref: "Isaiah 41:10", text: "So do not fear, for I am with you." },
    es: { ref: "Isaías 41:10", text: "No temas; yo estoy contigo. No desmayes." }
  },
  {
    en: { ref: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help." },
    es: { ref: "Salmos 46:1", text: "Dios es nuestro amparo y fortaleza constante." }
  },
  {
    en: { ref: "Matthew 11:28", text: "Come to me, all you who are weary and burdened." },
    es: { ref: "Mateo 11:28", text: "Venid a mí los cansados y cargados." }
  },
  {
    en: { ref: "2 Corinthians 5:7", text: "For we walk by faith, not by sight." },
    es: { ref: "2 Corintios 5:7", text: "Por fe andamos, no por vista." }
  },
  {
    en: { ref: "Psalm 119:105", text: "Your word is a lamp for my feet, a light on my path." },
    es: { ref: "Salmos 119:105", text: "Tu palabra es lámpara a mis pies." }
  },
  {
    en: { ref: "Joshua 1:9", text: "Be strong and courageous! Do not be afraid." },
    es: { ref: "Josué 1:9", text: "Sé valiente; no temas, Dios está contigo." }
  },
  {
    en: { ref: "Hebrews 11:1", text: "Now faith is confidence in what we hope for." },
    es: { ref: "Hebreos 11:1", text: "La fe es certeza de lo que se espera." }
  },
  {
    en: { ref: "Psalm 37:4", text: "Take delight in the Lord, and he will give you the desires of your heart." },
    es: { ref: "Salmos 37:4", text: "Deléitate en Jehová; concederá deseos de tu corazón." }
  },
  {
    en: { ref: "Matthew 6:33", text: "But seek first his kingdom and his righteousness." },
    es: { ref: "Mateo 6:33", text: "Buscad primeramente el reino de Dios y justicia." }
  },
  {
    en: { ref: "John 14:6", text: "I am the way and the truth and the life." },
    es: { ref: "Juan 14:6", text: "Yo soy el camino, la verdad y la vida." }
  },
  {
    en: { ref: "Psalm 27:1", text: "The Lord is my light and my salvation—whom shall I fear?" },
    es: { ref: "Salmos 27:1", text: "Jehová es mi luz y salvación; ¿a quién temeré?" }
  },
  {
    en: { ref: "1 John 4:8", text: "God is love. Whoever does not love does not know God." },
    es: { ref: "1 Juan 4:8", text: "Dios es amor; el que no ama no conoce." }
  },
  {
    en: { ref: "Romans 5:8", text: "But God demonstrates his own love for us in this." },
    es: { ref: "Romanos 5:8", text: "Dios demuestra su amor; Cristo murió por nosotros." }
  },
  {
    en: { ref: "Philippians 4:6", text: "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God." },
    es: { ref: "Filipenses 4:6", text: "No os afanéis; en oración presentad peticiones." }
  },
  {
    en: { ref: "Psalm 56:3", text: "When I am afraid, I put my trust in you." },
    es: { ref: "Salmos 56:3", text: "Cuando temo, en ti confío." }
  },
  {
    en: { ref: "Matthew 7:7", text: "Ask and it will be given to you; seek and you will find." },
    es: { ref: "Mateo 7:7", text: "Pedid y se os dará; buscad y hallaréis." }
  },
  {
    en: { ref: "1 Thessalonians 5:16", text: "Rejoice always." },
    es: { ref: "1 Tesalonicenses 5:16", text: "Estad siempre gozosos." }
  },
  {
    en: { ref: "1 Thessalonians 5:17", text: "Pray continually." },
    es: { ref: "1 Tesalonicenses 5:17", text: "Orad sin cesar." }
  },
  {
    en: { ref: "Psalm 121:2", text: "My help comes from the Lord, the Maker of heaven and earth." },
    es: { ref: "Salmos 121:2", text: "Mi ayuda viene de Jehová, creador de cielo y tierra." }
  },
  {
    en: { ref: "Romans 12:12", text: "Be joyful in hope, patient in affliction, faithful in prayer." },
    es: { ref: "Romanos 12:12", text: "Gozosos en la esperanza; sufridos en tribulación; constantes en oración." }
  },
  {
    en: { ref: "1 Corinthians 16:14", text: "Do everything in love." },
    es: { ref: "1 Corintios 16:14", text: "Todas vuestras cosas sean hechas con amor." }
  },
  {
    en: { ref: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
    es: { ref: "Gálatas 6:9", text: "No nos cansemos de hacer bien; a su tiempo cosecharemos." }
  },
  {
    en: { ref: "Psalm 91:2", text: "I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'" },
    es: { ref: "Salmos 91:2", text: "Esperanza mía, castillo mío; mi Dios en quien confío." }
  },
  {
    en: { ref: "Matthew 28:20", text: "And surely I am with you always, to the very end of the age." },
    es: { ref: "Mateo 28:20", text: "Yo estoy con vosotros todos los días hasta el fin." }
  }
]

// Legacy export for backward compatibility
export const bibleVerses: readonly BibleVerse[] = bibleVersesData.map(verse => verse.es)

// Function to get verses in specific language
export function getBibleVerses(locale: 'en' | 'es' = 'es'): readonly BibleVerse[] {
  return bibleVersesData.map(verse => verse[locale])
}
