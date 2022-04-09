import { NextPage } from 'next'
import { Row, Col, CardDeck, Card } from 'react-bootstrap'

import MainLayout from '../components/MainLayout/MainLayout'

const Home: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Home'>
    <Row className='justify-content-center'>
      <Col className='col-sm-10 col-lg-8'>
        <h1 className='text-center mb-4'>Dark Horse Line Up 2021</h1>
        <h3 className='text-center text-danger mb-4'>
          Saturday Fancy Dress Theme – The Night Circus
        </h3>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          The Barn
        </h2>
        <CardDeck className='mb-4'>
          <Card className='bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Friday 23rd July</Card.Title>
              <p className='card-text'>Baad Acid</p>
              <p className='card-text'>Long Tall Shakies</p>
              <p className='card-text'>No One Died</p>
            </Card.Body>
          </Card>
          <Card className='bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Saturday 24th July</Card.Title>
              <p className='card-text'>Electrofresh</p>
              <p className='card-text'>Dusty Plankton</p>
              <p className='card-text'>Mad Daddy</p>
              <p className='card-text'>Ballaghs</p>
              <p className='card-text'>The Fecktones</p>
              <p className='card-text'>Parallel Lines</p>
              <p className='card-text'>Sanssouci</p>
              <p className='card-text'>SoundCheck</p>
            </Card.Body>
          </Card>
          <Card className='card bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Sunday 25th July</Card.Title>
              <p className='card-text'>Han FX</p>
              <p className='card-text'>Brass Machine</p>
              <p className='card-text'>Nathan Thompson</p>
              <p className='card-text'>The Nelson Touch</p>
              <p className='card-text'>Clash Vooar</p>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          Cooil Cocktail Stage
        </h2>
        <CardDeck className='mb-4'>
          <Card className='bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Friday 23rd July</Card.Title>
              <p className='card-text'>Volume</p>
              <p className='card-text'>Dizzy Disco</p>
              <p className='card-text'>Lewis Parker</p>
              <p className='card-text'>GOMH</p>
            </Card.Body>
          </Card>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Saturday 24th July</Card.Title>
              <p className='card-text'>David Moran</p>
              <p className='card-text'>Mother Funkers</p>
              <p className='card-text'>Jason Thomas</p>
              <p className='card-text'>JC Stormz</p>
              <p className='card-text'>Paddy Rantin</p>
              <p className='card-text'>Jambareef</p>
              <p className='card-text'>Lewis Parker</p>
            </Card.Body>
          </Card>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Sunday 25th July</Card.Title>
              <p className='card-text'>The Blair House Project</p>
              <p className='card-text'>Bunka</p>
              <p className='card-text'>Al Bell's Sunday Night Dance Party</p>
              <p className='card-text'>The Slowy Tunnel</p>
              <p className='card-text'>Dark Horse DJs</p>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          The Mill
        </h2>
        <CardDeck className='mb-4'>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Friday 23rd July</Card.Title>
              <p className='card-text'>Manavia</p>
              <p className='card-text'>The Boneyard</p>
              <p className='card-text'>Creamyfresh Ice (DJ)</p>
            </Card.Body>
          </Card>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Saturday 24th July</Card.Title>

              <p className='card-text'>Persian Doormats</p>
              <p className='card-text'>Baad Acid</p>
              <p className='card-text'>Parallel Lines</p>
              <p className='card-text'>13th Pillar</p>
              <p className='card-text'>Stones Throw</p>
              <p className='card-text'>Jo &amp; Juan</p>
              <p className='card-text'>Jamys</p>
            </Card.Body>
          </Card>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Sunday 25th July</Card.Title>
              <p className='card-text'>Conylt</p>
              <p className='card-text'>The Druidales</p>
              <p className='card-text'>Crystal Methodists</p>
              <p className='card-text'>Clash Vooar</p>
              <p className='card-text'>Jenny</p>
              <p className='card-text'>World Without Rules</p>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          The Bass Bus
        </h2>
        <CardDeck className='mb-4'>
          <Card className='bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Friday 23rd July</Card.Title>
              <p className='card-text'>Ninja Fingers</p>
              <p className='card-text'>Dreamfish</p>
              <p className='card-text'>JC Stormz</p>
              <p className='card-text'>DJ Corbyn</p>
            </Card.Body>
          </Card>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Saturday 24th July</Card.Title>
              <p className='card-text'>BassBin Visual</p>
              <p className='card-text'>Amii</p>
              <p className='card-text'>DJ Teach</p>
              <p className='card-text'>SkeptIQ</p>
              <p className='card-text'>Vixen</p>
              <p className='card-text'>MoBeats</p>
              <p className='card-text'>Johnny2Cool</p>
              <p className='card-text'>Kids DJ Tuition</p>
            </Card.Body>
          </Card>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Sunday 25th July</Card.Title>
              <p className='card-text'>Electrofresh BassBus Closing Party</p>
              <p className='card-text'>Be Easy Summer House Vibes</p>
              <p className='card-text'>Paddy Rantin Old School HipHop Shop</p>
              <p className='card-text'>Wakey Wakey with Mo Beats</p>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          Sound Records
        </h2>
        <CardDeck className='mb-4'>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Friday 23rd July</Card.Title>
              <p className='card-text'>CG Dips (Cian Geoghan)</p>
              <p className='card-text'>Adam ‘Sol’ Cairney</p>
              <p className='card-text'>PMIX</p>
            </Card.Body>
          </Card>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Saturday 24th July</Card.Title>
              <p className='card-text'>DJ Tom Doyle</p>
              <p className='card-text'>DJ Azaria Sheely</p>
              <p className='card-text'>Manavia</p>
              <p className='card-text'>Toucan Party</p>
              <p className='card-text'>Terry George</p>
              <p className='card-text'>Sea Sparrow</p>
              <p className='card-text'>Sound Records DJ’s</p>
            </Card.Body>
          </Card>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Sunday 25th July</Card.Title>
              <p className='card-text'>Ed Oldham</p>
              <p className='card-text'>Sound Records DJs</p>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          Compton Vaults Acoustic Stage
        </h2>
        <CardDeck className='mb-4'>
          <Card className='bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Friday 23rd July</Card.Title>
              <p className='card-text'>Evel Wonder</p>
              <p className='card-text'>PWS</p>
            </Card.Body>
          </Card>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Saturday 24th July</Card.Title>
              <p className='card-text'>Tiger</p>
              <p className='card-text'>Half Naked Headline</p>
              <p className='card-text'>Night Time Tennis</p>
              <p className='card-text'>Jamming Sessions</p>
              <p className='card-text'>Subculture Cinema</p>
            </Card.Body>
          </Card>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Sunday 25th July</Card.Title>
              <p className='card-text'>Acoustic Atmosphere</p>
              <p className='card-text'>Han FX</p>
              <p className='card-text'>The Getaways Originals</p>
              <p className='card-text'>Jamming Sessions</p>
              <p className='card-text'>Subculture Cinema</p>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          SoundCheck
        </h2>
        <CardDeck className='mb-4'>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <p className='card-text'>Lineup TBC</p>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          New Social Studios
        </h2>
        <CardDeck className='mb-4'>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <p className='card-text'>Lineup TBC</p>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          The Hive
        </h2>
        <CardDeck className='mb-4'>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <p className='card-text'>
                Wellness Area, Yoga, Breath Work, Wim Hof, Drumming Workshops; Mindfulness and more
                to be announced...
              </p>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          Mad Jacks
        </h2>
        <CardDeck className='mb-4'>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <p className='card-text'>Axe throwing for the all family 🪓🤘🤩</p>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          Food Court
        </h2>
        <CardDeck className='mb-4'>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <p className='card-text'>
                Black Dog Pizza, Barista Express, Veg &amp; Vitality, La Creperie, Baby Cheezus, Cow
                &amp; Pig, Davisons Icecream, MexiMann
              </p>
            </Card.Body>
          </Card>
        </CardDeck>
        <h2 className='text-center' style={{ fontSize: '2.5rem' }}>
          Stalls
        </h2>
        <CardDeck className='mb-4'>
          <Card className=' bg-transparent text-center'>
            <Card.Body>
              <p className='card-text'>
                Glitter Shack, Willow Workshop and Henna, Hair Braiding, Tiny Tots Soft Play
              </p>
            </Card.Body>
          </Card>
        </CardDeck>
      </Col>
    </Row>
  </MainLayout>
)

export default Home
