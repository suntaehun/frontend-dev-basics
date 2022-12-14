/*
URL 다루기
*/

var url = 'http://www.mysite.com/user?name=둘리&no=10&email=dooly@naver.com';

// 1. escape: URL 전부를 encoding, 사용(X), deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURI: URL중 파라미터만 encoding하기 때문에 URL 전체를 encoding 해야하는 경우, 사용(O)
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent: 값만 encoding해야 하는 경우, 사용(O)
// 잘 못 사용한 경우
var url4 = encodeURIComponent(url);
console.log(url4);

// 만들어야할 URL
// http://www.mysite.com/user?name=둘리&no=10&email=dooly@naver.com
var url = 'http://www.mysite.com/user';
var formData = {
    no: 10,
    name: '둘리',
    email: 'dooly@naver.com'
};

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }
    return qs.join("&");
}
// 사용 예 1
var url5 = url + "?" + toQueryString(formData);
console.log(url5);

// 사용 예 2:jquery
// jQuery.ajax({
//     url: "",
//     type: "post",
//     data: toQueryString(formData)
// });