"use client";
import Image from "next/image";
import MapaCR from "../../../public/img/MapaCR.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function About() {
  return (
    <>
      <div className="mobile large-screen">
        <div className="crmap-size">
          <Image src={MapaCR} alt="Costa Rica's map" />
        </div>
        <div className="margin-separation">
          <div className="row">
            <div className="col-lg-5">
              <h5 className="">contact</h5>
              <h1>Get in touch - let's work together.</h1>
              <h5 className="mt-4">address</h5>
              <h4>
                <b>
                  Alexandra Campos
                  <br />
                  Los Angeles
                  <br />
                  San Rafael
                  <br />
                  Heredia
                  <br />
                  Costa Rica
                </b>
              </h4>
            </div>
            <div className="col-lg-7">
              <SendAMessage />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

function SendAMessage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Test");
    setData({
      name: "",
      email: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  return (
    <>
      <div className="mt-3 message-section ">
        <p className="got-a-project">
          <b>
            Got a project? Drop me a line if you want to work together on
            something exciting. Big or small. Mobile or web.
          </b>
        </p>

        <div className="input-container mt-5">
          <div className="row">
            <form action="https://formspree.io/f/xzblplaz" method="POST">
              <div className="d-md-flex d-lg-block">
                <div className="col-md-6 me-4 w-100">
                  <label htmlFor="name">Your name</label>
                  <input
                    placeholder="What's your name?"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>
                <div className="col-md-6 w-100">
                  <label htmlFor="email">Your email</label>
                  <input
                    placeholder="What's your email?"
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="d-md-flex mb-md-5 d-lg-block">
                <div className="col-md-6 me-4 w-100">
                  <label htmlFor="service">Service</label>
                  <select
                    name="service"
                    id="service"
                    value={data.service}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, service: e.target.value }))
                    }
                  >
                    <option value="What are you interested in?">
                      What are you interested in?
                    </option>
                    <option value="Need help with a one time project">
                      Need help with a one time project
                    </option>
                    <option value="Looking for a longterm partnership">
                      Looking for a longterm partnership
                    </option>
                    <option value="Want to hire me full-time">
                      Want to hire me full-time
                    </option>
                    <option value="Just wanted to say hi!">
                      Just wanted to say hi!
                    </option>
                  </select>
                </div>

                <div className="mt-5 mb-5 col-md-6 me-4 mt-md-0 mb-md-0 mt-lg-4 w-100">
                  <label htmlFor="budget">Budget</label>
                  <select
                    name="budget"
                    id="budget"
                    value={data.budget}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, budget: e.target.value }))
                    }
                  >
                    <option value="What is your budget?">
                      What is your budget?
                    </option>
                    <option value="$500 - $1000">$500 - $1000</option>
                    <option value="$1000 - $2500">$1000 - $2500</option>
                    <option value="$2500 - $5000">$2500 - $5000</option>
                    <option value="$5000 or more">$5000 or more</option>
                  </select>
                </div>
              </div>
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="What's your message?"
                className="message-input"
                name="message"
                id="message"
                value={data.message}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, message: e.target.value }))
                }
              />
              <div className="submit-class">
                <button type="submit" onClick={handleSubmit}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <b> Send message </b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
