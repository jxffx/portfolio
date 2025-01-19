import React, { useEffect, useRef } from "react";
import * as THREE from "three";
export function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    if (!containerRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: "#8b5cf6",
      transparent: true,
      opacity: 0.5,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );
    scene.add(particlesMesh);
    camera.position.z = 3;
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.001;
      // Follow mouse
      particlesMesh.rotation.x += mousePosition.current.y * 0.0005;
      particlesMesh.rotation.y += mousePosition.current.x * 0.0005;
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, rgba(17, 24, 39, 1) 70%)",
      }}
    />
  );
}
