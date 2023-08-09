# ORM-E-Commerce-BackEnd

## Table of Contents

* [Description](#description)
* [Learning Points](#learning-points)
* [Installation](#installation)
* [Credits](#credits)
* [Questions](#questions)
* [Tests](#tests)
* [License](#license)

## Description
[Watch a video of the functionality of this code here!]()

The purpose of this project was to refactor code and make it functional. We were given all the back-end code of a E-Commerce site, however, there was no code written for the Models or the Api routes.  Using RESTful api practices to keep the code clean and up to most standards, I was able to connect HTTP requests to the server.

## Learning-Points

This was a usuful project for me because it solidified how useful RESTful api routes are. Once you get the hang of them it makes alot of sense. Almost all the routes had the same code with only the Model it was calling on changing.  So as long as your models are taken care of and properly named and organized, writing API routes for them is pretty straight forward. 

I did struggle with a few things though. For instance in my /models/index.js I did not use  

```
onDelete: "CASCADE"

```
for my Category. So I kept getting an error when I tried to use DELETE http req in insomnia.  I could not delete category because Product was an associated table to Category. Another issue i dealt with was accidentally adding an "s" or for getting one through out this code and getting silly errors. 

## Installation

User MUST have:

Mysql2
dotenv
mysql2
sequelize


## Credits

I would like to thank my fellow classmates, my tutors, teaching staff and my family for all the support through out this program.

## Questions

If you have any further questions please contact me.

- Name: Thomas Munzar
- Email: tmunzar92@gmail.com
- Github: [ThomasMunzar](https://github.com/ThomasMunzar/)

## Contributing

n/a

## Tests
n/a

## License

MIT License

Copyright (c) 2023 Thomas Munzar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.