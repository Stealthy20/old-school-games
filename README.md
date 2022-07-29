# Old School Games
This is a site where the user can come to play Old School games.
The site is just launched with only one game, but will be continuously updated with more games.
The vision is to have old school games where you can choose to change some rules to make it diffrent, or not to keep it as we all remember them.

// Make a Mockup at https://techsini.com/multi-mockup/index.php

# Live Site
[Old School Games](https://stealthy20.github.io/old-school-games/)
# Repository
[GitHub](https://github.com/Stealthy20/old-school-games/)
# Features
**This site contains the following content**
In the first launch of this site we land directly into the Rock, Paper and Scissors game.

## Existing Features
 **Header**
  - Header with the name of the site. 

![Image of the header](docs/header.JPG)

## Game Area
- Game area where the game plays

![Image of the game area](docs/game-area.JPG)

**Footer**
    - A fully responsive footer with links to my social media. 
    - Hover effect on the elements to make sure the user knows that they are clickable. 

![Image of the footer](docs/footer.JPG)

## Upcoming features 
    - More games to the site. The first games to come is
    - Snake
    - Hangman
    - Frogger
    - An area before game is launched where you can choose if you want to make changes to the rules.

# Testing
The site was tested all through the project to make sure that every little part work. 
This was done with console.log results to make sure that small functions or parts of bigger functions was working as inteented before procceeding. 

I have gathered some of the problems and bugs that i encountered and will show them off below. 
This was only a handfull of the challenges that i encountered during this project.

## Bugs and problems

- **Bug 1**
    - I tried to get the console to log the inner html of the button that i clicked so that i could compare this to the computers random choice.
   And as you can see in the picture the console didnt reconize the buttons.

![Image of the first bug where console didnt log the button clicks](docs/bug1.JPG) 

- **Fix for bug 1**
    - Added a queryselector tho choose all the buttons. After that i added a eventlistener to run a function where i extracted the text with this.textContent;

![Image of the fix for the first bug](docs/bug1-fix.JPG) 

- **Bug 2**
    - Error message "outcome is not defines at compareHands" when i tried to compare my choice to the computers random choice.

![Image of the error message in the console](docs/bug2.JPG) 

- **Fix for bug 2**
    - I had a wronly named variable that made the player choice to compare to nothing. 

- **Bug 3**
    - Was not able to access the playersChoice in my function where i would compare the players choice and the computers random choice.
      Everything was alway a Tie in the game 

![Image of the outcome as a tie all the time](docs/bug3.JPG) 

- **Fix for bug 3**
    - Instead of having the player choice and the computer random choice in two diffrent functions. I added them togheter into the game function. 

![Image of the fix for the third bug](docs/bug3-fix.JPG) 

- **Bug 4**
    - When game was over and player or computer had won, the scores didnt update, and i got a error in the console.

![Image of the outcome as a tie all the time](docs/bug4.JPG) 

- **Fix for bug 4**
    - After alot of seartching and trying, i noticed that document.getElementByClass should be document.getElementById.

![Image of the fix for the fourth bug](docs/bug4-fix.JPG) 

- **Bug 5**
    - Run my website through Lighthouse and got a 92% on best practise. 

![Image of the outcome as a tie all the time](docs/bug5.JPG) 

- **Fix for bug 5**
    - I didnt have a set height or width of my images. Set width in my CSS file to look good on the site and set height to auto.
      Got 100% on best practise after this. 

![Image of the fix for the fourth bug](docs/bug5-fix.JPG) 



## Responsiveness

## Validator Testing
  - **HTML through W3C Validator**
    - No errors
  - **CSS through Jigsaw Validator**
    - No errors
  - **Contrast validator through WebAim**
    - No errors
  - **Accessibility check through Wave**
    - No errors
## Technology Used
- HTML
- CSS
- Javascript
- Font Awesome
- Favicon

# Deployment
I deployed this website by using GitPages and following the steps below:

- GitHub pages deployment
  - Log in to GitHub
  - In your Repository section, select the project repository that you want to deploy.
  - In the menu located at the top of this section, click "Settings".
  - Select "Pages" on the left-hand menu.
  - In the source section, select branch "Main" and save
  - The page is then given a site URL which you will see above the source section. Wait a minute and refresh the page.
  - The background around your URL should have turned green with a check mark before it. 
  - It's now live and ready to share.

 **Forking the Guthub Repository.**
- You can fork the original GitHub Respository to be able to view or make changes without it affecting the original repository.
  - Go to the GitHub repository.
  - in the top right, press the button named "Fork".
  - You will now have a copy of the repository in your own GitHub. 

**Make a Local Clone**
- Go to the GitHub Repository.
  - Click the "Clone" button in the top of the repository.
  - Copy the link.
  - Open Git Bash.
  - Change the current working directory to the location where you want the cloned directory.
  - Type git clone, and then paste the URL you copied earlier.
  - Press Enter to create your local clone.

  # Credits