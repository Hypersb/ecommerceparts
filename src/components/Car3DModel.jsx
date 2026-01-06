import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Car3DModel = ({ modelType, color, autoRotate, rotationSpeed = 0.3, wheels, exhaust }) => {
  const carRef = useRef();
  
  // Create a parametric car mesh when 3D models aren't available
  const createCarGeometry = () => {
    const car = new THREE.Group();
    
    // Car body - main chassis
    const bodyGeometry = new THREE.BoxGeometry(4, 1.2, 2);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: color,
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 1.5,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.6;
    body.castShadow = true;
    body.receiveShadow = true;
    car.add(body);
    
    // Car roof/cabin
    const roofGeometry = new THREE.BoxGeometry(2.5, 0.8, 1.8);
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: color,
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 1.5,
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.set(-0.3, 1.6, 0);
    roof.castShadow = true;
    roof.receiveShadow = true;
    car.add(roof);
    
    // Windows - dark tinted
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.5,
      roughness: 0.2,
      transparent: true,
      opacity: 0.3,
    });
    
    // Front windshield
    const windshieldGeometry = new THREE.BoxGeometry(0.1, 0.7, 1.7);
    const windshield = new THREE.Mesh(windshieldGeometry, windowMaterial);
    windshield.position.set(0.9, 1.6, 0);
    windshield.rotation.z = 0.3;
    car.add(windshield);
    
    // Side windows
    const sideWindowGeometry = new THREE.BoxGeometry(2, 0.6, 0.1);
    const leftWindow = new THREE.Mesh(sideWindowGeometry, windowMaterial);
    leftWindow.position.set(-0.3, 1.6, 0.9);
    car.add(leftWindow);
    
    const rightWindow = leftWindow.clone();
    rightWindow.position.z = -0.9;
    car.add(rightWindow);
    
    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 32);
    const wheelMaterial = new THREE.MeshStandardMaterial({
      color: wheels?.color || 0x1a1a1a,
      metalness: 0.8,
      roughness: 0.2,
    });
    
    // Rim detail
    const rimGeometry = new THREE.CylinderGeometry(0.25, 0.25, 0.31, 32);
    const rimMaterial = new THREE.MeshStandardMaterial({
      color: 0xc0c0c0,
      metalness: 1,
      roughness: 0.1,
    });
    
    const wheelPositions = [
      { x: 1.3, y: 0.4, z: 1.1 },
      { x: 1.3, y: 0.4, z: -1.1 },
      { x: -1.3, y: 0.4, z: 1.1 },
      { x: -1.3, y: 0.4, z: -1.1 },
    ];
    
    wheelPositions.forEach(pos => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(pos.x, pos.y, pos.z);
      wheel.castShadow = true;
      car.add(wheel);
      
      const rim = new THREE.Mesh(rimGeometry, rimMaterial);
      rim.rotation.z = Math.PI / 2;
      rim.position.set(pos.x, pos.y, pos.z + (pos.z > 0 ? 0.16 : -0.16));
      car.add(rim);
    });
    
    // Headlights
    const headlightGeometry = new THREE.BoxGeometry(0.3, 0.2, 0.4);
    const headlightMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffee,
      emissive: 0xffffaa,
      emissiveIntensity: 0.5,
      metalness: 0.5,
      roughness: 0.1,
    });
    
    const leftHeadlight = new THREE.Mesh(headlightGeometry, headlightMaterial);
    leftHeadlight.position.set(2.05, 0.7, 0.6);
    car.add(leftHeadlight);
    
    const rightHeadlight = leftHeadlight.clone();
    rightHeadlight.position.z = -0.6;
    car.add(rightHeadlight);
    
    // Taillights
    const taillightMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0xff0000,
      emissiveIntensity: 0.3,
      metalness: 0.5,
      roughness: 0.1,
    });
    
    const leftTaillight = new THREE.Mesh(headlightGeometry, taillightMaterial);
    leftTaillight.position.set(-2.05, 0.7, 0.6);
    car.add(leftTaillight);
    
    const rightTaillight = leftTaillight.clone();
    rightTaillight.position.z = -0.6;
    car.add(rightTaillight);
    
    // Front grille
    const grilleGeometry = new THREE.BoxGeometry(0.1, 0.6, 1.4);
    const grilleMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.8,
      roughness: 0.3,
    });
    const grille = new THREE.Mesh(grilleGeometry, grilleMaterial);
    grille.position.set(2, 0.6, 0);
    car.add(grille);
    
    // Exhaust pipes
    const exhaustColor = exhaust?.color || 0x2a2a2a;
    const exhaustGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.4, 16);
    const exhaustMaterial = new THREE.MeshStandardMaterial({
      color: exhaustColor,
      metalness: 0.9,
      roughness: 0.2,
    });
    
    const leftExhaust = new THREE.Mesh(exhaustGeometry, exhaustMaterial);
    leftExhaust.rotation.z = Math.PI / 2;
    leftExhaust.position.set(-2.2, 0.3, 0.5);
    car.add(leftExhaust);
    
    const rightExhaust = leftExhaust.clone();
    rightExhaust.position.z = -0.5;
    car.add(rightExhaust);
    
    // Spoiler for M models
    if (modelType?.includes('M3') || modelType?.includes('M4') || modelType?.includes('M5')) {
      const spoilerGeometry = new THREE.BoxGeometry(0.2, 0.3, 1.8);
      const spoilerMaterial = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.9,
        roughness: 0.1,
      });
      const spoiler = new THREE.Mesh(spoilerGeometry, spoilerMaterial);
      spoiler.position.set(-1.9, 1.3, 0);
      spoiler.rotation.x = -0.2;
      car.add(spoiler);
    }
    
    return car;
  };
  
  useFrame((state, delta) => {
    if (carRef.current && autoRotate) {
      carRef.current.rotation.y += delta * rotationSpeed;
    }
  });
  
  return (
    <group ref={carRef} position={[0, -0.5, 0]}>
      <primitive object={createCarGeometry()} />
    </group>
  );
};

export default Car3DModel;
