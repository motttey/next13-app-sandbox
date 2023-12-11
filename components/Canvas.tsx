"use client"

import { useEffect, useRef } from "react";
import webGLFluidEnhanced from 'webgl-fluid-enhanced';

const Canvas: React.FC = () => {
    const canvas: any  = useRef(null)
    useEffect(() => {
        if (canvas) {
            webGLFluidEnhanced.simulation(canvas?.current, {
                SIM_RESOLUTION: 256,
                DENSITY_DISSIPATION: 0.8,
                PRESSURE_ITERATIONS: 30,
                COLOR_PALETTE: ['#61dafb', '#a8dadc', '#457b9d', '#1d3557', '#f1faee'],
            });
        }
    }, []);

    return (
        <div className="canvas" style={{
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            position: 'fixed',
            zIndex: -1
        }}>
            <canvas ref={canvas} style={{
                width: '100%',
                height: '100%',
                opacity: '20%'
            }}></canvas> 
        </div>
    )
};

export default Canvas;
