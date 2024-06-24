import React, { useEffect } from 'react'

interface DisqusThreadProps {
  url: string
  identifier: string
}

const DisqusThread: React.FC<DisqusThreadProps> = ({ url, identifier }) => {
  useEffect(() => {
    const disqus_config = function (this: any) {
      this.page.url = url
      this.page.identifier = identifier
    }

    const d = document
    const s = d.createElement('script')
    s.src = 'https://brdg-1.disqus.com/embed.js'
    s.setAttribute('data-timestamp', `${+new Date()}`)
    ;(d.head || d.body).appendChild(s)

    return () => {
      // Cleanup script when component unmounts
      const script = d.querySelector(
        'script[src="https://brdg-1.disqus.com/embed.js"]',
      )
      if (script) script.remove()
      // Cleanup Disqus thread if needed
      const disqusThread = d.getElementById('disqus_thread')
      if (disqusThread) disqusThread.innerHTML = ''
    }
  }, [url, identifier])

  return (
    <div>
      <div id="disqus_thread"></div>
      <noscript className="text-white">
        Please enable JavaScript to view the
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </div>
  )
}

export default DisqusThread
