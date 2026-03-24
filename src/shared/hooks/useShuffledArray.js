import { useMemo } from 'react'

/**
 * A custom hook that shuffles an array and memoizes the result.
 * The array is shuffled only once unless the input array changes.
 * @param {Array} array The array to shuffle.
 * @returns {Array} The shuffled array.
 */
export function useShuffledArray(array) {
  const shuffledArray = useMemo(() => {
    if (!array) {
      return []
    }

    const shuffled = [...array]

    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return shuffled
  }, [array])

  return shuffledArray
}
