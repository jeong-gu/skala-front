function startRockPaperScissors() {
    var choices = ["가위", "바위", "보"];
    var choiceEmojis = {
        가위: "✌️",
        바위: "✊",
        보: "✋"
    };
    var userChoice;

    while (true) {
        var userInput = prompt("가위, 바위, 보 중 하나를 입력하세요.");

        if (userInput === null) {
            alert("🎮 [가위바위보 게임]\n\n게임을 종료합니다.");
            return;
        }

        userChoice = userInput.trim();

        if (choices.includes(userChoice)) {
            break;
        }

        alert("🎮 [가위바위보 게임]\n\n⚠️ 가위, 바위, 보 중 하나를 정확히 입력해 주세요.");
    }

    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    var result;
    var resultEmoji;

    if (userChoice === computerChoice) {
        result = "무승부입니다!";
        resultEmoji = "🤝";
    } else if (
        (userChoice === "가위" && computerChoice === "보") ||
        (userChoice === "바위" && computerChoice === "가위") ||
        (userChoice === "보" && computerChoice === "바위")
    ) {
        result = "사용자가 이겼습니다!";
        resultEmoji = "🎉";
    } else {
        result = "컴퓨터가 이겼습니다!";
        resultEmoji = "🤖";
    }

    alert(
        "🎮 [가위바위보 게임]\n\n" +
        "🙋 사용자: " + choiceEmojis[userChoice] + " " + userChoice + "\n" +
        "💻 컴퓨터: " + choiceEmojis[computerChoice] + " " + computerChoice + "\n\n" +
        resultEmoji + " 결과: " + result
    );
}
