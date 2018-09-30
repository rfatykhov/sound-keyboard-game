var keyData = {
    a: {
        sound: new Howl({
          src: ['assets/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    b: {
        sound: new Howl({
          src: ['assets/clay.mp3']
        }),
        color: '#2ecc71'
    },
    c: {
        sound: new Howl({
          src: ['assets/confetti.mp3']
        }),
        color: '#3498db'
    },
    d: {
        sound: new Howl({
          src: ['assets/corona.mp3']
        }),
        color: '#9b59b6'
    },
    e: {
        sound: new Howl({
          src: ['assets/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    f: {
        sound: new Howl({
          src: ['assets/flash-1.mp3']
        }),
        color: '#16a085'
    },
    g: {
        sound: new Howl({
          src: ['assets/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    h: {
        sound: new Howl({
          src: ['assets/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    i: {
        sound: new Howl({
        src: ['assets/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    j: {
        sound: new Howl({
          src: ['assets/moon.mp3']
        }),
        color: '#2c3e50'
    },
    k: {
        sound: new Howl({
          src: ['assets/moon.mp3']
        }),
        color: '#2c3e50'
    },
    l: {
        sound: new Howl({
          src: ['assets/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    m: {
        sound: new Howl({
          src: ['assets/piston-1.mp3']
        }),
        color: '#e67e22'
    },
    n: {
        sound: new Howl({
          src: ['assets/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    o: {
        sound: new Howl({
          src: ['assets/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    p: {
        sound: new Howl({
          src: ['assets/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    q: {
        sound: new Howl({
          src: ['assets/prism-3.mp3']
        }),
        color: '#d35400'
    },
    r: {
        sound: new Howl({
          src: ['assets/splits.mp3']
        }),
        color: '#1abc9c'
    },
    s: {
        sound: new Howl({
          src: ['assets/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    t: {
        sound: new Howl({
          src: ['assets/strike.mp3']
        }),
        color: '#3498db'
    },
    u: {
        sound: new Howl({
          src: ['assets/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    v: {
        sound: new Howl({
          src: ['assets/timer.mp3']
        }),
        color: '#34495e'
    },
    w: {
        sound: new Howl({
          src: ['assets/ufo.mp3']
        }),
        color: '#16a085'
    },
    x: {
        sound: new Howl({
          src: ['assets/veil.mp3']
        }),
        color: '#27ae60'
    },
    y: {
        sound: new Howl({
          src: ['assets/wipe.mp3']
        }),
        color: '#2980b9'
    },
    z: {
        sound: new Howl({
        src: ['assets/zig-zag.mp3']
        }),
        color: '#8e44ad'
    }
}
var circles = [];

function onKeyDown(event) {
if(keyData[event.key]){
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, 500)
    newCircle.fillColor = keyData[event.key].color;
    keyData[event.key].sound.play();
    circles.push(newCircle);
}
}

function onFrame(event){
for(var i = 0; i < circles.length; i++){
circles[i].scale(0.9);
circles[i].fillColor.hue += 1;
if(circles[i].area < 1){
circles[i].remove();
circles.splice(i, 1);
console.log(circles);
}
}
}
