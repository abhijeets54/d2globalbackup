import React, { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MeshStandardMaterial } from 'three';

const Plane = () => {
  const obj = useLoader(OBJLoader, '/path/to/your/model.obj'); // Replace with your .obj file path
  const materialRef = useRef();

  // Create a basic material for the model
  const basicMaterial = new MeshStandardMaterial({ color: 'white', roughness: 0.5 });

  // Apply the material to the loaded object
  useEffect(() => {
    if (obj) {
      obj.traverse((child) => {
        if (child.isMesh) {
          child.material = basicMaterial; // Apply the basic material
        }
      });
    }
  }, [obj]);

  return <primitive object={obj} scale={0.5} />;
};
