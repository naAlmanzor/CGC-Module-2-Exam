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
	const geometry = new THREE.BoxGeometry(100, 20.30, 4); 
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
leftWall.position.x = -47.9;
leftWall.position.y = 3.6;
scene.add(leftWall);

// Floor

const planegeometry = new THREE.PlaneGeometry( 100, 100, 1, 1 );
const planematerial = new THREE.MeshLambertMaterial( { color: 0x8080 } );
const floor = new THREE.Mesh( planegeometry, planematerial );
floor.material.side = THREE.DoubleSide;
floor.rotation.x = 11;
floor.position.y= -6.5;
scene.add( floor ); 

// ---------------- Work Place ---------------- //

// Chair
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

// workSpace
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

workSpace.rotation.y = -17.29;
workSpace.position.x = -40;
workSpace.position.y = -2;
workSpace.position.z = 15;
scene.add(workSpace);
  
// ---------------- Cabinets ---------------- //

function createCabinetHandle() {
	const geometry = new THREE.BoxBufferGeometry(1, 1, 0.5);
	const material = new THREE.MeshLambertMaterial({color:0xffffff});
	const cabinetHandle = new THREE.Mesh(geometry, material);
	cabinetHandle.position.z = 4;
	return cabinetHandle;
}

function createCabinet() {
	const cabinet = new THREE.Group;

	const cabinetBody = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 20, 6),
		new THREE.MeshLambertMaterial({color:0x293042})
	);
	cabinet.add(cabinetBody);

	const divider = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.4, 20, 0),
		new THREE.MeshLambertMaterial({color:0x1A1E2A})
	);
	divider.position.x = -0;
	divider.position.z = 3.1;
	cabinet.add(divider);

	const leftHandle = createCabinetHandle();
	leftHandle.position.x = 2;
	cabinet.add(leftHandle);

	const rightHandle = createCabinetHandle();
	rightHandle.position.x = -2;
	cabinet.add(rightHandle);

	return cabinet;
};

const rightCabinet = createCabinet();
rightCabinet.position.x = 40;
rightCabinet.position.y = 2;
rightCabinet.position.z = -45;

const leftCabinet = createCabinet();
// leftCabinet.rotation.y = -17.29;
leftCabinet.position.x = 20;
leftCabinet.position.y = 2;
leftCabinet.position.z = -45;

scene.add(rightCabinet);
scene.add(leftCabinet);


// ---------------- Lamp ---------------- //

function createLampStand (){
	const lampStand = new THREE.Group();

	const lampStandCylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( 1, 2, 2, 30 ),
		new THREE.MeshBasicMaterial( {color: 0x1A1E2A} )
	);

	lampStandCylinder.position.y = -6;
	lampStand.add(lampStandCylinder)

	const lampStick = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.2, 6),
		new THREE.MeshLambertMaterial({color:0x1A1E2A})
	);

	lampStick.position.y = -2;
	lampStand.add(lampStick)

	return lampStand;
}

function createLampCover(){
	const geometry = new THREE.CylinderGeometry( 1.5, 2, 4, 30 );
	const material = new THREE.MeshToonMaterial( {color: 0xF8E972} );
	const lampCover = new THREE.Mesh( geometry, material );


	lampCover.position.y = 4;
	return lampCover;
};

function createLamp(){
	const lamp = new THREE.Group();

	const lampStand = createLampStand();
	lamp.add(lampStand);

	const lampCover = createLampCover();
	lamp.add(lampCover);

	return lamp;
}

const lamp = createLamp();
lamp.position.x = -43;
lamp.position.z = 30;
scene.add(lamp);

// ---------------- bed ---------------- //
function createBed(){
	const bed = new THREE.Group();

	const headBoard = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 12),
		new THREE.MeshLambertMaterial({ color: 0x664033 })
	);
	bed.add(headBoard);
	headBoard.position.z = -10;

	const bedFrame = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 1, 21),
		new THREE.MeshLambertMaterial({ color: 0x664033 })
	);
	bedFrame.position.y = -3.6;
	bedFrame.position.z = 0;
	bed.add(bedFrame);

	const matress = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 4, 5),
		new THREE.MeshLambertMaterial({ color: 0xffffff })
	);
	bed.add(matress);
	matress.position.y = -1;
	matress.position.z = -7;

	const blanket = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 4, 15),
		new THREE.MeshLambertMaterial({ color: 0xfC83243 })
	);
	bed.add(blanket);
	blanket.position.y = -1;
	blanket.position.z = 3;

	const footBoard = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 10),
		new THREE.MeshLambertMaterial({ color: 0x664033 })
	);
	bed.add(footBoard);
	footBoard.position.y = -1;
	footBoard.position.z = 11;
	
	return bed
}

