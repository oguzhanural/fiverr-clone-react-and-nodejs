import React, { useReducer, useState } from 'react'
import "./Add.scss"
import { INITIAL_STATE, reducer } from '../../reducers/gigReducers'
import upload from "../../utils/upload"

const Add = () => {
  
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false); // when uploading start, it's gonna be true.
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch(
    { 
      type: "CHANGE_INPUT", 
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch(
    { 
      type: "ADD_FEATURE", 
      payload: e.target[0].value
    });
    e.target[0].value = "";
  };

  const handleUpload = async() => {
   setUploading(true); // when we get start the process it's gonna be true
   try {
    const cover = await upload(singleFile);

    // [...files] şeklinde filelist'i array olarak alıyoruz
    const images = await Promise.all(
      [...files].map(async (file)=>{
        const url = await upload(file);
        return url;
      })
    );
    setUploading(false);
    dispatch({type: ""}); // artık gig yaratılabilir.
   } catch (error) {
    console.log(error);
   }
  };


  return (
    <div className='add-page'>
      <div className="add-page-container">

        <h1>Add New Gig</h1>

        <div className="add-page-sections">
          <div className="add-page-left">
            <label htmlFor="">Title</label>
            <input type="text" 
            name='title' placeholder='I will do something I am really good at'
            onChange={handleChange}/>
            
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="webdevelopment">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
              <option value="voiceover">Voice Over</option>
            </select>

            <label htmlFor="">Cover Image</label>
            <input type="file" name="" id="" onChange={e => setSingleFile(e.target.files[0])}/>
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple name="" id="" onChange={e => setFiles(e.target.files)} />
            <label htmlFor="">Description</label>
            
            <textarea name="desc" id="" cols="30" rows="16"
            placeholder='Brief descriptions to introduce your service to customers'
            onChange={handleChange}
            ></textarea>
            <button>Create</button>
          </div>
          
          <div className="add-page-right">
            <label htmlFor="">Service Title</label>
            <input type="text" name='shortTitle' placeholder='One-page web design' onChange={handleChange}/>
            
            <label htmlFor="">Short Description</label>
            <textarea name="shortDesc" id="" cols="30" rows="10" 
            placeholder='Short description of your service'
            onChange={handleChange}
            ></textarea>
            
            <label htmlFor="">Delivery Time(e.g. 3 days)</label>
            <input type="text" name='deliveryTime' min={1} onChange={handleChange}/>

            <label htmlFor="">Revision Number</label>
            <input type="text" name='revisionNumber' min={1} onChange={handleChange}/>

            <label htmlFor="">Add Features</label>
            <form action="" onSubmit={handleFeature}> 
              <input type="text" placeholder='e.g. page design' />
              <button type="submit">add</button>
            </form> 
            
            <label htmlFor="">Price</label>
            <input type="text" name='price' min={1} onChange={handleChange}/>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Add