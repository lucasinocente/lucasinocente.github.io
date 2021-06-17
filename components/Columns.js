const Columns = ({ children }) => {
  return (
    <>
      <div>
        {children}
      </div>

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          flex-direction: row-reverse;
        }

        @media(max-width: 910px) {
          div {
            display: block;
          }
        }
      `}</style>
    </>
  )
}

export default Columns