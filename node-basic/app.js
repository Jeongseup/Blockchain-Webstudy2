// npm init
// npm install express cors
// node app or node --inspect app
const express = require("express");
const app = express();
const fs = require("fs");
// 얜 별도로 설치할 필요없음

// 21.07.13
const dotenv = require("dotenv");
const path = require("path");

// root folder find out
dotenv.config({ path: path.join(__dirname, ".env.local") });

// 21.07.13
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    cb(null, new Date().valueOf() + path.extname(file.originalname));
  },
});
// 위에서 정의한 storage 를 저장소로 저장한다.
var upload = multer({ storage: storage });

//cors
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:8080", // postman에서 webserver main
  credentials: true,
};

app.use(cors(corsOption));
app.use(
  express.json({
    limit: "50mb",
  })
);

const server = app.listen(3000, () => {
  // 21.07.13
  // 만약 업로드 폴더가 없으면 폴더를 생성한다.
  var dir = __dirname + "/uploads";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  console.log("Server stared. port 3000.");
});

// 21.07.13 : 클라이언트가 서버에 있는 파일 저장소에 접근하게 한다.
// 근데 upload라는 폴더명을 노출시키기 싫어서 static이라고 바꿔서 받아온다.
app.use("/static", express.static(__dirname + "/uploads"));

const dbPool = require("mysql").createPool({
  database: "dev",
  host: "169.254.167.138",
  port: 3307,
  user: "root",
  password: "28660894",
  // password는 항상 ""로 묶어줘야 한다.
});

// 21.07.13 얘는 파일을 업로드하는 post function , single은 파일을 하나씩 업로드한다.
// attachment는 그냥 지정된 형식자
app.post("/api/uploadFile", upload.single("attachment"), async (req, res) => {
  console.log(req.file);
  return res.status(200).json(req.file);
});

// 21.07.13
app.delete("/api/deleteFile", async (req, res) => {
  // vue delete에서 filename이라는 파라미터를 받아와서 req.query 에 filename에 던져준다.
  const filePath = path.join(__dirname, "uploads", req.query.filename); // /uploads/a123154.png
  console.log(path);
  // unlink function : filePath에 파일이 존재하면 삭제한다.
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(400).json({
        type: "E",
        msg: "파일을 삭제할 수 없습니다. 다시 시도하세요.",
      });
    }

    res.status(200).json({ type: "S", msg: "성공적으로 삭제되었습니다." });
  });
});

app.get("/api/getUserList", async (req, res) => {
  const userList = { data: [{ name: "Jeongseup Son", gender: "Male" }] };
  res.send(userList);
});

// vue의 getList가 작동
app.get("/api/getList", async (req, res) => {
  try {
    res.send(await sys.db("list"));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

// 정상으로 내 데이터가 테스트하고 싶을 때  포스트맨을 쓴다.
// 서버쪽 url를 입력하고 send를 누르면
// 정상적으로 출력되는지 확인하면 된다.

// http://localhost:3000 : webserver
// /api/getUserList : app.get path

// maria db를 연결하기 위한 module
// npm install mysql

let sql = require("./sql.js");
//__dirname 은 nodejs의 root 폴더

fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
  console.log("sql 변경시 재시작 없이 반영되도록 함.");
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});

// vue의 createPerson이 작동
// 일반적으로 그냥 post만 쓰기도 함 app.get 대신 그냥 post로 실행
// alias는 sql.js 내에 있는 하나가 잡힌다
app.post("/api/:alias", async (req, res) => {
  // alias라는 변수에 createPerson이 입력
  console.log(req.params.alias);
  console.log(req.body.param);

  try {
    res.send(await sys.db(req.params.alias, req.body.param, req.body.where));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

// 우리가 작성한 것들을 실질적으로 전송하는 역할
const sys = {
  async db(alias, param = [], where = "") {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != "ER_DUP_ENTRY") console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};
