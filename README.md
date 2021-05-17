# find-vaccine-slot
Node Project to find any Cowin open slot for a particular PIN code.

## Running Project
You need node and npm installed on system. Check using

    node -v

    npm -v



If not installed, use [this link](https://nodejs.org/en/download/)

Once node is installed, follow below:

One Time Steps:

    git clone https://github.com/vishal213/find-vaccine-slot.git
    
    cd find-vaccine-slot

    npm install
    
 Now everything is setup. Anytime you need to track slots for any PIN code, use below:

    node vaccine.js <PIN> <true|false> <URL>


Argument 1 = PIN code of area (India) for which you want to check slots. Default is 125001 (Hisar, Haryana)

Argument 2 = Whether you want to play a song when an open slot is found ;-) Default is false.

Argument 3 = If you want to play song, paste URL of song here, youtube or something. By default, it plays Bhaag DK Bose

You can run more than one instances of above to track slots at multiple PIN codes. If you're not running any song on slot detection, keep an eye on terminal output which is updated every 10 seconds.


## Example Runs:

node vaccine.js 125001

node vaccine.js 125001 true

node vaccine.js 125001 true https://www.youtube.com/watch?v=Ev42bToEkDQ

OUTPUT:

![Screenshot](https://user-images.githubusercontent.com/25406861/118475288-b1d4fd80-b729-11eb-8fd2-bf4177225c79.png)
