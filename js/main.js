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

	const wall = new THREE.Mesh( 
		new THREE.BoxGeometry(100, 20.30, 4),  
		new THREE.MeshLambertMaterial({color: 0x293042}) );
	return wall;

}

function createRoom(){

	const room = new THREE.Group();

	const rightWall = createWall();
	rightWall.position.set(0, 3.6, -50)
	room.add(rightWall);

	const rightWallExtend = new THREE.Mesh(
		new THREE.BoxBufferGeometry (7, 20.30, 30),
		new THREE.MeshLambertMaterial({	color: 0x293042	})
	); 
	rightWallExtend.position.set(10, 3.6, -37);
	room.add(rightWallExtend);

	const leftWall = createWall();
	leftWall.rotation.y = 17.28;
	leftWall.position.set(-47.9, 3.6);
	room.add(leftWall);

	const tvWallRight = new THREE.Mesh(
		new THREE.BoxBufferGeometry (45, 20.30, 5),
		new THREE.MeshLambertMaterial({	color: 0x293042	})
	); 
	tvWallRight.position.set(29.9, 6);
	room.add(tvWallRight);

	const tvWallLeft = new THREE.Mesh(
		new THREE.BoxBufferGeometry (5, 20.30, 5),
		new THREE.MeshLambertMaterial({	color: 0x293042	})
	);
	tvWallLeft.position.set(-6, 6); 
	room.add(tvWallLeft);
	
	const tvWallGlass = new THREE.Mesh(
		new THREE.BoxBufferGeometry (2, 20.30, 50),
		new THREE.MeshLambertMaterial({	color: 0xffffff, opacity: 0.5, transparent: true	})
	); 
	tvWallGlass.position.set(-6, 6, 27);
	room.add(tvWallGlass);

	const tvWallCurtainRight = new THREE.Mesh(
		new THREE.BoxBufferGeometry (0.5 , 20.30, 10),
		new THREE.MeshLambertMaterial({	color: 0xA94C67	})
	)
	tvWallCurtainRight.position.set(-5, 6, 7.6); 
	room.add(tvWallCurtainRight);

	const tvWallCurtainLeft = new THREE.Mesh(
		new THREE.BoxBufferGeometry (0.5, 20.30, 19),
		new THREE.MeshLambertMaterial({	color: 0xA94C67	})
	); 
	tvWallCurtainLeft.position.set(-5, 6, 42.2);
	room.add(tvWallCurtainLeft);

	const curtainHolder= new THREE.Mesh(
		new THREE.BoxBufferGeometry (0.5, 1, 50),
		new THREE.MeshLambertMaterial({	color: 0x000000	})
	); 
	curtainHolder.position.set(-4.88, 15.66, 27.2);
	room.add(curtainHolder);

	const floor = new THREE.Mesh( 
		new THREE.PlaneGeometry( 100, 100, 1, 1 ), 
		new THREE.MeshLambertMaterial( { color: 0x4c597a } ) 
	);
	floor.material.side = THREE.DoubleSide;
	floor.rotation.x = 11;
	floor.position.y= -6.5;
	room.add(floor);

	return room;

}
const room = createRoom();
scene.add(room); 

// ---------------- Work Place ---------------- //

// Chair
function createChair(){

	const chair = new THREE.Group();

	const chairBack = new THREE.Mesh(
		new THREE.BoxBufferGeometry (10, 10, 1),
		new THREE.MeshLambertMaterial({	color: 0x293042	})
	); 
	chairBack.position.z = 1;
	chair.add(chairBack);

	const chairSeat = new THREE.Mesh(
		new THREE.BoxBufferGeometry (10, 2, 3),
		new THREE.MeshLambertMaterial({	color: 0x293042	})
	);
	chairSeat.position.y= -2.5;
	chair.add(chairSeat);

	const chairFront = new THREE.Mesh(
		new THREE.BoxBufferGeometry (2, 4, 2),
		new THREE.MeshLambertMaterial({	color: 0x293042	})
	);
	chairFront.position.set(0,0,-5.5);
	chair.add(chairFront);

	const chairWheel = new THREE.Mesh(
		new THREE.BoxBufferGeometry( 4, 2, 3),
		new THREE.MeshLambertMaterial({	color: 0x293042	})
	);
	chairWheel.position.y = -8;
	chair.add(chairWheel);

	return chair;
}

