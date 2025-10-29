import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SmallSparksBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1, 10); // Add fog for depth

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

  const sparkCount = 700; // fewer sparks for subtler look
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(sparkCount * 3);
    const velocities = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15; // Wider spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Taller spread
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

  // Slower spark movement with gentle upward bias
  velocities[i * 3] = (Math.random() - 0.5) * 0.02;
  velocities[i * 3 + 1] = Math.random() * 0.04; // gentle upward bias
  velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Metallic orange-gold sparks
    const material = new THREE.PointsMaterial({
      color: 0xffa54f, // Enhanced warm metallic color
      size: 0.015, // much smaller dots
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const sparks = new THREE.Points(geometry, material);
    scene.add(sparks);

    function animate() {
      requestAnimationFrame(animate);

      for (let i = 0; i < sparkCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        // Reset particles that move too far up or down
        if (positions[i * 3 + 1] > 3 || positions[i * 3 + 1] < -3) {
          positions[i * 3] = (Math.random() - 0.5) * 10;
          positions[i * 3 + 1] = -3;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // Subtle flicker effect
      const flicker = Math.sin(Date.now() * 0.006) * 0.4 + 0.6;
      material.opacity = flicker;

      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        background: 'transparent',
        overflow: 'hidden',
        mixBlendMode: 'normal'
      }}
    />
  );
}
