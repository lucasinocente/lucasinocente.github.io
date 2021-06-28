import Link from 'next/link'

const Card = (
  {
    label,
    section,
    title,
    subTitle,
    link,
    href
  }
) => {
  const goToLink = href ? href : `/${section}/${link}`

  return (
    <>
      <li className="card">
        <Link href={goToLink}>
          <a title={ title }>
            { label && (<strong>[{ label }]</strong>) } { title }
          </a>
        </Link>
      </li>
      <style jsx>{`
        .card {
          margin: 0px 0px 21px;
        }

        .background {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          background-image: linear-gradient(to bottom right, #ffd550, #ffd550);
          border-radius: 5px;
          min-height: 377px;
        }

        h3 {
          margin: 0px;
          font-size: 34px;
          font-weight: normal;
        }

        h3 + h4 {
          padding: 0px;
        }

        h4 {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
    </>
  )
}

export default Card