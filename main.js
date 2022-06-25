//https://teachablemachine.withgoogle.com/models/CwvvnyYLn/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier =ml5.soundClassifier('//https://teachablemachine.withgoogle.com/models/CwvvnyYLn/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);

    }



 else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) +1;
    random_number_g = Math.floor(Math.random() * 255) +1;
    random_number_b = Math.floor(Math.random() * 255) +1;


document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(4)+" %";
document.getElementById("result_label").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img =document.getElementById('cat');
img1 = document.getElementById('dog');
img2 = document.getElementById('lion');
img3 = document.getElementById('cow');

if (results[0].label == "cats"){
    img.src ='cat gif image.gif';
    img1.src ='cow image.jpg';
    img2.src ='dog image.jpg';
    img3.src ='lion image.jpg';
} else if (results[0].label == "cows"){
    
    img.src ='cat image.jpg';
    img1.src ='cow gif image.gif';
    img2.src ='dog image.jpg';
    img3.src ='lion image.jpg';

}
else if (results[0].label == "dogs"){
    
    img.src ='cat image.jpg';
    img1.src ='cow image.jpg';
    img2.src ='dog gif image.gif';
    img3.src ='lion image.jpg';

}
    else if (results[0].label == "lions"){
    
        img.src ='cat image.jpg';
        img1.src ='cow image.jpg';
        img2.src ='dog image.jpg';
        img3.src ='lion gif image.gif';



    
}
}
}














