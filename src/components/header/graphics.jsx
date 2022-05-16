import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import fragment from './shaders/fragment.glsl';
import vertexParticles from './shaders/vertexParticles.glsl';

// TODO: see if `dat.gui` and `gsap` dependencies are of value

export default function HeaderGraphic() {
	const graphicRef = useRef(null);
	useEffect(() => {
		new HeaderAnimation(graphicRef);
	}, []);
	return (
		<div ref={graphicRef} className="min-h-[calc(100vh-3rem)] max-w-[calc(100%-61.8%)] grow"></div>
	);
}

// Animation Configuration
class HeaderAnimation {
	constructor(mount) {
		// configure container
		this.container = mount.current;
		this.width = this.container.offsetWidth;
		this.height = this.container.offsetHeight;
		// configure renderer
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(this.width, this.height);
		this.renderer.setClearColor(0x111111, 1);
		this.renderer.physicallyCorrectLights = true;
		this.renderer.outputEncoding = THREE.sRGBEncoding;
		// configure scene
		this.scene = new THREE.Scene();
		// attach rendrer to dom
		this.container.appendChild(this.renderer.domElement);
		// configure camera
		this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 0.001, 1000);
		this.camera.position.set(0, 0, 1.5);
		// configure time variable
		this.time = 0;
		this.addObjects();
		this.setupResize();
		this.render();
	}
	setupResize() {
		window.addEventListener('resize', this.resize.bind(this));
	}
	resize() {
		// update container dimensions on resize
		this.width = this.container.offsetWidth;
		this.height = this.container.offsetHeight;
		// update renderer dimensions on resize
		this.renderer.setSize(this.width, this.height);
		// update camera on resize
		this.camera.aspect = this.width / this.height;
		this.camera.updateProjectionMatrix();
	}
	addObjects() {
		this.material = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable',
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: { value: 0 },
				resolution: { value: new THREE.Vector4() },
			},
			vertexShader: vertexParticles,
			fragmentShader: fragment,
		});
		this.geometry = new THREE.IcosahedronBufferGeometry(1, 50);
		this.plane = new THREE.Points(this.geometry, this.material);
		this.plane.position.set(0.8, 0, 0);
		this.scene.add(this.plane);
	}
	render() {
		this.time += 0.009;
		this.plane.rotation.y += 0.001;
		this.material.uniforms.time.value = this.time;
		requestAnimationFrame(this.render.bind(this));
		this.renderer.render(this.scene, this.camera);
	}
}
