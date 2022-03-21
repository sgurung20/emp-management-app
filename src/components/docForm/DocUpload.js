import React from 'react'

function DocUpload() {
  return (
    <div>
       <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
        >
        
        <input type="hidden" name="form-name" value="contact" />

        <div>
            <label>Name</label>
            <input type="text" name="name" />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="name" />
        </div>

        <div> 
            <label>Any comments</label>
            <textarea name="comments"></textarea>
        </div>

        <button type="submit">Submit</button>       
        </form>
    </div>
  )
}

export default DocUpload