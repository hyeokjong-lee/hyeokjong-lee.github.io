var elluce = new naver.maps.LatLng(37.590965, 127.146601)
var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.590965, 127.146601),
    zoom: 17,
    minZoom: 8, //지도의 최소 줌 레벨
    zoomControl: true, //줌 컨트롤의 표시 여부
    zoomControlOptions: { //줌 컨트롤의 옵션
    position: naver.maps.Position.TOP_RIGHT
}});
var marker = new naver.maps.Marker({
    icon: {
        url: "http://static.naver.net/maps/mantle/2x/marker-default.png",
        scaledSize: new naver.maps.Size(40, 60),
        origin: new naver.maps.Point(0, 0),
    },
    position: elluce,
    map: map
});

/*
const contentString = [
    '<div class="iw_inner" style="padding:5px; margin: 5px 0px 5px 0px; width: 150px; height: 45px; text-align: center; ">',
    '   <p style="foint-size: 2rem; margin: 0;">어러운드보컬 구리본점</p>',
    '   <p style="font-size: 0.8rem; margin: 0;">경기 구리시 토평동 965 우신빌딩 5층</p>',
    '</div>'
].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString,
    anchorSize: new naver.maps.Size(3, 30),
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    disableAnchor: true,
    textAlign: "center",
    //margin: "auto",
    //maxWidth: "10000",

    pixelOffset: new naver.maps.Point(0, 140)
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});

infowindow.open(map, marker);
*/