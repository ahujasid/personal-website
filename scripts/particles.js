var container;

var _scene, _camera, light, _renderer;
var geometry, cube, mesh, material;

var data, texture, points;

var controls;

var _primitive;

var fboParticles, rtTexturePos, rtTexturePos2, simulationShader;

var planeMat, planeGeo, plane;


    // var defaultColor = {
//     r: 0.3,
//     g: 0.3,
//     b: 0.3,
//     a: 0.25,
// }

// var whiteColor = {
//     r: 1.0,
//     g: 1.0,
//     b: 1.0,
//     a: 0.25,
// }

// var greyColor = {
//     r: 0.0,
//     g: 0.0,
//     b: 0.0,
//     a: 0.25,
// }

// var redColor = {
//     r: 1.0,
//     g: 0.18,
//     b: 0.2,
//     a: 0.25,
// }

var pinkColor = {
    r: 0.92,
    g: 0.35,
    b: 0.66,
    a: 0.25,
}


// var yellowColor = {
//     r: 1.0,
//     g: 0.67,
//     b: 0.2,
//     a: 0.25,
// }


// var orangeColor = {
//     r: 1.0,
//     g: 0.50,
//     b: 0.4,
//     a: 0.25,
// }


// var greenColor = {
//     r: 0.50,
//     g: 0.98,
//     b: 0.8,
//     a: 0.25,
// }


// var purpleColor = {
//     r: 1.0,
//     g: 0.50,
//     b: 1.0,
//     a: 0.5,
// }


var speed = 1;
var alpha = 0.5;
var defaultBG = "#f0f0f0";


let smallcase = document.getElementById("smallcase");
let prophecy = document.getElementById("prophecy");
let CIID = document. getElementById("CIID");
let yoguide = document.getElementById("yoguide");
let luminovo = document.getElementById("luminovo");
let heyo = document.getElementById("heyo");
let LEGOVentures = document.getElementById("LEGOVentures");
let moooodify = document.getElementById("moooodify");
let figma = document.getElementById("figma");
let medium = document.getElementById("medium");

 // function setEventHandlers(){
//     smallcase.addEventListener("mouseenter", function(event){
        

// 		document.body.style.backgroundColor = "#352CEE";
// 		changeColor(whiteColor);
    

//         speed = Math.random()*0.2;
 
//     })

//     smallcase.addEventListener("mouseleave", function(event){
        
// 		document.body.style.backgroundColor = defaultBG;
//         changeColor(defaultColor);
//         speed = 1;

//     })

// 	prophecy.addEventListener("mouseenter", function(event){
        
       
// 		document.body.style.backgroundColor = "#FF725C";
// 		changeColor(whiteColor);
// 		speed = Math.random()*0.2;

//     })

//     prophecy.addEventListener("mouseleave", function(event){
        
//         changeColor(defaultColor);
// 		document.body.style.backgroundColor = defaultBG;
//         speed = 1;

//     })


// 	CIID.addEventListener("mouseenter", function(event){
// 		document.body.style.backgroundColor = "#F0F0F0";
// 		document.body.style.color = "#231f20";
// 		changeColor(greyColor);					
// 		speed = Math.random()*0.2;
//     })

//     CIID.addEventListener("mouseleave", function(event){
        
//         changeColor(defaultColor);
// 		document.body.style.backgroundColor = "#000000";
// 		document.body.style.color = "#fff";
//         speed = 1;

//     })


// 	yoguide.addEventListener("mouseenter", function(event){
// 		changeColor(greenColor);					
// 		speed = Math.random()*0.2;
//     })

//     yoguide.addEventListener("mouseleave", function(event){
        
//         changeColor(defaultColor);	
//         speed = 1;

//     })

// 	LEGOVentures.addEventListener("mouseenter", function(event){
// 		changeColor(orangeColor);					
// 		speed = Math.random()*0.2;
//     })

//     LEGOVentures.addEventListener("mouseleave", function(event){
        
//         changeColor(defaultColor);		
//         speed = 1;

//     })
    
// 	luminovo.addEventListener("mouseenter", function(event){
// 		changeColor(whiteColor);					
// 		speed = Math.random()*0.2;
//     })

//     luminovo.addEventListener("mouseleave", function(event){
        
//         changeColor(defaultColor);	
//         speed = 1;

//     })

// 	heyo.addEventListener("mouseenter", function(event){
// 		changeColor(yellowColor);					
// 		speed = Math.random()*0.2;
//     })

//     heyo.addEventListener("mouseleave", function(event){
        
//         changeColor(defaultColor);		
//         speed = 1;

//     })

// 	moooodify.addEventListener("mouseenter", function(event){
// 		changeColor(purpleColor);					
// 		speed = Math.random()*0.2;
//     })

//     moooodify.addEventListener("mouseleave", function(event){
        
//         changeColor(defaultColor);	
//         speed = 1;

//     })

// 	figma.addEventListener("mouseenter", function(event){
// 		changeColor(pinkColor);					
// 		speed = Math.random()*0.2;
//     })

//     figma.addEventListener("mouseleave", function(event){
        
//         changeColor(defaultColor);	
//         speed = 1;

//     })

