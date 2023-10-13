import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";



import React, { Component } from 'react'
import { imagesItems } from "api";

export class App extends Component {
  state = {
    items: [],
    galerryValue: '',
    page:'',
  }
 
  async componentDidUpdate() {
   
   try {
     
     const itemsImg = await imagesItems()
   
       console.log(this.state.items); 
    
    //  this.setState(prev => ({
    //    images: [...prev.items, ...itemsImg.hits],
    //  }));
     this.setState({ items: [...itemsImg.hits] });
   }
   catch {
     console.error('cath eror')
     
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