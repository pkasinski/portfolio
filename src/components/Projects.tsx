import "../App.css";
import Project from "./Project";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="heading text-section-title">Projects</p>
        <div className="container-inner">
          <Project
            title="App for Planning and Visualizing Routes"
            techStack="Flutter/Dart, Flutter Maps, Provider, Python, Flask, Git, etc."
            description='At Volvo Group, I developed an app for planning and visualizing routes with optimal charging stops for electric trucks. In the app, the user provides an origin location and a destination location, and optionally waypoints that should be passed through along the way. Then, the user can adjust the minimum SoC at arrival, i.e. the requested minimum vehicle battery percentage after having completed the route, and the initial payload. Subsequently, the user can press "Preview" to see a route with the provided locations, or press "Plan" to get a route complete with suggested charging stops. Once a route has been planned, details about the stops are displayed in the timeline view, and the route is shown on the map. The map also shows the current position of the vehicle, and has buttons that let the user zoom in and out, follow the vehicle, or open the developer view. The developer view was requested by the team that I worked it as it lets them evaluate how accurate their predictions of the state of charge (SoC) is compared to reality. If the SoC of the vehicle deviates too much from the predicted value at a certain point on the route, the charging stops are automatically recalculated. Some other features in the app are that the user can provide a location using either an address or coordinates, see and copy coordinates by holding a position on the map, easily use the current vehicle location as the origin, and specify some charging locations on their own.'
            thumbnailUrl="src/assets/volvo-app/screenshot-1.png"
            imageUrls={[
              "src/assets/volvo-app/app-recording-2.webm",
              "src/assets/volvo-app/app-recording-3.webm",
              "src/assets/volvo-app/screenshot-1.png",
              "src/assets/volvo-app/screenshot-2.png",
              "src/assets/volvo-app/screenshot-3.png",
              "src/assets/volvo-app/screenshot-4.png",
              "src/assets/volvo-app/screenshot-5.png",
              "src/assets/volvo-app/screenshot-6.png",
              "src/assets/volvo-app/screenshot-7.png",
              "src/assets/volvo-app/screenshot-8.png",
              "src/assets/volvo-app/screenshot-9.png",
              "src/assets/volvo-app/screenshot-10.png",
              "src/assets/volvo-app/screenshot-11.png",
              "src/assets/volvo-app/screenshot-12.png",
              "src/assets/volvo-app/screenshot-13.png",
              "src/assets/volvo-app/screenshot-14.png",
              "src/assets/volvo-app/screenshot-15.png",
              "src/assets/volvo-app/screenshot-16.png",
              "src/assets/volvo-app/screenshot-17.png",
              "src/assets/volvo-app/screenshot-18.png",
              "src/assets/volvo-app/app-recording-1.webm",
            ]}
          ></Project>
          <Project
            title="Solving the Vehicle Routing Problem"
            techStack="Python, Matplotlib"
            description={
              <>
                In the vehicle routing problem, given a fleet of vehicles that
                originate from a depot and a set of customer locations, routes
                starting from the depot should be found such that products are
                delivered to the customer locations and the cost of doing so is
                minimized. The problem has been around since 1959 and is classed
                as an NP-hard problem, which implies that it is often difficult
                to find optimal solutions and the time to solve the problem to
                optimality grows exponentially as the number of locations
                increases. Moreover, many variants have been introduced over the
                years which have further complicated the problem, but made it
                more realistic. In my master's thesis, the objective was to
                solve a variant of the vehicle routing problem that includes
                aspects such as separate pickup and delivery locations, partial
                deliveries, and charging of electric vehicles. Furthermore, the
                focus was on finding good solutions within a reasonable time and
                being able to apply the algorithm on large-scale problem
                instances, i.e. problems with many locations, based on real data
                from a customer of Volvo Group. To solve this version of the
                problem, an algorithm based on the Adaptive Large Neighborhood
                Search (ALNS) was designed and implemented using Python. The
                complete master's thesis has been published and can be read on{" "}
                <a
                  href="http://hdl.handle.net/20.500.12380/309625"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chalmers ODR
                </a>
                .
              </>
            }
            thumbnailUrl="src/assets/master's-thesis-cover.png"
            imageUrls={[
              "src/assets/master's-thesis-cover.png",
              "src/assets/master's-thesis-abstract.png",
              "src/assets/master's-thesis-overview.png",
            ]}
          ></Project>
          <Project
            title="Typewriter Effect"
            techStack="TypeScript, React"
            description="While building my portfolio website, I knew early on that I wanted to include an animation where text is written out as if someone was typing it. I began using an existing package to achieve this effect, but after realizing I could not customize the component how I wanted to, I decided to recreate it with options that suited me. Not only was this practical, but it was also interesting to get a better understanding of the inner workings of a so-called typewriter component by creating it from scratch. The custom-made typewriter component has been used on multiple occasions on the website that you are currently viewing."
            thumbnailUrl="src/assets/typewriter-effect-screenshot.png"
            imageUrls={["src/assets/typewriter-effect-video.webm"]}
          ></Project>
          <Project
            title="Memory Game"
            techStack="JavaScript, React"
            description="To get a better understanding of the fundamentals of React, I decided to build a memory game. The default number of cards is set to 20, but the user can adjust the difficulty of the game by selecting the number of cards. When a game is started, random images are fetched from the Lorem Picsum API, meaning that they can differ from game to game. Then, each turn, the user selects two cards in an attempt to find the cards with matching images. Once all pairs of cards have been found, the game is over and the user can see how many turns it took them to finish the game, and optionally start a new game. During the project, care was taken to make the flipping animations look nice and smooth, but also to make the application responsive, i.e. to make it work on different screen sizes."
            thumbnailUrl="src/assets/memory-game-screenshot.png"
            imageUrls={["src/assets/memory-game-video.webm"]}
          ></Project>
          <Project
            title="Classifying Rivers using Deep Learning"
            techStack="Python, AWS, Mapbox API, Google Earth Engine, PyTorch, MongoDB, Git, etc."
            description="In my bachelor's thesis project, I worked with other students to create a machine learning based system that takes a satellite image of a river as input and outputs a classification which is a rating of how difficult it is to navigate the river in the image. In the project, we acquired data, cleaned and preprocessed data, wrote scripts for creating training and test sets, trained various neural networks, and developed a web application for displaying classifications of Swedish rivers that were obtained after applying the best performing classification model. The abstract of the bachelor's thesis reads as follows: &quot;River difficulty refers to the level of challenge and risk associated with navigating
a river, typically assessed based on factors such as water rapids and obstacles. As
deep learning previously has been successfully used in satellite image classification
tasks, this study utilized satellite imagery of rivers, and deep learning models to
investigate the possibility of classifying the level of river difficulty in a seemingly
unprecedented way. River difficulty data was gathered from American Whitewater
and Forsföraren, and satellite imagery was obtained from Mapbox. The data was
filtered, optionally preprocessed, and organized into multiple data sets to enable the
training and testing of deep learning models. The models examined were Amazon
Rekognition models and transfer learning models utilizing the architectures of VGG-
16, Inception-V3, and AlexNet. Despite the challenging aspect of working with data
of limited quality, a moderately accurate classification model was ultimately created.
The best performing model was made using Amazon Rekognition and reached an
F1 score of 62.5%. It was used to predict the difficulties of segments of Swedish
rivers and the resulting classifications were presented in a web application.&quot;"
            thumbnailUrl="src/assets/bachelor's-thesis-cover.png"
            imageUrls={[
              "src/assets/bachelor's-thesis-cover.png",
              "src/assets/bachelor's-thesis-abstract.png",
            ]}
          ></Project>
        </div>
      </div>
    </section>
  );
}
