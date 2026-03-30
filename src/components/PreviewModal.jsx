import React, { useEffect, useRef, useState } from 'react'

export default function PreviewModal({ project, onClose }){
  const iframeRef = useRef(null)
  const [status, setStatus] = useState('loading') // loading | ready | blocked

  useEffect(()=>{
    if(!project) return
    setStatus('loading')
    const iframe = iframeRef.current
    let timer = null

    function handleLoad(){
      setStatus('ready')
      clearTimeout(timer)
    }

    if(iframe){
      iframe.addEventListener('load', handleLoad)
      // fallback timeout: if load doesn't fire, assume blocked
      timer = setTimeout(()=>{
        if(status !== 'ready') setStatus('blocked')
      }, 1800)
    }

    return ()=>{
      if(iframe) iframe.removeEventListener('load', handleLoad)
      clearTimeout(timer)
    }
  }, [project])

  if(!project) return null

  return (
    <div className="preview-modal">
      <div className="preview-backdrop" onClick={onClose} />
      <div className="preview-panel">
        <header className="preview-header">
          <h3>{project.title}</h3>
          <div>
            <a className="btn" href={project.demo} target="_blank" rel="noopener noreferrer">Open live</a>
            <button className="btn" onClick={onClose}>Close</button>
          </div>
        </header>

        <div className="preview-body">
          {status === 'loading' && (
            <div className="preview-loading">Trying to load live preview…</div>
          )}

          {status === 'ready' && (
            <iframe ref={iframeRef} title={project.title} src={project.demo} frameBorder="0" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" />
          )}

          {status === 'blocked' && (
            <div className="preview-fallback">
              <div className="screenshot-wrap">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="fallback-text">
                <p>Embedding is blocked by the target site. Open the live site in a new tab or view the screenshot.</p>
                <a className="btn primary" href={project.demo} target="_blank" rel="noopener noreferrer">Open live site</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
