# Argumate

Argumate has 2 different debate options: a private 1-on-1 section (for every user), and a public debate section (user must opt-in). Every week Argumate will have 3 different debate topics for users to participate in (both privately and publicly) and choose their initial side. The goal of this app is to bring people of different perspectives together to learn more about the other side and escape echo chambers.
- Then for the private 1-on-1's, we will match users who chose different sides of the same debate topic and have them argue their points on their own to try to convince their "Argumate" to change their mind. For successfully changing your "Argumate's" mind, the user will gain "braincells" that will serve no purpose like Reddit "karma". 
- However for the public debates, users must opt-in and get selected to become their side's Public Representative. For each debate topic, there will be 2 public debates for a total of 6 total public debates (6 Public Representatives from each side) every week (1 public debate for 6 days out of the week). From the viewers of these debates, Argumate will take an equal numbers of users from each side to vote for which side won that debate and at the end of the 2nd public debate for each debate topic, we will reveal with side has won by the total # of votes. 
- Extra addition of a public chat that all users can chat in with their background color being in their side's color.  There will be 3 different chats for each debate topic.

## Features

- **User Authentication**: Users can sign in using Google authentication.
- **Preference Form**: Users can rank their preferences and get distributed into chat rooms.
- **Chat Rooms**: Users can join chat rooms and send messages.
- **Public Debates**: Users can participate in public debates.
- **Video Calls**: Users can engage in video calls.
- **Real-time Communication**: Real-time messaging and video calls using Socket.io and WebRTC.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/change-my-mind.git
    cd change-my-mind-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up Firebase**:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Add your Firebase configuration to `src/firebase/firebase.js`.

4. **Start the development server**:
    ```sh
    npm start
    ```

## Usage

1. **Sign In**: Users can sign in using Google authentication.
2. **Rank Preferences**: Navigate to the preferences page and rank your preferences.
3. **Join Chat Rooms**: Based on your preferences, you will be distributed into chat rooms.
4. **Send Messages**: Send and receive messages in real-time.
5. **Participate in Debates**: Join public debates and share your opinions.
6. **Video Calls**: Engage in video calls with other users.


## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Firebase**: Backend-as-a-Service for authentication and Firestore database.
- **Socket.io**: Real-time communication for chat and video calls.
- **WebRTC**: Real-time communication for video calls.
- **Express**: Web framework for Node.js.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes**.
4. **Commit your changes**:
    ```sh
    git commit -m 'Add some feature'
    ```
5. **Push to the branch**:
    ```sh
    git push origin feature/your-feature-name
    ```
6. **Open a pull request**.

## License

This project is licensed under the MIT License. See the [`LICENSE`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fmuied%2FDocuments%2FGitHub%2Fchange-my-mind%2FLICENSE%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%226aeb02cb-6c71-47a8-ade2-aaf6f5856c25%22%5D "c:\Users\muied\Documents\GitHub\change-my-mind\LICENSE") file for details.
