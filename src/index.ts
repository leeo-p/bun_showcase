import './index.css';
import * as THREE from 'three';

// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

if (cursor && ring) {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  const animateCursor = () => {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateCursor);
  };
  animateCursor();

  document.querySelectorAll('a, button, .btn-primary, .btn-ghost').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
    });
  });
}

// THREE.JS 3D SCENE
const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
if (canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 5);

  // Ambient + directional lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.1));
  const dirLight = new THREE.DirectionalLight(0xF0742B, 2);
  dirLight.position.set(3, 5, 3);
  scene.add(dirLight);
  const pointLight1 = new THREE.PointLight(0xFFCC00, 3, 20);
  pointLight1.position.set(-4, 2, 2);
  scene.add(pointLight1);
  const pointLight2 = new THREE.PointLight(0xF0742B, 2, 15);
  pointLight2.position.set(4, -2, 1);
  scene.add(pointLight2);

  // MAIN TORUS KNOT
  const torusKnotGeo = new THREE.TorusKnotGeometry(1.4, 0.35, 200, 20, 3, 5);
  const torusKnotMat = new THREE.MeshPhongMaterial({
    color: 0x1A1408,
    emissive: 0xF0742B,
    emissiveIntensity: 0.12,
    wireframe: false,
    shininess: 100,
    specular: new THREE.Color(0xFFCC00),
  });
  const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
  torusKnot.position.set(3.5, -0.5, -1);
  scene.add(torusKnot);

  // WIREFRAME OVERLAY
  const wireGeo = new THREE.TorusKnotGeometry(1.41, 0.352, 80, 10, 3, 5);
  const wireMat = new THREE.MeshBasicMaterial({ color: 0xF0742B, wireframe: true, transparent: true, opacity: 0.08 });
  const wireKnot = new THREE.Mesh(wireGeo, wireMat);
  wireKnot.position.copy(torusKnot.position);
  scene.add(wireKnot);

  // PARTICLE FIELD
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({ color: 0xF0742B, size: 0.02, transparent: true, opacity: 0.4 });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // FLOATING ICOSAHEDRONS
  const icoGroup = new THREE.Group();
  scene.add(icoGroup);
  const icoDatas = [
    { size: 0.25, pos: [-3, 2, -2] as [number, number, number], speed: 0.8 },
    { size: 0.15, pos: [-5, -1, -3] as [number, number, number], speed: 1.2 },
    { size: 0.35, pos: [6, 1, -4] as [number, number, number], speed: 0.6 },
    { size: 0.2, pos: [1, 3, -3] as [number, number, number], speed: 1.0 },
    { size: 0.12, pos: [-2, -3, -2] as [number, number, number], speed: 1.4 },
  ];
  icoDatas.forEach(d => {
    const geo = new THREE.IcosahedronGeometry(d.size, 0);
    const mat = new THREE.MeshBasicMaterial({ color: 0xFFCC00, wireframe: true, transparent: true, opacity: 0.25 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(...d.pos);
    mesh.userData.speed = d.speed;
    mesh.userData.offset = Math.random() * Math.PI * 2;
    icoGroup.add(mesh);
  });

  // GRID PLANE
  const gridHelper = new THREE.GridHelper(30, 30, 0xF0742B, 0x1A1408);
  gridHelper.position.y = -4;
  if (gridHelper.material instanceof THREE.Material) {
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.08;
  }
  scene.add(gridHelper);

  // MOUSE INTERACTION
  let targetX = 0, targetY = 0;
  window.addEventListener('mousemove', e => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 0.4;
    targetY = -(e.clientY / window.innerHeight - 0.5) * 0.3;
  });

  // ANIMATE
  const clock = new THREE.Clock();
  const animate = () => {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    torusKnot.rotation.x = t * 0.25;
    torusKnot.rotation.y = t * 0.18;
    wireKnot.rotation.x = t * 0.25;
    wireKnot.rotation.y = t * 0.18;

    scene.rotation.y += (targetX - scene.rotation.y) * 0.05;
    scene.rotation.x += (targetY - scene.rotation.x) * 0.05;

    particles.rotation.y = t * 0.02;
    particles.rotation.x = t * 0.01;

    icoGroup.children.forEach((m: THREE.Object3D) => {
      const mesh = m as THREE.Mesh;
      mesh.rotation.x = t * mesh.userData.speed * 0.6;
      mesh.rotation.y = t * mesh.userData.speed * 0.4;
      mesh.position.y += Math.sin(t * mesh.userData.speed + mesh.userData.offset) * 0.001;
    });

    pointLight1.intensity = 3 + Math.sin(t * 2) * 1;
    pointLight2.intensity = 2 + Math.cos(t * 1.5) * 0.8;

    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// SCROLL REVEAL
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger bar animations
      entry.target.querySelectorAll('.bench-bar-fill').forEach(b => {
        const bar = b as HTMLElement;
        const w = bar.getAttribute('data-width');
        if (w) {
          setTimeout(() => { bar.style.transform = `scaleX(${parseInt(w) / 100})`; }, 200);
        }
      });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// NUMBER COUNTER
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(el => {
        const targetAttr = el.getAttribute('data-target');
        if (targetAttr) {
          const target = parseInt(targetAttr);
          let count = 0;
          const duration = 1500;
          const step = target / (duration / 16);
          const suffix = target === 14 ? 'ms' : target === 3 || target > 10 ? '×' : 'ms';
          const timer = setInterval(() => {
            count = Math.min(count + step, target);
            el.textContent = Math.round(count) + suffix;
            if (count >= target) clearInterval(timer);
          }, 16);
        }
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.speed-hero').forEach(el => counterObserver.observe(el));

// TICKER
const ticker = document.getElementById('ticker-inner');
if (ticker) {
  const clone = ticker.innerHTML;
  ticker.innerHTML = clone + clone;
}

// GLITCH ON HOVER
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  heroTitle.addEventListener('mouseenter', () => {
    const glitch = document.querySelector('.glitch') as HTMLElement;
    if (glitch) glitch.style.animation = 'glitch1 0.3s infinite';
  });
}
