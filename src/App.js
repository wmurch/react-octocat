import React, { Component } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import CatProfile from './components/CatProfile'

const CatProfiles = [
  {
    image: 'https://octodex.github.com/images/octobiwan.jpg',
    caption: '#3',
    name: 'Octobi Wan Catnobi',
    nameImage: 'https://github.com/cameronmcefee.png'
  },
  {
    image: 'https://octodex.github.com/images/stormtroopocat.png',
    caption: '#86',
    name: 'Stormtroopocat',
    nameImage: 'https://github.com/jeejkang.png'
  },
  {
    image: 'https://octodex.github.com/images/doctocat-brown.jpg',
    caption: '#68',
    name: 'Doctocat Brown',
    nameImage: 'https://github.com/jonrohan.png'
  },
  {
    image: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
    caption: '#56',
    name: 'Octocat De Los Muertos',
    nameImage: 'https://github.com/cameronmcefee.png'
  },
  {
    image: 'https://octodex.github.com/images/dunetocat.png',
    caption: '#105',
    name: 'Dunetocat',
    nameImage: 'https://github.com/JohnCreek.png'
  },
  {
    image: 'https://octodex.github.com/images/daftpunktocat-thomas.gif',
    caption: '#102',
    name: 'Daftpunktocat-Thomas',
    nameImage: 'https://github.com/jeejkang.png'
  },
  {
    image: 'https://octodex.github.com/images/heisencat.png',
    caption: '#78',
    name: 'Heisencat',
    nameImage: 'https://github.com/jonrohan.png'
  },
  {
    image: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
    caption: '#143',
    name: 'Boxertocat',
    nameImage: 'https://github.com/rubyjazzy.png'
  },
  {
    image: 'https://octodex.github.com/images/justicetocat.jpg',
    caption: '#136',
    name: 'Justicetocat',
    nameImage: 'https://github.com/heyhayhay.png'
  },
  {
    image: 'https://octodex.github.com/images/gobbleotron.gif',
    caption: '#120',
    name: 'Gobble-o-tron',
    nameImage: 'https://github.com/tonyjaramillo.png'
  },
  {
    image: 'https://octodex.github.com/images/xtocat.jpg',
    caption: '#36',
    name: 'the X-tocat by',
    nameImage: 'https://github.com/cameronmcefee.png'
  },
  {
    image: 'https://octodex.github.com/images/saritocat.png',
    caption: '#114',
    name: 'the Saritocat by',
    nameImage: 'https://github.com/JohnCreek.png'
  },
  {
    image: 'https://octodex.github.com/images/yaktocat.png',
    caption: '#109',
    name: 'the Yaktocat by',
    nameImage: 'https://github.com/jeejkang.png'
  },
  {
    image: 'https://octodex.github.com/images/dunetocat.png',
    caption: '#105',
    name: 'the Dunetocat by',
    nameImage: 'https://github.com/JohnCreek.png'
  },
  {
    image: 'https://octodex.github.com/images/ironcat.jpg',
    caption: '#25',
    name: 'the IronCat by',
    nameImage: 'https://github.com/cameronmcefee.png'
  },
  {
    image: 'https://octodex.github.com/images/murakamicat.png',
    caption: '#83',
    name: 'the Murakamicat by',
    nameImage: 'https://github.com/billyroh.png'
  }
]

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div class="container">
          {CatProfiles.map(cat => {
            return (
              <CatProfile
                key={cat.name}
                image={cat.image}
                caption={cat.caption}
                name={cat.name}
                nameImage={cat.nameImage}
              />
            )
          })}
        </div>
        <Footer />
      </>
    )
  }
}
export default App
