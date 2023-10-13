import axios from "axios";

// axios.defaults.baseURL =
//     'https://pixabay.com/api/?q=cat&page=1&key=38616901-e7b0e5046f7c06c2a4d7939a7&image_type=photo&orientation=horizontal&per_page=12';
  
export const imagesItems = async () => {
    const response = await axios.get(
      'https://pixabay.com/api/?q=cat&page=1&key=38616901-e7b0e5046f7c06c2a4d7939a7&image_type=photo&orientation=horizontal&per_page=12'
    );
  
    return response.data

   }