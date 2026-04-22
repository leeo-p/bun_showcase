import { useEffect } from 'react';
import * as THREE from 'three';

export function useHomePageEffects() {
  useEffect(() => {
    // CURSOR
    const cursor = document.getElementById('cursor') as HTMLElement | null;
    const ring = document.getElementById('cursor-ring') as HTMLElement | null;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let cursorAnimationFrame = 0;

    const hoverListeners: Array<{ element: Element; enter: () => void; leave: () => void }> = [];
    const onDocumentMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
    };

    if (cursor && ring) {
      document.addEventListener('mousemove', onDocumentMouseMove);

      const animateCursor = () => {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        cursorAnimationFrame = requestAnimationFrame(animateCursor);
      };
      animateCursor();

      document.querySelectorAll('a, button, .btn-primary, .btn-ghost').forEach((el) => {
        const onMouseEnter = () => {
          cursor.style.transform = 'translate(-50%,-50%) scale(2)';
          ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
        };
        const onMouseLeave = () => {
          cursor.style.transform = 'translate(-50%,-50%) scale(1)';
          ring.style.transform = 'translate(-50%,-50%) scale(1)';
        };

        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
        hoverListeners.push({ element: el, enter: onMouseEnter, leave: onMouseLeave });
      });
    }

    // THREE.JS 3D SCENE
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
    let threeAnimationFrame = 0;
    let resizeHandler: (() => void) | null = null;
    let threeCleanup: (() => void) | null = null;

    if (canvas) {
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 5);

      scene.add(new THREE.AmbientLight(0xffffff, 0.1));
      const dirLight = new THREE.DirectionalLight(0xf0742b, 2);
      dirLight.position.set(3, 5, 3);
      scene.add(dirLight);
      const pointLight1 = new THREE.PointLight(0xffcc00, 3, 20);
      pointLight1.position.set(-4, 2, 2);
      scene.add(pointLight1);
      const pointLight2 = new THREE.PointLight(0xf0742b, 2, 15);
      pointLight2.position.set(4, -2, 1);
      scene.add(pointLight2);

      const torusKnotGeo = new THREE.TorusKnotGeometry(1.4, 0.35, 200, 20, 3, 5);
      const torusKnotMat = new THREE.MeshPhongMaterial({
        color: 0x1a1408,
        emissive: 0xf0742b,
        emissiveIntensity: 0.12,
        wireframe: false,
        shininess: 100,
        specular: new THREE.Color(0xffcc00),
      });
      const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
      torusKnot.position.set(3.5, -0.5, -1);
      scene.add(torusKnot);

      const wireGeo = new THREE.TorusKnotGeometry(1.41, 0.352, 80, 10, 3, 5);
      const wireMat = new THREE.MeshBasicMaterial({ color: 0xf0742b, wireframe: true, transparent: true, opacity: 0.08 });
      const wireKnot = new THREE.Mesh(wireGeo, wireMat);
      wireKnot.position.copy(torusKnot.position);
      scene.add(wireKnot);

      const particleCount = 2000;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 1) {
        positions[i] = (Math.random() - 0.5) * 20;
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({ color: 0xf0742b, size: 0.02, transparent: true, opacity: 0.4 });
      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      const icoGroup = new THREE.Group();
      scene.add(icoGroup);
      const icoDatas = [
        { size: 0.25, pos: [-3, 2, -2] as [number, number, number], speed: 0.8 },
        { size: 0.15, pos: [-5, -1, -3] as [number, number, number], speed: 1.2 },
        { size: 0.35, pos: [6, 1, -4] as [number, number, number], speed: 0.6 },
        { size: 0.2, pos: [1, 3, -3] as [number, number, number], speed: 1.0 },
        { size: 0.12, pos: [-2, -3, -2] as [number, number, number], speed: 1.4 },
      ];
      icoDatas.forEach((d) => {
        const geo = new THREE.IcosahedronGeometry(d.size, 0);
        const mat = new THREE.MeshBasicMaterial({ color: 0xffcc00, wireframe: true, transparent: true, opacity: 0.25 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(...d.pos);
        mesh.userData.speed = d.speed;
        mesh.userData.offset = Math.random() * Math.PI * 2;
        icoGroup.add(mesh);
      });

      const gridHelper = new THREE.GridHelper(30, 30, 0xf0742b, 0x1a1408);
      gridHelper.position.y = -4;
      const gridMaterial = gridHelper.material;
      if (Array.isArray(gridMaterial)) {
        gridMaterial.forEach((material) => {
          material.transparent = true;
          material.opacity = 0.08;
        });
      } else {
        gridMaterial.transparent = true;
        gridMaterial.opacity = 0.08;
      }
      scene.add(gridHelper);

      let targetX = 0;
      let targetY = 0;
      const onWindowMouseMove = (e: MouseEvent) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 0.4;
        targetY = -((e.clientY / window.innerHeight - 0.5) * 0.3);
      };
      window.addEventListener('mousemove', onWindowMouseMove);

      const clock = new THREE.Clock();
      const animate = () => {
        threeAnimationFrame = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        torusKnot.rotation.x = t * 0.25;
        torusKnot.rotation.y = t * 0.18;
        wireKnot.rotation.x = t * 0.25;
        wireKnot.rotation.y = t * 0.18;

        scene.rotation.y += (targetX - scene.rotation.y) * 0.05;
        scene.rotation.x += (targetY - scene.rotation.x) * 0.05;

        particles.rotation.y = t * 0.02;
        particles.rotation.x = t * 0.01;

        icoGroup.children.forEach((m) => {
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

      resizeHandler = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', resizeHandler);

      threeCleanup = () => {
        window.removeEventListener('mousemove', onWindowMouseMove);
        if (resizeHandler) {
          window.removeEventListener('resize', resizeHandler);
        }
        cancelAnimationFrame(threeAnimationFrame);

        torusKnotGeo.dispose();
        torusKnotMat.dispose();
        wireGeo.dispose();
        wireMat.dispose();
        particleGeo.dispose();
        particleMat.dispose();
        icoGroup.children.forEach((child) => {
          const mesh = child as THREE.Mesh;
          if (mesh.geometry) {
            mesh.geometry.dispose();
          }
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((material) => material.dispose());
          } else if (mesh.material) {
            mesh.material.dispose();
          }
        });

        const helperMaterial = gridHelper.material;
        if (Array.isArray(helperMaterial)) {
          helperMaterial.forEach((material) => material.dispose());
        } else {
          helperMaterial.dispose();
        }

        renderer.dispose();
      };
    }

    // SCROLL REVEAL
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.querySelectorAll('.bench-bar-fill').forEach((b) => {
            const bar = b as HTMLElement;
            const w = bar.getAttribute('data-width');
            if (w) {
              setTimeout(() => {
                bar.style.transform = `scaleX(${Number.parseInt(w, 10) / 100})`;
              }, 200);
            }
          });
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    // NUMBER COUNTER
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-target]').forEach((el) => {
            const targetAttr = el.getAttribute('data-target');
            if (targetAttr) {
              const target = Number.parseInt(targetAttr, 10);
              let count = 0;
              const duration = 1500;
              const step = target / (duration / 16);
              const suffix = target === 14 ? 'ms' : target === 3 || target > 10 ? '×' : 'ms';
              const timer = setInterval(() => {
                count = Math.min(count + step, target);
                el.textContent = `${Math.round(count)}${suffix}`;
                if (count >= target) {
                  clearInterval(timer);
                }
              }, 16);
            }
          });
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.speed-hero').forEach((el) => counterObserver.observe(el));

    // TICKER
    const ticker = document.getElementById('ticker-inner');
    if (ticker && !ticker.dataset.cloned) {
      const clone = ticker.innerHTML;
      ticker.innerHTML = clone + clone;
      ticker.dataset.cloned = 'true';
    }

    // GLITCH ON HOVER
    const heroTitle = document.querySelector('.hero-title');
    const onHeroMouseEnter = () => {
      const glitch = document.querySelector('.glitch') as HTMLElement | null;
      if (glitch) {
        glitch.style.animation = 'glitch1 0.3s infinite';
      }
    };
    heroTitle?.addEventListener('mouseenter', onHeroMouseEnter);

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      cancelAnimationFrame(cursorAnimationFrame);
      hoverListeners.forEach(({ element, enter, leave }) => {
        element.removeEventListener('mouseenter', enter);
        element.removeEventListener('mouseleave', leave);
      });

      heroTitle?.removeEventListener('mouseenter', onHeroMouseEnter);
      revealObserver.disconnect();
      counterObserver.disconnect();

      if (threeCleanup) {
        threeCleanup();
      }
    };
  }, []);
}
