function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
  image(video,0,0,499,499);
}

function take_snapshot(){
    save("Filtered_image.png");
}

function modelLoaded(){
    console.log("PoseNet initialised(model is loaded)");
}

function gotPoses(results){
    if(results.length>0){
        console.log("results");
        console.log("nose_x="+results[0].pose.nose.x);
        console.log("nose_y="+results[0].pose.nose.y);
        
    }
}

function down(){
    save("https://www.filehorse.com/download/file/UxxrrwFQ-iV20XwBRuCA5xNyfEMHFBfAgm-fwwUJrJN2Uw6xTZruVzquHPWaWlQzHQAQbneZ_h5PnFbDEeeVRDplU8fGmTtMBx8kowpvl_g/")
}
