function startUpDownGame() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var tryCount = 0;

    while (true) {
        var userInput = prompt("1부터 50 사이의 숫자를 입력하세요.");

        if (userInput === null) {
            alert("🎮 [Up-Down 게임]\n\n게임을 종료합니다.");
            return;
        }

        var userNum = Number(userInput);

        if (!Number.isInteger(userNum) || userNum < 1 || userNum > 50) {
            alert("🎮 [Up-Down 게임]\n\n⚠️ 1부터 50 사이의 정수를 입력해 주세요.");
            continue;
        }

        tryCount++;

        if (userNum > computerNum) {
            alert("🎮 [Up-Down 게임]\n\n🔢 입력한 숫자: " + userNum + "\n⬇️ 힌트: Down!");
        } else if (userNum < computerNum) {
            alert("🎮 [Up-Down 게임]\n\n🔢 입력한 숫자: " + userNum + "\n⬆️ 힌트: Up!");
        } else {
            alert("🎮 [Up-Down 게임]\n\n🎯 정답: " + computerNum + "\n🔁 시도 횟수: " + tryCount + "번\n\n🎉 축하합니다! " + tryCount + "번 만에 맞추셨습니다.");
            break;
        }
    }
}
