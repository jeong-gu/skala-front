function calculateGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;

    for (var i = 0; i < subjects.length; i++) {
        var score;

        while (true) {
            var input = prompt(subjects[i] + " 점수를 입력하세요.");

            if (input === null) {
                alert("📊 [성적 계산기]\n\n성적 계산을 종료합니다.");
                return;
            }

            score = Number(input);

            if (!Number.isNaN(score) && score >= 0 && score <= 100) {
                break;
            }

            alert("📊 [성적 계산기]\n\n⚠️ 0점부터 100점 사이의 숫자를 입력해 주세요.");
        }

        total += score;
    }

    var average = total / subjects.length;
    var result = average >= 60 ? "합격" : "불합격";
    var grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert("📊 [성적 계산기]\n\n🧮 총점: " + total + "점\n📈 평균: " + average.toFixed(1) + "점\n✅ 결과: " + result + "입니다.\n🏅 등급: " + grade);
}
