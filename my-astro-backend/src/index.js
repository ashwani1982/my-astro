import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import path from "path";
const app = express();

app.use(express.static(path.join(__dirname, "/build")));
app.use(bodyParser.json());

//common function for database operations
const withDB = async (operations, res) => {
  try {
    //mongodb connection - create client
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useUnifiedTopology: true,
    });
    //create db instance for 'my-astro' database
    const db = client.db("my-astro");

    await operations(db);

    client.close();
  } catch (error) {
    res.status(500).send({ messgae: "something wrong happend", error });
  }
};

//common function for adding rashi details
const addRashi = async (req, res) => {
  try {
    console.log(`entry to addRashi with user=${JSON.stringify(req)}`);
    var user = req.body;
    console.log(`user=${JSON.stringify(user)}`);
    var laganRashi = 0;
    if (user && user.planets) {
      if (user.planets.length > 0) {
        const index = user.planets.findIndex((item) => {
          item.name === "lagan";
        });
        console.log(`index=${index}`);
        if (index > 0) {
          laganRashi = user.planets[index].rashi;
          console.log(`laganRashi=${laganRashi}`);
          user.planets.map((item) => {
            if (item.name !== "lagan") {
              item.rashi =
                (laganRashi + item.house) % 13 > 0
                  ? (laganRashi + item.house) % 13
                  : 1;
              console.log(`planet:${item.name} set rashi to ${item.rashi}`);
            }
          });
          console.log(`user=${user}`);
          return user;
        } else {
          console.error(`Error!! can't find lagan info in user.planets`);
        }
      } else {
        console.error(`Error!! no planet info available`);
      }
    } else {
      console.error(`Error!! user is undefined`);
    }
  } catch (error) {
    console.error({ messgae: "something wrong happend", error });
  }
  return user;
};

//add user
app.post("/api/user", async (req, res) => {
  var userDetails = req.body;
  const userName = userDetails.name;
  console.log(`Add user - ${JSON.stringify(userDetails)}`);
  //userDetails = addRashi(req, res);
  withDB(async (db) => {
    const userInfo = await db
      .collection("user")
      .findOne({ name: userDetails.name });
    if (userInfo) {
      console.log(`Update user - ${userName}`);
      await db.collection("user").updateOne(
        { name: userName },
        {
          $set: {
            name: userDetails.name,
            dob: userDetails.dob,
            pob: userDetails.pob,
            time: userDetails.time,
            planets: userDetails.planets,
          },
        }
      );
    } else {
      console.log(`Add user - ${userName}`);
      await db.collection("user").insertOne(userDetails, function (err, res) {
        if (err) throw err;
        console.log(`1 document inserted with user ${userName}`);
      });
    }
    const updatedUserInfo = await db
      .collection("user")
      .findOne({ name: userName });
    console.log(`updatedUserInfo=${JSON.stringify(updatedUserInfo)}`);
    res.status(200).json(updatedUserInfo);
  }, res);
});

