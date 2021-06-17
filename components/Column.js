const Column = ({ children }) => {
  return (
    <>
      <div>
        {children}
      </div>

      <style jsx>{`
        div {
          width: 50%;
          display: flex;
          justify-content: center;
        }

        @media(max-width: 910px) {
          div {
            width: 100%;
            display: block;
          }
        }
      `}</style>
    </>
  )
}

export default Column