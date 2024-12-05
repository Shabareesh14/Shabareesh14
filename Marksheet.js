var Fn, Sn, Tn, Fthn, Fin, avrg;

function average() {
    Fn = Number(document.getElementById("avg").value);
    Sn = Number(document.getElementById("avg1").value);
    Tn = Number(document.getElementById("avg2").value);
    Fthn = Number(document.getElementById("avg3").value);
    Fin = Number(document.getElementById("avg4").value);

    if ((Fn >= 0 && Fn <= 100) && (Sn >= 0 && Sn <= 100) && (Tn >= 0 && Tn <= 100) && (Fthn >= 0 && Fthn <= 100) && (Fin >= 0 && Fin <= 100)) {
        avrg = (Fn + Sn + Tn + Fthn + Fin) / 5;
        document.getElementById("out").value = (Fn + Sn + Tn + Fthn + Fin) / 5;
        document.getElementById("per").value = avrg + "%";
        document.getElementById("tot").value = Fn + Sn + Tn + Fthn + Fin;
    }
    else {
        alert("Pls Enter a Valid Mark");
    }

    // if(Fn>=90 && Fn<=100){
    // document.getElementById("G1").innerText = "A";
    // }
}

function hideshow() {
    Fn = Number(document.getElementById("avg").value);
    Sn = Number(document.getElementById("avg1").value);
    Tn = Number(document.getElementById("avg2").value);
    Fthn = Number(document.getElementById("avg3").value);
    Fin = Number(document.getElementById("avg4").value);
    avrg = (Fn + Sn + Tn + Fthn + Fin) / 5;
    const Tamilmark = (document.getElementById("T1").innerText = Fn);
    document.getElementById("TamilGrade").innerText = findGrade(Fn);

    const Englishmark = (document.getElementById("E1").innerText = Sn);
    document.getElementById("EnglishGrade").innerText = findGrade(Sn);

    const Mathsmark = (document.getElementById("M1").innerText = Tn);
    document.getElementById("MathsGrade").innerText = findGrade(Tn);

    const Sciencemark = (document.getElementById("S1").innerText = Fthn);
    document.getElementById("ScienceGrade").innerText = findGrade(Fthn);

    const SocailSciencemark = (document.getElementById("SS1").innerText = Fin);
    document.getElementById("SocialGrade").innerText = findGrade(Fin);

    const Totalmark = (document.getElementById("T2").innerText =
        Fn + Sn + Tn + Fthn + Fin);
    document.getElementById("TotalGrade").innerText = totalGrade(Fn + Sn + Tn + Fthn + Fin);

    const Averagemark = (document.getElementById("A1").innerText = avrg);
    const Percentage = (document.getElementById("P1").innerText = avrg + "%");


    // const show = document.getElementById("container");
    // if (show.style.display === "none") {
    //     show.style.display = "block";
    // } else {
    //     show.style.display = "none";
    // }
}

function findGrade(mark) {

    let grade;
    if (mark >= 100) {
        grade = "A+";
    } else if (mark >= 90) {
        grade = "A";
    }
    else if (mark >= 80) {
        grade = "B+";
    }
    else if (mark >= 70) {
        grade = "B";
    }
    else if (mark >= 60) {
        grade = "C";
    }
    else if (mark >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    return grade;

}

function totalGrade(mark) {

    let grade;
    if (mark >= 500) {
        grade = "Excellent";
    } else if (mark >= 480) {
        grade = "Perfect";
    }
    else if (mark >= 450) {
        grade = "Nice";
    }
    else if (mark >= 400) {
        grade = "Good job";
    }
    else if (mark >= 350) {
        grade = "Good";
    }
    else if (mark >= 300) {
        grade = "Well Try";
    }
    else {
        grade = "Better luck next time";
    }

    return grade;

}

