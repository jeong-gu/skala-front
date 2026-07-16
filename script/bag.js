function showMyBag() {
    var itemCandidates = [
        "노트북",
        "충전기",
        "필기구",
        "텀블러",
        "이어폰",
        "교재",
        "간식",
        "보조배터리"
    ];
    var myBag = [];
    var bagMessage = "🎒 [내 가방 보기]\n\n✨ 오늘의 가방 속 물품\n";

    for (var i = 0; i < itemCandidates.length; i++) {
        if (Math.random() >= 0.45) {
            myBag.push({
                name: itemCandidates[i],
                count: Math.floor(Math.random() * 3) + 1
            });
        }
    }

    if (myBag.length === 0) {
        myBag.push({
            name: "빈 가방",
            count: 1
        });
    }

    for (var j = 0; j < myBag.length; j++) {
        bagMessage += "📌 " + myBag[j].name + ": " + myBag[j].count + "개\n";
    }

    bagMessage += "\n🔄 실행할 때마다 물품과 수량이 새로 정해집니다.";
    alert(bagMessage);
}
