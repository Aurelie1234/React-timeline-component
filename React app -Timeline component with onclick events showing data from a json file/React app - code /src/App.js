import "./styles.css";
import mediaData from "./media.json";
import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);

  const [show3, setShow3] = useState(false);

  const [show4, setShow4] = useState(false);

  const [show5, setShow5] = useState(false);

  return (
    <div className="App">
      <h1 className="Title">Timeline</h1>
      <br></br>

      <div className="Timeline">
        <button className="Btn" onClick={() => setShow(!show)}></button>
        <button className="Btn2" onClick={() => setShow2(!show2)}></button>
        <button className="Btn3" onClick={() => setShow3(!show3)}></button>
        <button className="Btn4" onClick={() => setShow4(!show4)}></button>
        <button className="Btn5" onClick={() => setShow5(!show5)}></button>

        <p className="Time">12:04</p>
        <p className="Time">12:03</p>
        <p className="Time">12:02</p>
        <p className="Time">12:01</p>
        <p className="Time">12:00</p>

        <div className="Verticalline"></div>
        <div className="Verticalline2"></div>
        <div className="Verticalline3"></div>
        <div className="Verticalline4"></div>
        <div className="Verticalline5"></div>
      </div>

      {show ? (
        <div className="Box1">
          {" "}
          {mediaData.map((media) => {
            return (
              <div className="">
                <b>{media.type1}</b>
                <h5>{media.startTime1}</h5>
                <i>{media.duration1}</i>
                <h6>{media.eventId1}</h6>
              </div>
            );
          })}
        </div>
      ) : null}

      {show2 ? (
        <div className="Box2">
          {" "}
          {mediaData.map((media) => {
            return (
              <div className="">
                <b>{media.type2}</b>
                <h5>{media.startTime2}</h5>
                <i>{media.duration2}</i>
                <h6>{media.eventId2}</h6>
              </div>
            );
          })}
        </div>
      ) : null}

      {show3 ? (
        <div className="Box3">
          {" "}
          {mediaData.map((media) => {
            return (
              <div className="">
                <b>{media.type3}</b>
                <h5>{media.startTime3}</h5>
                <i>{media.duration3}</i>
                <h6>{media.eventId3}</h6>
              </div>
            );
          })}
        </div>
      ) : null}

      {show4 ? (
        <div className="Box4">
          {" "}
          {mediaData.map((media) => {
            return (
              <div className="">
                <b>{media.type4}</b>
                <h5>{media.startTime4}</h5>
                <i>{media.duration4}</i>
                <h6>{media.eventId4}</h6>
              </div>
            );
          })}
        </div>
      ) : null}

      {show5 ? (
        <div className="Box5">
          {" "}
          {mediaData.map((media) => {
            return (
              <div className="">
                <b>{media.type5}</b>
                <h5>{media.startTime5}</h5>
                <i>{media.duration5}</i>
                <h6>{media.eventId5}</h6>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
