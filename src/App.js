import React, { Component } from 'react'
import './App.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import logo from "./logo.svg"


class App extends Component {

  constructor() {
    super();

  }


  render() {
    const url = process.env.REACT_APP_MAILCHIMP_URL;

    const SimpleForm = () => <MailchimpSubscribe url={url}/>

    return (
      <div className="landing-page">
        <div className="landing-page-contents">
          <img className="landing-page-logo" src={logo} alt="Rapchr Logo" />
          <div className="landing-page-contents">
            <p className="landing-page-msg">A social platform for rap fans. <a target="_blank" rel="noreferrer" className="splash-page__msg__link" href="https://twitter.com/rapchr">@rapchr</a></p>
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
        </div>
      </div>
    )
  }
}

export default App;
