import React from "react";

import './contact.styles.scss';

 const Contact =()=>(
         
           <div className="form-label" >
           <h3>Contact Us</h3>
            <form  className="contact-form">
             <label for="fname">Name:</label><br/>
             <input type="text" id="name" name="name" placeholder="name"/><br/>
             <label for="email">Email:</label><br/>
             <input type="text" id="email" name="email" placeholder="email"/><br/>
             <label for="fname">Mobile:</label><br/>
             <input type="text" id="mobile" name="mobile" placeholder="mobile"/><br/>
             <label for="age">Age:</label><br/>
             <select >
             <option value="age" id='gender'>male</option>
             <option value="age" id='gender'>female</option>
             </select><br/>
             <input type="submit" value="Submit"/>
            </form>
          </div>
      )
export default Contact;