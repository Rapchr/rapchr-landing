import React, { Component } from 'react'
import './App.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import logo from "./logo.svg"
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import email from './email.svg'


class App extends Component {


  render() {
    const url = process.env.REACT_APP_MAILCHIMP_URL;

    const SimpleForm = () => <MailchimpSubscribe url={url}/>

    return (
      <div className="landing-page">
        <div className="landing-page-contents">
          <img className="landing-page-logo" src={logo} alt="Rapchr Logo" />
          <div className="landing-page-contents">
            <p className="landing-page-msg">A new way to discuss, analyze and celebrate hip-hop. Sign up for launch updates, and feel free to get in touch.</p>
          </div>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => {
              return (
                <div>
                  <SimpleForm url={url} onSubmitted={formData => subscribe(formData)} />
                  {status === "sending" && <div style={{ color: "#c77d4a", marginBottom: "20px" }}>sending...</div>}
                  {status === "error" && <div style={{ color: "#722a1f" + 10, marginBottom: "20px" }} dangerouslySetInnerHTML={{__html: message}}/>}
                  {status === "success" && <div style={{ color: "#c77d4a", marginBottom: "20px" }}>Subscribed !</div>}
                </div>
              )
            }}
          />
          <div className="landing-page-icons-wrapper">
            <a rel="noreferrer" target="_blank" href="https://twitter.com/rapchr"><img className="landing-page-icon" alt="twitter" src={twitter} /></a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/joinrapchr/"><img className="landing-page-icon" alt="instagram" src={instagram} /></a>
            <a href="mailto:malcolm@rapchr.app"><img className="landing-page-icon email" alt="email" src={email} /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
