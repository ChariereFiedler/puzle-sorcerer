# Sorcerer

## About

A Model Driven Engineering tool or how to generate code files from descriptive 
models.

Currently Sorcerer supports only class diagram.

## Features

- Read Loopback model json file and create abstract class system
- Generate typescript classes from abstract class system

## Roadmap

- <strike>Update the Readme with installation and usage instructions</strike>
- <strike>Add CLI support</strike>
- Add config file support

- Read XMI files and create abstract class system
- Generate C++ classes from abstract class system

- Abstract the project core and modularize the adapters

## Installation

**WIP**

    $npm i https://gitlab.com/puzle-project/Sorcerer.git -g

## Usage

Open a console and write :

    $sorcerer -m "./models/myModelLoopback.json" -d "./dist" -l loopback -f typescript
    
sorcerer --help

      Usage: sorcerer [options]
    
      Options:
    
        -h, --help                output usage information
        -V, --version             output the version number
        -m, --model <item>        The model location used for the generation
        -d, --destination <item>  The generation destination
        -l, --loader <item>       The loader used to extract the data
        -f, --format <item>       The generation format

Current supported loaders:

- Loopback

Current writer format supporter:

- Typescript