function createMonitor(){

	const monitor = new THREE.Group();
	const stand = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 10),
		new THREE.MeshLambertMaterial({ color: 0x4A4A4A })
	);
	monitor.add(stand);
	stand.position.y = -1;

	const foot = new THREE.Mesh(
		new THREE.BoxBufferGeometry(4, 2),
		new THREE.MeshLambertMaterial({ color: 0x4A4A4A })
	);
	monitor.add(foot);
	foot.position.y = -5;

	const desktop = new THREE.Mesh(
		new THREE.BoxBufferGeometry(13, 8, 1),
		new THREE.MeshLambertMaterial({ color: 0x4A4A4A })
	);
	desktop.position.set(0, 2, 1.5);
	monitor.add(desktop);

	const screen = new THREE.Mesh(
		new THREE.BoxBufferGeometry(10, 6, 1),
		new THREE.MeshLambertMaterial({ color: 0xffffff})
	);
	screen.position.set(0, 2, 1.55);
	monitor.add(screen);

	return monitor;	

}

function createBook(){
	const book = new THREE.Group;
	const cover = new THREE.Mesh(
		new THREE.BoxBufferGeometry(5, 0.5, 3),
		new THREE.MeshLambertMaterial({ color: 0x7B5884 })
	);
	book.add(cover);
	
	const detail = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 0.8, 0.3),
		new THREE.MeshLambertMaterial({ color: 0xffffff })
	);
	book.add(detail);
	detail.position.z = -0.5;

	return book;
} 

// workSpace
function createWorkSpace() {
	const workSpace = new THREE.Group();
  
	const monitor = createMonitor();
	monitor.position.set(0, 12, -2);
	workSpace.add(monitor);

	const keyboard = new THREE.Mesh(
		new THREE.BoxBufferGeometry(8, 4, 2),
		new THREE.MeshLambertMaterial({ color: 0x4A4A4A })
	  );
	workSpace.add(keyboard);
	keyboard.position.set(3, 3);
  
	const desk = new THREE.Mesh(
	  new THREE.BoxBufferGeometry(40, 4, 8),
	  new THREE.MeshLambertMaterial({ color: 0x664033 })
	);
	workSpace.add(desk);
	desk.position.y = 2;

	const deskSideLeft = new THREE.Mesh(
		new THREE.BoxBufferGeometry(10, 8, 8),
		new THREE.MeshLambertMaterial({ color: 0x664033 })
	);

	const deskSideRight = new THREE.Mesh(
		new THREE.BoxBufferGeometry(10, 8, 8),
		new THREE.MeshLambertMaterial({ color: 0x664033 })
	);
	
	workSpace.add(deskSideRight);
	deskSideRight.position.set(15, -2);
  
	const book = createBook();
	book.position.set(-10, 6, -1);
	workSpace.add(book);

	workSpace.add(deskSideLeft);
	deskSideLeft.position.set(-15, -2);

	const chair = createChair();
	chair.position.set(3, 0, 5);
	workSpace.add(chair);
	
	return workSpace;
}
  
const workSpace = createWorkSpace();
workSpace.scale.x = 0.5;
workSpace.scale.y = 0.5;

workSpace.rotation.y = -17.29;
workSpace.position.set(-40, -2, 15);
scene.add(workSpace);
  
// ---------------- Cabinet Area ---------------- //

function createCabinetHandle() {

	const cabinetHandle = new THREE.Mesh(
		new THREE.BoxBufferGeometry(1, 1, 0.5), 
		new THREE.MeshLambertMaterial({color:0xffffff}));
	cabinetHandle.position.z = 4;
	return cabinetHandle;
}

