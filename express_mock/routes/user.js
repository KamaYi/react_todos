var express = require('express');
var router = express.Router();
const Mock = require('mockjs');
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/user/login', function (req, res, next) {
  console.log(req.body);
  let account = req.body.account;
  let password = req.body.password;

  if (account && password) {
    let content = { account: req.body.account }; // 要生成token的主题信息
    let secretOrPrivateKey = "0fca2793be67dda2";// 这是加密的key（密钥）
    let token = jwt.sign(content, secretOrPrivateKey, {
      expiresIn: 60 * 60 * 1  // 1小时过期
    });
    if (password != '111111') {
      res.send(422, { status: 422, msg: '密码错误',data: '' })
      return false;
    }
    res.json({ status: 200, msg: '欢迎登录',data: { token: token, account: req.body.account } })
  } else {
    res.send(422, { status: 422, msg: '请完善信息系' , data: '' });
  }
});

module.exports = router;
