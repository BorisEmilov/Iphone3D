import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from 'react'
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck,
} from "webgi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollAnimation } from '../lib/scroll-animation';

{/* we need to registrate the gsap plugin  */}
gsap.registerPlugin(ScrollTrigger)


const WebgiViewer = () => {
    const canvasRef = useRef(null)

    const memoizedAnimation = useCallback(
        (position, target, onUpdate) => {
            if(position && target && onUpdate){
                ScrollAnimation(position, target, onUpdate)
            }
        }, []
    )


    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })
        const manager = await viewer.addPlugin(AssetManagerPlugin)


        const camera = viewer.scene.activeCamera //camera access
        const position = camera.position // camera position
        const target = camera.target // target of the camera

        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)

        viewer.renderer.refreshPipeline()

        await manager.addFromPath("scene-black.glb")

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true

        viewer.scene.activeCamera.setCameraOptions({controlsEnabled: false})

        // to be updated the camera position only in certain condition
        let needsUpdate = true
        const onUpdate = () => {
            needsUpdate = true
            viewer.setDirty()
        }

        // camera update
        window.scrollTo(0, 0)
        viewer.addEventListener("preFrame", () => {
            if(needsUpdate){
                camera.positionTargetUpdated(true)
                needsUpdate = false
            }
        })

        memoizedAnimation(position, target, onUpdate)

    }, [])

    useEffect(() => {
        setupViewer()
    }, [])


    return (
        <div id='webgi-canvas-container'>
            <canvas id='webgi-canvas' ref={canvasRef}>

            </canvas>
        </div>
    )
}

export default WebgiViewer