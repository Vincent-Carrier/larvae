import Alpine from 'alpinejs'
import ky from 'ky'

const api = ky.extend({
  hooks: {
    beforeRequest: [
      (request) => {
        const token = document.cookie
          .split('; ')
          .find((row) => row.startsWith('XSRF-TOKEN='))
          .split('=')[1]

        request.headers.set('X-XSRF-TOKEN', decodeURIComponent(token))
      },
    ],
  },
})

Object.assign({ api, Alpine }, window)

Alpine.start()

import.meta.glob(['../images/**', '../fonts/**'])
