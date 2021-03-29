# Rodja-webXR  | [Try it out!](https://rodja-webxr.firebaseapp.com) 

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)



### Description

Rodja is a  module in which the player sees jewels on a road
around them and tries to collects jewels on it in front of them as fast as they
could while avoiding distractions. 

### Story

The gameplay occurs on a track shaped in different shapes and cycling
around the player. There are multiple environments that the player and the track
can be placed in.

## Characters



### Player:

- The player plays from a first person perspective. The player character is
not seen on the screen. Instead the player controls a circle pointer at the
center of his/her eyesight that they use to point at the jewels to collect
them.
The player controls the pointer only by moving their head around as the
pointer should express their eyes’ center’s direction.
### NPC:

- An NPC plays along the player to encourage them and tell them the rules
of the game.
The NPC has two options: either a boy or a girl. 
### Goals:

- The player must collect all jewels before the time ends, or as fast as they
could, without getting distracted by distractions around them, or by the movement
of the jewels themselves.

### Statistics:

- In progress
### Technologies Used

- [A-Frame](https://aframe.io/)
   - [Alongpath](https://www.npmjs.com/package/aframe-alongpath-component) 
   - [Animation Mixer](https://www.8thwall.com/8thwall/animation-mixer-aframe) 
   - [AABB Colider](https://github.com/supermedium/superframe/tree/master/components/aabb-collider/)
   - [SPE Particles](https://github.com/harlyq/aframe-spe-particles-component) 
   - [Controller Cursor](https://www.npmjs.com/package/aframe-controller-cursor-component) 
   - [Event set](https://www.npmjs.com/package/aframe-event-set-component)

- HTML, CSS, TypeScript, JavaScript

# Installation Guide  
   
#### 1 | Install and run the project locally using NPM
---
> node v15.5.0
> npm v7.3.0

 1. Clone the repository `https://github.com/vrapeutic/Rodja-webXR.git
 2. Go to the repo's directory `cd Rodja-webXR`
 3. Run `npm install` to install the required dependecies
 4. Run `npm run dev` command to start the WebXR app in your local envirotnment
 5. Go to the localhost URL specified in the terminal
 6. Congrats! You've got your local development environment ready!

#### 2 | Install and run the project locally using Docker
---
> `docker v20.10.1`

- Yet to be implemented.

#### 3 | Run the project on Glitch platform
---
1. Go to [Glitch](https://glitch.com/) platform.

2. Create an account if you don't already have one.

3. On your dashboard, then click __New project__ , then choose the __Import from GitHub__ option.

4. Paste the repo's full [url](https://github.com/vrapeutic/Rodja-webXR.git), then click __Ok__.

5. You're ready to go!

### Preferred platform 
---
If you are going to be using a VR Headset, then we recommend trying the app (either the [hosted version](https://rodja-webxr.firebaseapp.com/) or on [Glitch](https://glitch.com/)) on the [Oculus Browser](https://developer.oculus.com/webxr/).



For local development and testing, modern browsers could be used, where mouse and keyboard interactions will be the main source of interaction with the VR environment.

## Code structures

-  __Assets__ directory
   - All GLTF models and sounds could be found in assets folder.

-  __index.html__
   - Contains environment entities .
   
-  __index.js__   
   - Here we define all our global variables and most of our variables used for statistics computation.
   
   
-  __js__ directory
   - Contains all logic and based on AFrame and JS code. Check [here](https://github.com/vrapeutic/GardenDoWebXR/blob/main/Js/README.md) for more information
   
# Contributions   

First off, thanks for taking the time to contribute! You can check out our contribution guidelines from this [link](https://github.com/vrapeutic/Rodja-webXR/blob/main/CONTRIBUTING.md).

Please note that this project is released with a Contributor Code of Conduct, which can be found [here](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating in this project you agree to abide by its terms.
