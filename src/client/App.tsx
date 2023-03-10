import React, { useState } from "react"
import Scene from './components/scene'
import Header from './components/Header'
import {Input} from './components/Input'
import {Me} from './components/Me'
import {Main} from './components/Main'
import {Footer} from './components/footer'
import { DarkTheme, LightTheme } from "./Theme"
import { ThemeProvider} from "styled-components"
import { GlobalStyle } from "./GlobalStyle"
import { Sum } from "./components/sum"

const App = () => {

  const [theme, setTheme] = useState('dark');
  const ThemeToggle = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <GlobalStyle/>
        <Header/>
        <Scene onClick={() => ThemeToggle()}/>
        <Me/>
        <Input/>
        <Main/>
        <Footer/>
    </ThemeProvider>      
  )
}

export default App



// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// const scene = new THREE.Scene()
// scene.background = new THREE.Color(0xff)

// const light = new THREE.PointLight(0xfffff, 2);
// light.position.set(10, 10 ,10)
// scene.add(light)

// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// )
// camera.position.z = 8

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

// new OrbitControls(camera, renderer.domElement)

// const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshLambertMaterial({
//     color: 0x00ff00,
//     wireframe: false,
// })

// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

// function animate() {
//     requestAnimationFrame(animate)

//     cube.rotation.x += 0.01
//     cube.rotation.y += 0.01

//     render()
// }

// function render() {
//     renderer.render(scene, camera)
// }

// animate()