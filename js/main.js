const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0xffffff);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// ---------------- Insert Code Here ---------------- //     

const geometry = new THREE.BoxGeometry(10, 8, 5); 
const material = new THREE.MeshBasicMaterial({color: 0x8080});


const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.scale.x = 2;
cube.scale.y = 0.8;

cube.position.x = -18.5;
cube.position.y = 0;
cube.position.z = 1.5;

const cube2= new THREE.Mesh( geometry, material );
scene.add( cube2 );
cube2.scale.x = 2;
cube2.scale.y = 0.8;

cube2.position.x = 20;
cube2.position.y = 0;
cube2.position.z = 1.5;

const cube3= new THREE.Mesh( geometry, material );
scene.add( cube3 );
cube3.scale.x = 5;
cube3.scale.y = 1.5;

cube3.position.x = 6;
cube3.position.y = 0;
cube3.position.z = -9.5;

// const cube4= new THREE.Mesh( geometry, material );
// scene.add( cube4 );
// // cube4.material.color.setRGB(41,48,66);
// // cube3.scale.x = 5;
// // cube3.scale.y = 1.5;

// cube4.position.x = 6;
// cube4.position.y = -10;
// cube4.position.z = -10;

const planegeometry = new THREE.PlaneGeometry( 200, 20, 1, 1 );
const planematerial = new THREE.MeshBasicMaterial( { color: 0x293042 } );
const floor = new THREE.Mesh( planegeometry, planematerial );
floor.material.side = THREE.DoubleSide;
floor.rotation.x = 8;
floor.position.y= -6.5;
scene.add( floor ); 

const planegeometry2 = new THREE.PlaneGeometry( 200, 20, 1, 1 );
const planematerial2 = new THREE.MeshBasicMaterial( { color: 0x293042 } );
const roof = new THREE.Mesh( planegeometry2, planematerial2 );
roof.material.side = THREE.DoubleSide;
roof.rotation.x = 8;
roof.position.y= 4.5;
scene.add( roof ); 

camera.position.z = 10;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();