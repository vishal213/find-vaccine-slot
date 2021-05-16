# find-vaccine-slot
Node Project to find any Cowin open slot for a particular PIN code.

## Running Project
You need node and npm installed on system. Check using

    node -v

    npm -v



If not installed, use [this link](https://nodejs.org/en/download/)

Once node is installed, follow below:


Clone the repository.

    cd find-vaccine-slot

    npm install

    node vaccine.js <PIN> <true|false> <URL>



Argument 1 = PIN code of area (India) for which you want to check slots. Default is 125001 (Hisar, Haryana)

Argument 2 = Whether you want to play a song when an open slot is found ;-) Default is false.

Argument 3 = If you want to play song, paste URL of song here, youtube or something. By default, it plays Bhaag DK Bose