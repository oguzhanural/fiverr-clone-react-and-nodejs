import React from 'react'
import "./Add.scss"

const Add = () => {
  return (
    <div className='add-page'>
      <div className="add-page-container">

        <h1>Add New Gig</h1>

        <div className="add-page-sections">
          <div className="add-page-left">
            <label htmlFor="">Title</label>
            <input type="text"  placeholder='I will do something I am really good at'/>
            <label htmlFor="">Category</label>

            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="webdevelopment">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
              <option value="voiceover">Voice Over</option>
            </select>

            <label htmlFor="">Cover Image</label>
            <input type="file" name="" id="" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple name="" id="" />
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="16"
            placeholder='Brief descriptions to introduce your service to customers'>
            </textarea>
            <button>Create</button>
          </div>
          
          <div className="add-page-right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='One-page web design'/>
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Short description of your service'></textarea>
            <label htmlFor="">Delivery Time(e.g. 3 days)</label>
            <input type="text" min={1} />
            <label htmlFor="">Revision Number</label>
            <input type="text" min={1} />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder='e.g. page design' />
            <input type="text" placeholder='e.g. file uploading' />
            <input type="text" placeholder='e.g. setting up a domain' />
            <input type="text" placeholder='e.g. page design' />
            <label htmlFor="">Price</label>
            <input type="text" min={1} />


          </div>
        </div>

      </div>
    </div>
  )
}

export default Add