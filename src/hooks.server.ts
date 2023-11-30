import { attach as lang_attach } from '$lib/i18n'
import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'
import { onRender } from '@jill64/svelte-dark-theme'
import { attach as ogp_attach } from '@jill64/svelte-ogp'
import { sequence } from '@sveltejs/kit/hooks'

const { onHandle, onError } = serverInit(
  'https://5f4b8f472af3eda7ebd45e79d1e9a6b9@o4505814639312896.ingest.sentry.io/4505822497341440'
)

export const handle = onHandle(sequence(lang_attach, ogp_attach, onRender()))
export const handleError = onError()