function createCabinet() {

	const cabinet = new THREE.Group;

	const cabinetBody = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 20, 6),
		new THREE.MeshLambertMaterial({color:0x664033})
	);
	cabinet.add(cabinetBody);

	const divider = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.4, 20, 0),
		new THREE.MeshLambertMaterial({color:0x000000})
	);
	divider.position.set(0, 0, 3.1)
	cabinet.add(divider);

	const leftHandle = createCabinetHandle();
	leftHandle.position.x = 2;
	cabinet.add(leftHandle);

	const rightHandle = createCabinetHandle();
	rightHandle.position.x = -2;
	cabinet.add(rightHandle);

	return cabinet;
};

function createCabinetArea(){

	const cabinetArea = new THREE.Group();
	
	const rightCabinet = createCabinet();
	rightCabinet.position.set(40, 2, -45);
	cabinetArea.add(rightCabinet);

	const leftCabinet = createCabinet();
	leftCabinet.position.set(22, 2, -45);
	cabinetArea.add(leftCabinet);

	const carpet = new THREE.Mesh(
		new THREE.BoxBufferGeometry(30, 1, 30),
		new THREE.MeshLambertMaterial({color:0x4a2c5d})
	);
	carpet.position.set(32, -6.5, -25);
	cabinetArea.add(carpet);

	return cabinetArea;
}

const cabinetArea = createCabinetArea()
scene.add(cabinetArea);

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

	const light = new THREE.PointLight( 0xff0000, 1, 100 );
	lamp.add(light);

	return lamp;
}

const lamp = createLamp();
lamp.position.set(-43, 0, 30);
scene.add(lamp);

// ---------------- Bed ---------------- //
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
	bedFrame.position.set(0, -3.6, 0);
	bed.add(bedFrame);

	const matress = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 4, 5),
		new THREE.MeshLambertMaterial({ color: 0xffffff })
	);
	matress.position.set(0 , -1, -7	);
	bed.add(matress);

	const blanket = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 4, 15),
		new THREE.MeshLambertMaterial({ color: 0x282944 })
	);
	blanket.position.set(0, -1, 3)
	bed.add(blanket);

	const footBoard = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 10),
		new THREE.MeshLambertMaterial({ color: 0x664033 })
	);
	footBoard.position.set(0, -1, 11);
	bed.add(footBoard);
	
	return bed
}

const bed = createBed();
bed.scale.x = 1.2;
bed.rotation.y = -17.29;
bed.position.set(-35, -1, 40);
scene.add(bed);


// ---------------- Window ---------------- //

function createGlass(){
	const glassWindow = new THREE.Group();
	
	const glass = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 20),
		new THREE.MeshLambertMaterial({ color: 0xffffff, opacity: 0.5, transparent: true })
	);
	glass.position.z = -0.6;
	glassWindow.add(glass);

	const light = new THREE.PointLight( 0xff0000, 1, 10 );
	glass.add(light);

	return glass;
};

function createWindow(){

	const window = new THREE.Group();

	const curtainRight = new THREE.Mesh(
		new THREE.BoxBufferGeometry(4, 20),
		new THREE.MeshLambertMaterial({ color: 0xA94C67 })
	);
	window.add(curtainRight);
	curtainRight.position.set(5.5, 0, -0.5);

	const curtainLeft = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 20),
		new THREE.MeshLambertMaterial({ color: 0xA94C67 })
	);
	curtainLeft.position.set(-6.5, 0, -0.5);
	window.add(curtainLeft);

	const frameTop = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 0.8),
		new THREE.MeshLambertMaterial({color:0x000000})
	);
	frameTop.position.set(0, 10, -0.5);
	window.add(frameTop);

	const frameDivider = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.5, 20),
		new THREE.MeshLambertMaterial({color:0x000000})
	);
	frameDivider.position.set(-0.5, -0.5);
	window.add(frameDivider);

	const glass = createGlass();
	window.add(glass);

	return window;
};

const fullWindow = createWindow();
fullWindow.rotation.y = -17.29;
fullWindow.position.set(-45.6, 0, -10);
scene.add(fullWindow);

// ---------------- Stairs ---------------- //

