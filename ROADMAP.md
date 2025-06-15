# Roadmap

Roadmap is subject to change.

## Design Patterns

- Should be incredibly modular. Any part of the code should be able to be hotswapped and run through mock testing.
- Should follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for organization and
  professionalism
- Should NEVER push to the master branch, but use an individual branch and send in pull requests

## Frontend

- [ ] Create room creation UI
  - [ ] Interface for choosing between singleplayer and multiplayer rooms (and the number of players)
  - [ ] Interface for choosing room settings for the given math questions (with space for preset settings)
- [ ] Create ingame UI
  - [ ] Interface for the user's math question, input box, and score
  - [ ] Interface for other users' math question, input box, and score
- [ ] Create game results UI
  - [ ] Interface for displaying all sorts of data related to the user's performance (score, questions answered,
    accuracy, performance on individual question types, where the user struggled and exceled, etc.)

## Backend

- [ ] Create modular caching/database solution through dependency injection
  - [ ] Use in-memory storage to start off
  - [ ] Switch to Redis after project is more developed
- [ ] Create room management module
  - [ ] Creates rooms and generates a link to join the room
  - [ ] Deletes rooms and invalidates the link
  - [ ] Maintains individual room states (room module, question module)
- [ ] Create room module
  - [ ] Manages player joins and leaves
  - [ ] Manages player ready and unready (and game start)
  - [ ] Manages player data synchronization (for live multiplayer)
  - [ ] Logs all player interactions and generates game end results
- [ ] Create question module
  - [ ] Manages configuration options
  - [ ] Generates math questions and their answers based on given options
- [ ] Create player module
  - [ ] Maintains current problem and answer
  - [ ] Manages player input and output
