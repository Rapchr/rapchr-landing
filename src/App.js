import logo from './logo.svg';
import './App.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"


function App() {
  const url = process.env.REACT_APP_MAILCHIMP_URL;

  const SimpleForm = () => <MailchimpSubscribe url={url}/>

  return (
    <div className="landing-page">
      <div className="slanding-page-ontents">
        <img className="landing-page-logo" src={logo} alt="Rapchr Logo" />
        <div className="landing-page-contents">
          <p className="landing-page-msg">Hip-hop tech platform focused on community, culture, and the art of rap. Sign up to find out more about what we're building, and follow us on twitter <a target="_blank" className="splash-page__msg__link" href="https://twitter.com/rapchr">@rapchr</a></p>
        </div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <SimpleForm url={url} onSubmitted={formData => subscribe(formData)} />
              {status === "sending" && <div style={{ color: "orange", marginBottom: "20px" }}>sending...</div>}
              {status === "error" && <div style={{ color: "red" + 10, marginBottom: "20px" }} dangerouslySetInnerHTML={{__html: message}}/>}
              {status === "success" && <div style={{ color: "orange", marginBottom: "20px" }}>Subscribed !</div>}
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default App;
