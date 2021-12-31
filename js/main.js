const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0, 1000 );

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera(
  cameraWidth / -2, // left
  cameraWidth / 2, // right
  cameraHeight / 2, // top
  cameraHeight / -2, // bottom
  0, // near plane
  1000 // far plane
);
camera.position.set(200, 200, 200);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight); 


// scene.background = new THREE.Color(0xffffff);
renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.render( scene, camera );

document.body.appendChild( renderer.domElement );

// ---------------- Insert Code Here ---------------- //     



// ---------------- Room Foundation ---------------- //


function createWall(){
	const geometry = new THREE.BoxGeometry(100, 20, 4); 
	const material = new THREE.MeshLambertMaterial({color: 0x8080});
	const wall = new THREE.Mesh( geometry, material );
	return wall;
}

// Left wall
const rightWall = createWall();
rightWall.position.y = 3.6;
rightWall.position.z = -50;
scene.add(rightWall);

//Right Wall

const leftWall = createWall();
leftWall.rotation.y = 17.28;
leftWall.position.x = -50;
leftWall.position.y = 3.3;
scene.add(leftWall);

// Floor

const planegeometry = new THREE.PlaneGeometry( 100, 100, 1, 1 );
const planematerial = new THREE.MeshLambertMaterial( { color: 0x8080 } );
const floor = new THREE.Mesh( planegeometry, planematerial );
floor.material.side = THREE.DoubleSide;
floor.rotation.x = 11;
floor.position.y= -6.5;
scene.add( floor ); 

// ---------------- Furnitures and Appliances ---------------- //

function createChair(){

	const chair = new THREE.Group();

	const chairBack = new THREE.Mesh(
		new THREE.BoxBufferGeometry (10, 20, 2),
		new THREE.MeshLambertMaterial({	color: 0x293042	})
	); 
	chairBack.position.z = 1;

	const chairSeat = new THREE.Mesh(
		new THREE.BoxBufferGeometry (10, 4, 4),
		new THREE.MeshLambertMaterial({	color: 0x293042	})
	);
	chairSeat.position.y= -2.5;

	const chairFront = new THREE.Mesh(
		new THREE.BoxBufferGeometry (7.5, 7.5, 2),
		new THREE.MeshLambertMaterial({	color: 0x293042	})
	);
	chairFront.position.z = -3.6;
	chairFront.position.y= -5.5;

	chair.add(chairBack);
	chair.add(chairSeat);
	chair.add(chairFront);

	return chair;
}

// ---------------- Room ---------------- //

function createWorkSpace() {
	const workSpace = new THREE.Group();
  
	const monitor = new THREE.Mesh(
	  new THREE.BoxBufferGeometry(20, 15, 2),
	  new THREE.MeshLambertMaterial({ color: 0x78b14b })
	);
	monitor.position.y = 12;
	monitor.position.z = -2;
	workSpace.add(monitor);
  
	const desk = new THREE.Mesh(
	  new THREE.BoxBufferGeometry(40, 12, 8),
	  new THREE.MeshLambertMaterial({ color: 0xffffff })
	);
	workSpace.add(desk);

	const chair = createChair();
	chair.position.x = -2;
	chair.position.z = 10;
	workSpace.add(chair);
	
	return workSpace;
  }
  
const workSpace = createWorkSpace();
workSpace.scale.x = 0.5;
workSpace.scale.y = 0.5;

workSpace.position.x = 20;
workSpace.position.z = -40;
scene.add(workSpace);
  
renderer.render(scene, camera);

// ---------------- Cabinets ---------------- //

// Left Cabinet

// Right Cabinet

// ---------------- Bed Sid ---------------- //

// Lanp Stand

// Lamp Cover

// Bed

// Bed Sheet


// ---------------- Window ---------------- //

// Curtain 1

// Curtain 2

// Window

// ---------------- Table ---------------- //

// Table

// Bowl

//  ---------------- Lights ---------------- //

// Lightbulb





camera.position.z = 10;

// function animate() {
// 	requestAnimationFrame( animate );
// }
// animate();