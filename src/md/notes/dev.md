1/18/2023 9:27PM\
Okay so MERN exclusively uses MongoDB, I'm using Mariadb.\
\
1/18/2023 8:22PM\
Gonna set up a simple MERN based comment app to plug into the archive. I know so little about Express and Node-to-DB config, so I should get
some good exposure. I've been building the registration and I'm effectively done with the imager (save for a little polishing), what comes next
is a database. Better late than never.\
\
1/17/2023 3:30PM\
I've been building the imager for the registration and process and as I'm doing so, I'm thinking about how to apply the module across the 
entire platform so I'm not writing an imager for every aspect of the user's model. The "habbo-imaging/avatarimage?" url scheme can return the
sprites in varies angles, sizes, etc. These sprite IDs don't need to be narrowed any further, and it will be easy to add newer generations 
of clothing/styles. Additionally, if the user's entire model, from small, big, dancing, eating, talking, can be pointed to a url,  that url
could be really useful for showing user actions.\
\
1/16/2023: 7:19PM\
My main goal as I go is to homogenize everything. Components need to be distinguishable from their counterparts but still ambiguous enough
that I'm not writing logic for every single possible scenario. At the same time, trying to minimize code as much as possible, which is difficult
to do when writing code in a language [library] that I am very unfamiliar with.\
\
1/15/2023 4:58PM\
Configuring the DB connection is looming over me.. Also still need to create the hotel view gifs. The Hotel itself is still static, so vehicles
and clouds aren't moving, but I'd like to fix that. \
\
1/15/2023 2:49PM\
I'm finding that a few classic styles, in particular sandals and the 2nd hairstyle, are showing up improperly. I've been using
fuusio's imager ([fuusio.net](https://fuusio.net)) as a reference to generate the sprite IDs. Their imager is correctly rendering the sprites
but when generating the img url and injecting the matching sprite IDs, weird sprites are coming back.\
\
Additionally, I need to write the logic that will replace the hair and render a hat.\
\
1/15/2023 2:34AM\
Okay because I'm sure I'll forget how I hacked together an imager, my process was as such:\
\
The current selected sprite (head, chest, legs, shoes, hair) is saved in the user slice. It's done so by creating an array of possible
sprites available in the 2006 era for each part of the avatar. An index flag is created to track the current selected sprite of that array.
The flag value is concatenated with the official Habbo imager url. Because the avatar is not animating, i.e walking, dancing, etc, it's just
creating the static figure in the oldschool configuration. \
\
By using the official link, we don't have to store and load the images. I don't think Sulake would be too happy about that. I'll have to save
and configure everything locally, it'll just suck dissecting those sprites individually.
\
\
1/14/2023 12:14AM\
Got distracted for a while. I got stuck cause I thought I needed to have cross-slice access but I just need to be better organized.\
\
Defining the top-level Notice component by means of the "Next" button on the Terms section of the registration process. Now, when the 
Notice component needs to be triggered, the 'noticeOpen' flag is flipped, and the heading/message is passed through. That way, at 
top level, i.e Main, all you ever see is <Notice/>\
\
1/4/2023 9:54PM\
A side-thought throughout this project so far has been the Archive UI. I'd like it to be short and sweet but still use a unique 
layout specific to Habbo.\
\
I've also begun to shift all the UI back and bring authentication forward. I'm just going to setup a simple CRUD app using Express, although
I'm not sure which DB manager I should use, pretty sure it's just going to be MySQL, it doesn't need any crazy contemporary frameworks.\
\
Until given better instruction, the basic premise will be: \
\
The user authenticates, a User model in Express is retrieved and a slice  in Redux is generated based on that model's data, i.e username, motto,
credits, etc. Everything specific to a user.\
\
or \
\
The user registers, during which a Redux slice is built using the user's input. At the end, a new entry into the DB will be added using the 
user-inputted data and the default values of everything else (credits, photos, tickets, etc).\
\
1/2/2023 2:22PM\
Finally took the time to dig deeper into the documentation for Router, thankfully I didn't start using it yet because I've learned a few things.
I'm also beginning to configure the logic for authentication. When the site is loaded, it will automatically load the hotel view with the login page.
The core UI functions that are specific to the user will obviously be off limits until they authenticate, but the archive portion of the site will 
be able to be viewed without logging in or authenticating.\
\
12/31/2022 1:20AM\
I think I'll buildout the login/signup process first, that way everything from this point on will be built from the first point of contact.\
\
12/29/2022 11:20PM\
Need to move the UI bg outside the the UI component itself, it'll be there even if the user isn't logged in\
\
Also don't know how to account for the console scrollbar, not sure if it's possible to change the scrollbar bg.\
\
12/29/2022 8:31PM:\
The logic for the console should be fairly easy. When the UI is rendered, it will import and declare the relevant info of the user.
Therefore, the info within the console will be auto populated. Obviously then the issue is maintaining a real-time connection
to the database to monitor and and update for changes. The component and the databse needs to be synchronous. I have no doubt there's
a framework or library for that, if it's not already baked directly into React...\
\
(gonna write these down now and go back and write them)\
Logic needed for the console:\
-- MyInfo\
---- Import head model from imager based on user model ID\
---- Setting motto\
---- Changing from My Info page to messages when there's a new message\
---- Checking from My Info to friend requests when theres a new one\
\
12/27/2022 1:36AM:\
Console fundamentals completed. I'm sure the logic can be cleaned up, but my main goal is functionality, then I'll go back through
and re-factor. I think I'm doing a good job at future-proofing everything, in which case integrating Redux with whatever back-end I 
settle on shouldn't be too chaotic.\
\
The basic components like Console, Navigator, purse, etc. will be simple; there will only be a single instance of them and they'll either
be visible or they won't. The data within those components will be based on the authentication schema. The complicated part is going to be 
at-will generation of data like furni, stickies, coins.\
\
12/26/2022 1:47PM:\
Going to build out the Console core. Basic state for the button navigation needs to be established before I can even consider the schema
for user-authenticated content within the Console itself.\
\
Also, as I think about it right now, text-input is going to be in 3 different classes: persistent, temporary, or a search. Persistent will be
motto, room names, room descriptions, stickies, console info. Temporary will be things like chats, and then search will be obvious.\
\
12/26/2022 12:25AM:\
Okay idk why but Volter keeps getting blurred based on having margin: 0 auto as an attribute of a parent element and then modifying the 
margin of text's div. I'm sure there's a glaringly obvious CSS-backed reason, but idk what it is. Therefore in the meantime, I've had to
hack the div's margin values to negate the blurring... who would've thought a webstack has nuances when recreating low-level applications..\
\
12/25/2022 9:51PM:\
Redux doesn't need to be tied into authentication, only the modules need it to exist. The displaying of specific content will depend on
authentication. I'm going to continue building out the 'soft' emulator but try to futurize the modules for the integration of authentication..
when I get around to friggen learning how to do it...\
\
12/25/2022 9:32PM:\
Okay I think I'm gonna start completely over.. or, at least, I need to add a 'stage'. A point on either HotelView or Rooms where the selected
modules are displayed. Their rendering itself would be a parameter in a slice.\
\
I need to move the UI to an individual component, it SHOULDN'T be a big deal..\
\
12/25/2022 8:34PM:\
Sticky and Furni (among many others) are going to have a specific requirement: allow the generation of multiple instances of that component
at the will of the user and ensure each instance has a unique identifier. When that component will be referenced, obviously if it's not unique, 
actions won't be distinguished among the instances.\
\
12/25/2022 8:31PM:\
Oh and for some reason, when using Volter font at 9px, margin: 0 auto causes the text to blur. A margin-left of at least 1px negates the blur.
Again, no idea why..\
\
12/25/2022 8:15PM:\
The main goal is to modularize everything. State needs to be encompassed within the component, hence beyond modular. HotelView will be on the same 
plane as Rooms (private/public), and UI will be two-tiered, with HotelView being the base and Rooms building upon it.\
\
What I don't know yet is the standard for URL mapping. Do I want to use routes for every public/private room i.e \
\
-- habbo.gs/public/[room_name] or\
-- habbo.gs/private/[etc/etc]. \
\
Additionally, for the /private configuration, will routes be:\
\
-- /private/[username]/[room_name] or \
-- /private/[room_name] or\
-- /private/[category]/[room_name], etc.\
\
Or, if I don't use Routes, what is that gonna look like?? Every one of these factors need to be thought of, so that adding/extending functionality can use these standards without a mangled collection of state management. One thing that's nagging me is dealing with sticky's state management..\
\
12/25/2022:

