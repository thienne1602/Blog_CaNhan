/**
 * Three.js 3D Scenes
 * Hero Icosahedron + Skills Torus Knot
 * ============================================
 */

// ============================================
// THREE.JS — HERO 3D SCENE (Icosahedron)
// ============================================
(function initHero3D() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(450, 450);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Icosahedron
  const geometry = new THREE.IcosahedronGeometry(1.6, 1);
  const material = new THREE.MeshPhongMaterial({
    color: 0x6c5ce7,
    emissive: 0x2d1b69,
    shininess: 100,
    wireframe: false,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Wireframe overlay
  const wireGeo = new THREE.IcosahedronGeometry(1.62, 1);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xa29bfe,
    wireframe: true,
    transparent: true,
    opacity: 0.4,
  });
  const wireMesh = new THREE.Mesh(wireGeo, wireMat);
  scene.add(wireMesh);

  // Inner sphere
  const innerGeo = new THREE.SphereGeometry(0.8, 32, 32);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x00cec9,
    transparent: true,
    opacity: 0.15,
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  scene.add(innerMesh);

  // Outer ring
  const ringGeo = new THREE.TorusGeometry(2.2, 0.02, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x6c5ce7,
    transparent: true,
    opacity: 0.3,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2.5;
  scene.add(ring);

  // Particles
  const particlesGeo = new THREE.BufferGeometry();
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 8;
  }
  particlesGeo.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3),
  );
  const particlesMat = new THREE.PointsMaterial({
    color: 0xa29bfe,
    size: 0.02,
    transparent: true,
    opacity: 0.6,
  });
  const particles = new THREE.Points(particlesGeo, particlesMat);
  scene.add(particles);

  // Lights
  const ambientLight = new THREE.AmbientLight(0x404040, 1);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0x6c5ce7, 2, 20);
  pointLight.position.set(3, 3, 3);
  scene.add(pointLight);
  const pointLight2 = new THREE.PointLight(0x00cec9, 1.5, 20);
  pointLight2.position.set(-3, -2, 2);
  scene.add(pointLight2);

  // Mouse interaction
  let targetRotX = 0,
    targetRotY = 0;
  const heroSection = canvas.closest(".bento-hero");
  if (heroSection) {
    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      targetRotX = ((e.clientY - rect.top) / rect.height - 0.5) * 1.5;
      targetRotY = ((e.clientX - rect.left) / rect.width - 0.5) * 1.5;
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += (targetRotX - mesh.rotation.x) * 0.02;
    mesh.rotation.y += 0.003;
    mesh.rotation.y += (targetRotY - mesh.rotation.y) * 0.02;

    wireMesh.rotation.x = mesh.rotation.x;
    wireMesh.rotation.y = mesh.rotation.y;

    innerMesh.rotation.y -= 0.005;
    ring.rotation.z += 0.002;
    particles.rotation.y += 0.0005;

    renderer.render(scene, camera);
  }
  animate();

  function onResize() {
    const parent = canvas.parentElement;
    const size = Math.min(parent.clientWidth, 450);
    renderer.setSize(size, size);
  }
  window.addEventListener("resize", onResize);
  onResize();
})();

// ============================================
// THREE.JS — SKILLS 3D SCENE (Torus Knot)
// ============================================
(function initSkills3D() {
  const canvas = document.getElementById("skills-canvas");
  if (!canvas) return;

  const parent = canvas.parentElement;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    parent.clientWidth / parent.clientHeight,
    0.1,
    100,
  );
  camera.position.z = 4.5;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(parent.clientWidth, parent.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Torus Knot
  const tkGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32, 2, 3);
  const tkMat = new THREE.MeshPhongMaterial({
    color: 0x00cec9,
    emissive: 0x0a3d3d,
    shininess: 80,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
  });
  const torusKnot = new THREE.Mesh(tkGeo, tkMat);
  scene.add(torusKnot);

  // Wireframe
  const tkWireGeo = new THREE.TorusKnotGeometry(1.22, 0.36, 128, 32, 2, 3);
  const tkWireMat = new THREE.MeshBasicMaterial({
    color: 0x55efc4,
    wireframe: true,
    transparent: true,
    opacity: 0.2,
  });
  const tkWire = new THREE.Mesh(tkWireGeo, tkWireMat);
  scene.add(tkWire);

  // Orbiting spheres
  const orbitGroup = new THREE.Group();
  const orbitColors = [
    0x6c5ce7, 0xfd79a8, 0xfdcb6e, 0xa29bfe, 0xff7675, 0x74b9ff,
  ];
  for (let i = 0; i < 6; i++) {
    const sg = new THREE.SphereGeometry(0.08, 16, 16);
    const sm = new THREE.MeshBasicMaterial({
      color: orbitColors[i],
      transparent: true,
      opacity: 0.8,
    });
    const sphere = new THREE.Mesh(sg, sm);
    const angle = (i / 6) * Math.PI * 2;
    sphere.position.set(
      Math.cos(angle) * 2.2,
      Math.sin(angle) * 0.5,
      Math.sin(angle) * 2.2,
    );
    orbitGroup.add(sphere);
  }
  scene.add(orbitGroup);

  // Particles
  const pGeo = new THREE.BufferGeometry();
  const pCount = 150;
  const pPos = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount * 3; i++) {
    pPos[i] = (Math.random() - 0.5) * 7;
  }
  pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0x55efc4,
    size: 0.025,
    transparent: true,
    opacity: 0.5,
  });
  const pPoints = new THREE.Points(pGeo, pMat);
  scene.add(pPoints);

  // Lights
  scene.add(new THREE.AmbientLight(0x404040, 0.8));
  const pl1 = new THREE.PointLight(0x00cec9, 2, 20);
  pl1.position.set(3, 2, 3);
  scene.add(pl1);
  const pl2 = new THREE.PointLight(0x6c5ce7, 1.5, 20);
  pl2.position.set(-3, -1, 2);
  scene.add(pl2);

  // Mouse interaction
  let mX = 0,
    mY = 0;
  parent.addEventListener("mousemove", (e) => {
    const rect = parent.getBoundingClientRect();
    mX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  });

  function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.005;
    torusKnot.rotation.y += 0.008;
    torusKnot.rotation.x += (mY * 0.5 - torusKnot.rotation.x) * 0.01;
    torusKnot.rotation.y += (mX * 0.5 - torusKnot.rotation.y) * 0.01;

    tkWire.rotation.x = torusKnot.rotation.x;
    tkWire.rotation.y = torusKnot.rotation.y;

    orbitGroup.rotation.y += 0.008;
    orbitGroup.rotation.x = Math.sin(Date.now() * 0.0005) * 0.3;

    pPoints.rotation.y += 0.0003;

    renderer.render(scene, camera);
  }
  animate();

  function onResize() {
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener("resize", onResize);
})();
