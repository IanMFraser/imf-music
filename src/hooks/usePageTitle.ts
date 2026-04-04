/**
 * Custom hook that sets the browser tab title.
 *
 * @param title - The string to assign to `document.title`.
 *
 * Re-runs whenever `title` changes, so it is safe to use with dynamic
 * values such as album names derived from URL params.
 */
import { useEffect } from 'react'

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title
  }, [title])
}

export default usePageTitle
