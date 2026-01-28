/**
 * @fileoverview Composable for Bible verse functionality with multilingual support
 * Manages random verse selection with reactive state and internationalization
 */

import { ref, onMounted, watch, type Ref } from 'vue'
import type { BibleVerse, SupportedLocale } from '@/types'
import { getBibleVerses, bibleVersesData } from '@/data/bibleVersesMultilingual'
import { useLocale } from './useLocale'

interface UseBibleVerseReturn {
  verse: Ref<BibleVerse | null>
  getRandomVerse: () => BibleVerse
  refreshVerse: () => void
}

export function useBibleVerse(): UseBibleVerseReturn {
  const verse = ref<BibleVerse | null>(null)
  const currentVerseIndex = ref<number | null>(null)
  const { currentLocale } = useLocale()

  function getRandomVerse(): BibleVerse {
    const verses = getBibleVerses(currentLocale.value as SupportedLocale)
    const randomIndex = Math.floor(Math.random() * verses.length)
    currentVerseIndex.value = randomIndex
    const selectedVerse = verses[randomIndex]
    
    if (!selectedVerse) {
      currentVerseIndex.value = 0
      return verses[0] ?? { ref: '', text: '' }
    }
    
    return selectedVerse
  }

  function getCurrentVerseInLocale(locale: SupportedLocale): BibleVerse {
    if (currentVerseIndex.value === null) {
      return getRandomVerse()
    }
    
    const verses = getBibleVerses(locale)
    const selectedVerse = verses[currentVerseIndex.value]
    
    if (!selectedVerse) {
      return verses[0] ?? { ref: '', text: '' }
    }
    
    return selectedVerse
  }

  function refreshVerse(): void {
    verse.value = getRandomVerse()
  }

  // Watch for locale changes and update verse translation (keep same verse)
  watch(currentLocale, (newLocale) => {
    if (currentVerseIndex.value !== null) {
      verse.value = getCurrentVerseInLocale(newLocale as SupportedLocale)
    }
  })

  onMounted(() => {
    refreshVerse()
  })

  return {
    verse,
    getRandomVerse,
    refreshVerse,
  }
}
