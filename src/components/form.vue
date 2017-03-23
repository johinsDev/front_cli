<template>

    <form>
        <div class="form-group">
            <label for="name">Nombres</label>
            <input type="text" class="form-control" placeholder="Nombres" v-model="buyer[numTicket - 1].name">
        </div>
        <div class="form-group">
            <label for="lastname">Apellidos</label>
            <input type="text" class="form-control" placeholder="Apellidos" v-model="buyer[numTicket - 1].last_name">
        </div>
        <div class="form-group">
            <label for="document">Email</label>
            <input type="text" class="form-control" placeholder="email" v-model="buyer[numTicket - 1].email">
        </div>
        <div class="form-group">
            <label for="email">Documento de identidad</label>
            <input type="email" class="form-control" placeholder="Documento de identidad" v-model="buyer[numTicket - 1].cc">
        </div>


        <div class="form-group" v-show="ticket.category == 'estudiantes'">
            <p class="help-block">Carné Estudiantil</p>
            <label for="exampleInputFile">File input</label>
            <input class="btn bnt-primary" type="file" id="exampleInputFile">

        </div>

        <button v-show="ticket.category == 'estudiantes'" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal"><i class="fa fa-camera" aria-hidden="true"></i>Tomar foto</button>


        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <!--generamos el cuadro que renderiza el video-->
                        <div class="camera">
                            <video id="video"></video>

                        </div>
                        <!--el canvas es donde sera ubicada la foto tomada-->
                        <canvas id="canvas">
                        </canvas>
                      <div class="output">
                          <a download>
                            <img id="photo" alt="The screen capture will appear in this box.">
                            </a>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times" aria-hidden="true"></i></button>
                        <button class="btn btn-primary" id="startbutton"><i class="fa fa-camera" aria-hidden="true"></i></button>
                    </div>
                </div>

            </div>
        </div>

    </form>
</template>

<script>
(function() {
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.

  var width = 320;    // We will scale the photo width to this
  var height = 0;     // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  var streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  var video = null;
  var canvas = null;
  var photo = null;
  var startbutton = null;

  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');

    navigator.getMedia = ( navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

    navigator.getMedia(
      {
        video: true,
        audio: false
      },
      function(stream) {
          if (navigator.mozGetUserMedia) {
        video.mozSrcObject = stream;
      } else {
          video.srcObject = stream;
      }
          video.onloadedmetadata = function(e){
        video.play();
            
          }
      },
      function(err) {
        console.log("An error occured! " + err);
      }
    );

    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);
      
        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.
      
        if (isNaN(height)) {
          height = width / (4/3);
        }
      
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    startbutton.addEventListener('click', function(ev){
      takepicture();
      ev.preventDefault();
    }, false);
    
    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }
  
  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
    
      var data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
      var url = photo.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
      window.open(url); // Tomala prro
    } else {
      clearphoto();
    }
  }
  


  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener('load', startup, false);
})();
    export default {
        props: ['buyer', 'numTicket', 'ticket'],
    }

</script>

<style lang="">
    #video {
margin: auto;
  width:450px;
  height:240px;
}

#photo {
margin-left:65px;
  width:320px;
  height:240px;
}

#canvas {
  display:none;
}

.camera {
  width: 340px;
  display:inline-block;
}
.output {
  width: 500px;
  display:inline-block;
  background: none;
}

</style>