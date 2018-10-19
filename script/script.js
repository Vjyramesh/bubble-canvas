var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 7;
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth - 2;
    canvas.height = window.innerHeight - 7;
});


let circleList = [];
const color = ['red', 'blue', 'green', 'yellow', 'orange', 'gray', 'black','violet']
for(let i =0; i<500; i++) {
    let radius = 5
    let x = Math.random() * (window.innerWidth - radius* 2) + radius;
    let y = Math.random() * (window.innerHeight - radius* 2) + radius;
    let xSpeed =Math.random() * 5;
    let ySpeed = Math.random() * 5;
    circleList.push(new Circle(x, y, radius, xSpeed, ySpeed))
}


function Circle(x, y, radius, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.color = color[Math.floor(Math.random()*color.length)];
    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.strokeStyle=this.color;
        c.fillStyle = this.color
        c.fill()

        c.stroke();
    }

    this.update = function() {
              
        if(this.x + this.radius > innerWidth || this.x-this.radius < 0) {
            this.xSpeed = -this.xSpeed;
        }        
        if(this.y + this.radius > innerHeight || this.y-this.radius < 0) {
            this.ySpeed = -this.ySpeed;
        }
        this.x +=this.xSpeed;
        this.y +=this.ySpeed;
        if(mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 100 && mouse.y - this.y > -100) {
            if(this.radius < 30) {
                this.radius++;
            }
        } else if(this.radius > 5) {
            this.radius--;
        }
        this.draw();
    }
}

function animate() {
    requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        for(let i = 0; i< circleList.length; i++) {
            circleList[i].update();

        }
}

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})
animate();



var obj = {
    id:'vijay'
}

console.log(obj)
