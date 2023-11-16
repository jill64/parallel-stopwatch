import { clientInit } from '@jill64/sentry-sveltekit-cloudflare'
import { toast } from '@jill64/svelte-toast'
import { get } from 'svelte/store'

const onError = clientInit(
  'https://5f4b8f472af3eda7ebd45e79d1e9a6b9@o4505814639312896.ingest.sentry.io/4505822497341440',
  {
    enableInDevMode: true
  }
)

export const handleError = onError((e) => {
  if (e.error instanceof Error) {
    get(toast).error(e.error.message)
  }
})
