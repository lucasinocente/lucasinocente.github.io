import Head from 'next/head'
import Header from '../../components/Header'
import Card from '../../components/Card'
import getAllContent from '../../helpers/getAllContent'
import getList from '../../helpers/getList'

const Page = (
  {
    data,
    section
  }
) => {
  return (
    <>
      <Head>
        <title>{section} ~ Lucas Inocente</title>
      </Head>
      <Header section={section}/>
      <article className="inner-container">
        <h2>Posts:</h2>
        <ul>
          { data.map(({ link, title }, index ) => {
            const [year, month, day] = link.split('-')
            return <Card link={link} title={title} section={section} label={`${year}-${month}-${day}`}/>
          })}
        </ul>
      </article>
    </>
  )
}


export async function getStaticPaths() {
  const paths = getAllContent()
  const filter = paths.filter(({ params: { section } }) => {
    return section !== 'dvap'
  })


  return {
    paths: filter,
    fallback: false,
  };
}


export async function getStaticProps({ params: { section } }) {
  const data = getList(section)

  return {
    props: { 
      section,
      data: [
        ...data,
      ]
    }
  }
}

export default Page