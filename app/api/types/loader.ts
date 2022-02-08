import type { Language } from 'remix-i18next'

export type LoaderData = {
  error: { message: string } | null
  i18n: Record<string, Language>
}
