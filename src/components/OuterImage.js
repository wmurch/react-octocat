import React, { Component } from 'react'

class OuterImage extends Component {
  render() {
    return (
      <div class="outer-image">
        <img class="image-area" src={this.props.image} />
        <section class="caption">
          <p>{this.props.caption}</p>
          <div class="name-pic">
            <p>
              the <em>{this.props.name}</em> by
            </p>
            <img class="name-image" src={this.props.nameImage} />
          </div>
        </section>
      </div>
    )
  }
}

export default OuterImage