Building Redux store, will need to keep future scaling in mind. I'd like to establish the user reducer and everything it encompasses now,
that way as I build/expand modules, I can add what links need be added to User as I go. The current hurdle I'm dealing with is authentication.
I want Redux to be tied in with Auth, which of course needs to be tied back into Express or something. Problem is I don't know jack about
Express or JWTs (they seem to be the go-to) and every guide/tutorial I find is either non-sensical or uses stuff like non-local authentication.
Honestly this will probably be the most difficult aspect, figuring out the authentication architecture...\
\
If you come across this, I'd like some input and suggestions. Hit me up on Discord: oddzag#0905\
\
12/23/2022:

Store configured, going to start with the simplest and move out, i.e Sticky, HotelView. Also going to switch to ```styled-components```.
The entire project is basically a giant UI with the exception of the center content, i.e the Rooms. It's big enough to need Redux but not
so big that styled components will get mixed up or confusing.\
\
12/21/2022:

Beginning to implement Redux (Toolkit, to be specific). I'd like to standardize the naming convention and src structure before
getting too deep. I don't want to end up with a million differents standards all laced together. Plan is to finish the front-end 
as thoroughly as possible. Along the way I'll factor in authentication. And at some point, hundreds of years from now, I'll get to
Rooms.\
\
More than likely I'll get deep into the archive side before getting to rooms. I'd like to basically build a client-side archive, 
similar to Habborator but built into the hotel.\
\
12/19/2022: 

At this point I'm beginning to refactor stuff before getting too far. Someone recommended ```styled components```. That same
person recommended dealing with ```state``` now before I get too deep, so I'm going to begin instating Redux (once I learn
wtf it is and how it works)\
\
Things to refactor so far:

-- Sticky\
-- Notepad\
-- ID\
-- Console\
-- Help