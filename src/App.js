import React, { Component } from 'react'
//import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import OutImage from './components/OuterImage'

const cats = [
  {
    image: 'src="https://octodex.github.com/images/octobiwan.jpg',
    caption: '#3',
    name: 'Octobi Wan Catnobi',
    nameImage: 'https://github.com/cameronmcefee.png'
  }
]

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div class="container">
          <img class="image-area">
            {cats.map(cat => {
              return (
                <cat
                  image={cat.image}
                  caption={cat.caption}
                  name={cat.name}
                  nameImage={cat.nameImage}
                />
              )
            })}
          </img>
        </div>
        <Footer />
      </>
    )
  }
}
export default App
