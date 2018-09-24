var config = {
    development: {
        //url to be used in link generation
        url: 'http://127.0.0.1',
        //mysql connection settings
        database: {
            host: "localhost",
            user: "root",
            password: "testpass",
            database: "Room Finder"
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3422'
        }
    },
    production: {
        //url to be used in link generation
        url: 'http://uoit.yshiv.com/api',
        //mysql connection settings
        database: {
            host: 'uoitroomfinder.c3s9efoa2w20.us-east-1.rds.amazonaws.com',
            user: "yenvanio",
            password: "pikachu_touch",
            database:   'Room_Finder'
        },
        //server details
        server: {
            host:   '52.90.171.9',
            port:   '3421'
        }
    }
    };
    module.exports = config;