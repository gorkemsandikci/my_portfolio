import React from "react";

import {useGLTF} from "@react-three/drei";

import birdScene from '../assets/3d/bird.glb'

const Bird = () => {

    const {scene, animations} = useGLTF(birdScene);

    return (
        <mesh position={[2, 1, 1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene}></primitive>
        </mesh>
    )
}

export default Bird