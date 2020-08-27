import React from 'react'
import { useSelector } from 'react-redux'

const Loading = props => {
  const loading = useSelector(state => state.loading)

  return (
    <article>
      {
        loading ? (
          <div className="loading">
            请稍等...
          </div>
        ) : ''
      }
      <style jsx>{`
        .loading {
          position: absolute;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.5);
          z-index: 100;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
        }
      `}</style>
    </article>
  )
}

export default Loading
