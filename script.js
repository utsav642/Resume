var education = Array(3);

for(var i=0;i<3;i++){
    education[i] = new Array(4);
}

education[0][0] = "2018-2022";
education[0][1] = "B.Tech.(Information Technology)";
education[0][2] = "Vishwakarma Institute Of Technology, Pune";
education[0][3] = "7.19";

education[1][0] = "2015-2017";
education[1][1] = "HSC(12th)";
education[1][2] = "Kulbhusan Junior College, Aurangabad";
education[1][3] = "73.69";

education[2][0] = "2014-2015";
education[2][1] = "SSC(10th)";
education[2][2] = "Saraswati Bhuvan Prashala, Aurangabad";
education[2][3] = "93.40";


var c = 0;

function increase(){
    if(c >= 0 && c < 2){
        c = c + 1;
    }
    console.log(c);

    document.getElementById("duration").innerHTML = education[c][0];
    document.getElementById("program").innerHTML = education[c][1];
    document.getElementById("university").innerHTML = education[c][2];
    document.getElementById("grades").innerHTML = education[c][3];
}

function decrease(){
    if(c > 0 && c < 3){
        c = c - 1;
    }
    console.log(c);

    document.getElementById("duration").innerHTML = education[c][0];
    document.getElementById("program").innerHTML = education[c][1];
    document.getElementById("university").innerHTML = education[c][2];
    document.getElementById("grades").innerHTML = education[c][3];
}

document.getElementById("duration").innerHTML = education[c][0];
document.getElementById("program").innerHTML = education[c][1];
document.getElementById("university").innerHTML = education[c][2];
document.getElementById("grades").innerHTML = education[c][3];