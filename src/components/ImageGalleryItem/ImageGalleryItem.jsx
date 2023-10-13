import React, { Component } from 'react'

export class ImageGalleryItem extends Component {
  render() {
    return <img src={this.props.item.webformatURL} alt="" />;
  }
}

export default ImageGalleryItem