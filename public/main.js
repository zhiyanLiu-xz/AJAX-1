let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li); //xxx是ul的id,id可以直接用
        });
        n += 1;
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const object = JSON.parse(request.response);
        myName.textContent = object.name;
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim()); //trim没有周围的回车
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");

  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {};

  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js"); // readyState = 1

  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("加载 JS 失败");
      }
    }
  };
  request.send(); // readyState = 2
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest(); //创建http请求对象
  request.open("GET", "/style.css"); //调用open，获取资源都用get,后面是获取的资源

  //监听request调用成功还是失败
  request.onload = () => {
    console.log("request.response");
    console.log(request.response);

    //创建 style 标签
    const style = document.createElement("style");
    //填写 style 内容
    style.innerHTML = request.response;
    //插到 头 里面
    document.head.appendChild(style);

    console.log("成功了");
  };
  request.onerror = () => {
    console.log("失败了");
  };

  //发送请求
  request.send();
}; //监听按钮，点击之后就会进行4步骤
