import React, { useState } from "react";
import UsersList from "../components/UsersList";
import { ChartNew } from "../components/ChartNew";

import Grid from "../components/Grid";
import Row from "../components/Row";
import Col from "../components/Col";

function UserDetails() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [pob, setPob] = useState("");
  const [time, setTime] = useState("");
  const [laganDegree, setLaganDegree] = useState("");
  const [laganRashi, setLaganRashi] = useState("");
  const [sunDegree, setSunDegree] = useState("");
  const [sunHouse, setSunHouse] = useState("");
  const [moonDegree, setMoonDegree] = useState("");
  const [moonHouse, setMoonHouse] = useState("");
  const [marsDegree, setMarsDegree] = useState("");
  const [marsHouse, setMarsHouse] = useState("");
  const [mercuryDegree, setMercuryDegree] = useState("");
  const [mercuryHouse, setMercuryHouse] = useState("");
  const [jupiterDegree, setJupiterDegree] = useState("");
  const [jupiterHouse, setJupiterHouse] = useState("");
  const [venusDegree, setVenusDegree] = useState("");
  const [venusHouse, setVenusHouse] = useState("");
  const [saturnDegree, setSaturnDegree] = useState("");
  const [saturnHouse, setSaturnHouse] = useState("");
  const [rahuDegree, setRahuDegree] = useState("");
  const [rahuHouse, setRahuHouse] = useState("");
  const [ketuDegree, setKetuDegree] = useState("");
  const [ketuHouse, setKetuHouse] = useState("");

  const [userRecord, setUserRecord] = useState({
    name: "",
    dob: "",
    pob: "",
    time: "",
    planets: [],
  });
  const [userChart, setUserChart] = useState({
    houses: {
      lagan: 1,
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: "",
      sixth: "",
      seventh: "",
      eigth: "",
      ninth: "",
      tenth: "",
      eleventh: "",
      twelth: "",
    },
  });

  function prepareUserRecord() {
    var userRec = {
      name: `${name}`,
      dob: `${dob}`,
      pob: `${pob}`,
      time: `${time}`,
      planets: [
        {
          name: "lagan",
          degree: `${laganDegree}`,
          rashi: `${laganRashi}`,
        },
        {
          name: "sun",
          degree: `${sunDegree}`,
          house: `${sunHouse}`,
        },
        {
          name: "moon",
          degree: `${moonDegree}`,
          house: `${moonHouse}`,
        },
        {
          name: "mars",
          degree: `${marsDegree}`,
          house: `${marsHouse}`,
        },
        {
          name: "mercury",
          degree: `${mercuryDegree}`,
          house: `${mercuryHouse}`,
        },
        {
          name: "jupiter",
          degree: `${jupiterDegree}`,
          house: `${jupiterHouse}`,
        },
        {
          name: "venus",
          degree: `${venusDegree}`,
          house: `${venusHouse}`,
        },
        {
          name: "saturn",
          degree: `${saturnDegree}`,
          house: `${saturnHouse}`,
        },
        {
          name: "rahu",
          degree: `${rahuDegree}`,
          house: `${rahuHouse}`,
        },
        {
          name: "ketu",
          degree: `${ketuDegree}`,
          house: `${ketuHouse}`,
        },
      ],
    };
    return userRec;
  }

  const submitUser = async () => {
    const userRec = prepareUserRecord();
    console.log(`userRec = ${JSON.stringify(userRec)}`);

    const result = await fetch(`/api/user`, {
      method: "post",
      body: JSON.stringify(userRec),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    console.log(`body = ${JSON.stringify(body)}`);
    const chartResult = await fetch(`/api/chart/${userRec.name}`);
    const chartResultBody = await chartResult.json();
    if (chartResultBody) {
      console.log(`chartResultBody=${JSON.stringify(chartResultBody)}`);
      setUserChart(chartResultBody);
      console.log(`userChart=${JSON.stringify(userChart)}`);
    }
  };

  return (
    <Grid>
      <Row key="main-row">
        <Col key="col-0-0" size={1}>
          <UsersList />
          <h1>{name}</h1>
          <h2>Native D1 Chart</h2>

          <ChartNew userChart={userChart} />
        </Col>
        <Col key="col-0-1" size={1}>
          <div id="add-user-details">
            <div id="add-jaatak-details">
              <h3>Add Jaatak details</h3>
              <Row key="row-1">
                <Col key="col-1-1" size={1}>
                  <label>
                    Name:
                    <input
                      type="text"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </label>
                </Col>
                <Col key="col-1-2" size={1}>
                  <label>
                    DoB:
                    <input
                      type="text"
                      value={dob}
                      onChange={(event) => setDob(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
              <Row key="Row-2">
                <Col key="col-2-1" size={1}>
                  <label>
                    PoB:
                    <input
                      type="text"
                      value={pob}
                      onChange={(event) => setPob(event.target.value)}
                    />
                  </label>
                </Col>
                <Col key="col-2-2" size={1}>
                  <label>
                    time:
                    <input
                      type="text"
                      value={time}
                      onChange={(event) => setTime(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
            </div>
            {/*row 2 end*/}
            <div id="add-planet-details">
              <h3>Add Planet details</h3>

              <Row>
                <Col size={1}>
                  <h3>Lagan</h3>
                </Col>
              </Row>

              <Row>
                <Col size={1}>
                  <label>
                    Degree:
                    <input
                      type="text"
                      value={laganDegree}
                      onChange={(event) => {
                        console.log("laganDegree " + event.target.value);
                        setLaganDegree(event.target.value);
                      }}
                    />
                  </label>
                </Col>
                <Col size={1}>
                  <label>
                    Rashi:
                    <input
                      type="text"
                      value={laganRashi}
                      onChange={(event) => setLaganRashi(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <h3>Sun</h3>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <label>
                    Degree:
                    <input
                      type="text"
                      value={sunDegree}
                      onChange={(event) => setSunDegree(event.target.value)}
                    />
                  </label>
                </Col>
                <Col size={1}>
                  <label>
                    House:
                    <input
                      type="text"
                      value={sunHouse}
                      onChange={(event) => setSunHouse(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <h3>Moon</h3>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <label>
                    Degree:
                    <input
                      type="text"
                      value={moonDegree}
                      onChange={(event) => setMoonDegree(event.target.value)}
                    />
                  </label>
                </Col>
                <Col size={1}>
                  <label>
                    House:
                    <input
                      type="text"
                      value={moonHouse}
                      onChange={(event) => setMoonHouse(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <h3>Mars</h3>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <label>
                    Degree:
                    <input
                      type="text"
                      value={marsDegree}
                      onChange={(event) => setMarsDegree(event.target.value)}
                    />
                  </label>
                </Col>
                <Col size={1}>
                  <label>
                    House:
                    <input
                      type="text"
                      value={marsHouse}
                      onChange={(event) => setMarsHouse(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <h3>Mercury</h3>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <label>
                    Degree:
                    <input
                      type="text"
                      value={mercuryDegree}
                      onChange={(event) => setMercuryDegree(event.target.value)}
                    />
                  </label>
                </Col>
                <Col size={1}>
                  <label>
                    House:
                    <input
                      type="text"
                      value={mercuryHouse}
                      onChange={(event) => setMercuryHouse(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <h3>Jupiter</h3>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <label>
                    Degree:
                    <input
                      type="text"
                      value={jupiterDegree}
                      onChange={(event) => setJupiterDegree(event.target.value)}
                    />
                  </label>
                </Col>
                <Col size={1}>
                  <label>
                    House:
                    <input
                      type="text"
                      value={jupiterHouse}
                      onChange={(event) => setJupiterHouse(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <h3>Venus</h3>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <label>
                    Degree:
                    <input
                      type="text"
                      value={venusDegree}
                      onChange={(event) => setVenusDegree(event.target.value)}
                    />
                  </label>
                </Col>
                <Col size={1}>
                  <label>
                    House:
                    <input
                      type="text"
                      value={venusHouse}
                      onChange={(event) => setVenusHouse(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <h3>Saturn</h3>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <label>
                    Degree:
                    <input
                      type="text"
                      value={saturnDegree}
                      onChange={(event) => setSaturnDegree(event.target.value)}
                    />
                  </label>
                </Col>
                <Col size={1}>
                  <label>
                    House:
                    <input
                      type="text"
                      value={saturnHouse}
                      onChange={(event) => setSaturnHouse(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <h3>Rahu</h3>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <label>
                    Degree:
                    <input
                      type="text"
                      value={rahuDegree}
                      onChange={(event) => setRahuDegree(event.target.value)}
                    />
                  </label>
                </Col>
                <Col size={1}>
                  <label>
                    House:
                    <input
                      type="text"
                      value={rahuHouse}
                      onChange={(event) => setRahuHouse(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <h3>Ketu</h3>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <label>
                    Degree:
                    <input
                      type="text"
                      value={ketuDegree}
                      onChange={(event) => setKetuDegree(event.target.value)}
                    />
                  </label>
                </Col>
                <Col size={1}>
                  <label>
                    House:
                    <input
                      type="text"
                      value={ketuHouse}
                      onChange={(event) => setKetuHouse(event.target.value)}
                    />
                  </label>
                </Col>
              </Row>
            </div>

            <button onClick={() => submitUser()}>Add User</button>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}
export default UserDetails;
