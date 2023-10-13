import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";



import React, { Component } from 'react'
import { imagesItems } from "api";

export class App extends Component {
  state = {
    items: [],
    galerryValue: ''
  }
  componentDidMount() {
    
  }
 async componentDidUpdate() {
    console.log('update')
   try {
     
     const itemsImg = await imagesItems()
     this.setState({items: itemsImg})
     console.log(this.state.items); 
     console.log(itemsImg)
   }
   catch {
     console.error('eror')
     
   }
  }
  hendleSubmit = data => { 
    this.setState({
    galerryValue: data
  })
    console.log(data)
  }
  render() {
      
    return (
      <>
        <Searchbar onSubmitForm={this.hendleSubmit} />
        <ImageGallery items={this.state.items}  />
      </>
    );
  }
}

export default App