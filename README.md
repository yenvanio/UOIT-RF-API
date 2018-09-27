[![Build Status](https://travis-ci.com/yenvanio/UOIT-RF-API.svg?branch=master)](https://travis-ci.com/yenvanio/UOIT-RF-API)
[![GitHub release](https://img.shields.io/github/release/yenvanio/UOIT-RF-API.svg)](https://github.com/yenvanio/UOIT-RF-API/releases)

# UOIT-Room-Finder-API

This is a Node API using a SQL Database, which is used for all three platforms of UOIT Room Finder.

## Link
- Visit http://uoit.yshiv.com:3000/api

## Usage
  - `@GET /class/all`
    - Parameters
      - Date *(YYYY-MM-DD)*
      - Start Time *(HH:mm:ss)*
      - End Time *(HH:mm:ss)*
    - This request also accepts an empty query and will return the open rooms at the time of request.

    - Sample Request
    ```
    http://uoit.yshiv.com:3000/api/class/all?date=2018-09-10&start_time=00:08:00&end_time=14:00:00
    ```
    - Sample Response

    ```
    {
      "classes": [
        {
          "room": "EDU212",
          "building": "Education Building",
          "location": "43.898021, -78.863524",
          "isLab": ""
        },
        {
          "room": "EDU311",
          "building": "Education Building",
          "location": "43.898021, -78.863524",
          "isLab": ""
        },
        {
          "room": "EDU312",
          "building": "Education Building",
          "location": "43.898021, -78.863524",
          "isLab": ""
        },
        {
          "room": "EDU210",
          "building": "Education Building",
          "location": "43.898021, -78.863524",
          "isLab": ""
        },
        {
          "room": "EDU211",
          "building": "Education Building",
          "location": "43.898021, -78.863524",
          "isLab": ""
        },
        {
          "room": "EDU313",
          "building": "Education Building",
          "location": "43.898021, -78.863524",
          "isLab": ""
        }
      ]
    }
    ```

  - `@GET /class/future`
    - Parameters
      - Room **(Required)**
      - Date *(YYYY-MM-DD)* **(Required)**
      - Start Time *(HH:mm:ss)*
    - This request requires the `Room` & `Date` parameters. It will return all the classes for the day if the `Start Time` is not specified

    - Sample Request
    ```
    http://uoit.yshiv.com:3000/api/class/future?date=2018-09-10&start_time=00:08:00&room=UA1350
    ```

    - Sample Response
      ```
      {
        "classes": [
          {
            "room": "UA1350",
            "start_time": "08:10:00",
            "end_time": "09:30:00",
            "title": "Intro to Health Info. Mngmt.",
            "code": "HLSC 2201U"
          },
          {
            "room": "UA1350",
            "start_time": "09:40:00",
            "end_time": "11:00:00",
            "title": "Biology I",
            "code": "BIOL 1010U"
          },
          {
            "room": "UA1350",
            "start_time": "09:40:00",
            "end_time": "11:00:00",
            "title": "Intro Cell & Molecular Biology",
            "code": "BIOL 1011U"
          },
          {
            "room": "UA1350",
            "start_time": "11:10:00",
            "end_time": "12:30:00",
            "title": "Anatomy & Physiology I",
            "code": "HLSC 1200U"
          },
          {
            "room": "UA1350",
            "start_time": "12:40:00",
            "end_time": "14:00:00",
            "title": "Anatomy & Physiology I",
            "code": "HLSC 1200U"
          },
          {
            "room": "UA1350",
            "start_time": "14:10:00",
            "end_time": "15:30:00",
            "title": "Pathophysiology I",
            "code": "HLSC 2460U"
          },
          {
            "room": "UA1350",
            "start_time": "17:10:00",
            "end_time": "18:30:00",
            "title": "Adv.Solid Mech.& Stress Analys",
            "code": "MECE 4210U"
          }
        ]
      }
      ```

  - `@GET /room/:id`
    - Parameters
      - Room Name (Building:Room_Number)
      - Examples: UA1350, UB2050, ERC1094

    - Sample Request
      ```
      http://uoit.yshiv.com:3000/api/room/ua1350
      ```
    - Sample Response
      ```
      {
        "details": [
          {
            "room": "UA1350",
            "location": "43.944509, -78.896440",
            "building": "Science Building (UA)"
          }
        ]
      }
      ```

  - `@GET /room/all`
    - Sample Request
      ```
      http://uoit.yshiv.com:3000/api/room/all
      ```
    - Sample Response
      ```
      {
        "rooms": [
          {
            "room": "DTA212",
            "building": "61 Charles Street Building",
            "location": "43.897385, -78.857999"
          },
          {
            "room": "DTA214",
            "building": "61 Charles Street Building",
            "location": "43.897385, -78.857999"
          },
          {
            "room": "DTA216",
            "building": "61 Charles Street Building",
            "location": "43.897385, -78.857999"
          },
          {
            "room": "DTA217",
            "building": "61 Charles Street Building",
            "location": "43.897385, -78.857999"
          },
          {
            "room": "DTA218",
            "building": "61 Charles Street Building",
            "location": "43.897385, -78.857999"
          },
          {
            "room": "DTA219",
            "building": "61 Charles Street Building",
            "location": "43.897385, -78.857999"
          },
          {
            "room": "DTA220",
            "building": "61 Charles Street Building",
            "location": "43.897385, -78.857999"
          },
          {
            "room": "DTB108",
            "building": "Bordessa Hall",
            "location": "43.898641, -78.862043"
          },
          {
            "room": "DTB204",
            "building": "Bordessa Hall",
            "location": "43.898641, -78.862043"
          },
          {
            "room": "DTB205",
            "building": "Bordessa Hall",
            "location": "43.898641, -78.862043"
          },
          {
            "room": "DTB210",
            "building": "Bordessa Hall",
            "location": "43.898641, -78.862043"
          },
          {
            "room": "DTR100",
            "building": "Regent Theatre",
            "location": "43.898301, -78.861992"
          },
          {
            "room": "EDU210",
            "building": "Education Building",
            "location": "43.898021, -78.863524"
          },
          {
            "room": "EDU211",
            "building": "Education Building",
            "location": "43.898021, -78.863524"
          },
          {
            "room": "EDU212",
            "building": "Education Building",
            "location": "43.898021, -78.863524"
          },
          {
            "room": "EDU311",
            "building": "Education Building",
            "location": "43.898021, -78.863524"
          },
          {
            "room": "EDU312",
            "building": "Education Building",
            "location": "43.898021, -78.863524"
          },
          {
            "room": "EDU313",
            "building": "Education Building",
            "location": "43.898021, -78.863524"
          },
          {
            "room": "ENG1030",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG1035",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG1040",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG1045",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG1050",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG2030",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG2035",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG2045",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG3030",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG3035",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG3040",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG3045",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ENG3050",
            "building": "OPG Engineering Building",
            "location": "43.945772, -78.898470"
          },
          {
            "room": "ERC1054",
            "building": "Energy Research Centre (ERC)",
            "location": "43.945668, -78.896271"
          },
          {
            "room": "ERC1056",
            "building": "Energy Research Centre (ERC)",
            "location": "43.945668, -78.896271"
          },
          {
            "room": "ERC1092",
            "building": "Energy Research Centre (ERC)",
            "location": "43.945668, -78.896271"
          },
          {
            "room": "ERC1094",
            "building": "Energy Research Centre (ERC)",
            "location": "43.945668, -78.896271"
          },
          {
            "room": "ERC1096",
            "building": "Energy Research Centre (ERC)",
            "location": "43.945668, -78.896271"
          },
          {
            "room": "ERC2052",
            "building": "Energy Research Centre (ERC)",
            "location": "43.945668, -78.896271"
          },
          {
            "room": "ERC2056",
            "building": "Energy Research Centre (ERC)",
            "location": "43.945668, -78.896271"
          },
          {
            "room": "ERC3027",
            "building": "Energy Research Centre (ERC)",
            "location": "43.945668, -78.896271"
          },
          {
            "room": "ERC3052",
            "building": "Energy Research Centre (ERC)",
            "location": "43.945668, -78.896271"
          },
          {
            "room": "ERC3054",
            "building": "Energy Research Centre (ERC)",
            "location": "43.945668, -78.896271"
          },
          {
            "room": "ERC3094",
            "building": "Energy Research Centre (ERC)",
            "location": "43.945668, -78.896271"
          },
          {
            "room": "J101-A",
            "building": "Simcoe Building/J-Wing",
            "location": "43.945835, -78.894623;43.945153, -78.894744;43.944914, -78.894626"
          },
          {
            "room": "J101-B",
            "building": "Simcoe Building/J-Wing",
            "location": "43.945835, -78.894623;43.945153, -78.894744;43.944914, -78.894626"
          },
          {
            "room": "J102",
            "building": "Simcoe Building/J-Wing",
            "location": "43.945835, -78.894623;43.945153, -78.894744;43.944914, -78.894626"
          },
          {
            "room": "J115",
            "building": "Simcoe Building/J-Wing",
            "location": "43.945835, -78.894623;43.945153, -78.894744;43.944914, -78.894626"
          },
          {
            "room": "SIRC1350",
            "building": "Software and Informatics Resea",
            "location": "43.947846, -78.898861"
          },
          {
            "room": "SIRC2010",
            "building": "Software and Informatics Resea",
            "location": "43.947846, -78.898861"
          },
          {
            "room": "SIRC2020",
            "building": "Software and Informatics Resea",
            "location": "43.947846, -78.898861"
          },
          {
            "room": "SIRC2060",
            "building": "Software and Informatics Resea",
            "location": "43.947846, -78.898861"
          },
          {
            "room": "SIRC3110",
            "building": "Software and Informatics Resea",
            "location": "43.947846, -78.898861"
          },
          {
            "room": "SIRC3330",
            "building": "Software and Informatics Resea",
            "location": "43.947846, -78.898861"
          },
          {
            "room": "SIRC4130",
            "building": "Software and Informatics Resea",
            "location": "43.947846, -78.898861"
          },
          {
            "room": "SIRC4150",
            "building": "Software and Informatics Resea",
            "location": "43.947846, -78.898861"
          },
          {
            "room": "SIRC4160",
            "building": "Software and Informatics Resea",
            "location": "43.947846, -78.898861"
          },
          {
            "room": "SW202",
            "building": "SOUTH WING",
            "location": "43.942854, -78.896151"
          },
          {
            "room": "SW206",
            "building": "SOUTH WING",
            "location": "43.942854, -78.896151"
          },
          {
            "room": "UA1120",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA1140",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA1220",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA1240",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA1350",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA1420",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA1440",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA1520",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA1540",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA1620",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA1640",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA2120",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA2130",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA2140",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA2220",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA2230",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA2240",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA2460",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA3120",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA3130",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA3140",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA3220",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA3230",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA3240",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA3420",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA3480",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA3520",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA3620",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UA3680",
            "building": "Science Building (UA)",
            "location": "43.944509, -78.896440"
          },
          {
            "room": "UB2034",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UB2050",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UB2054",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UB2058",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UB2080",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UB3075",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UB3085",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UB3095",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UB4050",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UB4075",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UB4085",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UB4095",
            "building": "Business and IT Building (UB)",
            "location": "43.945162, -78.896099"
          },
          {
            "room": "UL1",
            "building": "UL Building",
            "location": "43.946217, -78.897332"
          },
          {
            "room": "UL10",
            "building": "UL Building",
            "location": "43.946217, -78.897332"
          },
          {
            "room": "UL12",
            "building": "UL Building",
            "location": "43.946217, -78.897332"
          },
          {
            "room": "UL2",
            "building": "UL Building",
            "location": "43.946217, -78.897332"
          },
          {
            "room": "UL3",
            "building": "UL Building",
            "location": "43.946217, -78.897332"
          },
          {
            "room": "UL4",
            "building": "UL Building",
            "location": "43.946217, -78.897332"
          },
          {
            "room": "UL6",
            "building": "UL Building",
            "location": "43.946217, -78.897332"
          },
          {
            "room": "UL8",
            "building": "UL Building",
            "location": "43.946217, -78.897332"
          },
          {
            "room": "UL9",
            "building": "UL Building",
            "location": "43.946217, -78.897332"
          },
          {
            "room": "UP1501",
            "building": "University Pavilion",
            "location": "43.943585, -78.896979"
          },
          {
            "room": "UP1502",
            "building": "University Pavilion",
            "location": "43.943585, -78.896979"
          }
        ]
      }
      ```

  - `@GET /room/schedule`
    - Parameters
      - Room Name (Building:Room_Number)
      - Examples: UA1350, UB2050, ERC1094

    - Sample Request
    ```
    http://uoit.yshiv.com:3000/api/room/schedule?room=UA1120
    ```

    - Sample Response
    ```
    {
      "classes": [
        {
          "day": "M",
          "start_time": "08:10:00",
          "end_time": "09:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "M",
          "start_time": "09:40:00",
          "end_time": "11:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "M",
          "start_time": "11:10:00",
          "end_time": "12:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "M",
          "start_time": "12:40:00",
          "end_time": "14:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "M",
          "start_time": "14:10:00",
          "end_time": "15:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "M",
          "start_time": "15:40:00",
          "end_time": "17:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "M",
          "start_time": "17:10:00",
          "end_time": "18:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "T",
          "start_time": "09:40:00",
          "end_time": "11:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "T",
          "start_time": "11:10:00",
          "end_time": "12:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "T",
          "start_time": "12:40:00",
          "end_time": "14:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "T",
          "start_time": "14:10:00",
          "end_time": "15:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "T",
          "start_time": "15:40:00",
          "end_time": "17:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "T",
          "start_time": "17:10:00",
          "end_time": "18:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "W",
          "start_time": "08:10:00",
          "end_time": "09:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "W",
          "start_time": "09:40:00",
          "end_time": "11:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "W",
          "start_time": "11:10:00",
          "end_time": "12:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "W",
          "start_time": "12:40:00",
          "end_time": "14:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "W",
          "start_time": "14:10:00",
          "end_time": "15:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "W",
          "start_time": "15:40:00",
          "end_time": "17:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "W",
          "start_time": "17:10:00",
          "end_time": "18:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "R",
          "start_time": "09:40:00",
          "end_time": "11:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "R",
          "start_time": "11:10:00",
          "end_time": "12:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "R",
          "start_time": "12:40:00",
          "end_time": "14:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "R",
          "start_time": "14:10:00",
          "end_time": "15:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "R",
          "start_time": "16:10:00",
          "end_time": "17:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "R",
          "start_time": "18:40:00",
          "end_time": "21:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "F",
          "start_time": "08:10:00",
          "end_time": "09:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "F",
          "start_time": "09:40:00",
          "end_time": "11:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "F",
          "start_time": "11:10:00",
          "end_time": "12:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "F",
          "start_time": "12:40:00",
          "end_time": "14:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "F",
          "start_time": "14:10:00",
          "end_time": "15:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "F",
          "start_time": "15:40:00",
          "end_time": "17:00:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        },
        {
          "day": "F",
          "start_time": "17:10:00",
          "end_time": "18:30:00",
          "start_date": "2018-09-06T00:00:00.000Z",
          "end_date": "2018-12-05T00:00:00.000Z"
        }
      ]
    }
    ```