function createStairs(){

	const stairs = new THREE.Group();
	const stairsBase = new THREE.Mesh(
		new THREE.BoxBufferGeometry(20, 1, 10),
		new THREE.MeshLambertMaterial({ color: 0x000000} )
	);
	stairsBase.position.set(-36, -6.6, -43);
	stairs.add(stairsBase);

	const step1 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(4, 1, 10.5),
		new THREE.MeshLambertMaterial({ color: 0x414D6C})
	);
	step1.position.set(-26, -6.40, -43);
	stairs.add(step1);

	const step2 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(4, 1, 8),
		new THREE.MeshLambertMaterial({ color: 0x363E54})
	);
	step2.position.set(-30, -6.5, -41.7)
	stairs.add(step2);

	const step3 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(4, 1, 6),
		new THREE.MeshLambertMaterial({ color: 0x232C43})
	);
	step3.position.set(-34, -6.5, -40.7);
	stairs.add(step3);

	const border = new THREE.Mesh(
		new THREE.BoxBufferGeometry(25, 4, 2),
		new THREE.MeshLambertMaterial({color:0x664033})
	);
	border.position.set(-36.3, -5, -38);
	stairs.add(border);

	const carpet = new THREE.Mesh(
		new THREE.BoxBufferGeometry(6, 1, 12),
		new THREE.MeshLambertMaterial({ color: 0x4a2c5d})
	);
	carpet.position.set(-20.1, -6.6, -42);
	stairs.add(carpet);

	return stairs; 
}

const stairs = createStairs();
scene.add(stairs);

// ---------------- TV Area ---------------- //

function createCouchSides(){
	
	const couchSide = new THREE.Mesh(
		new THREE.BoxBufferGeometry(5, 6, 6),
		new THREE.MeshLambertMaterial({ color: 0x8C8C8C})
	);

	return couchSide;
}

function createCouch() {

	const couch = new THREE.Group();

	const couchBack = new THREE.Mesh(
		new THREE.BoxBufferGeometry(25, 10, 4),
		new THREE.MeshLambertMaterial({ color: 0x8C8C8C})
	);
	couch.add(couchBack);

	const couchLeft = createCouchSides();
	couchLeft.position.set(-9.9, -2, 5);
	couch.add(couchLeft);

	const couchBottom = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 2, 6),
		new THREE.MeshLambertMaterial({ color: 0x8C8C8C})
	);
	couchBottom.position.set(0, -4, 5);
	couch.add(couchBottom);

	const cushion = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 2.5, 6),
		new THREE.MeshLambertMaterial({ color: 0x343434})
	);
	cushion.position.set(0, -1.8, 5);
	couch.add(cushion);

	const couchRight = createCouchSides();
	couchRight.position.set(10, -2, 5);
	couch.add(couchRight);

	return couch;
}

function createSpeaker(){

	const speaker = new THREE.Mesh(
		new THREE.BoxBufferGeometry(8, 12, 6),
		new THREE.MeshLambertMaterial({color:0x4A4A4A})
	);
	return speaker;
}

function createTableCorners(){
	const tableSide = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.5, 3, 0.5),
		new THREE.MeshLambertMaterial({color:0xffffff})
	);		
	return tableSide;
}

function createGlassTable(){

	const glassTable = new THREE.Group();

	const glass = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 1, 8),
		new THREE.MeshLambertMaterial({color:0xffffff, opacity: 0.5, transparent: true})
	);	
	glassTable.add(glass);
	glass.position.set(29, -3, 28);
	
	const tableSideLeftBottom = createTableCorners();
	glassTable.add(tableSideLeftBottom);
	tableSideLeftBottom.position.set(23.6, -4, 32);

	const tableSideLeftTop = createTableCorners();
	glassTable.add(tableSideLeftTop);
	tableSideLeftTop.position.set(23.6, -4, 24.5);

	const tableSideRightBottom = createTableCorners();
	glassTable.add(tableSideRightBottom);
	tableSideRightBottom.position.set(35, -4, 32);
	
	const tableSideRightTop = createTableCorners();
	glassTable.add(tableSideRightTop);
	tableSideRightTop.position.set(35, -4, 24.5);
		
	return glassTable;
}


