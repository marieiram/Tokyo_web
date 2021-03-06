

export default async (models) => {
    const locationList = [
        {
            name: "Cat Paradise",
            city: "Milan"
        },
        {
            name: "Cat City",
            city: "Rome"
        }
    ]
    const location0 = await models.Location.create(locationList[0])
    const location1 = await models.Location.create(locationList[1])

    const eventList = [
        {
            name: "Event 1",
            breed: "Siberian",
            description: "Details about event 1",
            img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            locationId: location0.id
        },
        {
            name: "Event 2",
            breed: "Birman",
            description: "Details about event 2",
            img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
            locationId: location0.id
        },
        {
            name: "Event 3",
            breed: "Bombay",
            description: "Details about event 3",
            img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
            locationId: location0.id
        },
        {
            name: "Event 4",
            breed: "Calico",
            description: "Details about cat 4",
            img: "https://fs.i3lab.group/hypermedia/cats/calico.jpg",
            locationId: location1.id
        },
        {
            name: "event 5",
            breed: "Maine Coon",
            description: "Details about event 5",
            img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg",
            locationId: location1.id
        },
    ]
    const thingtogoList = [
        {
            name: "Thing to go 1",
            breed: "Siberian",
            description: "Details about event 1",
            img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            locationId: location0.id
        },
        {
            name: "Thing to go 2",
            breed: "Birman",
            description: "Details about event 2",
            img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
            locationId: location0.id
        },
        {
            name: "Thing to go 3",
            breed: "Bombay",
            description: "Details about event 3",
            img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
            locationId: location0.id
        },
        {
            name: "Thing to go 4",
            breed: "Calico",
            description: "Details about cat 4",
            img: "https://fs.i3lab.group/hypermedia/cats/calico.jpg",
            locationId: location1.id
        },
        {
            name: "Thing to go 5",
            breed: "Maine Coon",
            description: "Details about event 5",
            img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg",
            locationId: location1.id
        },
    ]


    const tripplanList = [
        {
            name: "Trip plan 1",
            breed: "Siberian",
            description: "Details about Trip plan 1",
            img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            locationId: location0.id
        },
        {
            name: "Trip plan 2",
            breed: "Birman",
            description: "Details about Trip plan 2",
            img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
            locationId: location0.id
        },
        {
            name: "Trip plan 3",
            breed: "Bombay",
            description: "Details about Trip plan 3",
            img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
            locationId: location0.id
        },
    ]
    await models.Event.bulkCreate(eventList)
    await models.ThingToGo.bulkCreate(thingtogoList)
    await models.TripPlan.bulkCreate(tripplanList)
}