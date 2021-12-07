var container;

			var scene, camera, renderer;
			var cube, mesh2;
			var hover = false;
			var linkHover = false;
			var smallcaseHover = false;
			var legoVenturesHover = false;
			var yoguideHover = false;
			var start = Date.now(); 

			var _primitive;

			var isDarkMode = false;

			function toggleDarkModeBlob(){
				isDarkMode = !isDarkMode;
				console.log("toggled");
			}





			var mat;
				var primitiveElement = function() {
				this.mesh = new THREE.Object3D();
				mat = new THREE.ShaderMaterial( {
					wireframe: false,
					//fog: true,
					uniforms: {
					time: {
						type: "f",
						value: 0.0
					},
					pointscale: {
						type: "f",
						value: 0.0
					},
					decay: {
						type: "f",
						value: 0.0
					},
					complex: {
						type: "f",
						value: 0.0
					},
					waves: {
						type: "f",
						value: 0.0
					},
					eqcolor: {
						type: "f",
						value: 0.0
					},
					fragment: {
						type: "i",
						value: true
					},
					redhell: {
						type: "i",
						value: true
					}
					},
					vertexShader: document.getElementById( 'vertexShader' ).textContent,
					fragmentShader: document.getElementById( 'fragmentShader' ).textContent
				});
				var geo = new THREE.IcosahedronBufferGeometry(3, 7);
				var mesh2 = new THREE.Points(geo, mat);
				
				//---
				this.mesh.add(mesh2);
				}

				

				function createPrimitive() {
					_primitive = new primitiveElement();
					scene.add(_primitive.mesh);
					// scene.add(new THREE.Mesh((new THREE.BoxGeometry(2,2,2)),(new THREE.MeshBasicMaterial(0xfff))));
					console.log("created");
				}

				var options = {
					perlin: {
						vel: 0.002,
						speed: 0.0004,
						perlins: 4.0,
						decay: 0.02,
						complex: 0.2,
						waves: 3.0,
						eqcolor: 4.0,
						fragment: true,
						redhell: true
					},
					spin: {
						sinVel: 0.0,
						ampVel: 80.0,
					}
				}

                var hoverOptions = {
                    perlin: {
						vel: 0.02,
						speed: 0.0004,
						perlins: 4.0,
						decay: 0.7,
						complex: 0.6,
						waves: 20.0,
						eqcolor: 2.0,
						fragment: true,
						redhell: true
					},
					spin: {
						sinVel: 0.0,
						ampVel: 80.0,
					}
                }


                var legoOptions = {
                    perlin: {
						vel: 0.02,
						speed: 0.0004,
						perlins: 4.0,
						decay: 0.7,
						complex: 0.6,
						waves: 20.0,
						eqcolor: 2.0,
						fragment: true,
						redhell: true
					},
					spin: {
						sinVel: 0.0,
						ampVel: 80.0,
					}
                }

                var smallcaseOptions = {
                    perlin: {
						vel: 0.02,
						speed: 0.0004,
						perlins: 4.0,
						decay: 0.7,
						complex: 0.6,
						waves: 20.0,
						eqcolor: 2.0,
						fragment: true,
						redhell: true
					},
					spin: {
						sinVel: 0.0,
						ampVel: 80.0,
					}
                }


                var yoguideOptions = {
                    perlin: {
						vel: 0.02,
						speed: 0.0004,
						perlins: 4.0,
						decay: 0.7,
						complex: 0.6,
						waves: 20.0,
						eqcolor: 2.0,
						fragment: true,
						redhell: true
					},
					spin: {
						sinVel: 0.0,
						ampVel: 80.0,
					}
                }


        
			init();
			animate();


          

			function createGUI() {
			var gui = new dat.GUI();
			var camGUI = gui.addFolder('Camera');
			//cam.add(, 'speed', 0.0, 30.00).listen();
			camGUI.add(camera.position, 'z', 3, 20).name('Zoom').listen();
			camGUI.add(options.perlin, 'vel', 0.000, 0.02).name('Velocity').listen();
			//camGUI.open();
			
			var mathGUI = gui.addFolder('Math Options');
			mathGUI.add(options.spin, 'sinVel', 0.0, 0.50).name('Sine').listen();
			mathGUI.add(options.spin, 'ampVel', 0.0, 90.00).name('Amplitude').listen();
			//mathGUI.open();
			
			var perlinGUI = gui.addFolder('Setup Perlin Noise');
			perlinGUI.add(options.perlin, 'perlins', 1.0, 5.0).name('Size').step(1);
			perlinGUI.add(options.perlin, 'speed', 0.00000, 0.00050).name('Speed').listen();
			perlinGUI.add(options.perlin, 'decay', 0.0, 1.00).name('Decay').listen();
			perlinGUI.add(options.perlin, 'waves', 0.0, 20.00).name('Waves').listen();
			perlinGUI.add(options.perlin, 'fragment', true).name('Fragment');
			perlinGUI.add(options.perlin, 'complex', 0.1, 1.00).name('Complex').listen();
			perlinGUI.add(options.perlin, 'redhell', true).name('Electroflow');
			perlinGUI.add(options.perlin, 'eqcolor', 0.0, 15.0).name('Hue').listen();
			perlinGUI.open();
			}

			function init() {

				container = document.getElementById( 'flex-2' );

				renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
				renderer.setSize( container.offsetWidth, container.offsetHeight );
				renderer.setClearColor(0xffffff, 0);
                renderer.setPixelRatio( window.devicePixelRatio );
				container.prepend( renderer.domElement );

				scene = new THREE.Scene();

				camera = new THREE.PerspectiveCamera( 55, container.offsetWidth / container.offsetHeight, 1, 1000 );
				scene.add( camera );
				camera.position.z = 20;


				//

				var width = container.offsetWidth, height = container.offsetHeight;
				createPrimitive();
                setEventListeners();
             
				// createGUI();

				}


            
            function setEventListeners(){
                let parent = document.getElementById("flex-2");
                parent.addEventListener("mouseenter", function(event){
                    hover = true;
                });

                parent.addEventListener("mouseleave", function(event){
                    hover = false;
                });

				var links = document.getElementsByClassName('text-link');

				for (var idx= 0; idx < links.length; ++idx){
					links[idx].addEventListener("mouseenter", function(event){
						hover = true;
					});
	
					links[idx].addEventListener("mouseleave", function(event){
						hover = false;
					});
				}

                // window.addEventListener('resize', onWindowResize, false);

				var smallcase = document.getElementById('smallcase');
				var legoVentures = document.getElementById('lego-ventures');
				var yoguide = document.getElementById('yoguide');


				smallcase.addEventListener("mouseenter", function(event){
                    smallcaseHover = true;
                });

				smallcase.addEventListener("mouseleave", function(event){
                    smallcaseHover = false;
                });

				yoguide.addEventListener("mouseenter", function(event){
                    yoguideHover = true;
                });

				yoguide.addEventListener("mouseleave", function(event){
                    yoguideHover = false;
                });

				legoVentures.addEventListener("mouseenter", function(event){
                    legoVenturesHover = true;
                });

				legoVentures.addEventListener("mouseleave", function(event){
                    legoVenturesHover = false;
                });

				

		
        }
	
			function animate() {

				requestAnimationFrame( animate );
				render();

			}

	

			function render() {


				var performance = Date.now() * 0.003;

				_primitive.mesh.rotation.y += options.perlin.vel;
				_primitive.mesh.rotation.x = (Math.sin(performance * options.spin.sinVel) * options.spin.ampVel )* Math.PI / 180;

                mat.uniforms['time'].value = options.perlin.speed * (Date.now() - start);
                
                if(!hover){

				mat.uniforms['pointscale'].value = options.perlin.perlins;
				mat.uniforms['decay'].value = options.perlin.decay;
				mat.uniforms['complex'].value = options.perlin.complex;
				mat.uniforms['waves'].value = options.perlin.waves;
				mat.uniforms['eqcolor'].value = options.perlin.eqcolor;
				mat.uniforms['fragment'].value = options.perlin.fragment;
				mat.uniforms['redhell'].value = options.perlin.redhell;
                }

                else if(hover){

                    mat.uniforms['pointscale'].value = hoverOptions.perlin.perlins;
                    mat.uniforms['decay'].value = hoverOptions.perlin.decay;
                    mat.uniforms['complex'].value = hoverOptions.perlin.complex;
                    mat.uniforms['waves'].value = hoverOptions.perlin.waves;
                    mat.uniforms['eqcolor'].value = hoverOptions.perlin.eqcolor;
                    mat.uniforms['fragment'].value = hoverOptions.perlin.fragment;
                    mat.uniforms['redhell'].value = hoverOptions.perlin.redhell;

                }

				if(smallcaseHover){
					renderer.setClearColor(0x000fff);
				}

				else if(yoguideHover){
					renderer.setClearColor(0x000000);
				}

				else if(legoVenturesHover){
					renderer.setClearColor(0xf00048);
				}

				else renderer.setClearColor(0xffffff,0);

				if(window.screen.width < 1024){
					renderer.setClearColor(0x000fff);
				}



				camera.lookAt(scene.position);
     
                renderer.render( scene, camera );
				
			}

			// function onWindowResize() {
			// 	_width = window.innerWidth;
			// 	_height = window.innerHeight;
			// 	renderer.setSize(_width, _height);
			// 	camera.aspect = _width / _height;
			// 	camera.updateProjectionMatrix();
			// 	console.log('- resize -');
			// }