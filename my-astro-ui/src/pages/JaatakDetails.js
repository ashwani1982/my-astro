import React, { useState } from "react";
import ChartNew from "../components/ChartNew";
import _ from "lodash";
function JaatakDetails({ userChartDetails }) {
  const [jaatakRecord, setJaatakRecord] = useState({
    name: "",
    dob: "",
    pob: "",
    time: "",
    planets: [],
  });
  const [userChart, setUserChart] = useState({
    houses: {
      lagan: 0,
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

  function updatePlanets(planetName, iKey, value, newJaatakRecord) {
    console.log(
      `update jaatakRecord.planets.${planetName}.${iKey} with ${value}`
    );
    //retrieve existing value of record
    newJaatakRecord = _.extend({}, jaatakRecord);

    //if found existing element
    if (
      newJaatakRecord.planets.length > 0 &&
      newJaatakRecord.planets.findIndex((item) => item.name === planetName) >= 0
    ) {
      var tempIndex = newJaatakRecord.planets.findIndex(
        (item) => item.name === planetName
      );
      if (tempIndex >= 0) {
        console.log(`newJaatakRecord=${newJaatakRecord}`);
        if (iKey === "degree") {
          newJaatakRecord.planets[tempIndex].degree = value;
        } else if (iKey === "house") {
          newJaatakRecord.planets[tempIndex].house = value;
        } else if (iKey === "rashi") {
          newJaatakRecord.planets[tempIndex].rashi = value;
        } else console.log(`couldn't find key with name as ${iKey}`);
      }
      console.log(`updated newJaatakRecord=${newJaatakRecord}`);
    } else {
      if (iKey === "degree") {
        newJaatakRecord.planets.push({
          name: planetName,
          degree: value,
          house: 0,
          color: "",
          rashi: 0,
        });
      } else if (iKey === "house") {
        newJaatakRecord.planets.push({
          name: planetName,
          degree: "",
          house: value,
          color: "",
          rashi: 0,
        });
      } else {
        console.log(`couldn't find key with name as ${iKey}`);
      }
    }
    return newJaatakRecord;
  }

  function UpdateRecord(key, value) {
    console.log(`update jaatakRecord.${key} with ${value}`);
    var newJaatakRecord = _.extend({}, jaatakRecord);
    if (key === "name") {
      newJaatakRecord.name = value;
    } else if (key === "dob") {
      newJaatakRecord.dob = value;
    } else if (key === "pob") {
      newJaatakRecord.pob = value;
    } else if (key === "time") {
      newJaatakRecord.time = value;
    } else if (key === "lagan.degree") {
      newJaatakRecord = updatePlanets(
        "lagan",
        "degree",
        value,
        newJaatakRecord
      );
    } else if (key === "lagan.rashi") {
      newJaatakRecord = updatePlanets("lagan", "rashi", value, newJaatakRecord);
    } else if (key === "sun.degree") {
      newJaatakRecord = updatePlanets("sun", "degree", value, newJaatakRecord);
    } else if (key === "sun.house") {
      newJaatakRecord = updatePlanets("sun", "house", value, newJaatakRecord);
    } else if (key === "moon.degree") {
      newJaatakRecord = updatePlanets("moon", "degree", value, newJaatakRecord);
    } else if (key === "moon.house") {
      newJaatakRecord = updatePlanets("moon", "house", value, newJaatakRecord);
    } else if (key === "mars.degree") {
      newJaatakRecord = updatePlanets("mars", "degree", value, newJaatakRecord);
    } else if (key === "mars.house") {
      newJaatakRecord = updatePlanets("mars", "house", value, newJaatakRecord);
    } else if (key === "mercury.degree") {
      newJaatakRecord = updatePlanets(
        "mercury",
        "degree",
        value,
        newJaatakRecord
      );
    } else if (key === "mercury.house") {
      newJaatakRecord = updatePlanets(
        "mercury",
        "house",
        value,
        newJaatakRecord
      );
    } else if (key === "jupiter.degree") {
      newJaatakRecord = updatePlanets(
        "jupiter",
        "degree",
        value,
        newJaatakRecord
      );
    } else if (key === "jupiter.house") {
      newJaatakRecord = updatePlanets(
        "jupiter",
        "house",
        value,
        newJaatakRecord
      );
    } else if (key === "venus.degree") {
      newJaatakRecord = updatePlanets(
        "venus",
        "degree",
        value,
        newJaatakRecord
      );
    } else if (key === "venus.house") {
      newJaatakRecord = updatePlanets("venus", "house", value, newJaatakRecord);
    } else if (key === "saturn.degree") {
      newJaatakRecord = updatePlanets(
        "saturn",
        "degree",
        value,
        newJaatakRecord
      );
    } else if (key === "saturn.house") {
      newJaatakRecord = updatePlanets(
        "saturn",
        "house",
        value,
        newJaatakRecord
      );
    } else if (key === "rahu.degree") {
      newJaatakRecord = updatePlanets("rahu", "degree", value, newJaatakRecord);
    } else if (key === "rahu.house") {
      newJaatakRecord = updatePlanets("rahu", "house", value, newJaatakRecord);
    } else if (key === "ketu.degree") {
      newJaatakRecord = updatePlanets("ketu", "degree", value, newJaatakRecord);
    } else if (key === "ketu.house") {
      newJaatakRecord = updatePlanets("ketu", "house", value, newJaatakRecord);
    } else {
      console.log(`key ${key} not found`);
    }
    setJaatakRecord(newJaatakRecord);
    console.log(`jaatakRecord = ${JSON.stringify(jaatakRecord)}`);
  }

  const setUserChartDetails = () => {
    var userRecord = _.extend({}, jaatakRecord);
    console.log(
      `setUserChartDetails - userRecord = ${JSON.stringify(userRecord)}`
    );
    if (!userChartDetails) {
      userChartDetails = {
        houses: {
          lagan: 7,
          first: "Ju",
          second: "Ma",
          third: "Ke",
          fourth: "",
          fifth: "",
          sixth: "",
          seventh: "",
          eigth: "",
          ninth: "Ra",
          tenth: "",
          eleventh: "Ve",
          twelth: "Sa Me Mo Su",
        },
      };
    }

    if (
      userRecord &&
      userRecord.planets &&
      userRecord.planets.findIndex((item) => item.name === "lagan") >= 0
    ) {
      userChartDetails.houses.lagan =
        userRecord.planets[
          userRecord.planets.findIndex((item) => item.name === "lagan")
        ].rashi;
    } else {
      userChartDetails.houses.lagan = 0;
    }
    console.log(
      `userChartDetails.houses.lagan = ${userChartDetails.houses.lagan}`
    );
    /* //initialize to empty
    userChartDetails.houses.first = "";
    userChartDetails.houses.second = "";
    userChartDetails.houses.third = "";
    userChartDetails.houses.fourth = "";
    userChartDetails.houses.fifth = "";
    userChartDetails.houses.sixth = "";
    userChartDetails.houses.seventh = "";
    userChartDetails.houses.eigth = "";
    userChartDetails.houses.ninth = "";
    userChartDetails.houses.tenth = "";
    userChartDetails.houses.eleventh = "";
    userChartDetails.houses.twelth = ""; */

    if (userRecord.planets.length > 0) {
      console.log(
        `setUserChartDetails - total planets -  ${userRecord.planets.length}`
      );
      userRecord.planets.map((item, i) => {
        switch (item.house.toString()) {
          case "0": {
            console.log(`item ${item.name} has house 0`);
            break;
          }
          case "1": {
            console.log(`item ${item.name} has house 1`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.first += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.first ${userChartDetails.houses.first} `
            );
            break;
          }
          case "2": {
            console.log(`item ${item.name} has house 2`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.second += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.second ${userChartDetails.houses.second} `
            );
            break;
          }
          case "3": {
            console.log(`item ${item.name} has house 3`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.third += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.third ${userChartDetails.houses.third} `
            );
            break;
          }
          case "4": {
            console.log(`item ${item.name} has house 4`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.fourth += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.fourth ${userChartDetails.houses.fourth} `
            );
            break;
          }
          case "5": {
            console.log(`item ${item.name} has house 5`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.fifth += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.fifth ${userChartDetails.houses.fifth} `
            );
            break;
          }
          case "6": {
            console.log(`item ${item.name} has house 6`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.sixth += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.sixth ${userChartDetails.houses.sixth} `
            );
            break;
          }
          case "7": {
            console.log(`item ${item.name} has house 7`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.seventh += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.seventh ${userChartDetails.houses.seventh} `
            );
            break;
          }
          case "8": {
            console.log(`item ${item.name} has house 8`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.eigth += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.eigth ${userChartDetails.houses.eigth} `
            );
            break;
          }
          case "9": {
            console.log(`item ${item.name} has house 9`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.ninth += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.ninth ${userChartDetails.houses.ninth} `
            );
            break;
          }
          case "10": {
            console.log(`item ${item.name} has house 10`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.tenth += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.tenth ${userChartDetails.houses.tenth} `
            );
            break;
          }
          case "11": {
            console.log(`item ${item.name} has house 11`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.eleventh += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.eleventh ${userChartDetails.houses.eleventh} `
            );
            break;
          }
          case "12": {
            console.log(`item ${item.name} has house 12`);
            console.log(
              `item ${item.name} short name: ${item.name.substring(0, 2)}`
            );
            userChartDetails.houses.twelth += item.name.substring(0, 2) + " ";
            console.log(
              `userChartDetails.houses.twelth ${userChartDetails.houses.twelth} `
            );
            break;
          }
          default:
            console.log(
              `default case: with item.house ${item.house} for item: ${item.name}`
            );
            break;
        }
        return userChartDetails;
      });
    }
    setUserChart(userChartDetails);
  };

  const submitUser = async () => {
    var userRecord = _.extend({}, jaatakRecord);
    console.log(`submitUser - userRecord = ${JSON.stringify(userRecord)}`);
    const result = await fetch(`/api/user`, {
      method: "post",
      body: JSON.stringify(userRecord),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    console.log(`body = ${JSON.stringify(body)}`);
    setJaatakRecord(body);
    setUserChartDetails();
  };

  return (
    <div id="add-user-details">
      <h3>Add Jaatak details</h3>
      <label>
        Name:
        <input
          type="text"
          value={jaatakRecord.name}
          onChange={(event) => {
            UpdateRecord("name", event.target.value);
          }}
        />
      </label>
      <label>
        DoB:
        <input
          type="text"
          value={jaatakRecord.dob}
          onChange={(event) => UpdateRecord("dob", event.target.value)}
        />
      </label>
      <label>
        PoB:
        <input
          type="text"
          value={jaatakRecord.pob}
          onChange={(event) => UpdateRecord("pob", event.target.value)}
        />
      </label>
      <label>
        time:
        <input
          type="text"
          value={jaatakRecord.time}
          onChange={(event) => UpdateRecord("time", event.target.value)}
        />
      </label>
      <h3>Add Planet details</h3>
      <h3>Lagan</h3>
      <label>
        Degree:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "lagan").degree
          }
          onChange={(event) => UpdateRecord("lagan.degree", event.target.value)}
        />
      </label>
      <label>
        Rashi:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "lagan").rashi
          }
          onChange={(event) => UpdateRecord("lagan.rashi", event.target.value)}
        />
      </label>
      <h3>Sun</h3>
      <label>
        Degree:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "sun").degree
          }
          onChange={(event) => UpdateRecord("sun.degree", event.target.value)}
        />
      </label>
      <label>
        House:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "sun").house
          }
          onChange={(event) => UpdateRecord("sun.house", event.target.value)}
        />
      </label>
      <h3>Moon</h3>
      <label>
        Degree:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "moon").degree
          }
          onChange={(event) => UpdateRecord("moon.degree", event.target.value)}
        />
      </label>
      <label>
        House:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "moon").house
          }
          onChange={(event) => UpdateRecord("moon.house", event.target.value)}
        />
      </label>
      <h3>Mars</h3>
      <label>
        Degree:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "mars").degree
          }
          onChange={(event) => UpdateRecord("mars.degree", event.target.value)}
        />
      </label>
      <label>
        House:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "mars").house
          }
          onChange={(event) => UpdateRecord("mars.house", event.target.value)}
        />
      </label>
      <h3>Mercury</h3>
      <label>
        Degree:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "mercury")
              .degree
          }
          onChange={(event) =>
            UpdateRecord("mercury.degree", event.target.value)
          }
        />
      </label>
      <label>
        House:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "mercury").house
          }
          onChange={(event) =>
            UpdateRecord("mercury.house", event.target.value)
          }
        />
      </label>
      <h3>Jupiter</h3>
      <label>
        Degree:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "jupiter")
              .degree
          }
          onChange={(event) =>
            UpdateRecord("jupiter.degree", event.target.value)
          }
        />
      </label>
      <label>
        House:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "jupiter").house
          }
          onChange={(event) =>
            UpdateRecord("jupiter.house", event.target.value)
          }
        />
      </label>
      <h3>Venus</h3>
      <label>
        Degree:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "venus").degree
          }
          onChange={(event) => UpdateRecord("venus.degree", event.target.value)}
        />
      </label>
      <label>
        House:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "venus").house
          }
          onChange={(event) => UpdateRecord("venus.house", event.target.value)}
        />
      </label>
      <h3>Saturn</h3>
      <label>
        Degree:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "saturn").degree
          }
          onChange={(event) =>
            UpdateRecord("saturn.degree", event.target.value)
          }
        />
      </label>
      <label>
        House:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "saturn").house
          }
          onChange={(event) => UpdateRecord("saturn.house", event.target.value)}
        />
      </label>
      <h3>Rahu</h3>
      <label>
        Degree:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "rahu").degree
          }
          onChange={(event) => UpdateRecord("rahu.degree", event.target.value)}
        />
      </label>
      <label>
        House:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "rahu").house
          }
          onChange={(event) => UpdateRecord("rahu.house", event.target.value)}
        />
      </label>
      <h3>Ketu</h3>
      <label>
        Degree:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "ketu").degree
          }
          onChange={(event) => UpdateRecord("ketu.degree", event.target.value)}
        />
      </label>
      <label>
        House:
        <input
          type="text"
          value={
            jaatakRecord.planets.filter((item) => item.name === "ketu").house
          }
          onChange={(event) => UpdateRecord("ketu.house", event.target.value)}
        />
      </label>
      <button onClick={() => submitUser()}>Add User</button>
      <>
        <h1>Ashwani Jain</h1>
        <h2>Native D1 Chart</h2>
        <ChartNew houses={userChart} />
      </>
    </div>
  );
}
export default JaatakDetails;
