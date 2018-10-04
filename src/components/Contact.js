import React, { Component } from 'react';

class Contact extends Component {
render() {
  return(
    <article className="contact" id="contact">
      <h2>Contact me for things</h2>
      <form>
         <div role="textbox" id="name" className="field">
            <label htmlFor="name-input">Your Name</label>
            <input className="input" type="text" name="name-input" id="name-input" placeholder="Name"/>
         </div>
         <div role="textbox" id="email" className="field">
            <label htmlFor="email-input">Your Email</label>
            <input className="input" type="text" name="email-input" id="email-input" placeholder="Email"/>
         </div>
         <div  role="textbox" id="description" className="field">
            <label htmlFor="text-description">Description</label>
            <textarea id="text-description" className="input" name="description" placeholder="Description"></textarea>
         </div>
         <button className="button" id="submit">Submit</button>
      </form>
    </article>
  )
}
}

export default Contact
