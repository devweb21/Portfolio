const txtAnim = document.getElementById('txtAnim');
new Typewriter(txtAnim,{
    deleteSpeed:5
})

.typeString('Je Suis CHARLES Olive, ')
.pauseFor(800)
.typeString('<strong>Développeur Web')
.start();

const txt = document.getElementById('txt');
new Typewriter(txt,{
    // loop: true,
    deleteSpeed: 30
})
.changeDelay(20)
.typeString('<strong> ')
.pauseFor(300)
.typeString('<strong> </strong> !')
.pause(1000)
.deleteChars(13)
.typeString('<span style="color: #ffff;">ANGULAR /NODEJS /BOOTSTRAP / GIT /GITHUB /HTML / CSS / REACT / PHP / MySQL / JavaScript</span> !')
// .pauseFor(1000)
// .deleteChars(5)
// .typeString('<span style="color: midnightblue;"> </span> !')
// .pauseFor(1000)
// .deleteChars(7)
// .typeString('<span style="color: #ae39ff;">  / </span> !')
// .pauseFor(1000)
// .deleteChars(5)
// .typeString('<span style="color: #ff6910;"> </span> !')


.start();