function createTvArea(){

	const tvArea = new THREE.Mesh();

	const carpet = new THREE.Mesh(
		new THREE.BoxBufferGeometry(25, 1, 20),
		new THREE.MeshLambertMaterial({ color: 0x4a2c5d})
	);
	carpet.position.set(30, -6.6, 27);
	tvArea.add(carpet);

	const couch = createCouch();
	couch.position.set(31, 0, 9);
	tvArea.add(couch);
	
	const speaker1 = createSpeaker();
	speaker1.position.set(15, -1, 47);
	tvArea.add(speaker1);

	const table = new THREE.Mesh(
		new THREE.BoxBufferGeometry(20, 5, 6),
		new THREE.MeshLambertMaterial({color:0xffffff})
	);	
	table.position.set(29, -4, 46.6);
	tvArea.add(table);

	const tv = new THREE.Mesh(
		new THREE.BoxBufferGeometry(10, 5, 0.6),
		new THREE.MeshLambertMaterial({color:0x4A4A4A})
	);
	tv.position.set(29, 1, 48);	
	tvArea.add(tv);

	const tvBack = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 5, 0.6),
		new THREE.MeshLambertMaterial({color:0x4A4A4A})
	);
	tvBack.position.set(29, 1, 49);	
	tvArea.add(tvBack);

	const speaker2 = createSpeaker();
	speaker2.position.set(43, -1, 47);
	tvArea.add(speaker2);
	
	const glassTable = createGlassTable(); 
	tvArea.add(glassTable);

	const light = new THREE.PointLight( 0xff0000, 1, 100 );
	light.position.set( 30, 60, 30 );
	tvArea.add( light );

	return tvArea; 
}

const tvArea = createTvArea();
scene.add(tvArea);

// ---------------- Miscellaneous ---------------- //


// Plants
function createPlant(){

	const plant = new THREE.Group();

	const pot = new THREE.Mesh(
		new THREE.CylinderGeometry(2, 1.5, 1.95, 30),
		new THREE.MeshToonMaterial({color: 0x664033})
	);
	plant.add(pot);

	const bush = new THREE.Mesh(
		new THREE.SphereGeometry( 2, 32, 16 ),
		new THREE.MeshBasicMaterial( { color: 0x518C4F	 } )
	);
	bush.position.y = 2 
	plant.add(bush);

	return plant;
}
// Plants near window
const plant1 = createPlant();
plant1.position.set(-38, 0, -12);
scene.add(plant1);

const plant2 = createPlant();
plant2.position.set(-38, 0, 3);
scene.add(plant2);

// Plant near Stairs
const plant3 = createPlant();
plant3.position.set(-20, 0,  -30);
scene.add(plant3);

// Plant in TV Area
const plant4 = createPlant();
plant4.position.set(2, 0,  52);
scene.add(plant4);

function createDesk(){

	const desk = new THREE.Group();
	const frame = new THREE.Mesh(
		new THREE.BoxBufferGeometry(7, 3, 10),
		new THREE.MeshLambertMaterial({ color: 0x664033 })
	);
	desk.add(frame);

	const knob = new THREE.Mesh(new THREE.BoxBufferGeometry(0.5, 0.5, 2),
	new THREE.MeshLambertMaterial({ color: 0xffffff })
	);
	desk.add(knob);
	knob.position.x = 3.4;
	
	return desk;
}
// Desk near stairs

const desk = createDesk();
desk.position.set(-42, -4.5, -30);
scene.add(desk);

function createDiary(){
	const diary = new THREE.Group;
	const cover = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 0.5, 3),
		new THREE.MeshLambertMaterial({ color: 0xfC83243 })
	);
	diary.add(cover);
	
	const detail = new THREE.Mesh(
		new THREE.BoxBufferGeometry(1, 0.8, 0.3),
		new THREE.MeshLambertMaterial({ color: 0xffffff })
	);
	diary.add(detail);
	detail.position.z = -0.5;

	return diary;
}

const diary = createDiary();
diary.position.set(-40, 0, -28);
diary.rotation.y = 1;
scene.add(diary);

renderer.render(scene, camera);