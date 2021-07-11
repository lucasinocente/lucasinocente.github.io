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
                <h2>And I'm a Developer, Agilist, Writer, Cyclist, Host and Producer.</h2>
              </div>
            </Column>
          </Columns>
        </div>
        <div className="section">
          <h2>Current projects:</h2>
          <ul>
            <Card
              href="https://empresaminimaviavel.com.br"
              label="Producer and Host"
              title="Podcast Empresa Mínima Viável"
              subTitle="w/ Daniel Wildt and Gui Grazziotin"
            />
            <Card
              href="https://open.spotify.com/show/4FsGkUv2kanmTA1CFlpCYJ"
              label="Director, Producer and Host"
              title="Podcast Sabe de Nada, Inocente!"
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
              label="Tech Lead, Software Engineer and Agilist"
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

          <h2>Former projects:</h2>
          <ul>
            <Card
              href="https://casomarielleeanderson.org/"
              label="Software Engineer"
              title="Caso Marielle e Anderson 2020 @ Instituto Marielle Franco"
            />
            <Card
              href="https://www.agendamarielle.com/candidatas"
              label="Software Developer"
              title="Agenda Marielle Franco 2020 @ Instituto Marielle Franco"
            />
            <Card
              href="https://www.youtube.com/watch?v=iLo7y4AJ9I0"
              label="Host and Producer"
              title="JavaScriptFolia 2021"
            />
            <Card
              href="https://twitter.com/techbeerpoa"
              label="Host and Producer"
              title="Tech && Beer 2018, 2019"
            />
            <Card
              href="https://medium.com/@lucasinocente/como-foi-a-hacktoberfest-2018-na-ilegra-185457090785"
              label="Host and Producer"
              title="Hacktoberfest Porto Alegre 2018, 2019"
            />
            <Card
              href="https://lotadata.com/"
              label="Front-End Developer"
              title="LOTaData 2017"
            />
            <Card
              href="https://www.fightanalytics.cc/"
              label="Co-founder, CTO, CPO, Software Engineer"
              title="Fight Analytics 2014 ~ 2018"
            />
            <Card
              href="https://santins.com.br/"
              label="Co-founder, CEO, Tech Manager, Software Engineer"
              title="Santins 2012 ~ 2014"
            />
            <Card
              href=""
              label="Creator"
              title="Talking Tourist 2012"
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
