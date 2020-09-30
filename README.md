# test-mileapp

> Test Backend MileApp

This project developed for test as backend developer at MileApp.

## Documentation

[API Documentation Link](https://documenter.getpostman.com/view/11390332/TVRd8WWx)

## About Feathers

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/test-mileapp
    npm install
    ```
   
3. Edit `config/default.json` and set field mongodb url

    ```
    {
        "mongodb": "mongodb://localhost:27017/test_mileapp"
    }
    ```

4. Start your app

    ```
    npm start
   
    or
   
    npm run dev     # for development mode
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
