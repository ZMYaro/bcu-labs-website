---
title: What is OpenStreetMap?
---

<h1>What is OpenStreetMap?</h1>

[OpenStreetMap (OSM)](https://www.OpenStreetMap.org) is the data source for the calculations used to rate each street segment on our [Stress Map](../map/).  OSM is an incredible resource that, much like Wikipedia, is volunteer-edited to add details and keep the map current to changes (e.g. new bike lanes being installed).  By editing the map directly, you will make the Stress Map more accurate, and you will improve the baseline data used in most of your favorite bike and navigation apps, including [Bluebikes](https://account.bluebikes.com/map), [Strava](https://www.strava.com), [Ride With GPS](https://RideWithGPS.com), [GeoVelo](https://GeoVelo.app/en/route/?bike-type=own&c=-71.057045%2C42.340951&e-bike=false&z=11.07), [Pointz](https://www.BikePointz.com/download), and many more.


## Want to help improve our map?

If you are interested in the type of projects we are working on, [join us at BCU Labs!](https://docs.google.com/forms/d/e/1FAIpQLSefzxEQ-CAbJd_rrt90DHvdglYvP9RLqdDUVsFq28onw9xXJQ/viewform)  Any and all levels of experience are welcomed.  We are always looking for new volunteers that are interested in data-backed analysis and storytelling.

If you see a data accuracy issue and want the BCU Labs to investigate and fix it, you can use [this form](https://forms.gle/ytyKV7ZrnzYZToCi9) to let us know.


## Recmmended map editing tools

These are some of the tools that the BCU Labs team has experience with to edit OpenStreetMap.  Each of these tools has different strengths for different types of editing and you may find value using multiple of them.

- [OpenStreetMap.org](https://www.OpenStreetMap.org)
- [StreetComplete (Android only, beginner-friendly)](https://StreetComplete.app)
- [MapComplete](https://MapComplete.org)
- [OverpassTurbo](https://Overpass-Turbo.eu)
- [JOSM](https://josm.openstreetmap.de)
- [Vespucci (Android only, advanced)](https://vespucci.io)


## Tags we use

OSM data is organized as ways (street segments) that have attributes attached to them called [tags](https://wiki.openstreetmap.org/wiki/Tags).  These tags contain a key and a value. This is the data that we are able to use to calculate the [Level of Traffic Stress (LTS)](../map/lts/) of each street segment.  You can see exactly what tags we use [here](https://github.com/BostonCyclistsUnion/StressMap/tree/main/config) and a general overview of which tags are most important for our calculations below:

- [highway](https://wiki.openstreetmap.org/Key:highway): Describes the type of road
- [cycleway](https://wiki.openstreetmap.org/Key:cycleway): Describes the type of bike lane.  Sub-tags add details about bike lane, including width and separation
- [footway](https://wiki.openstreetmap.org/Key:footway): Type of pedestrian path.  May have complementing tags to allow bikes
- [parking](https://wiki.openstreetmap.org/Key:parking): Is there street parking?
- [width](https://wiki.openstreetmap.org/Key:width): Width of the roadway
- [oneway](https://wiki.openstreetmap.org/Key:oneway): Is the street a oneway?
- [bicycle](https://wiki.openstreetmap.org/Key:bicycle): Are bicycles allowed on the way?
- [access](https://wiki.openstreetmap.org/Key:access): Is the public allowed here?
- [service](https://wiki.openstreetmap.org/Key:service): Alleys and driveways
- [lane_markings](https://wiki.openstreetmap.org/Key:lane_markings): Are lane lines painted?  Used to estimate daily car traffic
- [lanes](https://wiki.openstreetmap.org/Key:lanes): Number of lanes
