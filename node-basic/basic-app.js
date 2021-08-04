const express = require("express");
const app = express();

const cors = require("cors");

const corsOption = {
  origin: "http://localhost:8000",
  credentials: true,
};

app.use(cors(corsOption));
app.use(
  express.json({
    limit: "50mb",
  })
);

const server = app.listen(3000, () => {
  console.log("Server started. Port num : 3000");
});

const dbPool = require("mysql").createPool({
  database: "dev",
  host: "localhost",
  port: 3307,
  user: "root",
  password: "28660894",
});

app.get("/api/getUserList", async (req, res) => {
  // object가 들어가고, 기본 key로는 data가 있고
  // 그 data 안에는 [] 안에 진짜 data 가 있다.
  const userList = { data: [{ name: "Node2 test name", gender: "Male" }] };
  res.send(userList);
});

app.get("/api/getList", async (req, res) => {
  try {
    res.send(await sys.db("list"));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

let sql = require("./sql.js");

const sys = {
  async db(alias, param = [], where = "") {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != "ER_DUP_ENTRY") {
            console.log(error);
            resolve({
              error,
            });
          } else {
            resolve(rows);
          }
        }
      })
    );
  },
};