//get user chart
app.get("/api/chart/:username", async (req, res) => {
  const userName = req.params.username;
  console.log(`Get chart for username - ${userName}`);
  var chart = {
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
  };

  withDB(async (db) => {
    const userInfo = await db.collection("user").findOne({ name: userName });
    if (userInfo) {
      console.log(`user - ${JSON.stringify(userInfo)}`);
      console.log(`user.planets - ${JSON.stringify(userInfo.planets)}`);
      var laganRashi = 0;
      var index = -1;
      if (userInfo.planets.length > 0) {
        index = userInfo.planets.findIndex((p) => {
          return p.name === "lagan";
        });
        console.log(`GET user chart - laganIndex=<${index}>`);
        if (index >= 0) {
          laganRashi = userInfo.planets[index].rashi;
          console.log(`GET user chart - laganRashi=<${laganRashi}>`);
        } else {
          console.error(`lagan data not found in planets`);
          res.status(500).json({ message: "lagan data not found" });
        }
        if (laganRashi > 0) {
          userInfo.planets.map((item) => {
            console.log(`planet=<${item.name}>`);
            if (item.house) {
              console.log(`house=<${item.house.toString()}>`);
            }
            if (item.rashi) {
              console.log(`rashi=<${item.rashi.toString()}>`);
              chart.houses.lagan = Number.parseInt(item.rashi.toString());
            }
            if (item.house) {
              switch (item.house.toString()) {
                case "1": {
                  console.log(
                    `case 1 with chart.houses.first=${chart.houses.first}`
                  );
                  chart.houses.first =
                    chart.houses.first + item.name.substring(0, 2) + " ";
                  console.log(
                    `After setting value chart.houses.first=${chart.houses.first}`
                  );
                  break;
                }
                case "2": {
                  console.log(
                    `case 2 with chart.houses.second=${chart.houses.second}`
                  );
                  chart.houses.second =
                    chart.houses.second + item.name.substring(0, 2) + " ";
                  console.log(
                    `After setting value chart.houses.second=${chart.houses.second}`
                  );
                  break;
                }
                case "3": {
                  chart.houses.third =
                    chart.houses.third + item.name.substring(0, 2) + " ";
                  break;
                }
                case "4": {
                  chart.houses.fourth =
                    chart.houses.fourth + item.name.substring(0, 2) + " ";
                  break;
                }
                case "5": {
                  chart.houses.fifth =
                    chart.houses.fifth + item.name.substring(0, 2) + " ";
                  break;
                }
                case "6": {
                  chart.houses.sixth =
                    chart.houses.sixth + item.name.substring(0, 2) + " ";
                  break;
                }
                case "7": {
                  chart.houses.seventh =
                    chart.houses.seventh + item.name.substring(0, 2) + " ";
                  break;
                }
                case "8": {
                  chart.houses.eigth =
                    chart.houses.eigth + item.name.substring(0, 2) + " ";
                  break;
                }
                case "9": {
                  chart.houses.ninth =
                    chart.houses.ninth + item.name.substring(0, 2) + " ";
                  break;
                }
                case "10": {
                  chart.houses.tenth =
                    chart.houses.tenth + item.name.substring(0, 2) + " ";
                  break;
                }
                case "11": {
                  chart.houses.eleventh =
                    chart.houses.eleventh + item.name.substring(0, 2) + " ";
                  break;
                }
                case "12": {
                  chart.houses.twelth =
                    chart.houses.twelth + item.name.substring(0, 2) + " ";
                  break;
                }
                default: {
                  console.log(
                    `default case with item.house = ${item.house.toString()}`
                  );
                  break;
                }
              }
            }
          }); //map ends
          console.log(`chart=<${JSON.stringify(chart)}>`);
          res.status(200).json(chart);
        } else {
          console.error(`no laganRashi info available`);
          res.status(404).json({ message: "laganRashi not found" });
        }
      } else {
        console.error(
          `(userInfo.planets.length with username<${userName}> not found`
        );
        res.status(404).json({ message: "(userInfo.planets.length not found" });
      }
    } else {
      console.error(`user with username<${userName}> not found`);
      res.status(404).json({ message: "user not found" });
    }
  }, res);
});

//GET end point - Existing user list
app.get("/api/users", async (req, res) => {
  console.log(`GET for ${req.url}`);

  withDB(async (db) => {
    console.log(`users`);
    //get all data from 'user' collection
    const userList = await db.collection("user").find().toArray();

    console.log(`>>>>userList=${JSON.stringify(userList)}`);
    res.status(200).json(userList);
  }, res);
});

//GET end point - Articl List
app.get("/api/articles", async (req, res) => {
  console.log(`GET for ${req.url}`);

  withDB(async (db) => {
    console.log(`articleList`);
    //get the data from 'articles' collection using key as articleName
    const articleInfo = await db.collection("user").find().toArray();

    console.log(`articleInfo=${JSON.stringify(articleInfo)}`);
    res.status(200).json(articleInfo);
  }, res);
});

//GET end point - article by name
app.get("/api/articles/:name", async (req, res) => {
  console.log(`GET for ${req.url}`);
  const articleName = req.params.name;

  withDB(async (db) => {
    console.log(`articleName=${articleName}`);
    //get the data from 'articles' collection using key as articleName
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).json(articleInfo);
    console.log(`articleInfo=${JSON.stringify(articleInfo)}`);
  }, res);
});

app.post("/api/articles/:name/upvote", async (req, res) => {
  const articleName = req.params.name;
  console.log(`articleName = ${articleName}`);
  withDB(async (db) => {
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          upvotes: articleInfo.upvotes + 1,
        },
      }
    );
    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(updatedArticleInfo);
  }, res);
});

app.post("/api/articles/:name/add-comment", async (req, res) => {
  const articleName = req.params.name;
  const { username, comment } = req.body;

  withDB(async (db) => {
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, comment }),
        },
      }
    );
    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(updatedArticleInfo);
  }, res);
});

//app.get("*", (req, res) => {
//  res.sendFile(path.join(__dirname, "/build/index.html"));
//});
app.listen(8000, () => console.log("listening to port 8000"));