const bed = createBed();
bed.scale.x = 1.2;
bed.rotation.y = -17.29;
bed.position.x = -35;
bed.position.y = -1;
bed.position.z = 40;
scene.add(bed);


// ---------------- Window ---------------- //

function createGlass(){
	const glass = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 20),
		new THREE.MeshLambertMaterial({ color: 0xffffff })
	);

	glass.position.z = -0.6;

	return glass;
};

function createWindowFrame(){

}


function createWindow(){
	const window = new THREE.Group();

	const curtainRight = new THREE.Mesh(
		new THREE.BoxBufferGeometry(4, 20),
		new THREE.MeshLambertMaterial({ color: 0xA94C67 })
	);
	window.add(curtainRight);
	curtainRight.position.x =5.5;
	curtainRight.position.z =-0.5;

	const curtainLeft = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 20),
		new THREE.MeshLambertMaterial({ color: 0xA94C67 })
	);
	window.add(curtainLeft);
	curtainLeft.position.x = -6.5;
	curtainLeft.position.z = -0.5;

	const frameTop = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 0.8),
		new THREE.MeshLambertMaterial({color:0x293042})
	);
	window.add(frameTop);
	frameTop.position.y = 10;
	frameTop.position.z = -0.5;

	const frameDivider = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.5, 20),
		new THREE.MeshLambertMaterial({color:0x293042})
	);
	window.add(frameDivider);
	frameDivider.position.x = -0.5;
	frameDivider.position.z = -0.5;

	const glass = createGlass();
	window.add(glass);

	return window;
};

const fullWindow = createWindow();
fullWindow.rotation.y = -17.29;
fullWindow.position.x = -45.6;
fullWindow.position.z = -10;
scene.add(fullWindow);

// ---------------- Stairs ---------------- //

function createStairs(){

	const stairs = new THREE.Group();
	const stairsBase = new THREE.Mesh(
		new THREE.BoxBufferGeometry(20, 1, 10),
		new THREE.MeshLambertMaterial({ color: 0x000000} )
	);
	stairsBase.position.x= -36;
	stairsBase.position.y= -6.6;
	stairsBase.position.z= -43;
	stairs.add(stairsBase);

	const step1 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(4, 1, 10.5),
		new THREE.MeshLambertMaterial({ color: 0x414D6C})
	);
	step1.position.x= -26;
	step1.position.y= -6.6;
	step1.position.z= -43;
	stairs.add(step1);

	const step2 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(4, 1, 8),
		new THREE.MeshLambertMaterial({ color: 0x363E54})
	);
	step2.position.x= -30;
	step2.position.y= -6.5;
	step2.position.z= -41.7;
	stairs.add(step2);

	const step3 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(4, 1, 6),
		new THREE.MeshLambertMaterial({ color: 0x232C43})
	);
	step3.position.x= -34;
	step3.position.y= -6.5;
	step3.position.z= -40.7;
	stairs.add(step3);

	const border = new THREE.Mesh(
		new THREE.BoxBufferGeometry(25, 4, 2),
		new THREE.MeshLambertMaterial({color:0x293042})
	);
	border.position.x = -36.3;
	border.position.y = -5;
	border.position.z = -38;
	stairs.add(border);

	const rag = new THREE.Mesh(
		new THREE.BoxBufferGeometry(6, 1, 12),
		new THREE.MeshLambertMaterial({ color: 0x95323D})
	);
	rag.position.x= -20.1;
	rag.position.y= -6.6;
	rag.position.z= -42;
	stairs.add(rag);

	return stairs; 
}

const stairs = createStairs();
scene.add(stairs);

// ---------------- Table ---------------- //

// Table

// Bowl


renderer.render(scene, camera);