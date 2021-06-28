import Head from 'next/head'
import Link from 'next/link'
import Avatar from '../components/Avatar'
import Card from '../components/Card'
import Columns from '../components/Columns'
import Column from '../components/Column'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Inocente - Comunicação, simplicidade, feedback, coragem e respeito.</title>
      </Head>
      <main>
        <div className="home">
          <Columns>
            <Column>
             <div className="avatar-desktop">
                <Avatar
                  width={377}
                  height={377}
                />
              </div>
              <div className="avatar-mobile">
                <Avatar
                  width={233}
                  height={233}
                />
              </div>
            </Column>
            <Column>
              <div>
                <h1>
                  Hi, <span className="animate">👋</span> <br/>
                  my name is <br/>
                  Lucas Inocente</h1>
                <h2>And I'm a Tech Lead, Software Developer, Writer, Community Manager, Startup Mentor, Host and Podcast Producer.</h2>
              </div>
            </Column>
          </Columns>
        </div>
        <div className="section">
          <h2>That's the projects I've been working on:</h2>
          <ul>
            <Card
              href="https://empresaminimaviavel.com.br"
              label="Podcast Host"
              title="Empresa Mínima Viável"
              subTitle="w/ Daniel Wildt and Gui Grazziotin"
            />
            <Card
              href="https://open.spotify.com/show/4FsGkUv2kanmTA1CFlpCYJ"
              label="Podcast Host"
              title="Sabe de Nada, Inocente!"
              subTitle=""
            />
            <Card
              href="https://leanpub.com/dvap/"
              label="Writer"
              title="Da Visão à Produção"
              subTitle="w/ Daniel Wildt"
            />
            <Card
              href="https://apoia.se"
              label="Tech Lead, Software Developer and Agile Coach"
              title="APOIA.se"
            />
            <Card
              href="https://www.rituscompany.com.br/"
              label="Mentor"
              title="Ritus Company"
            />
            <Card
              href="https://www.meetup.com/meetup-nodejs-porto-alegre/"
              label="Community Manager and Producer"
              title="Meetup Node.js Porto Alegre"
              subTitle="w/ Aline Escobar, Henrique Schreiner and Mathias Gheno"
            />
            <Card
              href="https://lucasinocente.com/blog"
              label="Writer"
              title="Blog"
            />
          </ul>

          <br/>

          <div className="section">
            <h2>Get in touch:</h2>
            <ul>
              <Card
                href="https://www.linkedin.com/in/lucasinocente/"
                label=""
                title="Linkedin"
              />
              <Card
                href="mailto:olucassanchez@gmail.com/"
                label=""
                title="E-mail"
              />
            </ul>
          </div>
        </div>
      </main>

      <style jsx>{`
        .home {
          min-height: 610px;
          display: flex;
        }

        .home  > div {
          width: 100%;
        }

        main {
          padding: 55px;
          max-width: 987px;
          margin: 0 auto;
        }

        p {
          font-size: 21px;
          width: 100%;
          word-break: break-word;
          font-weight: bold;
          text-align: center;
        }

        .avatar-desktop {
          display: block;
        }
        .avatar-mobile {
          display: none;
        }

        @media (max-width: 910px) {
          main {
            padding: 34px;
          }
        }

        @media (max-width: 450px) {
          .avatar-desktop {
            display: none;
          }
          .avatar-mobile {
            display: block;
          }
        }
      `}</style>
    </>
  )
}
