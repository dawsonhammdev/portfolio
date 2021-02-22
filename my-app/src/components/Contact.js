import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import resume from '../img/Dawson_Hamm_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade>Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Let’s create your next<br></br>
                <span className='amazing-color'>experience together</span></h1>
                <button>
                    <a href={resume} download>
                            Resume
                            <FontAwesomeIcon icon={faDownload} className='icon' />
                    </a>
                </button><br></br>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
                
        </div>
        </Fade>

            <span className='footer'>dawsonHamm 2020</span>
        </div>);
    }
}
 
export default Contact;