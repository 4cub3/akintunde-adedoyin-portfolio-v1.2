"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

type Props = {
  detail: number;
  reducedMotion: boolean;
  enableTilt: boolean;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
};

export function WireframeIcosahedron({
  detail,
  reducedMotion,
  enableTilt,
  pointer,
}: Props) {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);

  const geometry = useMemo(
    () => new THREE.IcosahedronGeometry(1.35, detail),
    [detail],
  );

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    const group = groupRef.current;
    if (!mesh || !group) return;

    if (!reducedMotion) {
      mesh.rotation.y += delta * 0.25;
      mesh.rotation.x += delta * 0.08;
    }

    if (enableTilt && !reducedMotion) {
      const targetX = pointer.current.y * 0.2;
      const targetY = pointer.current.x * 0.3;
      group.rotation.x += (targetX - group.rotation.x) * 0.06;
      group.rotation.y += (targetY - group.rotation.y) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial
          color="#3B82F6"
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}