// 	medium.addEventListener("mouseenter", function(event){
// 		changeColor(whiteColor);					
// 		speed = Math.random()*0.2;
//     })

//     medium.addEventListener("mouseleave", function(event){
        
//         changeColor(defaultColor);	
//         speed = 1;

//     })
// }


_init();
_animate();



function _init() {

    container = document.getElementById( 'flex-2' );

    _renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    _renderer.setSize( container.offsetWidth, container.offsetHeight );
    _renderer.setClearColor(0xffffff, 0);
    // container.appendChild( _renderer.domElement );
    console.log(container);

    _scene = new THREE.Scene();

    _camera = new THREE.PerspectiveCamera( 55, container.offsetWidth / container.offsetHeight, 1, 1000 );
    _scene.add( _camera );
    _camera.position.z = 20;

    controls = new THREE.OrbitControls2( _camera );
    controls.radius = 400;
    controls.speed = 0;

    //

    var width = container.offsetWidth, height = container.offsetHeight;

    if ( ! _renderer.context.getExtension( 'OES_texture_float' ) ) {

        alert( 'OES_texture_float is not :(' );

    }

    // setEventHandlers();

    // Start Creation of DataTexture
    // Could it be simplified with THREE.FBOUtils.createTextureFromData(textureWidth, textureWidth, data); ?

    data = new Float32Array( width * height * 3 );

    texture = new THREE.DataTexture( data, width, height, THREE.RGBFormat, THREE.FloatType );
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    texture.needsUpdate = true;


    // zz85 - fbo init

    rtTexturePos = new THREE.WebGLRenderTarget(width, height, {
        wrapS:THREE.RepeatWrapping,
        wrapT:THREE.RepeatWrapping,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBFormat,
        type:THREE.FloatType,
        stencilBuffer: false
    });

    rtTexturePos2 = rtTexturePos.clone();

    simulationShader = new THREE.ShaderMaterial({

        uniforms: {
            tPositions: { type: "t", value: texture },
            origin: { type: "v3", value: new THREE.Vector3() },
            timer: { type: "f", value: 0 }
        },

        vertexShader: document.getElementById('texture_vertex_simulation_shader').textContent,
        fragmentShader:  document.getElementById('texture_fragment_simulation_shader').textContent

    });

    fboParticles = new THREE.FBOUtils( width, _renderer, simulationShader );
    fboParticles.renderToTexture(rtTexturePos, rtTexturePos2);

    fboParticles.in = rtTexturePos;
    fboParticles.out = rtTexturePos2;


    geometry = new THREE.Geometry();

    for ( var i = 0, l = width * height; i < l; i ++ ) {

        var vertex = new THREE.Vector3();
        vertex.x = ( i % width ) / width ;
        vertex.y = Math.floor( i / width ) / height;
        geometry.vertices.push( vertex );

    }

    material = new THREE.ShaderMaterial( {

        uniforms: {

            "map": { type: "t", value: rtTexturePos },
            "width": { type: "f", value: width },
            "height": { type: "f", value: height },

            "pointColor": { type: "v4", value: new THREE.Vector4( pinkColor.r, pinkColor.g,  pinkColor.b, 0.25 ) },
            "pointSize": { type: "f", value: 1 }

        },
        vertexShader: document.getElementById( 'vs-particles' ).textContent,
        fragmentShader: document.getElementById( 'fs-particles' ).textContent,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        transparent: true

    } );

    mesh = new THREE.ParticleSystem( geometry, material );
    _scene.add(mesh);

    console.log(_scene);

}



function lerp(a, b, u) {
   return (1 - u) * a + u * b;
};


function changeColor(to){

    // material.uniforms.transparent = true;
    // material.uniforms.needsUpdate = true;

        material.uniforms.pointColor.value.x  = to.r;
        material.uniforms.pointColor.value.y = to.g;
        material.uniforms.pointColor.value.z = to.b;
        // material.unfiforms.pointColor.value.w = 1;

        console.log(material.uniforms.pointColor.value);

}

function _animate() {

    requestAnimationFrame( _animate );
    _render();

}

var timer = 0;

function _render() {



    timer += 0.01 * speed;

    simulationShader.uniforms.timer.value = timer;
    simulationShader.uniforms.origin.value.x = (Math.sin( timer * 2.3  ) * 0.5 + 0.5);
    simulationShader.uniforms.origin.value.y = (Math.cos( timer * 2.5 ) * 0.5 + 0.5);
    simulationShader.uniforms.origin.value.z = (Math.sin( timer * 2.7 ) * 0.5 + 0.5);



    // swap
    var tmp = fboParticles.in;
    fboParticles.in = fboParticles.out;
    fboParticles.out = tmp;

    simulationShader.uniforms.tPositions.value = fboParticles.in;
    fboParticles.simulate(fboParticles.out);
    material.uniforms.map.value = fboParticles.out;

    controls.update();

    _renderer.render( _scene, _camera );
    
}

function onWindowResize() {
    _width = window.innerWidth;
    _height = window.innerHeight;
    _renderer.setSize(_width, _height);
    _camera.aspect = _width / _height;
    _camera.updateProjectionMatrix();
    console.log('- resize -');
}

