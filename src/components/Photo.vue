<template>
<section>
    <button v-show="ticket.category == 'estudiantes'" type="button" @click="camara" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Tomar foto <i class="fa fa-address-card-o" aria-hidden="true"></i> </button>
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
    </section> 
</template>
<script>
  export default{
    
    props: ['ticket'],
    data(){
      return{
        
      }
    }, methods:{
        startup: function() {
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
    
    clearphoto;
  },
//capturamos el fotograma del video y lo descargamos
takepicture: function() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height); 
      var data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
      var url = photo.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');//descargar img
      window.open(url); 
    } else {
      clearphoto();
    }
  },
  clearphoto: function() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);
    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  },
   camara: function() {
  var width = 320;   
  var height = 0;    
  var streaming = false;
  var video = null;
  var canvas = null;
  var photo = null;
  var startbutton = null;
  startup();
  takepicture();
  window.addEventListener('load', startup, false);
}

    }
  }
//generamos funcion startup, para capturar el video


//limpiamos el canvas
 
  
 
</script>

<style>
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