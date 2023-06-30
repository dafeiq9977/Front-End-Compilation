import * as htmlparser2 from "htmlparser2";
import fs from "fs";
import { textContent, getElementById } from "domutils";
import domSerializer from "dom-serializer";
import cheerio from "cheerio";

fs.readFile("./pages/Test.html", "UTF-8", (err, data) => {
  // 将HTML文档字符串转成对应的JS对象，子节点保存在对象的children属性，还有prev，next属性保存前后节点
  const dom = htmlparser2.parseDocument(data);
  console.log(dom.children[0].children[1]);
  const recoverDOM = domSerializer(dom);
  console.log('@@@', recoverDOM);
  const bodyEle = getElementById('qpr', dom);
  console.log('@@@body element is: ',bodyEle);

  const $ = cheerio.load(data);
  const content = $('<li class="plum">Plum</li>');
  $('#qpr').append(content);
  console.log($.html());


  const parser = new htmlparser2.Parser({
    onopentag(name, attributes) {
      console.log(name, attributes);
    },
    ontext(text) {
      console.log(text);
    },
    onclosetag(tagname) {
      console.log(tagname);
    },
  });
  parser.write(data);
  parser.end();
});
