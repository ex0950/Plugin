function getPosition() {
    //判断浏览器是否支持HTML5 定位
    if (window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successfulCallback, failCallback)
    } else {
        alert("你的浏览器不能使用HTML5定位")
    }
}
function successfulCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(position)
    alert("成功获取位置信息");
    alert("纬度：latitude" + latitude + "纬度：latitude" + longitude);

}
function failCallback(error) {
    var text;
    switch (error.code) {

        case error.PERMISSION_DENIED:

            text = "用户拒绝对获取地理位置的请求。";

            break;
        case error.POSITION_UNAVAILABLE:

            text = "位置信息是不可用的。";

            break;

        case error.TIMEOUT:

            text = "请求用户地理位置超时。";

            break;

        case error.UNKNOWN_ERROR:

            text = "未知错误。";

            break;
    }
    alert(text)
}