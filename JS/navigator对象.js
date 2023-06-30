// 获取浏览器偏好语言(该值是浏览器设置里设置的偏好语言)，可以根据这个作为国际化的一种实现手段
const browserLang = navigator.language;

// 使用操作系统的剪切板进行读或者写
const clipboard = navigator.clipboard;
// 读剪切板的内容需要获得 clipboard-read这个权限，一般默认是没有这个权限的，查询方法是：
navigator.permissions.query({ name: "clipboard-read" }).then((res) => {
  // granted表示有权限
  // prompt表示没有权限
  console.log("clipboard-read的权限是：", res);
  // 如果没有权限并且执行了从剪切板读的操作，浏览器会给用户提示，让用户提供读的权限，如果用户拒绝，则操作失败
});
// 往剪切板写内容需要获得 clipboard-write这个权限，一般默认是有这个权限的
navigator.permissions.query({ name: "clipboard-write" }).then((res) => {
  // granted表示有权限
  // prompt表示用到时会询问用户是否允许
  // denied表示没有权限
  console.log("clipboard-write", res);
  // 如果没有权限并且执行了从剪切板读的操作，浏览器会给用户提示，让用户提供读的权限，如果用户拒绝，则操作失败
});
// 往剪切板读/写（注意：读/写这两个操作需要在DOM获取到焦点时才能执行，如果是在devtool控制台执行，会报DOMException）
clipboard.readText().then((text) => {
  console.log("剪切板的内容是：", text);
});
// 往剪切板读/写（注意：读/写这两个操作需要在DOM获取到焦点时才能执行，如果是在devtool控制台执行，会报DOMException）
clipboard.writeText("qpr");

// 检测浏览器是否支持cookie
const cookieEnabled = navigator.cookieEnabled;

// 获取设备的地理位置信息
const geolocation = navigator.geolocation;
// 查看当前页面地理位置的权限如何
navigator.permissions.query({ name: "geolocation" }).then((res) => {
  console.log("地理位置的权限：", res);
});
// 使用getCurrentPosition获取地理位置
// 参数1：success，获取成功后的回调
// 参数2：error，获取失败后的回调
// 参数3：options，配置查询的JS对象
//    {
//        enableHighAccuracy: 是否采用高精度的查询
//        timeout: 超时时间
//        maximumAge: 不知道什么意思
//    }
const success = (pos) => {
  var crd = pos.coords;
  console.log("Your current position is:");
  console.log("Latitude : " + crd.latitude);
  console.log("Longitude: " + crd.longitude);
  console.log("More or less " + crd.accuracy + " meters.");
};
const error = (err) => {
  console.warn("ERROR(" + err.code + "): " + err.message);
};
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
navigator.geolocation.getCurrentPosition(success, error, options);

// navigator.hardwareConcurrency: 返回机器并行线程的个数
const hardwareConcurrency = navigator.hardwareConcurrency;
