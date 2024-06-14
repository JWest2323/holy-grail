import "./App.css";
import ProgressBar from "./components/ProgressBar";
import TemperatureConverter from "./components/TemperatureConverter";
import TweetCard from "./components/TweetCard";
import ToDoList from "./components/ToDoList";
import ContactForm from "./components/contactForm/ContactForm";
import FlightPicker from "./components/FlightPicker";

function App() {
  return (
    <>
      <ProgressBar completionValue={10} />
      <ProgressBar completionValue={30} />
      <ProgressBar completionValue={50} />
      <TemperatureConverter />

      <div className="tweet-list" >
        <TweetCard
          profileImage="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          name="John Doe"
          handle="johndoe"
          date="Dec 25"
          message="I got my wife a fridge for Christmas. I can't wait to see her face light up when she opens it."
          replyCount="1,094"
          retweetCount="512"
          likeCount="512"
        />
        <TweetCard
        profileImage="https://xsgames.co/randomusers/avatar.php?g=female"
        name="Jane Doe"
        handle="janedoe"
        date="Oct 24"
        message="I told my husband that he has no sense of direction at all. He got so mad that he packed up his stuff and right."
        replyCount="193"
        retweetCount="3,960"
        likeCount="40.5 K"
      />
      <TweetCard
        profileImage="https://xsgames.co/randomusers/avatar.php?g=pixel"
        name="WALL-E"
        handle="walle"
        date="Jul 1"
        message="The best way to predict the future is to invent it."
        replyCount="193"
        retweetCount="3,960"
        likeCount="40.5 K"
      />
      </div>

      <ToDoList />

      <ContactForm />


      <FlightPicker />
    </>

    
  );
}

export default App;
